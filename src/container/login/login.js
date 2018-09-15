import React from 'react';
import Logo from '../../component/logo/logo';
import './login.css';
import {Button,InputItem,WhiteSpace} from 'antd-mobile';
import { router } from 'sw-toolbox';
import Authroute from '../../component/authroute/authroute';
class Login extends React.Component{

    ToRegister () {
        this.props.history.push('/register');
    }
    login () {

    }
    render(){
        return (
            <div className='top'>
                <Authroute></Authroute>
                <Logo></Logo>
                <h2>登录页面</h2>
                <WhiteSpace/>
                <InputItem placeholder="请输入用户名">用户名：</InputItem>
                <WhiteSpace/>
                <InputItem placeholder="请输入密码">密 码：</InputItem>
                <WhiteSpace/>
                <Button type="primary" onClick={()=>this.login()}>登录</Button>
                <p style={{color:'blue',textAlign:'left'}}>还未注册？请点击注册</p>
                <Button type="primary" onClick={()=>this.ToRegister()}>注册</Button>
            </div>
        )
    }
}

export default Login;