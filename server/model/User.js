const mongoose = require('mongoose');
//链接数据库
// const DB_URL = 'mongodb://localhost:27017/react-wechat'
// mongoose.connect(DB_URL)

const models = {
    user:{
        'user':{'type':String,'require':true},
        'pwd':{'type':String,'require':true},
        //身份
        'identity':{'type':String,'require':true},
        //头像
        'avatar':{'type':String},
        //简介
        'descript':{'type':String},
        //职位名
        'position':{'type':String},
        // 如果是boss 还有两个字段
        'component':{'type':String},
        'money':{'type':String}
    },
    chat: {

    }
}
for(let m in models){
    mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
    getModel: function (name) {
        return mongoose.model(name)
    }
}