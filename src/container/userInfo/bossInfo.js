import React from 'react';
import axios from 'axios';
import {List, Grid, InputItem, WhiteSpace ,TextareaItem, Button} from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Avator from '../../component/avator/avator';
import './userInfo.css';
import {infoUpdate} from '../../redux/user.redux.js';
@connect(
    state => state.user,
    { infoUpdate }
)
class BossInfo extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            jobKind:'',
            componyName:'',
            jobRequest:'',
            componyInfo:'',
            avator:'',
            infoTips:''
        }
    }
    avatorChange (avator) {
        this.setState({
            avator
        })
    }
    userInput (type,val) {
        this.setState ({
            [type]: val
        })
    }
    infoPost () {
        if(this.state.jobKind == ''){
            this.setState({
                infoTips: '请输入招聘职位'
            },()=>{
                var tips = setTimeout(() => {
                    this.setState({
                        infoTips: ''
                    })
                 clearTimeout(tips);
                }, 1500);
            })
            return;
        }
        let {infoTips, ...infoData} = this.state;
        this.props.infoUpdate(infoData)
    }
    render () {
        let path = this.props.location.pathname;
        let redirect =  this.props.redirectTo;
        return (
            <div>
                {redirect && redirect!==path ?<Redirect to={this.props.redirectTo} />:null}
                <Avator avatorChange={(avatorInfo)=>this.avatorChange(avatorInfo)}></Avator>
                <WhiteSpace/>
                {this.state.infoTips.length > 0 ? <p className='infoTips'>{this.state.infoTips}</p>:null}
                <InputItem placeholder="" clear
                    onChange={(val) => { this.userInput ('jobKind',val)}}
                >招聘职位：</InputItem>
                <WhiteSpace/>

                <InputItem placeholder="" clear
                    onChange={(val) => { this.userInput ('componyName',val)}}
                >公司名称：</InputItem>
                <WhiteSpace/>

                 <TextareaItem placeholder="" title="职位要求"
                    autoHeight labelNumber={5} clear
                    onChange={(val) => this.userInput ('jobRequest',val) }
                />
                <WhiteSpace/>

                <TextareaItem placeholder="" title="公司简介"
                autoHeight labelNumber={5} clear
                    onChange={(val) => this.userInput ('componyInfo',val)}
                />
                <WhiteSpace></WhiteSpace>

                <Button type="primary" onClick={()=>this.infoPost()}>完成</Button>
            </div>
        )
    }
}
export default BossInfo;