import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { autoRouter } from '../../redux/user.redux'

@withRouter
@connect (
    state => state.user,
    { autoRouter }
)
class Authroute extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount () {
        axios.get('/user').then(res=>{
            let data = res.data;
            if(res.status == '200' && data.code === 0){
                this.props.autoRouter(res.data)
            }else{
                this.props.history.push('/')
            }
        })
    }
    render () {
        return null;
    }
}
export default Authroute;