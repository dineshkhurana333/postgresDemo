const express = require('express');
const router = express.Router();

const userCtrl = require('./controller');

// router.use('/user',(req,res)=>{
// res.status(200).send({message:'Welcome to user apis'})
// })

router.post('/create', userCtrl.create);

module.exports = router;