import React, { useState } from 'react'
import { CFormInput } from "@coreui/react";
// import Page from './Page'
function input({placeholder, title,value}) {


  
  
  return (
  <>
     
    <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>{title}</h4>
    <br/>
    <div style={{width:'30%'}}>
    
<CFormInput type="" placeholder={placeholder} id=""
                   name="" />

    </div><br/>
    </>
  )
}

export default input