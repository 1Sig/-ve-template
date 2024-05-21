
function standardResponse(title, payload){
    return{title, payload}
}

function NotAuthorized() {
    return standardResponse('Not Authorized')
}

module.exports={
    standardResponse,
    NotAuthorized
}