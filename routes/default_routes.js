const router = require('express').Router();
const { 
    index,
    createuser,
    login
 } = require('../controllers/defualt_contoller')

router.get('/', index)

router.post('/create-user', createuser)

router.post('/login', login)

module.exports=router;