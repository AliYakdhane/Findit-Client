import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
import authSvg from '../../../assets/auth1.svg'
import {Button, Divider, Typography} from '@mui/material';
import './auth.css'
import { CFormInput } from '@coreui/react'
import { ToastContainer, toast } from 'react-toastify';
import { useRadio } from '@chakra-ui/react'



const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function Register() {

  const [user, setUser] = useState(initialState)

  const {name, email, password,cf_password, err, success} = user

  const handleChangeInput = e => {
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
  }



  const handleSubmit = e => {
    e.preventDefault();
    if (name && email && password) {
    
        setUser({ ...user });
        axios
          .post(`http://localhost:5000/user/register`, {
            name,
            email,
            password:cf_password
          })
          .then(res => {
            setUser({
              ...user,
              name: '',
              email: '',
              password: '',
              cf_password: '',
             
            });

            toast.success(res.data.message);
          })
          .catch(err => {
            setUser({
              ...user,
              name: '',
              email: '',
              password: '',
              cf_password: '',
      
            });
            console.log(err.response);
            toast.error(err.response.data.errors);
          });
      
       
    } else {
      toast.error('Please fill all fields');
    }
  };

    return (
   
    
      <div className=' text-gray-900 flex justify-center '>
      <ToastContainer />

        <div className='  m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
            <div className=' flex flex-col items-center'>
              <h3 className='text-2xl xl:text-3xl font-extrabold'>
                Sign Up 
              </h3>
              <br/>
              <div className='w-full flex-1 mt-3'>
                <div className='flex flex-col items-center'>
              <form
              onSubmit={handleSubmit}
              >
                <div className='mx-auto max-w-xs relative '>
                
                <CFormInput 
               
                label="Name"
                defaultValue="Small"
                size="xs"
              type="text" placeholder="Enter your name" id="name"
                value={name} name="name" onChange={handleChangeInput}  />
               <br/>
    
            
              
          
                <CFormInput type="text" placeholder="Enter email address" id="email"
                value={email} name="email" onChange={handleChangeInput} /> <br/>          
                <CFormInput type="password" placeholder="Enter password" id="password"
                value={password} name="password" onChange={handleChangeInput} /> <br/>           
                
                <CFormInput type="password" placeholder="Confirm password" id="cf_password"
                value={cf_password} name="cf_password" onChange={handleChangeInput} /><br/>
              
              
                          <Button type='submit' sx={{display: "flex", justifyContent: "center",backgroundColor:'#008080',width:'19rem',height:'2.5rem'}} variant="contained">
                          <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                                  <span className='ml-3'>Sign Up</span>
                                  </Button>  
                    
                 
                </div>
               <br/>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
         
                <br/>
               
                 
                <Link to="./login">
                <Typography
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: "300",
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#7b809a",
                    display:'flex',
                    justifyContent:'center',
                    
                  }}
                >
                  Already have an account?{" "}
                  <Typography
                    style={{
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#1a73e8",
                      marginLeft:'3px'
                    }}
                  >
                    Sign in
                  </Typography>
                </Typography>
              </Link> 
              </form></div></div>
            </div>
          </div>
          <div className='flex-1 bg-indigo-100 text-center hidden lg:flex'>
            <div
              className='m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat'
              style={{ backgroundImage: `url(${authSvg})` }}
            ></div>
          </div>
        </div>
      </div>
    )
}

export default Register