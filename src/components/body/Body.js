import React from 'react'
import styled from "styled-components";
import chat from  '../body/Chat/Chat.js'
import {Switch, Route,  BrowserRouter as Router} from 'react-router-dom'
import Login from './auth/Login'
import Register from './auth/Register'
import ActivationEmail from './auth/ActivationEmail'
import NotFound from '../utils/NotFound/NotFound'
import Chatting from '../body/Chat/Chat'
import ForgotPass from '../body/auth/ForgotPassword'
import ResetPass from '../body/auth/ResetPassword'
import Profile from '../body/profile/Profile'
import EditUser from '../body/profile/EditUser'
import Home from '../body/home/Home'
import Addobject from './Addobject/Addobject'
import {useSelector} from 'react-redux'
import Navbarcontent from './Content/NavItems'
import Footer from '../body/Footer/Footer'
import ScrollButton from '../body/home/ScrollButton'
import Homecontent from '../body/Homecontent/Homecontent'
import Myitems from '../body/Myitems/Myitems'
import account from '../body/profile/account'
import dashboard from '../body/Offre Pro/dashboard'
import Cards from '../body/Addobject/Cards'
import chatbot from './home/Chatbot'
import formbuilder from '../body/formbuilder/formbuilder'
import test from '../body/test'
import Categorytest from './Addobject/Category.js';
import input from '../body/formComponent/input'
import Select from '../body/formComponent/select'

function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        
        <Router>
            <Switch>
            <Route path="/Chatbott" component={chatbot} exact /> 
            <Route path="/Chat" component={chat} exact /> 
            <Route path="/input" component={input} exact /> 
            <Route path="/select" component={Select} exact /> 

            <Route path="/Conversation" component={Chatting} exact /> 
            <Route path="/formbuilder" component={isAdmin ? formbuilder : formbuilder} exact />
            <Route path="/dashboard/home" component={isLogged ? dashboard : dashboard} exact />

                <Route path="/" component={Home} exact /> 
                     <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />
                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
               <Router>
                   <Navbarcontent/>
                <Switch>
                <div  style={{display:'flex',justifyContent:'center'}}>
                <Route path="/" component={test} exact /> 

                <Route path="/Addobject" component={Addobject} exact />
                <Route path="/LastItem" component={isLogged ? Homecontent : NotFound} exact />
                <Route path="/Myitems" component={isLogged ? Myitems : NotFound} exact />
                <Route path="/account" component={isLogged ? account : NotFound} exact />
                <Route path="/profile" component={Profile} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : NotFound} exact />
                </div>
           </Switch> <chatbot/>

              </Router>
   
      </Switch>
    
      <br/>

      <Footer/>
        </Router>
    )
}

export default Body
