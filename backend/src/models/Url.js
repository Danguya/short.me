const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,

    },
    slug:{
        type: String,
        required: true,
   
    },
    url:{
        type: String,
        required: true
    },
    user_id:{
        type: String
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('Urls', UrlSchema);
