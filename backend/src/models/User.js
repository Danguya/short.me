const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    login:{
        username:{
            type: String,
            required: true
        },
        password:{
            type: String,
            required: true
        }
    },
    created_at:{
        type: Date,
        default: Date.now
    }
});

mongoose.model('Users', UserSchema);