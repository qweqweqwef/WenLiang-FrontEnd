import React from 'react'
import axios from 'axios'
import { Container,Row ,Col,Input} from 'reactstrap'


class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blog_title:this.props.title,
            blog_d:"",
            blog_id:""
         }
    }

    handleChange = (e) => {
        let target = e.target
        let value  = target.value
        let name   = target.name
        this.setState({
            [name] : value
        })
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/v1/blogs/')

        .then(result=>{
            this.setState({
                bog_d:result.data.data.desc,
                blog_id:result.data.data.id,
            })
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let formData = new FormData()
        formData.append('blog_id',this.state.blog_id)
        formData.append('blog_title',this.state.blog_title)
        formData.append('blog_d',this.state.blog_d)

        axios.post('http://localhost:5000/api/v1/blogs/edit', formData ,{
            headers: {  'Authorization': 'Bearer ' + localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data' }
        }).then(result=>{
            if(result.data.status){
                alert("Edited")
            }
        })
    }
    render() { 
        return ( 
            <div>
            <Container>
                <Row>
                    <Col lg={10} xs={12}className="d-flex justify-content-center align-item-center">
                        <div className="post-form shadow">
                            <legend>Edit Post</legend>
                            <hr/>
                            <form onSubmit={this.handleSubmit}>
                                <legend className="d-flex">Blog title</legend>
                                <Input type="text" className="title" name="blog_title" onChange={this.handleChange} value={this.state.blog_title}/>
                                
                                <legend className="d-flex">Description</legend>
                                <Input type="textarea" name="blog_desc" className="textarea" onChange={this.handleChange} value={this.state.blog_desc}/>

                                <input type="submit" value="Edit" className="d-flex btn btn-success"/>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            </div>
         );
    }
}
 
export default Edit;