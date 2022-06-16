import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

import devices0 from "../../../assets/devices0.gif";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import Axios from "axios";

import { Link } from "react-router-dom";

export default function App() {
  const [categorys, setCategorys] = useState([])
  useEffect(() => {
    Axios.get('http://localhost:5000/Category').then(res => {
      setCategorys(res.data)
    })
  },[])
  const  [object, setObject]= React.useState('')

  const submitHandler = (e)=>{
    e.preventDefault();
  }
  const postData = [object, localStorage.getItem("statut"),localStorage.getItem("adress"),localStorage.getItem("date")]
  console.log(postData)  
  Axios.post(`http://localhost:5000/object/addObject`, postData)
  .then((res)=> {
    console.log(res)
  })
  .catch((err)=> {
    console.log(err)
  })
  
  
  return (
    <Grid display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={1}>
    {  categorys.map((val,key) => (
      <Stack spacing={1} sx={{ p: 2 }}>
      <Link to={`/Addobject/${val._id}`}>
      <MDBCard
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
            <MDBCardTitle value='object' onChange={(e)=>{setObject(e.target.value)}} style={{ textAlign: "center" }} name='categoryName' id='categoryName'>
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
        </MDBCard></Link>
        </Stack>))
      
  }

      </Grid>
  );
}
