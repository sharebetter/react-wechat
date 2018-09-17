import React from 'react';
import axios from 'axios';
class BossInfo extends React.Component{
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount () {
        axios.get('/user/info').then( res =>{
            console.log(res)
        })
    }
    render () {
        return (
            <div>BossInfo</div>
        )
    }
}
export default BossInfo;