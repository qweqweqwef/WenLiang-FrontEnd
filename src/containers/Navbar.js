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
        <div>
            {this.state.signedin?
            <div className="Navbar">
                <Layout>
                    <Header>
                        <HeaderRow title="RandomBlog">
                        </HeaderRow>
                        <HeaderRow>
                            <Navigation>
                                <a href={`/user/${this.state.current_user}`}>Home</a> 
                                <a href={`/user/${this.state.current_user}/post`}>Post</a>
                                <a href={`/user/${this.state.current_user}/profile`}>Profile</a>
                                <a href="/" onClick={this.Logout}>Logout</a>
                            </Navigation>
                        </HeaderRow>
                    </Header>
                </Layout>
            </div>:
            <div className="Navbar">
                <Layout>
                    <Header>
                        <HeaderRow title="RandomBlog">
                        </HeaderRow>
                        <HeaderRow>
                            <Navigation>
                                <a href={`/`}>Home</a>
                                <a href={`/login`}>Login</a>
                                <a href={`/signup`}>Signup</a>
                            </Navigation>
                        </HeaderRow>
                    </Header>
                </Layout>
            </div>}
        </div>
         )
    }
}
 
export default Navbar;