const   useragent       = require('express-useragent');
const   express         = require('express');
const   UrlController   = require('./controllers/UrlController');
const   UserController  = require('./controllers/UserController');

//ROTEADOR
router = express.Router();

//MIDDLERWARES
router.use(express.json());
router.use(useragent.express());

//MIDDLEWARE PARA CAPTURAR ERROS EM REQUESTS
router.use((error, req, res, next) =>{
    if(error.status){
        res.status(error.status);
    }else{
        res.status(500);
    }
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '😭' : error.stack
    })
});

//ROTAS PARA URLS
router.get('/api/urls/index', UrlController.index);
router.post('/api/urls/create', UrlController.store);
router.get('/api/urls/show/:slug', UrlController.show);
router.put('/api/urls/update/:slug', UrlController.update);
router.delete('/api/urls/destroy/:slug', UrlController.destroy);

router.get('/:slug',UrlController.redirectToSlug);

//ROTAS PARA USUARIOS
router.get('/api/users/index',UserController.index);
router.post('/api/users/store',UserController.store);






module.exports = router;