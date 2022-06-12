import React from 'react'
import { CFormInput } from "@coreui/react";

function input({placeholder, title}) {
  return (
    <>
    <h1>{title}</h1>
    <br/>
    <div style={{width:'20%'}}>
<CFormInput type="" placeholder={placeholder} id=""
                   name="" />

    </div>
    </>
  )
}

export default input