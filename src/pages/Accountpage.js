import React from 'react'
import axios from 'axios'
import { Container , Row , Col , Form , Input , Label } from 'reactstrap'

export default class Account extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:"",
            password:"",
        }
    }
    componentDidMount(){
        this.getUserData()
    }

    getUserData(){
        let user_id = localStorage.getItem('id')
        axios.get("http://nameless-sierra-39544.herokuapp.com/api/v1/users/"+user_id+"/show")
        .then(result=>{
            
            this.setState({
                username:result.data.data.username
            })
        })
    }
    handleChange = (e) =>{
     let target =e.target;
     let value = target.value;
     let name = target.name;

     this.setState({
         [name]:value
     })
 }

    handleSubmit=(e)=> {
        e.preventDefault();
        let formData = new FormData()

        formData.append('user_id', localStorage.getItem('id'))
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)

        axios.post("http://nameless-sierra-39544.herokuapp.com/api/v1/users/edit", formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-token'),
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            // console.log(result);
            this.getUserData()
        })
        
    }
    render(){
        return(
            <>
                <Form onSubmit={this.handleSubmit} className="register-form-box">
                    <Label>Username</Label>
                    <Input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>

                    <Label>Password</Label>
                    <Input type="password" name="password" onChange={this.handleChange}/>

                    <Input type="submit" value="Change"/>

                </Form>
            </>
        )
    }
}