import React from 'react'
import BlogP from './BlogP'

const Blog = (props) =>{
    let title = props.match.params.blogtitle
    return <BlogP title={title}/>
}

export default Blog