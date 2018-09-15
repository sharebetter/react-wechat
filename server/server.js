const express = require('express')
const mongoose = require('mongoose')
const app = express ();
const userRoute = require('./controller/user')

//链接数据库
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',()=>{
    console.log('mongo connect success');
})

// app.get('/',(req,res)=>{
//     res.send('<h1>Hello World</h1>')
// })
app.use('/user',userRoute);

// app.get('/index',(req,res)=>{
//     User.find({},(err,result)=>{
//         res.json(result)
//     })
// })
app.listen(9093,()=>{
    console.log('Node is running')
})