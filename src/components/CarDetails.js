import React, { Component, useState } from 'react';
import axios from 'axios';




class CarDetails extends React.Component{

      state = {
            items: [] ,
            isLoading: true,
        }

    componentDidMount() {
        axios.get(`http://localhost:5000/cars/getcar/14`)
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
        var myDate = this.state.items.map(item => new Date( item.license));
        var date = new Date(myDate)
        return(
            <div>
                <h2 className = 'text-center'><b>Car Details</b></h2>
                    
                     <ul className = "list-unstyled list-group-flush">
                     {/* { this.state.items.map(item => <li>{item.id}</li>)} */}
                     {/* CarID */}
                        <li className = 'list-group-item'> <b>Car Name: </b> BMW</li>
                        <li className = 'list-group-item'> <b>License:</b> { this.state.items.map(item =>  item.license)}</li>
                        <li className = 'list-group-item'> <b>Engine Oil:</b>{ this.state.items.map(item => <li>{item.engine_oil}</li>)}</li>
                        <li className = 'list-group-item'> <b>Insurance:</b>{ this.state.items.map(item => <li>{item.insurance}</li>)}</li>
                        <li className = 'list-group-item'> <b>Tyre:</b> { this.state.items.map(item => <li>{item.tyre}</li>)}</li>
                        <li className = 'list-group-item'> <b>Servicing:</b> { this.state.items.map(item => <li>{item.servicing}</li>)}</li>
                        <li className = 'list-group-item'> <b>Car Washing:</b> { this.state.items.map(item => <li>{item.car_washing}</li>)}</li>
                    </ul>  

                    <button className = 'btn-lg btn-success m-4'><a href = '/updateCarDetails'> Update </a></button>  
                    <button className = 'btn-lg btn-warning m-4' onClick = {this.logout}> Delete </button>         
            </div>

        )
    }
}

export default CarDetails;