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
Router.post('/addInfo',(req,res)=>{
    let userId = req.cookies.userId;
    let { data } = req.body;
    if(!userId){
        res.json({code:1})
    }
    User.findByIdAndUpdate(userId,data).then(result=>{
        if(result){
           var resData = Object.assign({},{identity:result.identity},data);
           console.log(resData)
            res.json({code: 0, resData, msg:"信息修改成功！"})
        }else{
            res.json({code: 1, msg:"信息修改失败！"})
        }
    })
})
module.exports = Router;