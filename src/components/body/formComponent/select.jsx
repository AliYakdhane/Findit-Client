import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
//import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect({options, title}) {


 
  return (
    <div>
        <h1>{title}</h1>
     <select>
     {options.map((ele)=>{
        return(
            <option  value={ele.value}>{ele.title}</option>
        )
     })}
     </select>
     
    </div>
  );
}
