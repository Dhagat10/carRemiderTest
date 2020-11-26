import React, { Component } from 'react';
import './App.css';
import  LoginForm  from './components/LoginForm';
import  RegistrationForm  from './components/UserRegisterForm';
import  Dashboard from './components/Dashboard';
import {Route} from 'react-router-dom';
import CarRegisterForm from './components/CarRegisterForm';
import UserRegisterForm from './components/UserRegisterForm';
import Auth from './components/Auth';
import Layout from './components/Layout';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import { render } from 'react-dom';


class App extends Component {
 
  render(){
    const isAuthenticated = localStorage.getItem('usertoken');
    let navHeader = isAuthenticated ? <Layout /> : '';
    let ifLogin = isAuthenticated ? Dashboard  : LoginForm;
 
  return (
    <div className= "container-fluid m-0 p-0 "> 
    <Router>
    {navHeader}
    <Switch>
      <Route exact path = '/' component =  {ifLogin}/>
      
    </Switch>
    </Router>
    </div>
  );
}
}

export default App;
