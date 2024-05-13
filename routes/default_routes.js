const router = require('express').Router();
const { 
    index,
    createuser
 } = require('../controllers/defualt_contoller')

router.get('/', index)

router.post('/create-user', createuser)

module.exports=router;