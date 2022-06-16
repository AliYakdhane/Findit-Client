import { Title } from "@material-ui/icons";
import { Card, Button, Container } from "@mui/material";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "./formComponent/input";
import Select from "./formComponent/select";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Test({data}) {
  let { _id } = useParams();
  const [form, setForm] = useState(null);
  const getType = (type, placeholder, options, title) => {
    switch (type) {
      case "DURATION":
        return "test";
      case "SELECT":
        return <Select options={options} title={title} />;
      case "Text":
        return <Input placeholder={placeholder} title={title} />;
        case "Color":
          return <Input placeholder={placeholder} title={title} />;
      default:
    }
  };
  useEffect(() => {
    Axios.get(`http://localhost:5000/Category/${_id}`).then((res) => {
      const tempArray = [];
      (res.data.formId.formData).map((ele) => {
        if (ele.type === "Text") {
          tempArray.push({
            type: getType(ele.type, ele.placeholder, ele.options, ele.title),
          });
        } else if (ele.type === "SELECT") {
          tempArray.push({
            type: getType(ele.type, ele.placeholder, ele.options, ele.title),
          });
        }
        else if (ele.type === "Color") {
          tempArray.push({
            type: getType(ele.type, ele.placeholder, ele.options, ele.title),
          });
        }
      });
      setForm(tempArray);
      console.log(tempArray);
    });
  }, []);
  return (
    <Container  fixed sx={{Width:300}}> 
    <Card
    sx={{
      boxShadow: 10,
      borderRadius:6,
      p: 2,
      mx: { xs: 4, lg: 4 },
      
      
    }}>

      {form?.map((ele) => {
        return <>{ele.type}</>;
      })}
      <br/>
          <div style={{      
           
          display: "flex", justifyContent: "center" }}>
          <Button sx={{
          backgroundColor: "#5D8C8E",
          width:'14.5rem',
          height:'2rem',
          fontSize: "16px",
          lineHeight:'19px',
          fontFamily:'Roboto',
          fontWeight:'600',
          margin:'auto',}} variant="contained"> <AddCircleOutlineIcon style={{marginRight:'4px'}}/>Add Item</Button>

          </div>
          <br/>
    </Card> </Container>
  );
}
/*
res
*/
