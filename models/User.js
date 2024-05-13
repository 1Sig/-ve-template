const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const TEMPLATEschema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: [5, 'your title needs to be at least 5 characters']
    },
    description: {
        type: String,
        required: true,
        minlength: [10, 'Your task needs to be more descriptive! 10 characters please!']
    }
});

const userSchema = new mongoose.Schema({
    username: { 
        type: String,
        require: true,  
        uniqe: true,
        minlength: 3
    },
    password:{
        type: String,
        require: true,
        minLength: 8
    },
    TEMPLATE: [TEMPLATEschema]
})

// Pre-save middleware to hash the password
userSchema.pre('save', hashPassword);

// Static method for user login
userSchema.statics.login = login;

async function login(username, password) {
    let loginresult = null;
    const user = await this.findOne({ username });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) loginresult = user;
    }
    return loginresult;
}

async function hashPassword(next) {
    if(this.isModified('password')){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    }
}

const User = mongoose.model('User', userSchema);

module.exports=User;
