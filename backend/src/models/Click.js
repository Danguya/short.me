const mongoose = require('mongoose');

const ClickSchema = mongoose.Schema({
    click:{
        type: Number,
        require: true,
    },
    slug:{
        type: String,
        require: true
    },
    referrer:{
        type: String,
        require: false
    },
    client_request:{
        OS:{
            type: String,
            require: false
        },
        platform:{
            type: String,
            require: false
        },
        browser:{
            type: String,
            require: false
        },
        device:{
            type: String,
            require: false
        },
    },
    date_at:{
        type: Date,
        default: Date.now
    },
    
});

mongoose.model('Clicks',ClickSchema);