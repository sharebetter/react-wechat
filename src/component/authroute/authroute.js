import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

@withRouter
class Authroute extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount () {
        // axios.get('/user/userInfo').then(res=>{
        //     if(res.status == '200'){
        //         console.log(res.data)
        //     }
        // })
        // console.log(this.props.history)
    }
    render () {
        return null;
    }
}
export default Authroute;