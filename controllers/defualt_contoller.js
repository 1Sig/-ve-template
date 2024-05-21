const User = require('../models/User')
const {standardResponse} = require('../handlers/responseHandler')
const {generateAccessToken} = require('../handlers/tokenhandeler')

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
    let user = null
    let responseObject = standardResponse(null, {message: "Login failed!"})
    try {
    user = await User.login(username, password)
    if(user){
        const token = generateAccessToken();
        responseObject = standardResponse(user.username, {accessToken: token});
    }
    } catch(error) {
        console.log('An error occured')
    }
    res.json(responseObject);
}

const userAuthorized = (req, res, next) => {
    const {user} = req.body;
    let responseObject = standardResponse('Anonymous', {message: 'security breached!'});
    console.log("typeof user:", )
    
    if(typeof user !== 'undefined' && user){
        responseObject = standardResponse('Anonymous', {message: 'Endpoint used'} );
    }
    res.json(responseObject);
}
module.exports = {
    index,
    createuser,
    login,
    userAuthorized
}