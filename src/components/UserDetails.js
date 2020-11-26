import React, { Component, useState } from 'react';
import axios from 'axios';



class UserDetails extends React.Component{

      state = {
            items: [] ,
            isLoading: true,
        }

    componentDidMount() {
        const isAuthenticated = localStorage.getItem('usertoken');
       
        // console.log( isAuthenticated.email)
        axios.get(`http://localhost:5000/users/getuser/`+isAuthenticated)
        .then(res => {
            let result  = Object.keys(res.data).map(e => {
                let ret = {};
                ret[e] = res.data[e];
                return ret;
            });
          const items = result;
          this.setState({ items }); 
        })
    } 
    render() {
        
        const { isLoading, items } = this.state;
        return(
            <div>
                <h2 className = 'text-center'><b>Your Details</b></h2>
        
                    <ul className = "list-unstyled list-group-flush">
                        {/* { this.state.items.map(item => <li>{item.id}</li>)}  */}
                        {/* UserID */}  
                            <li className = 'list-group-item'> <b>First Name:</b> { this.state.items.map(item => <li>{item.first_name}</li>)}</li>
                            <li className = 'list-group-item'> <b>Last Name:</b> { this.state.items.map(item => <li>{item.last_name}</li>)}</li>
                            <li className = 'list-group-item'> <b>Email:</b> { this.state.items.map(item => <li>{item.email}</li>)}</li>
                            <li className = 'list-group-item'> <b>Password:</b> { this.state.items.map(item => <li>{item.password}</li>)}</li>
                    </ul>
                    <button className = 'btn-lg btn-success m-4'><a href = '/updateUserDetails'>Update </a></button>  
                    <button className = 'btn-lg btn-warning m-4' onClick = {this.logout}>Delete </button> 
            </div>

        )
    }
}

export default UserDetails;


