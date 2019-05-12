import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Form,  Label, Input, } from 'reactstrap';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                email:"",
                password:"",
                current_user:"",
                redirect:false,
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
        formData.set("email",this.state.email)
        formData.set("password",this.state.password)

        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/users/login",
            data:formData,
            config: {headers:{'Content-Type': 'multipart/form-data'}}
        }).then(result=>{
            if(result.data.status){
                console.log(result);
                localStorage.setItem('id', result.data.data.id)
                localStorage.setItem('username',result.data.data.username)
                localStorage.setItem("jwt-token",result.data.access_token)
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
                <Redirect push to={"/user/" + this.state.current_user}/>
            )
        }
        return (  
            <Form className="login-form" onSubmit={this.handleSubmit}>
                <Label>Email</Label>
                <Input type="email" name="email" onChange={this.handleChange}/>

                <Label>Password</Label>
                <Input type="password" name="password" onChange={this.handleChange}/>

                <div>
                    {this.state.email && this.state.password ?
                    <button type="submit">Login</button> :
                    <button type="submit" disabled>Login</button>}
                </div>

                <a href="/signup">Don't have an account ? Click Here</a>
            </Form>
        )
    }
}

