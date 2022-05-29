import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Iconify from './Iconify'
import {Stack } from '@mui/material'
import {
  showErrMsg,
  showSuccessMsg,
} from "../../utils/notification/Notification";
import { dispatchLogin } from "../../../redux/actions/authAction";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from 'react-facebook-login';
import authSvg from "../../../assets/authlogin.png";
import { Button, Typography, Icon } from "@mui/material";
import { Form, InputGroup, Input, Tooltip } from "rsuite";
import face from "../../../assets/face.png";
import gmail from "../../../assets/gmail.png";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { Divider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { CFormInput } from "@coreui/react";

const errorStyles = (errorVisible) => {
  return {
    display: errorVisible ? "block" : "none",
    color: "red",
    marginTop: 6,
  };
};
const initialState = {
  email: "",
  password: "",
  err: "",
  success: "",
};

const styles = {
  width: 300,
};
function Login() {
  const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  const [visible, setVisible] = React.useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  const { email, password, err, success } = user;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value, err: "", success: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:5000/user/login`, {
        email,
        password,
      });
      setUser({ ...user, err: "", success: res.data.msg });

      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/Addobject");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseGoogle = async (response) => {
    try {
      const res = await axios.post("http://localhost:5000/user/google_login", {
        tokenId: response.tokenId,
      });

      setUser({ ...user, error: "", success: res.data.msg });
      localStorage.setItem("firstLogin", true);

      dispatch(dispatchLogin());
      history.push("/addobject");
    } catch (err) {
      err.response.data.msg &&
        setUser({ ...user, err: err.response.data.msg, success: "" });
    }
  };

  const responseFacebook = async (response) => {
    try {
        const {accessToken, userID} = response
        const res = await axios.post('http://localhost:5000/user/facebook_login', {accessToken, userID})

        setUser({...user, error:'', success: res.data.msg})
        localStorage.setItem('firstLogin', true)

        dispatch(dispatchLogin())
        history.push('/addobject')
    } catch (err) {
        err.response.data.msg && 
        setUser({...user, err: err.response.data.msg, success: ''})
    }
}


  const [errorVisible, setErrorVisible] = React.useState(false);
  const [errorPlacement, setErrorPlacement] = React.useState("bottomStart");
  const errorMessage = errorVisible ? "This field is required" : null;
  
  return (
    <div className=" text-gray-900 flex justify-center ">
      <div className="   m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className=" flex flex-col items-center">
            <h3>SIGN IN</h3>
            <div className="w-full flex-1 mt-3">
              <div className="flex flex-col items-center">
              <form
              onSubmit={handleSubmit}
              >
                  
                    
                    <CFormInput type="text" placeholder="Enter email address" id="email"
                    value={email} name="email" onChange={handleChangeInput} /> <br/>          
                    <CFormInput type="password" placeholder="Enter password" id="password"
                    value={password} name="password" onChange={handleChangeInput} />  
                     

                  <Link to ='/forgot_password'
                    style={{
                      display: "flex",
                      fontFamily: "Roboto",
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "21px",
                      color: "#1a73e8",
                      justifyContent: "flex-end",
                      marginTop: "4px",
                    }}
                  
                  >
                    Forgot your password!
                  </Link>

                  <br />

                  <Button
                  type='submit'
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#008080",
                      width: "19rem",
                      height: "2.5rem",
                    }}
                    variant="contained"
                  >
                    <i className="fas fa-sign-in-alt" />
                    <span className="ml-3">Sign In</span>
                  </Button>
                  <br />
                  <Link to="./register">
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
                      Don&apos;t have an account?{" "}
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
                        Sign up
                      </Typography>
                    </Typography>
                  </Link>
                </form>

                <div></div>
                <br />
                <div style={{ display: "flex", flexDirection: "row" }}>
                <FacebookLogin
                appId="1135082247289891"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook} 
                />
                  <GoogleLogin
                  clientId="955896863448-2cs1rdresduerqslihit75jak537cogt.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  cookiePolicy={'single_host_origin'}
                    style={{ marginTop: "1rem", cursor: "pointer" }}
                    src={gmail}
                    alt="gmail"
                  />       <Stack direction="row" spacing={2}>
        <Button
        clientId="955896863448-2cs1rdresduerqslihit75jak537cogt.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  cookiePolicy={'single_host_origin'}
        fullWidth size="large" color="inherit" variant="outlined">
          <Iconify icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
        </Button>
        <Button 
        appId="1135082247289891"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook} 
        fullWidth size="large" color="inherit" variant="outlined">
        <Iconify icon="eva:facebook-fill" color="#1877F2" width={22} height={22} />
      </Button>
      </Stack>
                </div>
         
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${authSvg})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
