const mongoose = require('mongoose')

const TEMPLATE = new mongoose.Schema({

})

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        require: true,  
        uniqe: true
    },
    password:{
        type: String,
        require: true,
        minLength: 5
    }
})

const User = mongoose.model('User', userSchema);

module.exports=User;
