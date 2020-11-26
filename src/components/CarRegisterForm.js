import React, {Component} from 'react';
import { Form, FormGroup, Label, Input} from 'reactstrap';
import {carRegister} from './CarFunction';
// import { DropDownList } from '@progress/kendo-react-dropdowns';



class CarRegisterForm extends Component{
  constructor(){
      super()
      this.state = {
        license:'',
        engine_oil:'',
        auto_oil: '',
        insurance: '',
        tyre: '',
        servicing: '',
        car_washing: ''
      }

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e){
      this.setState({[e.target.name]: e.target.value})
  }

  onSubmit(e){
      e.preventDefault()

      const car_registration = {
        license:this.state.license,
        engine_oil: this.state.engine_oil,
        auto_oil: this.state.auto_oil,
        insurance: this.state.insurance,
        tyre: this.state.tyre,
        servicing: this.state.servicing,
        car_washing: this.state.car_washing
      }

      carRegister(car_registration).then(res => {
          if (res) {  
              this.props.history.push('/dashboard')
          }
      })
  }

render () {

    return (
        <Form noValidate onSubmit = {this.onSubmit}>
        <h1 className = 'text-center'>Car Registration <img src= '../../logo.png' style={{width:130}} /></h1>
        
          <FormGroup>
            <Label>Brand</Label>



            {/* <Input type = 'dropDown' 
        placeholder = 'Brand Name' 
        name = 'first_name'
        value ={this.state.first_name}
        onChange = {this.onChange}
        /> */}
            <Label>License</Label>
            <Input type = 'date' 
        placeholder = 'License' 
        name = 'license'
        value ={this.state.license}
        onChange = {this.onChange}
        />
            <Label>Engine Oil</Label>
            <Input type = 'date' 
        placeholder = 'Engine Oil' 
        name = 'engine_oil'
        value ={this.state.engine_oil}
        onChange = {this.onChange}
      
        />
            <Label>Auto oil</Label>
            <Input type = 'date' 
        placeholder = 'Auto oil' 
        name = 'auto_oil'
        value ={this.state.auto_oil}
        onChange = {this.onChange}
        />

        <Label>Insurance</Label>
            <Input type = 'date' 
        placeholder = 'Insurance' 
        name = 'insurance'
        value ={this.state.insurance}
        onChange = {this.onChange}
        />

        <Label>Tyre changed</Label>
            <Input type = 'date' 
        placeholder = 'Tyre changed last...' 
        name = 'tyre'
        value ={this.state.tyre}
        onChange = {this.onChange}
        />

        <Label>Servicing</Label>
            <Input type = 'date' 
        placeholder = 'Servicing done last' 
        name = 'servicing'
        value ={this.state.servicing}
        onChange = {this.onChange}
        />

        <Label>Car Washing</Label>
            <Input type = 'date' 
        placeholder = 'Car washed last' 
        name = 'car_washing'
        value ={this.state.car_washing}
        onChange = {this.onChange}
        />
          </FormGroup>
              <button className = 'btn-lg btn-dark btn-block' type="submit">Submit</button>
        </Form>
    )
}
}

export default CarRegisterForm