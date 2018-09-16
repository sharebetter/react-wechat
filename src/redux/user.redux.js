import axios from 'axios';

const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
    isLogin:'',
    msg:'',
    user:'',
    pwd:'',
    type:''
}

//reducer
export function user(state=initState,action) {
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state,isLogin:true,...action.userInfo,msg:''}
        case ERROR_MSG:
            return {...state, isLogin:false,msg:action.msg}
        default:
            return state;
    }
}

function registerSuccess (data) {
    return {userInfo:data,type:REGISTER_SUCCESS}
}
function errorMsg (msg) {
    return { msg, type:ERROR_MSG };
}

export function register(user,pwd,repwd,type){
    if(user.length === 0 || pwd.length === 0 || type.lengt === 0){
        return errorMsg('用户名或密码为空！');
    }
    if(pwd !== repwd){
        return errorMsg('两次密码不一致！');
    }
    return dispatch => {
        let userInfo = {user,pwd,type};
        axios.post('/user/register',{userInfo}).then(
            res=>{
                console.log(res)
                if(res.status == '200' && res.data.code == 0){
                    dispatch(registerSuccess({user,pwd,type}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            }
        )
    }
}