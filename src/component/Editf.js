import React from 'react'
import EditP from '../containers/EditP'

const Edit = (props) => {
    let title=props.match.params.blogtitle
    return(<EditP title={title}/>)
}

export default Edit