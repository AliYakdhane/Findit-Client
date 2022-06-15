import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ScrollButton from '../home/ScrollButton'
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Category from './Category'
import addfile from "../../../assets/addfile.svg";
import Chatbotbutton from '../home/Chatbotbutton'
import { Nav, InputPicker,Input } from 'rsuite';
import './addobject.css'
import ChatBot from 'react-simple-chatbot';
import { CFormInput } from "@coreui/react";
import Test from '../test'
import { Card } from "@mui/material";
import { Form,Schema,  InputGroup, Tooltip } from 'rsuite';
import { DatePicker } from 'rsuite';
import Axios from 'axios'



export default function Addobject() {

  
  const [open, setOpen] = React.useState(false);

 const  [object, setObject]= React.useState('')

const submitHandler = (e)=>{
  e.preventDefault();
}
const postData = {object}
console.log(postData)  
Axios.post(`http://localhost:5000/object/addObject`, postData)
.then((res)=> {
  console.log(res)
})
.catch((err)=> {
  console.log(err)
})


  return (
   
      <div className=" flex justify-center  ">
        <CssBaseline />
       
        <Container open={open} fixed sx={{Width:300}}>      
           
        <Card
        sx={{
          boxShadow: 10,
          borderRadius:6,
          p: 2,
          mx: { xs: 4, lg: 4 },
          
          
        }}>
          <br/>
          <Typography style={{fontFamily:'Roboto',fontWeight:'700',fontSize:'17px',lineHeight:'26px',color:'#344767'}}>
          Fill out the form to report your item          </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin:'5px'
              }}
            >
            <Button style={{color:'#a7a7a7',borderRadius:'12px',border:'1px solid #ddd'}} variant="outlined" startIcon={<PlayCircleOutlineIcon style={{color:'green'}} />}>
            Video-How does it work
          </Button>
            </div>
            <br/>
            <form onSubmit={submitHandler}>
            <div className="wrapper">
<div style={{maxWidth:'60rem'}}>
            <div style={{ marginLeft: "12px" }}>

              <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>Status</h4>
            </div><br/>
            <div style={{  display:'flex',flexDirection:'row' }}>
            <select style={{width:'100%',border:'1px solid #ddd',borderRadius:'6px',height:'2.5rem'}} placeholder="Select your status" >
            <option value='object' onChange={(e)=>{setObject(e.target.value)}} >
            Lost
            </option>
            <option value='object'  onChange={(e)=>{setObject(e.target.value)}} name='statut' id='statut'>
            Found
            </option>
            </select>
           
            </div>

          
            <br />
            <div style={{ marginLeft: "12px" }}>
              <h4   style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>Where?</h4>
            </div>
            <br/>
             
            <CFormInput style={{borderRadius:'8px'}} type="text" placeholder="Enter adress of lost/found" id="adress"
            name="adress" value='object'  onChange={(e)=>{setObject(e.target.value)}} />
            <br/>

            <div>
              <div style={{ marginLeft: "12px" }}>
                <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>When?</h4>
              </div>
              <br/>
              <DatePicker  
              style={{width:'53.5ch'}}
              format="yyyy-MM-dd HH:mm:ss"
              locale={{
                sunday: 'Su',
                monday: 'Mo',
                tuesday: 'Tu',
                wednesday: 'We',
                thursday: 'Th',
                friday: 'Fr',
                saturday: 'Sa',
                ok: 'OK',
                today: 'Today',
                yesterday: 'Yesterday',
              
              }}
            />
            </div></div>
            <div
            className="  w-full bg-contain flex flex-center bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${addfile})` }}
          ></div>
           </div>
           <Category /></form>
            <p></p>
          </Card>
        </Container>
        <Chatbotbutton
/>
        <ScrollButton/>
      </div>
  
  );
}
