import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import UserRegisterForm from './components/UserRegisterForm';
import CarRegisterForm from './components/CarRegisterForm';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';
import Layout from './components/Layout';
import CarDetails from './components/CarDetails';
import UserDetails from './components/UserDetails';
import UpdateCarDetailsForm from './components/UpdateCarDetailsForm';
import UpdateUserDetailsForm from './components/UpdateUserDetailsForm';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
       <Switch>
       
         <Route path = "/login" component ={ LoginForm } />
         
         <Auth exact = {true} path="/dashboard" component = { Dashboard } />

         <Auth exact = {true} path="/carRegister" component = { CarRegisterForm } />

         <Route exact = {true} path="/register" component = { UserRegisterForm } />

         <Auth exact = {true} path="/carDetails" component = { CarDetails } />

         <Auth exact = {true} path="/userDetails" component = { UserDetails } />

         <Auth exact = {true} path="/updateCarDetails" component = { UpdateCarDetailsForm } />

         <Auth exact = {true} path="/updateUserDetails" component = { UpdateUserDetailsForm } />

        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
