import * as React from 'react';
import { Select } from '@mui/material';

export default function ControlledOpenSelect({options, title,placeholder}) {


 
  return (
    <div>
    <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>{title}</h4>
    <br/>
     <select style={{width:'30%',border:'1px solid #ddd',borderRadius:'6px',height:'3rem'}} placeholder={placeholder}>
     {options.map((ele)=>{
        return(
            <option   value={ele.value}>{ele.title}</option>
        )
     })}
     </select>
     
    </div>
  );
}
