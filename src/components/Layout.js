import React, {useState, Component} from 'react';
import {Link, Route , withRouter, Redirect} from 'react-router-dom'; 
import {LayoutData} from './LayoutData';
import './Layout.css';
import {IconContext} from 'react-icons'
import {Button, Navbar, Container, NavbarBrand} from 'reactstrap';
import NotifyMe from 'react-notification-timeline';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';
import axios from 'axios';




class Layout extends Component {

    state = {
        data:   [
            {
              "update":"Its time to change your tyre!!!",
              "timestamp":1596119688264
            },
            {
              "update":"Time to renew your Insurance",
              "timestamp":1596119686811
            },
            {
                "update":"Time to fill new Engine Oil",
                "timestamp":1596119686812   
              }
          ],

          items: [] ,
          isLoading: true,

    }

componentDidMount() {
    axios.get(`http://localhost:5000/users/getuser/15`)
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

    logout(){
        localStorage.clear('token');
      
        window.location.href = "/"
    };
    
    
    render(){
        
        const { data } = this.state;
        const { isLoading, items } = this.state;  
        return (
       <>
            <IconContext.Provider value = {{color: '#000308'}}>
                <div className = 'navbar'>
                    <Link to = '#' >  
                    </Link>  
                 <nav class="my-2 my-lg-0">
                    <div className="dropdown show">
                    <a class="btn " href="#"> 
                        <NotifyMe className = 'notification'
                        data={data}
                        storageKey='notific_key'
                        notific_key='1596119688264'
                        notific_value='update'
                        heading='Notification Alerts'
                        sortedByKey={false}
                        showDate={true}
                        size={30}
                        color="orange"
                        />
                        </a>
      
                        <a className="btn dropdown-toggle bg-dark text-white" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        { this.state.items.map(item => item.first_name)}</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="/dashboard">Your Profile</a>
                            <a className="dropdown-item" href="#" onClick = {this.logout}>Logout</a>
                        </div>
                        </div>
                        </nav>  
                        </div>              
                        {/* <img src= '../../bg.jpg' className = 'background image' />                  */}
               
                <nav className = 'nav-menu active' >
                    <ul className = 'nav-menu-items' >
                        <li className = 'navbar-toggle'>
                        <a href = '/dashboard' className = 'menu-bars'>  
                   
                        <img src= '../../logo.png' style={{width:130}} />
                        </a>
                        </li>    
                            {LayoutData.map((item, index) => {
                                return(
                                    <li key = {index} className = {item.cName}>
                                        <a href = {item.path}>
                                            {item.icons}
                                                <span>{item.title}</span>
                                        </a>
                                    </li>
                                )
                            })}
                    </ul>
                    </nav>
                    
                
                </IconContext.Provider>
            
                {/* <div className="fixed-bottom">      
                    <Navbar>
                        <Container className=" footer">
                            <NavbarBrand >© 2020 Copyright: Car Reminders.com
                            </NavbarBrand>
                        </Container>
                    </Navbar>
                </div> */}
           
                </>
              
        )
    }
 
}

export default Layout;
