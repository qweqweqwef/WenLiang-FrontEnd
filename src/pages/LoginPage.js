import React from 'react'
import LoginForm from '../containers/LoginForm'

export default class Login extends React.Component{
    
    render(){
        return(
        <div style={{height:'100vh',margin:'auto'}}>
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="d-flex justify-content-center align-items-center lead display-3">Login</div>
                    </div>
                    <div className="col col-lg-12">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
 
