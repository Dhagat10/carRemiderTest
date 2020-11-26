import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import './Layout.css';
import { carRegister } from './CarFunction';
import UserRegisterForm from './UserRegisterForm';
import LoginForm from './LoginForm';
import App from '../App.js';


class Auth extends React.Component {

    render() {
        
        const Component = this.props.component;

        const isAuthenticated = localStorage.getItem('usertoken');
        let className = '';
        let leftSide = {
            marginLeft: '20%',
            };
            console.log(localStorage)
            if(this.props.path == '/dashboard'){
                leftSide = {
                    marginLeft: '0',
                    }; 
                    className = '';
            }
            else{
                className = 'container';
            }
        return isAuthenticated ? 
        (<div style = { leftSide } className = {className}>
           <Component/>
           </div>) : ( window.location.href = "/");
        
    }
}

export default Auth;