import React from 'react';
import { Grid, List, NavBar } from 'antd-mobile';


class Avator extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            avator: 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra',
            avatorInfo: {
                icon:''
            },
        }
    }
    avatorPick (avatorInfo) {
        this.setState({
            avatorInfo
        })
        this.props.avatorChange(avatorInfo.text);
    }
    render () {
        let avatorArr = this.state.avator.split(',');
        let avatorData = avatorArr.map((val, i) => ({
            // 通过require将图片引入
            icon: require(`./img/${val}.png`),
            text: val,
          }));
        let avatorSelect = this.state.avatorInfo.icon ? (
            <div>
                <span>已选择头像:</span>
                <img style={{width:20, marginLeft:10}} src={this.state.avatorInfo.icon} alt=""/>
            </div>
        ) : (
            <div>
                <span>默认头像:</span>
                <img style={{width:20, marginLeft:10}} src={avatorData[0].icon} alt=""/>
            </div>
        )
        return (
            <div>
                <NavBar
                    mode="dark"
                    leftContent="Back"
                    >用户信息</NavBar>
                    <List renderHeader={avatorSelect}>
                        <Grid data={avatorData} columnNum={5} onClick={_el => this.avatorPick(_el)} />
                    </List>
            </div>
        )
    }
}

export default Avator;