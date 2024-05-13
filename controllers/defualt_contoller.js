const User = require('../models/User')

const index = (req, res, next) => {
    res.json({message:'route working with controller'});
}

const createuser = async (req, res, next) => {
    const {username, password} = req.body;
    try {
        const result = await User.create({username, password});
        console.log(result)
        res.json({result});
    } catch(error){
        res.json(error)
    }
}

const login = async (req, res, next)=> {
    const {username, password} = req.body;
    const user = await User.login(username, password)
    res.json(user);
}

module.exports = {
    index,
    createuser,
    login
}