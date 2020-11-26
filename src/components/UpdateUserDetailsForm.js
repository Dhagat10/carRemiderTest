import React, {Component, setState} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';
import { format,parseISO } from 'date-fns';


class UpdateUserDetailsForm extends Component{
  state = {
    items: [] ,
    isLoading: true,
}

componentDidMount() {
axios.get(`http://localhost:5000/users/getuser/1`)
.then(res => {
    const arr = []
    Object.keys(res.data).forEach(key => arr.push({name: key, value: res.data[key]}))       
  const items = arr;

  this.setState({ items });       
})
} 
render() {

const { isLoading, items } = this.state;
console.log(items)
let formItems = [];
items.forEach(item => 
    { return item.name != 'id' && item.name != 'password'&& item.name != 'created'?
    formItems.push(
        <FormGroup>
        <Label ><b>{item.name}:</b></Label>
        <Input type = 'text' 
        name = {item.name}
        value ={(item.value)}
        onChange={this.handleChange}
        />
        </FormGroup>)
        :
        (<br></br>)
    
  }   
)   
                

return(
    <div>
        <h2 className = 'text-center'><b>Your Details</b></h2>
            <Form >

            {/* <li className = 'list-group-item'> <b>Car Name: </b> BMW</li> */}
                
                <ul>{formItems}</ul>
            </Form>
                

           <button className = 'btn-lg btn-success m-4'><a href = '/'> Update </a></button>  
           
    </div>

)
}
}

export default UpdateUserDetailsForm