import React from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Container , Row , Col,Input } from 'reactstrap'


class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"",
            d:"",
            change:false,
         }
    }

    handleChange = (e) =>{
        let target = e.target
        let value  = target.value
        let name   = target.name
        this.setState({
            [name]:value
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
                url:"http://localhost:5000/api/v1/users/blogs/new",
                data:formData,
                headers: {
                    'Authorization' : 'Bearer ' + localStorage.getItem("token"),
                    'Content-Type': 'multipart/form-data'
                }
            }).then(result=>{
                if(result.data.status){
                    this.setState({
                        change:true
                    })
                }
            })
        }
    
    }
    render() { 
        if(this.state.change){
            return(
                <Redirect to={"/user/"+localStorage.getItem('username')}/>
            )
        }
        
        return ( 
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
         );
    }
}
 
export default Post;