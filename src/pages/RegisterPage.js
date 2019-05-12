import React from 'react'
import RegisterForm from '../containers/RegisterForm';

export default class Register extends React.Component{
    render(){
        return(
            <div style={{height:'100vh',margin:'auto'}}>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="d-flex justify-content-center align-items-center lead display-3">Register Now</div>
                        </div>
                        <div className="col col-lg-12">
                            <RegisterForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}