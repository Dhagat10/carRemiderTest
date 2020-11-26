import React, { Component, useState} from 'react';
import './Layout.css';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import { format,parseISO } from 'date-fns';
import update from 'immutability-helper'

class  Dashboard extends Component { 

  state = {
    items: [] ,
    isLoading: true,
}

componentDidMount() {
  axios.get(`http://localhost:5000/cars/getAllCar/1`)
  .then(res => {
    const arr = []
    Object.keys(res.data).forEach(key => arr.push({name: key, value: res.data[key]}))       
  const items = arr;
  this.setState({ items });       
})
}
        render(){
            const sidebar = {
                marginLeft: '20%',
                };

                const { items } = this.state;
                let Items = [];
                items.forEach(item => 
                    { return item.name != 'id' && item.name != 'user_id' && item.name != 'car_id'  ?
                    Items.push(
                      <div className = 'container'>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card">
                            <div class="card-body">
                              <h5 class="card-title">Created: {item.value.created}</h5>
                              <p class="card-text">Created: {item.value.created}</p>
                              <a href= '/carDetails' class="btn btn-dark">View More..</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </div>)
                      :
                      (<br></br>)
                    
                  }   
                )
                
            return(
                <div style = { sidebar }>
                    
                    <h1><span>Welcome to car reminder</span></h1><br />
                    <ul>{Items}</ul>
                    
                 </div>  

            );
    }
}



export default Dashboard;