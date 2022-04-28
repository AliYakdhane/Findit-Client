import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {showErrMsg, showSuccessMsg} from '../../utils/notification/Notification'
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/validation/Validation'
import authSvg from '../../../assets/auth1.svg'
import { useToast } from "@chakra-ui/react";
import { Form,Schema,  InputGroup, Input, Tooltip } from 'rsuite';
import {Button, Divider} from '@mui/material';
import './auth.css'


const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}
const errorStyles = errorVisible => {
  return { display: errorVisible ? 'block' : 'none', color: 'red', marginTop: 6 };
};
const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  age: NumberType('Please enter a valid number.').range(
    18,
    30,
    'Please enter a number from 18 to 30'
  ),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

const TextField = React.forwardRef((props, ref) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

function Register() {

  const formRef = React.useRef();
  const [formError, setFormError] = React.useState({});
  const [formValue, setFormValue] = React.useState({
    name: '',
    email: '',
    age: '',
    password: '',
    verifyPassword: ''
  });
  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  };

  const handleCheckEmail = () => {
    formRef.current.checkForField('email', checkResult => {
      console.log(checkResult);
    });
  };

  const [errorVisible, setErrorVisible] = React.useState(false);

  const errorMessage = errorVisible ? 'This field is required' : null;
  const [user, setUser] = useState(initialState)
  const toast = useToast()
  const {name, email, password,cf_password, err, success} = user

  const handleChangeInput = e => {
      const {name, value} = e.target
      setUser({...user, [name]:value, err: '', success: ''})
  }


 /* const handleSubmite = async e => {
      e.preventDefault()
      if(isEmpty(name) || isEmpty(password))
              return setUser({...user, err: "Please fill in all fields.", success: ''})

      if(!isEmail(email))
          return setUser({...user, err: "Invalid emails.", success: ''})

      if(isLength(password))
          return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
      
      if(!isMatch(password, cf_password))
          return setUser({...user, err: "Password did not match.", success: ''})

      try {
          const res = await axios.post('http://localhost:5000/user/register', {
              name, email, password
          })

          setUser({...user, err: '', success: res.data.msg})
      } catch (err) {
          err.response.data.msg && 
          setUser({...user, err: err.response.data.msg, success: ''})
      }
  }*/

    return (
   
    
      <div className=' text-gray-900 flex justify-center '>
    
        <div className='  m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1'>
          <div className='lg:w-1/2 xl:w-5/12 p-6 sm:p-12'>
            <div className=' flex flex-col items-center'>
              <h3 className='text-2xl xl:text-3xl font-extrabold'>
                Sign Up 
              </h3>
              <br/>
              <div className='w-full flex-1 mt-3'>
                <div className='flex flex-col items-center'>
              <Form
              ref={formRef}
              onChange={setFormValue}
              onCheck={setFormError}
              formValue={formValue}
              model={model}
              >
                <div className='mx-auto max-w-xs relative '>
                <TextField name="name" label="Username" placeholder="First Name"
                
                onChange={handleChangeInput}
                value={user.firstname}
                />  
    
              
              
          
                <TextField name="email" label="Email" />
                <TextField name="password" label="Password" type="password" autoComplete="off" />
                <TextField
                  name="verifyPassword"
                  label="Verify password"
                  type="password"
                  autoComplete="off"
                />
              
              
                          <Button type='submit' sx={{display: "flex", justifyContent: "center",backgroundColor:'#008080',width:'19rem',height:'2.5rem'}} variant="contained">
                          <i className='fas fa-user-plus fa 1x w-6  -ml-2' />
                                  <span className='ml-3'>Sign Up</span>
                                  </Button>  
                    
                 
                </div>
               <br/>
                {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <div className=' text-center'>
                  <Divider className=' Dividerx-2  text-sm text-gray-600 tracking-wide font-medium bg-white transform'>
Already have an account!                 </Divider>
                </div>
                <br/>
               
                 
                <Link style={{display: "flex", justifyContent: "center"}} to ='./login'>
                
       
                <Button sx={{display: "flex", justifyContent: "center",backgroundColor:'#008080',width:'19rem',height:'2.5rem'}} variant="contained">
                 <i className='fas fa-sign-in-alt ' />
                        <span className='ml-3'>Sign Up</span>
                        </Button>  
          </Link>  
              </Form></div></div>
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
