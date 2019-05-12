import React from 'react'
import E from '../containers/E'

const Edit = (props) => {
    let title=props.match.params.blogtitle
    return(<E title={title}/>)
}

export default Edit