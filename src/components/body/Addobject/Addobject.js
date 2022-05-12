import React from "react";
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
import Chatbot from '../home/Chatbot'
import { Nav, InputPicker,Input } from 'rsuite';
import './addobject.css'

import { Card } from "@mui/material";
import { Form,Schema,  InputGroup, Tooltip } from 'rsuite';
import { DatePicker } from 'rsuite';


const data =[
  {
    "label":'Lost',
    "value":'lost',
  },
  {
    "label":'Found',
    "value":'Found',
  }
]
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}


export default function Addobject() {
  const TextField = React.forwardRef((props, ref) => {
    const { name, label, accepter, ...rest } = props;
    return (
      <Form>
      <Form.Group controlId={`${name}-4`} ref={ref}>
        <Form.ControlLabel>{label} </Form.ControlLabel>
        <Form.Control name={name} accepter={accepter} {...rest} />
      </Form.Group></Form>
    );
  });
  
  const [open, setOpen] = React.useState(false);

 
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChangee = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
            <div className="wrapper">
<div style={{maxWidth:'60rem'}}>
            <div style={{ marginLeft: "12px" }}>

              <h4 style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>Status</h4>
            </div><br/>
            <div style={{ marginLeft: "12px", display:'flex',flexDirection:'row' }}>
            <InputPicker style={{width:'61rem'}} placeholder="Select your status" data={data}   />
            </div>

          
            <br />
            <div style={{ marginLeft: "12px" }}>
              <h4   style={{ fontSize: "21px",color:'#495057', fontFamily: "Roboto",fontWeight:'400',lineHeight:'21px',textTransform:'none' }}>Where?</h4>
            </div>
            
            <Box
              sx={{
                bgcolor: "#fff",
                position: "relative",
                minHeight: 150,
              }}
              
            >
                <Tabs
                  onChange={handleChangee}
                  value={value}
                  aria-label="action tabs example"
                  backgroundColor="#fff"
                  borderBottom='1px solid #fff'
                >
                  <Tab
                    style={{ fontSize: "16px", fontFamily: "Roboto",fontWeight:'500',lineHeight:'21px',textTransform:'none' }}
                    label="Adress"
                    {...a11yProps(0)}
                  />
                  <Tab
                  style={{ fontSize: "16px", fontFamily: "Roboto",fontWeight:'500',lineHeight:'21px',textTransform:'none' }}                    label="Transport"
                    {...a11yProps(1)}
                  />
                  <Tab
                  style={{ fontSize: "16px", fontFamily: "Roboto",fontWeight:'500',lineHeight:'21px',textTransform:'none' }}                    label="Airport"
                    {...a11yProps(2)}
                  />
                  <Tab
                  style={{ fontSize: "16px", fontFamily: "Roboto",fontWeight:'500',lineHeight:'21px',textTransform:'none' }}                    label="Supermarket"
                    {...a11yProps(3)}
                  />
            </Tabs>
              <br/>
              <SwipeableViews
                marginTop="3rem"
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <div
                 
                  value={value}
                  index={0}
                  dir={theme.direction}
                >
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                  >
                  <TextField style={{width:'61ch'}}  placeholder="Enter the location of the lost/find" />
                  </Box>
                </div>
                <div value={value} index={1} >
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                  >
                  <TextField style={{width:'61ch'}}  placeholder="Enter the location of the lost/find" />
                  </Box>
                </div>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                  >
                  <TextField style={{width:'61ch'}}  placeholder="Enter the location of the lost/find" />

                  </Box>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                  <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                  >
                  <TextField style={{width:'61ch'}}  placeholder="Enter the location of the lost/find" />

                  </Box>
                </TabPanel>
              </SwipeableViews>
            </Box>

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
           <Category />
            <p></p>
          </Card>
        </Container>
        <Chatbot/>
        <ScrollButton/>
      </div>
  
  );
}
