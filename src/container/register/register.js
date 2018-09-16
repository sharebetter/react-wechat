import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Logo from '../../component/logo/logo';
import './register.css';
import {Button, InputItem, WhiteSpace, Radio, Flex, List} from 'antd-mobile';
import {register} from '../../redux/user.redux.js';
const RadioItem = Radio.RadioItem;
@connect(
    state => state.user,
    {register}
)

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
            registTips:''
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
        // if(this.state.userInfo.pass !== this.state.userInfo.repass && this.state.userInfo.pass.length > 0){
        //     this.setState({
        //         registTips:'两次密码不一致！'
        //     })
        //     this.showregistTips()
        //     return;
        // }
        // if(this.state.userInfo.username.length == 0){
        //     this.setState({
        //         registTips:'请输入用户名！'
        //     })
        //     this.showregistTips()
        //     return;
        // }
        // if(this.state.userInfo.pass.length == 0 || this.state.userInfo.repass.length == 0){
        //     this.setState({
        //         registTips:'请输入密码！'
        //     })
        //     this.showregistTips()
        //     return;
        // }
        this.props.register(this.state.userInfo.username,this.state.userInfo.pass,this.state.userInfo.repass,this.state.userInfo.identity);
        if(this.props.msg){
            this.setState({
                registTips: this.props.msg
            },()=>{
                this.showregistTips();
            })
        }
    }
    showregistTips () {
        var tips = setTimeout(() => {
            this.setState({
                registTips: ''
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
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo} />:null}
                <Logo/>
                <h2>用户注册</h2>
                {this.state.registTips ? <p className='registTips'>{this.state.registTips}</p>:null}
                <WhiteSpace/>
                <InputItem placeholder="请输入用户名" onChange={(val)=>this.userInput('username',val)}>用户名：</InputItem>
                <WhiteSpace/>
                <InputItem placeholder="请输入密码" onChange={(val)=>this.userInput('pass',val)} type='password'>密码：</InputItem>
                <WhiteSpace/>
                <InputItem placeholder="确认密码" onChange={(val)=>this.userInput('repass',val)} type='password'>确认密码：</InputItem>
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