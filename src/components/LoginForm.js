import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import {login} from './UserFunction';
 


class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            errors:'',
        
        }
        // this.handleValidation = this.handleValidation.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    handleValidation(){
        let email = this.state.email;
        let password = this.state.password;
        let errors = {};
        let formIsValid = true;
        

        //password
        if(password.length < 6){
            formIsValid = false;
            errors["password"] = "Password should be minimum of 6 characters";
        }   
        if(!password){
           formIsValid = false;
           errors["password"] = "Cannot be empty";
        }
        //Email
        if(typeof email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');
 
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
               formIsValid = false;
               errors["email"] = "Email is not valid";
             }
        } 

        if(!email){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
  
      
   
       this.setState({errors: errors});
     
       return formIsValid;
   }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    
    }

    onSubmit(e){
        e.preventDefault()
       
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        if(this.handleValidation()){
            
            login(user).then(res => {
              
                if(res) {
                  
                    window.location.href = "/dashboard"
                }
            })
         }

      
       
  
    }

render ()  {

    return (
        <Form className="login-form" noValidate onSubmit = {this.onSubmit}>
            <h1 className = 'text-center'><span className = 'font-weight-bold '>Car reminders</span>.com 
            <img src= '../../logo.png' style={{width:130}} /></h1>
          
      <h2 className = 'text-center'>Welcome</h2>
      <FormGroup >
        <Label>Email</Label>
        <Input type = 'Email' 
        placeholder = 'Email' 
        name = 'email'
        value ={this.state.email}
        onChange = {this.onChange}
        />
         <small className="text-danger"> {this.state.errors.email}</small>
        <br></br>
        <Label>Password</Label>
        <Input type = 'password' 
        placeholder = 'Password' 
        name = 'password'
        value ={this.state.password}
        onChange = {this.onChange}
        />
     <small className="text-danger"> {this.state.errors.password}</small>
      </FormGroup>
   
      <Button type = 'submit' className = 'btn-lg btn-dark btn-block'>Log in
      </Button>
      <div className = 'text-center pt-3'> 
      or continue with your social account
      </div>
      <FacebookLoginButton className = 'mt-3 mb-3'/> or
      <GoogleLoginButton className = 'mt-3 mb-3'/>
      <div className = 'text-center'>
        <a href = '/register'>Register</a>
        <span className = 'p-2'>|</span>
        <a href = '/forget-password'>Forget Password</a>
      </div>
    </Form>
    )
}

}

export default LoginForm
