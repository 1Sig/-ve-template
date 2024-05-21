const router = require('express').Router();
const { 
    index,
    createuser,
    login,
    userAuthorized
 } = require('../controllers/defualt_contoller')

const {
    authenticate
} = require('../middleware/authentication')

router.get('/', index)

router.post('/create-user', createuser)

router.post('/login', login)

router.get('/authorized-test', authenticate, userAuthorized)

module.exports=router;