import React from 'react'
import {Layout,Header,HeaderRow,Navigation} from 'react-mdl'
import '../App.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            current_user:'',
            Login:false
        }
    }

    componentDidMount(){
        if(localStorage.getItem('id')){
            this.setState({
                current_user:localStorage.getItem('username'),
                isLogin:true
            })
        }
    }

    Logout = (e) =>{
        localStorage.clear()
    }


    render() { 
        return(
        <div className="Navbar">
            <Layout>
                <Header>
                    <HeaderRow title="Title">
                    </HeaderRow>
                    <HeaderRow>
                        <Navigation>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                        </Navigation>
                    </HeaderRow>
                </Header>
            </Layout>
        </div>

         )
    }
}
 
export default Navbar;