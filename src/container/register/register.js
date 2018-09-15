import React from 'react';
import Logo from '../../component/logo/logo';
import './register.css';
import {Button, InputItem, WhiteSpace, Radio, Flex, List} from 'antd-mobile';
const RadioItem = Radio.RadioItem;

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
                username:'',
                pass:'',
                repass:'',
                identity:'Niuren'
            },
            loginTips:''
        }
    }

    userInput (type,val){
        let userInfo = this.state.userInfo;
        userInfo[type] = val;
        this.setState({
            userInfo,
        })
    }
    doRegister () {
        if(this.state.userInfo.pass !== this.state.userInfo.repass && this.state.userInfo.pass.length > 0){
            this.setState({
                loginTips:'两次密码不一致！'
            })
            this.showLoginTips()
            return;
        }
        if(this.state.userInfo.username.length == 0){
            this.setState({
                loginTips:'请输入用户名！'
            })
            this.showLoginTips()
            return;
        }
        if(this.state.userInfo.pass.length == 0 || this.state.userInfo.repass.length == 0){
            this.setState({
                loginTips:'请输入密码！'
            })
            this.showLoginTips()
            return;
        }
    }
    showLoginTips () {
        var tips = setTimeout(() => {
            this.setState({
                loginTips: ''
            })
         clearTimeout(tips);
        }, 1500);
    }
    toLogin () {
        this.props.history.push('/login')
    }
    render(){
        const data = [
            { type:'Niuren', label:'牛人' },
            { type:'Boss', label:'Boss'},
        ];
        let identity = this.state.userInfo.identity;
        return (
            <div className='registerTop'>
                <Logo/>
                <h2>用户注册</h2>
                <p className='loginTips'>{this.state.loginTips}</p>
                <WhiteSpace/>
                <InputItem placeholder="请输入用户名" onChange={(val)=>this.userInput('username',val)}>用户名：</InputItem>
                <WhiteSpace/>
                <InputItem placeholder="请输入密码" onChange={(val)=>this.userInput('pass',val)}>密码：</InputItem>
                <WhiteSpace/>
                <InputItem placeholder="确认密码" onChange={(val)=>this.userInput('repass',val)}>确认密码：</InputItem>
                <WhiteSpace/>
                <List>
                    {data.map(i => (
                    <RadioItem key={i.type} checked={identity === i.type} onChange={()=>this.userInput('identity',i.type)}>
                        {i.label}
                    </RadioItem>
                    ))}
                </List>
                <WhiteSpace/>
                <Button type="primary" onClick={()=>this.doRegister()}>注册</Button>
                 <p style={{color:'blue',textAlign:'left'}}>已经注册，请点击登录</p>
                <Button type="primary" onClick={()=>this.toLogin()}>登录</Button>
            </div>
        )
    }
}

export default Register;