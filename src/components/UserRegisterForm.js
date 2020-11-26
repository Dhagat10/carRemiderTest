import React, {Component} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import {register} from './UserFunction';

 


class UserRegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        first_name:'',
        last_name: '',
        email: '',
        password: '',
        errors:''
    }
    // this.handleValidation = this.handleValidation.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
}
handleValidation(){
    let first_name = this.state.first_name;
    let last_name = this.state.last_name;
    let email = this.state.email;
    let password = this.state.password;
    let errors = {};
    let formIsValid = true;


     //FirstName
     if(!first_name){
      formIsValid = false;
      errors["first_name"] = "Cannot be empty";
   }

      if(typeof first_name!== "undefined"){
          if(!first_name.match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["first_name"] = "Cannot be empty";

            if(first_name !== ''){
              formIsValid = false;
              errors["first_name"] = "Only letters are allowed";
          }        
      }
  }
    //LastName

    if(typeof last_name!== "undefined"){
      if(!last_name.match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors["last_name"] = "Cannot be empty";

        if(last_name !== ''){
          formIsValid = false;
          errors["last_name"] = "Only letters are allowed";
          }        
      }
  }  
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
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        
    }

    if(this.handleValidation()){
        register(user).then(res => {
            if(res) {
                this.props.history.push('/dashboard')
            }
        })
     }

  
   

}



render () {
    const isAuthenticated = localStorage.getItem('usertoken');
    if(!isAuthenticated){
        return (
            <Form noValidate onSubmit = {this.onSubmit}>
            <h1 className = 'text-center'>Register <img src= '../../logo.png' style={{width:130}} /></h1>
              <FormGroup>
                <Label>First Name</Label>
                <Input type = 'text' 
            placeholder = 'First Name' 
            name = 'first_name'
            value ={this.state.first_name}
            onChange = {this.onChange}
            />
    
             <small className="text-danger"> {this.state.errors.first_name}</small>
             <br></br>
    
                <Label>Last Name</Label>
                <Input type = 'text' 
            placeholder = 'Last Name' 
            name = 'last_name'
            value ={this.state.last_name}
            onChange = {this.onChange}
            />
            <small className="text-danger"> {this.state.errors.last_name}</small> 
            <br></br>
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
             <br></br>
              </FormGroup>
                  <button className = 'btn-lg btn-primary 'type="submit">Register</button>
                  <button a href ='/' className = 'btn-lg btn-primary' /> Login <button></button>
            </Form>
        )
    }else{
        window.location.href = "/dashboard"
    }
    
    
}
}

export default UserRegisterForm