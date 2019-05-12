import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Homepage from '../pages/Homepage'
import Register from '../pages/RegisterPage'
import Login from '../pages/LoginPage'
import Post from '../pages/Post'
import Blog from '../containers/Blog'
import Account from '../pages/Accountpage';
import Edit from './Edit';

class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            blog_title:""
        }
    }
    
    render(){
        
        return(
            <Router>
        <Route exact strict path = "/"
            component = {props =>{
            return(
                <Homepage {...props}/>
            )
            }}
        />
        <Route exact strict path = "/register"
            component = {props =>{
            return(
                <Register {...props}/>
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
                    <Blog {...props}/>
                )
            }}
        />
        <Route exact strict path = "/blog/:blogtitle/edit"
            component = {props =>{
                return(
                    <Edit {...props}/>
                )
            }}
        />
        <Route exact strict path = "/user/:username/account"
            component = {props =>{
                return(
                    <Account {...props}/>
                )
            }}
        />
    </Router>
        )
    }
}


export default Main