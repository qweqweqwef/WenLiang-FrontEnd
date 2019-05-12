import React from "react";
import { Container , Row , Col,Input } from 'reactstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class Post extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            title:"",
            desc:"",
            redirect:false
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
   
    handleSubmit = (e) =>{
        e.preventDefault()
        if(this.state.title && this.state.desc){
            let formData = new FormData()
            formData.append('user_id',localStorage.getItem('id'))
            formData.append('title',this.state.title)
            formData.append('desc',this.state.desc)
            axios({
                method:"POST",
                url:"http://nameless-sierra-39544.herokuapp.com/api/v1/blogs/new",
                data:formData,
                headers: {
                    'Authorization' : 'Bearer ' + localStorage.getItem("jwt-token"),
                    'Content-Type': 'multipart/form-data'
                }
            }).then(result=>{
                console.log(result);
                if(result.data.status){
                    this.setState({
                        redirect:true
                    })
                }
            })
        }
    }
    render(){
        if(this.state.redirect){
            return(
                <Redirect to={"/user/"+localStorage.getItem('username')}/>
            )
        }
        return(
            <Container>
                <Row>
                    <Col lg={10} xs={12}className="d-flex justify-content-center align-item-center">
                        <div className="post-form shadow">
                            <legend>New Post</legend>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <legend className="d-flex">Blog title</legend>
                                <Input type="text" className="title" name="title"onChange={this.handleChange}/>
                                
                                <legend className="d-flex">Description</legend>
                                <Input type="textarea" name="desc" id="exampleText" className="textarea" onChange={this.handleChange}/>

                                <input type="submit" value="Post" className="d-flex btn btn-success"/>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}