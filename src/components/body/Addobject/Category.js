import React from "react";

import Button from '@mui/material/Button';
import Cards from './Cards'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Axios from 'axios'


export default function Category() {

  


  




 
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
<Cards/>
<br/>

          <br/>
        </box>
      </div>
    </div>
  );
}
