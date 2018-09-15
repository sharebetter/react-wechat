const express = require('express');
const Router = express.Router();

Router.get('/userInfo',(req,res)=>{
    res.json({userInfo:'zhm'})
})

module.exports = Router;