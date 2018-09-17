import axios from 'axios';
import { redirectTo } from '../util/util.js';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const initState = {
    isLogin:'',
    msg:'',
    user:'',
    identity:''
}

//reducer
export function user(state=initState,action) {
    switch(action.type){
        case REGISTER_SUCCESS:
            return {...state,isLogin:true,redirectTo: redirectTo(action.userInfo), ...action.userInfo,msg:'注册成功！'}
        case LOGIN_SUCCESS:
            return {...state,isLogin:true,redirectTo: redirectTo(action.userInfo), ...action.userInfo,msg:'登录成功！'}
        case ERROR_MSG:
            return {...state, isLogin:false,msg:action.msg}
        default:
            return state;
    }
}

function registerSuccess (data) {
    return {userInfo:data,type:REGISTER_SUCCESS}
}
function loginSuccess (data){
    return {userInfo:data,type:LOGIN_SUCCESS}
}
function errorMsg (msg) {
    return { msg, type:ERROR_MSG };
}

export function register(user,pwd,repwd,identity){
    if(user.length === 0 || pwd.length === 0 || identity.length === 0){
        return errorMsg('用户名或密码为空！');
    }
    if(pwd !== repwd){
        return errorMsg('两次密码不一致！');
    }
    return dispatch => {
        let userInfo = {user,pwd,identity};
        axios.post('/register',{userInfo}).then(
            res=>{
                if(res.status == '200' && res.data.code == 0){
                    dispatch(registerSuccess({user,pwd,identity}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            }
        )
    }
}

export function login (user, pwd){
    return dispatch => {
        let userInfo = {user, pwd};
        axios.post('/login',{userInfo}).then(
            res => {
                if(res.status == 200 && res.data.code === 0){
                    dispatch(loginSuccess({user,pwd}))
                }else{
                    dispatch(errorMsg(res.data.msg))
                }
            }
        )
    }
}