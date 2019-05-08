import React from'react'
import SignupForm from '../containers/SignupForm'

class Signup extends React.Component {
    render() { 
        return ( 
            <div style={{height:'100vh',margin:'auto'}}>
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="d-flex justify-content-center align-items-center lead display-3">Register Now</div>
                        </div>
                        <div className="col col-lg-12">
                            <SignupForm/>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Signup;
