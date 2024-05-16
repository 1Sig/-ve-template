const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKENSECRET;

function generateAccessToken(username, user_id){
    return jwt.sign({username, user_id}, tokenSecret, {expiresIn:"1d"});
}

module.exports={
    generateAccessToken
}