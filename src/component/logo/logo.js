import React from 'react';
import './logo.css';
import IMG_URL from './job.png';

class Logo extends React.Component{
    render(){
       return (
        <div className="logo">
            <img src={IMG_URL} alt=""/>
        </div>)
    }
}
export default Logo;