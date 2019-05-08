import React from 'react'
import axios from 'axios'
import { Redirect  } from 'react-router-dom'
import { Col,Form, FormGroup, Label, Input,Button, } from 'reactstrap';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            email:"",
            password:"",
            signedUp:false
         }
    }

    handleChange = (e) =>{
        let target = e.target;
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
        formData.set('email',this.state.email)
        formData.set('password',this.state.password)

        axios({
            method:'POST',
            url:'http://localhost:5000/api/v1/users/new',
            data:formData,
            config:{ headers : {'Content-Type' : 'multipart/form-data'}}
        }).then((result)=>{
            if(result.data.status){
                this.setState({
                    signedUp:true
                })
            }
        })
    }

    render() { 
        if(this.state.signedUp){
            return(
                <Redirect to="/login"/>
            )
        }
        return ( 
        <Form onSubmit={this.handleSubmit} class="">
          <h2 class="signup-text">Sign Up</h2>
            <FormGroup class="Signup-form" >
                <Col sm={40}>
                <Label>Username</Label>
                <Input name="username" type="text" placeholder="Username" onChange={this.handleChange}></Input>
                </Col>
            </FormGroup>

            <FormGroup class="Signup-form">
                <Col sm={20}>
                <Label>Email</Label>
                <Input name="email" type="email" placeholder="Email" onChange={this.handleChange}></Input>
                </Col>
            </FormGroup>

            <FormGroup class="Signup-form">
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

            <a href="/signup">Don't have an account ? Click Here</a>
            
        </Form>
         );
    }
}
 
export default SignupForm;