import React from 'react';
import Logo from '../../component/logo/logo';
import './login.css';
import {Button,InputItem,WhiteSpace} from 'antd-mobile';
import { router } from 'sw-toolbox';
import Authroute from '../../component/authroute/authroute';
class Login extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            userInfo:{
                user:'',
                pwd:'',
            },
            loginTips:''
        }
    }
    ToRegister () {
        this.props.history.push('/register');
    }
    doLogin () {
        let userInfo = this.state.userInfo;
        if(!(userInfo.user.length > 0)){
            this.setState({
                loginTips:'请输入用户名'
            })
        }else if(!( userInfo.pwd.length > 0)){
            this.setState({
                loginTips:'请输入密码'
            })
        }
    }
    userInput (type,val) {
        let userInfo = this.state.userInfo;
        userInfo[type] = val;
        this.setState({
            userInfo
        })
    }
    render(){
        return (
            <div className='top'>
                <Authroute></Authroute>
                <Logo></Logo>
                <h2>登录页面</h2>
                {this.state.loginTips.length > 0 ? <p className='loginTips'>{this.state.loginTips}</p>:null}
                <WhiteSpace/>
                <InputItem placeholder="请输入用户名" onChange={(val)=>{this.userInput('user',val);}}>用户名：</InputItem>
                <WhiteSpace/>
                <InputItem placeholder="请输入密码" onChange={(val)=>{this.userInput('pwd',val);}}>密 码：</InputItem>
                <WhiteSpace/>
                <Button type="primary" onClick={()=>this.doLogin()}>登录</Button>
                <p style={{color:'blue',textAlign:'left'}}>还未注册？请点击注册</p>
                <Button type="primary" onClick={()=>this.ToRegister()}>注册</Button>
            </div>
        )
    }
}

export default Login;