import React from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom'
import NavLinkBar from '../navlink/navlink'
import { TabBar, NavBar } from 'antd-mobile';

function Niuren () {
    return <h2>牛人</h2>
}
function Boss () {
    return <h2>牛人</h2>
}
function Message () {
    return <h2>消息列表</h2>
}
function PersonCenter () {
    return <h2>个人中心</h2>
}

@connect (
    state => state,
)
class Dashboard extends React.Component {
    constructor (props) {
        super(props);

    }

    render () {
        const { pathname } = this.props.location;
        const user = this.props.user;
        const navList = [
            {
                path:'/bossPage',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                component:Boss,
                hide:user.identity=='Boss'

            },
            {
                path:'/jobSeekerPage',
                text:'Boss',
                icon:'job',
                title:'Boss列表',
                component:Niuren,
                hide:user.identity=='Niuren'
            },
            {
                path:'/message',
                text:'消息',
                icon:'msg',
                title:'消息列表',
				component:Message
            },
            {
                path:'/meInfo',
                text:'我',
                icon:'user',
                title:'个人中心',
				component: PersonCenter
            }]
        return (
            <div >
                <NavBar className='fixd-header' mode='dard'>{navList.find(v=>v.path==pathname).title}></NavBar>
                <div style={{marginTop:45}}>
						<Switch>
							{navList.map(v=>(
								<Route key={v.path} path={v.path} component={v.component}></Route>
							))}
						</Switch>
				</div>
                <NavLinkBar data={navList}></NavLinkBar>
            </div>
        )

    }
}
export default Dashboard;