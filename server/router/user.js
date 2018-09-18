const express = require('express');
const utils = require('utility');

const Router = express.Router();
const model =  require('../model/user.js');
const User = model.getModel('user');
const Filter = {'pwd':0, '__v':0}
Router.get('/',(req,res)=>{
    res.redirect('/user/info');
})
Router.get('/info',(req,res)=>{
    const { userId } = req.cookies;
    if(!userId){
        return res.json({code:1})
    }
    User.findOne({'_id':userId},Filter).then((result)=>{
        if(result){
            res.json({code:0, msg:'获取用户信息成功', userInfo:result})
        }else{
            res.json({code:1, msg:'获取用户信息失败'})
            // return res.redirect('/')
        }

    })
})
module.exports = Router;