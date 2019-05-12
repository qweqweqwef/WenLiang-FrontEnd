import React from 'react'
import B from '../containers/B'

const Blog = (props) =>{
    let title = props.match.params.blogtitle
    return <B title={title}/>
}

export default Blog