import React from 'react'
import {Layout,Header,HeaderRow,Navigation} from 'react-mdl'
import '../App.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            current_user:'',
            signedin:false
        }
    }

    componentDidMount(){
        if(localStorage.getItem('jwt-token')){
            this.setState({
                current_user:localStorage.getItem('username'),
                signedin:true
            })
        }
    }

    Logout = (e) =>{
        localStorage.clear()
    }


    render() { 
        return(
        <>
            {this.state.signedin?
            <div className="Navbar">
                <Layout>
                    <Header>
                        <HeaderRow title={"RandomBlog / "+`${this.state.current_user}`}/>
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
                        <HeaderRow title="RandomBlog / Havent Login"/>
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
        </>
         )
    }
}
 
export default Navbar;