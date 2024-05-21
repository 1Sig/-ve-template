const {
    standardResponse,
    NotAuthorized
} = require('../handlers/responseHandler')

const authenticate = (req, res, next) => {
    let user = null;
    const token = req.header.authorization;
    console.log("Bearer token", token)
    if(user !== null){
        next();
    }else {
        res.json(NotAuthorized())
    }
}

module.exports={
    authenticate
}