import React, { useEffect, useState } from "react";
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
import { Card, Grid } from "@mui/material";
import { Form,Schema,  InputGroup, Tooltip } from 'rsuite';
import { DatePicker } from 'rsuite';
import {   Stack} from "@mui/material";
import Axios from "axios";
import Test from '../test'
import { Link } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Addobject() {

  const [hideLightbox, setHideLightbox] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [adresse, setAdresse] = React.useState('')
  const [date, setDate] = React.useState('')

 const [statut, setStatut] = React.useState('object')

 const changesattus = ()=> {
   if(statut === 'object') {
    setStatut('object2')
    localStorage.setItem('statut', 'LOSt');
   }else {
    setStatut('object')
    localStorage.setItem('statut', 'found');
   }
 }
const changeAdresse = event => {
setAdresse(event.target.value)
console.log(event.target.value);
localStorage.setItem('adress',adresse);

}
const changeDate = event => {
  setDate(event.target.value)
  console.log(event.target.value);
  localStorage.setItem('date',date);
  
  }
  
  const [categorys, setCategorys] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:5000/Category').then(res => {
      setCategorys(res.data)
    })
  },[])


  





  

  const [valuee, setValuee] = React.useState("female");

  const handleChange = (event, newValue) => {
    setValuee(newValue);
  };

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
            <form >
            <div className="wrapper">
<div style={{maxWidth:'60rem'}}>
            <div style={{ marginLeft: "12px" }}>

              <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>Status</h4>
            </div><br/>
            <div style={{  display:'flex',flexDirection:'row' }}>
            <select onChange={()=>{changesattus()}} style={{width:'100%',border:'1px solid #ddd',borderRadius:'6px',height:'2.5rem'}} placeholder="Select your status" value={statut} >
            <option onChange={()=>{localStorage.setItem('status', 'Lost');}} value='object2' >
            Lost
            </option>
            <option  onChange={()=>{localStorage.setItem('status', 'Found');}} value='object'  name='statut' id='statut'>
            Found
            </option>
            </select>
           
            </div>

          
            <br />
            <div style={{ marginLeft: "12px" }}>
              <h4   style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>Where?</h4>
            </div>
            <br/>
             
            <CFormInput onChange={changeAdresse}  style={{borderRadius:'8px'}} type="text" placeholder="Enter adress of lost/found" id="adress"
            name="adress" value={adresse}  />
            <br/>

            <div>
              <div style={{ marginLeft: "12px" }}>
                <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>When?</h4>
              </div>
              <br/>
              <CFormInput onChange={changeDate}  style={{borderRadius:'8px'}} type="date" placeholder="Enter date" id="date"
              name="date" value={date}  />
            </div></div>
            <div
            className="  w-full bg-contain flex flex-center bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${addfile})` }}
          ></div>
           </div>
           <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginLeft: "12px", marginTop: "25px" }}>
        <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>Select a Category</h4>
      </div>
  
      <div value={valuee} onChange={handleChange} style={{ display: "flex", flexDirection: "column" }}>
        <box
          style={{
            marginLeft: "2.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
    
          <br />
          <Grid display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={1}>
    {  categorys.map((val,key) => (
      <Stack spacing={1} sx={{ p: 2 }}>
      
      <MDBCard
      onClick={() => setHideLightbox(true,val._id)}
      key={key}
    
      style={{
        maxWidth: "12rem",
        minHeight: "11rem",
        borderRadius: "12px",
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        display: "inline-block",
        margin: "1rem",
        
      }}
            > 
            <MDBCardBody style={{borderBottom:'1px solid #ddd'}}>
            <MDBCardTitle value='object'  style={{ textAlign: "center" }} name='categoryName' id='categoryName'>
            {val.name}
            </MDBCardTitle>
          </MDBCardBody>
          <MDBCardImage
            style={{ borderRadius: "12px", maxWidth: "11rem",
            minHeight: "11rem" }}
            src={val.image}
            position="top"
            alt="..."
          />
        </MDBCard>
        <div className={`lightbox ${hideLightbox ? "hide-lightbox" : ""}`}>
        <Link to={`/Addobject/${val._id}`}>
          hui
          </Link>
   
        </div>
        </Stack>
        ))
      
  }

      </Grid>
<br/>

          <br/>
        </box>
      </div>
    </div></form>
            <p></p>
          </Card>
        </Container>
        <Chatbotbutton
/>
        <ScrollButton/>
      </div>
  
  );
}
