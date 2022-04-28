import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {dispatchLogin} from '../../../redux/actions/authAction'
import {useDispatch} from 'react-redux'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import authSvg from '../../../assets/authlogin.svg'
import Button from '@mui/material/Button';
import { Form, InputGroup, Input, Tooltip } from 'rsuite';
import face from '../../../assets/face.png'
import gmail from '../../../assets/gmail.png'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Divider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

 const errorStyles = errorVisible => {
      return { display: errorVisible ? 'block' : 'none', color: 'red', marginTop: 6 };
    };
const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

const styles = {
  width: 300
};
function Login() {
  const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(initialState)
  const dispatch = useDispatch()
  const history = useHistory()
  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  const {email, password, err, success} = user

  const handleChangeInput = e => {
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
      
  }


  const handleSubmit = async e => {
      e.preventDefault()
      try {
          const res = await axios.post('http://localhost:5000/user/login', {email, password})
          setUser({...user, err: '', success: res.data.msg})

          localStorage.setItem('firstLogin', true)

          dispatch(dispatchLogin())
          history.push("/Addobject")

      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  const responseGoogle = async (response) => {
      try {
          const res = await axios.post('/user/google_login', {tokenId: response.tokenId})

          setUser({...user, error:'', success: res.data.msg})
          localStorage.setItem('firstLogin', true)

          dispatch(dispatchLogin())
          history.push('/profile')
      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }

  


    const responseFacebook = async (response) => {
        try {
            const {accessToken, userID} = response
            const res = await axios.post('/user/facebook_login', {accessToken, userID})

            setUser({...user, error:'', success: res.data.msg})
            localStorage.setItem('firstLogin', true)

            dispatch(dispatchLogin())
            history.push('/')
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }
   
    const [errorVisible, setErrorVisible] = React.useState(false);
    const [errorPlacement, setErrorPlacement] = React.useState('bottomStart');
    const errorMessage = errorVisible ? 'This field is required' : null;
    return (
        <div className=' text-gray-900 flex justify-center '>
    
        <div className='  m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
            <div className=' flex flex-col items-center'>
              <h3>
                SIGN IN
              </h3>
              <div className='w-full flex-1 mt-3'>
                <div className='flex flex-col items-center'>
                <Form
                onSubmit={handleSubmit}
              >
              <Form.Group controlId="email">
              <Form.ControlLabel >Email</Form.ControlLabel>
              <Form.Control 
              speaker={<Tooltip>Required</Tooltip>}
              placeholder="Enter your email adress "
              name="email" type="email"
              required              />
  
            </Form.Group> 
                       <Form.ControlLabel>Password</Form.ControlLabel>
            <InputGroup inside style={styles}>
      <Input 
      placeholder="Enter your password "
      type={visible ? 'text' : 'password'} />
      <InputGroup.Button onClick={handleChange}>
        {visible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
      </InputGroup.Button>
    </InputGroup>
          <Link style={{color:'blue',display:'flex',justifyContent:'flex-end',marginTop:'4px'}} href="#">Forgot your password!</Link>
         
          
      
<br/>
         
                 
                 <Button sx={{display: "flex", justifyContent: "center",backgroundColor:'#008080',width:'19rem',height:'2.5rem'}} variant="contained">
          <i className='fas fa-sign-in-alt' />
                  <span className='ml-3'>Sign In</span></Button>  
                  <br/>
                <Link to ='./register'> 
                  <Button sx={{display: "flex", justifyContent: "center",backgroundColor:'#008080',width:'19rem',height:'2.5rem'}} variant="contained">
                  <i className='fas fa-user-plus fa 1x w-6  -ml-2' />    
                  <span className='ml-3'>Sign Up</span></Button></Link>  
              </Form>
             
          <div>
         

          </div>
                <br/>
                  <div style={{display:'flex',flexDirection:'row'}}>
            <img style={{marginTop:'1rem',cursor:'pointer'}} src={face} alt='facebook'/>
            <img style={{marginTop:'1rem',cursor:'pointer'}} src={gmail} alt='gmail'/>
            </div>
                </div>
              </div>
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

export default Login
