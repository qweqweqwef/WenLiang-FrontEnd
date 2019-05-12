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
        if(localStorage.getItem('id')){
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
                                 <a href={`/user/${this.state.current_user}`}><strong>Home</strong></a>
                                <a href={`/user/${this.state.current_user}/post`}><strong>Post</strong></a>
                                <a href={`/user/${this.state.current_user}/account`}><strong>Account</strong></a>
                                <  a href="/" onClick={this.Logout}><strong>Logout</strong></a>
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
                                <a href="/"><strong>Home</strong></a>
                                <a href="/login"><strong>Login</strong></a>
                                <a href="/register"><strong>Register</strong></a>
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