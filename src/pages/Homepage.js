import React from 'react'
import axios from 'axios'
import { Container , Row , Col } from 'reactstrap'


class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blogs:[],
            city:"",
            time:"",
         }
    }

    componentDidMount(){
        axios.get("https://api.worldweatheronline.com/premium/v1/weather.ashx?key=4e7479f8bdd049b790f61643190505&q=Kuala%20Lumpur&format=json&num_of_days=1")
        .then(result=>{
            
            this.setState({
                city:result.data.data.request[0].query,
                time:result.data.data.weather[0].date
            })
        })
    }
    render() { 
        console.log(this.state.city);
        console.log(this.state.time);
        const { city } = this.state
        const { time } = this.state
        const { blogs } = this.state
        return ( 
                <div className="Api">
                    {city},{time}
                    <Container>
                        <Row>
                        {blogs.map(blog=>
                            <Col lg={9} className="d-flex justify-content-center align-items-center" key={blog.id}>
                                <div className="blog-post">
                                    <h4>{blog.parent_user}</h4>
                                    <a href={`/blog/${blog.title}`}>{blog.title}</a>
                                    <p>{blog.d}</p>
                                </div>
                            </Col>
                            )}
                        </Row>
                    </Container>
                </div>
         );
    }
}
export default Homepage;