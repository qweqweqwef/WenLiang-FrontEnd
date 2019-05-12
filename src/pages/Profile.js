import React from 'react'
import axios from 'axios'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:"",
            password:"",
         }
    }

    handleChange = (e) =>{
        let target = e.target
        let value  = target.value
        let name   = target.name

        this.setState({
            [name] :value 
        })
    }
    userData(){
        axios.get("http://localhost:5000/api/v1/users/show")
        .then(result=>{
            
            this.setState({
                username:result.data.data.username
            })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData()

        formData.append('user_id', localStorage.getItem('id'))
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)

        axios.post("http://localhost:5000/api/v1/users/edit" , formData,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-token'),
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            console.log(result);
            this.userData()
        })
    }

    componentDidMount(){
        this.userData()
    }

    render() { 
        return ( 
            <>
            <form onSubmit={this.handleSubmit} className="register-form-box">
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>

                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange}/>

                <input type="submit" value="Change"/>

                
            </form>
        </>
         );
    }
}
 
export default Profile;