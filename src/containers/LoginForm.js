import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Col,Form, FormGroup, Label, Input, NavLink ,Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LoginForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:"",
            password:'',
            redirect:false,
            current_user:""
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]:value
        })

    }

    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.set("username",this.state.username)
        formData.set("password",this.state.password)

        axios({
            method:"POST",
            url:"https://nameless-sierra-39544.herokuapp.com/api/v1/users/login",
            data:formData,
            config: { headers:{'Content-Type': 'multipart/form-data'}}
        }).then(result=>{
            if(result.data.status){
                localStorage.setItem('id', result.data.data.id)
                localStorage.setItem('username',result.data.data.username)
                localStorage.setItem('jwt-token',result.data.access_token)
                localStorage.setItem('refresh_tok',result.data.refresh_token)
                this.setState({  
                    redirect:true,
                    current_user:localStorage.getItem('username')
                })
                
                
                
            }
        })
    }
    render(){
        if(this.state.redirect){
            return(
                <Redirect to={"/user/"+this.state.current_user}/>
            )
        }
        return(
           <div class="signup">
        
        <Form onSubmit={this.handleSubmit} class="">
            <h2 class="signup-text">Log In</h2>
        
            <FormGroup class="testing">
            <Col sm={20}>
            <Label>Username</Label>
            <Input name="username" type="username"  onChange={this.handleChange}></Input>
            </Col>
            </FormGroup>

            <FormGroup class="testing">
            <Col sm={20}>
            <Label>Password</Label>
            <Input name="password" type="password"  onChange={this.handleChange}></Input>
            </Col>
            </FormGroup>

            <FormGroup check row >
            <Col sm={{ size: 10, offset: 3 }}>
            { this.state.username && this.state.password ?
            <Button type="submit">login</Button>:
            <Button type="submit" disabled>login</Button>
            }

            </Col>
            </FormGroup>
            <Col sm={{ size: 40, offset: 0 }}>
            <Router>
            <a href="/signup">Dont Have An Account?  Click Here</a>
            </Router>
            </Col>
        </Form>

    </div>
        )
    }
}

