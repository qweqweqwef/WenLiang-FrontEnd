import React from 'react';
import axios from "axios"
import { Redirect } from 'react-router-dom'
import { Button} from 'reactstrap';
import { Col,Form, FormGroup, Label, Input, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Signup extends React.Component{
constructor(props){
        super(props)

        this.state = {
            username:"",
            email:"",
            password:"",
            signedup:false,
        }
    }

handleChange = (e) =>{
     let target =e.target;
     let value = target.value;
     let name = target.name;

     this.setState({
         [name]:value
     })
 }

 handleSubmit = (e) =>{
        e.preventDefault()
        let formData = new FormData()
        formData.set('username',this.state.username)
        formData.set('password',this.state.password)
        formData.set('email',this.state.email)
         axios({
             method:"POST",
             url:"http://nameless-sierra-39544.herokuapp.com/api/v1/users/new",
             data:formData,
             config:{ headers : {'Content-Type' : 'multipart/form-data'}}
         }).then((result)=>{
             if(result.data.status){
                 this.setState({signedUp:true})
             }
         })  
     
 }

 render(){
     if(this.state.signedUp){
         return (
             <Redirect to="/login"/>
         )
     }
    return(
        <div class="signup">
        
        <Form onSubmit={this.handleSubmit} class="">
            <h2 class="signup-text">Sign Up</h2>
           <FormGroup class="testing" >
            <Col sm={40}>
            <Label>Username</Label>
            <Input name="username" type="text" placeholder="Username" onChange={this.handleChange}></Input>
            </Col>
            </FormGroup>

            <FormGroup class="testing">
            <Col sm={20}>
            <Label>Email</Label>
            <Input name="email" type="email" placeholder="Email" onChange={this.handleChange}></Input>
            </Col>
            </FormGroup>

            <FormGroup class="testing">
            <Col sm={20}>
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password" onChange={this.handleChange}></Input>
            </Col>
            </FormGroup>

            <FormGroup check row >
            <Col sm={{ size: 10, offset: 3 }}>
            { this.state.username && this.state.email && this.state.password ?
            <Button type="submit">Sign Up</Button>:
            <Button type="submit" disabled>Sign Up</Button>
            }
            </Col>
            </FormGroup>

            <Col sm={{ size: 40, offset: 0 }}>
            <Router>
            <a href="/login">Already Have An Account? Click Here</a>
            </Router>
            </Col>
        </Form>
    </div>
    )
    }
}



 
