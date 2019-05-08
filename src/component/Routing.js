import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup'
import Homepage from '../pages/Homepage'
import Post from "../pages/Post"
import Blogf from "../containers/Blogf"
import Profile from '../pages/Profile'
import Editf from './Editf'



class Routing extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            blog_title:""
        }
    }

    render() { 
        return ( 
            <Router>
            <Route exact strict path = "/"
                component = {props =>{
                return(
                    <Homepage {...props}/>
                )
                }}
            />
            <Route exact strict path = "/signup"
                component = {props =>{
                return(
                    <Signup {...props}/>
                )
                }}
            />
            <Route exact strict path = "/login"
                component = {props =>{
                return(
                    <Login {...props} />
                )
                }}
            />
            <Route exact strict path = "/user/:username"
                component = {props =>{
                    return(
                        <Homepage {...props}/>
                    )
                }}
            />
            <Route exact strict path = "/user/:username/post"
                component = {props =>{
                    return(
                        <Post {...props}/>
                    )
                }}
            />
            <Route exact strict path = "/blog/:blogtitle"
                component = {props =>{
                    return(
                        <Blogf {...props}/>
                    )
                }}
            />
            <Route exact strict path = "/blog/:blogtitle/edit"
                component = {props =>{
                    return(
                        <Editf {...props}/>
                    )
                }}
            />
            <Route exact strict path = "/user/:username/profile"
                component = {props =>{
                    return(
                        <Profile {...props}/>
                    )
                }}
            />
        </Router>
         )
    }
}
 
export default Routing;