import React, { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import Cards from './Cards'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import Axios from "axios";

import { Link } from "react-router-dom";import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Category({setCategory}) {
  const [adresse, setAdresse] = React.useState("");

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
     
      key={key}
      onClick={() => setCategory(val._id)}
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
        </Stack>))
      
  }

      </Grid>
<br/>

          <br/>
        </box>
      </div>
    </div>
  );
}
