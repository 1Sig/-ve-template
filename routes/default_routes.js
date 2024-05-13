const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.json({message:'route working'});
})


module.exports=router;