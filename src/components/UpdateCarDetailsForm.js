import React, {Component} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import { format,parseISO } from 'date-fns';
import update from 'immutability-helper';

class UpdateCarDetailsForm extends Component{
    state = {
        items: [] ,
        isLoading: true,
    }

componentDidMount() {
    axios.get(`http://localhost:5000/cars/getcar/11`)
    .then(res => {
        const arr = []
        Object.keys(res.data).forEach(key => arr.push({name: key, value: res.data[key]}))       
      const items = arr;

      this.setState({ items });       
    })
} 

        handleChange(key,event) {
            console.log(key,event.target.value);
            
        var updatedContact = update(this.state.items, {
                [key] : {$set: event.target.value}
            });
            this.setState({items: updatedContact});    
        }

render() {
  
    const { isLoading, items } = this.state;
    console.log(items)
    let formItems = [];
    items.forEach(item => 
        { return item.name != 'id' && item.name != 'user_id' && item.name != 'car_id' && item.name != 'created' ?
        formItems.push(
            <FormGroup>
            <Label ><b>{item.name}:</b></Label>
            <Input type = 'date' 
            name = {item.name}
            value ={format(parseISO(item.value), "yyyy-MM-dd")}
            onChange={this.handleChange.bind(this,item.name)}
            />
            </FormGroup>)
            :
            (<br></br>)
        
      }   
    )   
                    

    return(
        <div>
            <h2 className = 'text-center'><b>Car Details</b></h2>
                <Form >

                <li className = 'list-group-item'> <b>Car Name: </b> BMW</li>
                    
                    <ul>{formItems}</ul>
                </Form>
                    

               <button className = 'btn-lg btn-success m-4'><a href = '/register'> Update </a></button>  
               
        </div>

    )
}
}


export default UpdateCarDetailsForm