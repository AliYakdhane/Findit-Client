import React from 'react'
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
import Navbarcontent from './Content/Navbarhome'
import Footer from '../body/footer/Footer'
import ScrollButton from '../body/home/ScrollButton'
import Homecontent from '../body/Homecontent/Homecontent'
import Myitems from '../body/Myitems/Myitems'
import account from '../body/profile/account'
import dashboard from '../body/Offre Pro/dashboard'
import Homepro from '../body/Offre Pro/Homepro/Homepro'


function Body() {
    const auth = useSelector(state => state.auth)
    const {isLogged, isAdmin} = auth
    return (
        
        <Router>
            <Switch>
            <Route path="/Homepro" component={Homepro} exact /> 
            <Route path="/Conversation" component={Chatting} exact /> 

                <Route path="/" component={Home} exact /> 
                     <Route path="/login" component={isLogged ? NotFound : Login} exact />
                <Route path="/register" component={isLogged ? NotFound : Register} exact />

                <Route path="/forgot_password" component={isLogged ? NotFound : ForgotPass} exact />
                <Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPass} exact />
                <Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
               <Router>
                <Navbarcontent/> 
                <Switch>
                
                <div  style={{display:'flex',justifyContent:'center',marginLeft:'3rem'}}>
                <Route path="/Addobject" component={isLogged ? Addobject : Addobject} exact />
                <Route path="/LastItem" component={isLogged ? Homecontent : Homecontent} exact />
                <Route path="/Myitems" component={isLogged ? Myitems : Myitems} exact />
                <Route path="/account" component={isLogged ? account : account} exact />
                <Route path="/dashboard/home" component={isLogged ? dashboard : dashboard} exact />

                <Route path="/profile" component={isLogged ? Profile : Profile} exact />
                <Route path="/edit_user/:id" component={isAdmin ? EditUser : EditUser} exact />
                </div>
           </Switch> 
         
              </Router>
      </Switch>
      
      <br/>
      
      
        </Router>
    )
}

export default Body
