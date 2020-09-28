const mongoose              = require('mongoose');
require('../models/Url');
const Url                   = mongoose.model('Urls');
const { customAlphabet }    = require('nanoid');


function slugGenerator(length){

    const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', length);
    var slug =  nanoid();
    return slug;
}
function urlValidate(url){
    const regexUrl = new RegExp("/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/");
    
    if(regexUrl.test(url)){
        return url;
    }else{
        url = false;
        
    }
    return url;

}

function validateDataURL({url, slug, title, user_id = null}){

    var data = {url, slug, title, user_id};

    if(slug === undefined) data.slug = slugGenerator(5);

    data.user_id = user_id;

    if(url !== undefined){

        if(title === undefined) data.title = url;

        return data;
    }

    if(url == undefined) data = {slug,title};



    return data;
}

module.exports = {
    async index(req, res){
        const urls = await Url.find();
        return res.json(urls);
    },

    async store(req, res){
        const {title, slug, url, user_id} = req.body;
        var data = {};

        try {
            if(url !== undefined){
                await Url.findOne({slug}).then(Slug =>{
                    if(Slug){
                        console.log({"msg":"slug em uso"});
                    }else{
                        data =  validateDataURL({title, slug, url, user_id});
                        Url.create(data);
                    }
                });
            }else{
                data = {"msg":"É obrigatório informar uma URL!"};
                res.status(422);
            }
        } catch (error) {
            console.log(error);
        }
        
        return res.send(data);
    },
    async show(req, res){
        const {slug} = req.params;
        const url = await Url.find({slug});

        return res.json(url);
    },
    async update(req, res){
        const {title, slug, url} = req.body;
        var slugParam = req.params;

        try {
            
            await Url.findOne(slugParam).then(async(Slug) =>{
                if(!Slug){
                    console.log({"msg":"slug nao encontrado!"});
                }else{
                    let data =  validateDataURL({title, slug, url});
                    console.log(slugParam);
                    data = await Url.updateMany(slugParam,data);
                    console.log(data);
                    return res.send(data);
                }
            });
            
        } catch (error) {
            console.log(error);
        }
        
        
    },
    async destroy(req, res){
        var result = await Url.findOneAndRemove(req.params.slug);
        result === null ? result = {'message':'O registro não existe!'} : result = {'message':'O registro foi eliminado com sucesso!'};
        return res.json(result);
    },
    async redirectToSlug(req, res){
        const {slug} = req.params;
        var message = {};

        try {
            await Url.find({slug}).then(result =>{

                if(result[0]){
                    const url = result[0].url;
                    console.log(`Redirecionando para ${url}`);
                    res.redirect(url);

                }else{
                    
                    message = {'message':'Lamentamos informar que o link informado não existe!'};
                    res.status(404);

                    console.log(message);
                    res.send(message);
                }
            })
            
        } catch (error) {
            
            
        }
        //console.log(url[0].url);
        //return res.send(message);
    }
}

