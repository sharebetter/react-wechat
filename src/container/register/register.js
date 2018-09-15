import React from 'react';
import Logo from '../../component/logo/logo';
import './register.css';
import {Button, InputItem, WhiteSpace, Radio, Flex, List} from 'antd-mobile';
const RadioItem = Radio.RadioItem;

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        }
    }
    onChange (value) {
        this.setState({
          value,
        });
    };
    toLogin () {
        this.props.history.push('/login')
    }
    render(){
        const data = [
            { value: 0, label: '牛人' },
            { value: 1, label: 'Boss' },
        ];
        let value = this.state.value;
        return (
            <div className='registerTop'>
                <Logo/>
                <h2>用户注册</h2>
                <WhiteSpace/>
                <InputItem placeholder="请输入用户名">用户名：</InputItem>
                <WhiteSpace/>
                <InputItem placeholder="请输入密码">用户名：</InputItem>
                <WhiteSpace/>
                <List>
                {data.map(i => (
                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
                    {i.label}
                </RadioItem>
                ))}
                </List>
                <WhiteSpace/>
                <Button type="primary" onClick={()=>{}}>注册</Button>
                 <p style={{color:'blue',textAlign:'left'}}>已经注册，请点击登录</p>
                <Button type="primary" onClick={()=>this.toLogin()}>登录</Button>
            </div>
        )
    }
}

export default Register;