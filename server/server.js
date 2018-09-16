const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require ('cookie-parser');
const bodyParser = require ('body-parser');
const userRegist = require('./router/user')
const app = express ();

//链接数据库
const DB_URL = 'mongodb://localhost:27017/react-wechat'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
    console.log('mongo connect success');
})
// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>')
// })

app.use(cookieParser());
app.use(bodyParser());
app.use('/user',userRegist);

app.listen(9093,()=>{
    console.log('Node is running')
})