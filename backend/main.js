const express       = require('express');
const routes        = require('./src/routes');
const app           = express();
const PORT          = process.env.PORT || 3033;
const mongoose      = require('mongoose');
const requireDir    = require('require-dir');

mongoose.connect('mongodb://localhost/test',{ useFindAndModify: false,useNewUrlParser: true, useUnifiedTopology: true});
requireDir('./src/models');

app.use(routes);

app.listen(PORT,()=>{
    console.log(`SERVER LISTEN AT http://localhost:${PORT}`);
});

