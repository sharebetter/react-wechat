const express = require('express');
const Router = express.Router();
const model =  require('../model/user.js');
const User = model.getModel('user');
Router.post('/register',(req,res)=>{
    let userInfo = req.body.userInfo;
    User.findOne({user:userInfo.user},(err,find_result)=>{
        if(find_result){
            return res.json({code:1,msg:'该用户名已存在！'});
        }else{
            User.create({
                user:userInfo.user,
                pwd:userInfo.pwd,
                identity:userInfo.type
            },(err,create_result)=>{
                if(err){
                    return res.json({code:1,msg:'后端出错'})
                }
                if(create_result){
                    return res.json({code:0,msg:'注册成功'})
                }
            })
        }
    })

})

module.exports = Router;