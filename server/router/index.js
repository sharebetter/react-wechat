const express = require('express');
const utils = require('utility');

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
                pwd: md5Pwd(userInfo.pwd),
                identity:userInfo.identity
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
Router.post('/login',(req,res)=>{
    let {user,pwd} = req.body.userInfo;
    User.findOne({user, pwd:md5Pwd(pwd)},{'pwd': 0},(err,find_result)=>{
        if(find_result){
            res.cookie('userId', find_result._id);
            return res.json({code:0, msg:'登录成功！'})
        }else{
            return res.json({code:1, msg:'用户名或密码错误'})
        }
    })
})

function md5Pwd (pwd) {
    let salt = 'password';
    pwd = salt + pwd;
    return utils.md5(pwd);
}
module.exports = Router;