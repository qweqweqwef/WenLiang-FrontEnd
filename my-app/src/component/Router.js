import React from 'react'
import {BroswerRouter as Router } from 'react-router-dom'
import { Router } from 'react-router-dom'
import Login from '../pages/login';
import Signup from '../pages/Signup'
// import Homepage from 
// import Post from 
// import Blog
// import Profile
// import Edit 



class Router extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            blog_title:""
        }
    }

    render() { 
        return ( 
            <Router>
                <Route path="/" exact strict component = {props =>{
                    return(
                        <Homepage {...props}/>
                    )
                }} 
                />

                <Route path="/:username" exact strict component = {props =>{
                    return(
                        <Homepage {...props}/>
                    )
                }} 
                />

                <Route path="/login" exact strict component = {props =>{
                    return(
                        <Login {...props}/>
                    )
                }} 
                />

                <Route path="/signup" exact strict component = {props =>{
                    return(
                        <Signup {...props}/>
                    )
                }} 
                />

                <Route path="/:username/profile" exact strict component = {props =>{
                    return(
                        <Profile {...props}/>
                    )
                }} 
                />

                <Route path="/:username/post" exact strict component = {props =>{
                    return(
                        <Post {...props}/>
                    )
                }} 
                />

                <Route path="/blog/:blogtitle" exact strict component = {props =>{
                    return(
                        <Blog {...props}/>
                    )
                }} 
                />

                <Route path="/blog/:blogtitle/edit" exact strict component = {props =>{
                    return(
                        <Edit {...props}/>
                    )
                }} 
                />


            </Router>

         );
    }
}
 
export default Router;