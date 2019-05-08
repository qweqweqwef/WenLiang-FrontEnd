import React from 'react'
import axios from 'axios'
import { Form, Col , Button } from 'reactstrap'
import {Redirect } from 'react-router-dom'

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blog_title:this.props.title,
            blog_parent_user:"",
            blog_d:"",
            blog_id:"",
            change:false,
            current_user:"",
            check:false,
         }
    }
    handleDelete = e => {
        e.preventDefault()
        let formData = new FormData()
        formData.set('blog_id', this.state.blog_id)
        axios.post('http://localhost:5000/api/v1/blogs/delete',formData,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(result => {
            this.setState({
                change:true
            })
        })
    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/api/v1/blogs/')
        .then(result=>{
            this.setState({
                blog_parent_user:result.data.data.parent_user,
                blog_d:result.data.data.desc,
                blog_id:result.data.data.id,
                current_user:localStorage.getItem('username')
            })
        })
    }

    render() { 
        if(this.state.change){
            return(
                <Redirect push to={"/user/"+localStorage.getItem('username')}/>
            )
        }
        return ( 
            <>
                <Col lg={9} className="d-flex justify-content-center align-items-center">
                    {this.state.current_user === this.state.blog_parent_user? 
                    <>
                        <Form onSubmit={this.handleDelete}>
                            <Button type="submit" color='danger' className='close-button px-3'>X</Button>
                        </Form>
                        <Button color='success' className="edit-button" href={"/blog/"+this.state.blog_title+"/edit"}>Edit</Button>
                    </>:
                    null}
                    <div className="blog-post">
                        <h4>{this.state.blog_parent_user}</h4>
                        <a href={`/blog/${this.state.blog_title}`}>{this.state.blog_title}</a>
                        <p>{this.state.blog_desc}</p>
                    </div>
                </Col>
            </>
         );
    }
}
 
export default Blog;