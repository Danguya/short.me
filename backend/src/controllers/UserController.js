const mongoose              = require('mongoose');
require('../models/User');
const User                   = mongoose.model('Users');

module.exports = {
    async index(req, res){
        const users = await User.find();
        res.send(users);
    },
    async store(req, res){
        const {
            first_name, 
            last_name, 
            email, 
            country,
            login:{
                username,
                password
            }
        } = req.body;

        await User.findOne({ email, country}).then(user =>{
            console.log(user)
            if(user){
                console.log({"message":"Este email já existe"});
                res.send({"message":"Este email já existe"});
            }else{
                
                var result = User.create({
                    first_name, 
                    last_name, 
                    email, 
                    country,
                    login:{
                        username,
                        password
                    }
                });
                res.send(result);
            }
        });
    }
}