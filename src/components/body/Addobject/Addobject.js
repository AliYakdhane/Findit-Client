import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Category from './Category'
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/Home';
import { Nav, InputPicker,Input } from 'rsuite';
import './addobject.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, CheckboxGroup } from 'rsuite';
import { Card } from "@mui/material";


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
const styles = { width: 300, display: 'block' };
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

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
    <div> 
    <div role="presentation" onClick={handleClick}>
    <Breadcrumbs aria-label="breadcrumb">
      <StyledBreadcrumb
        component="a"
        href="#"
        label="Home"
        icon={<HomeOutlinedIcon fontSize="small" />}
      />
     
      <StyledBreadcrumb
        label="Add Item"
        deleteIcon={<ExpandMoreIcon />}
        onDelete={handleClick}
      />
    </Breadcrumbs>
  </div>
  <br/>
      <div className=" flex justify-center  ">
        <CssBaseline />
       
        <Container fixed sx={{Width:300}}>      
           
        <Card
        sx={{
          boxShadow: 10,
          borderRadius:6,
          p: 2,
          mx: { xs: 1, lg: 4 },
          
          
        }}>
          <br/>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                margin:'5px'
              }}
            >
            <Button style={{color:'#a7a7a7',border:'1px solid #ddd'}} variant="outlined" startIcon={<PlayCircleOutlineIcon style={{color:'green'}} />}>
            Video-How does it work
          </Button>
            </div>
            
            <div style={{ marginLeft: "12px" }}>

              <h4 style={{fontFamily: 'extraBold'}}>Status</h4>
            </div><br/><div style={{ marginLeft: "12px", display:'flex',flexDirection:'row' }}>
            <InputPicker size="lg" placeholder="Select your status" data={data}   />
            </div>

          
            <br />
            <div style={{ marginLeft: "12px" }}>
              <h4 style={{fontFamily: 'extraBold'}}>Where</h4>
            </div>
            <Box
              sx={{
                bgcolor: "#fff",
                position: "relative",
                minHeight: 150,
              }}
            >
          
          {/*  <Nav appearance="subtle"
            onChange={handleChangee}
            >
            <Nav.Item {...a11yProps(0)}  label="Adress">Adress</Nav.Item>
            
            <Nav.Item   {...a11yProps(1)}>Transport</Nav.Item>
            <Nav.Item>Airport</Nav.Item>
            <Nav.Item>Supermarket</Nav.Item>
            <Nav.Item>About</Nav.Item>
          </Nav>*/}
            
                <Tabs
                  onChange={handleChangee}
                 
                  value={value}
                  aria-label="action tabs example"
                  backgroundColr="#fff"
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#008080"
                     }
                    }}
                >
                  <Tab
                    style={{ fontSize: "16px", fontFamily: "bold",borderBottom:'1px solid #000' }}
                    label="Adress"
                    {...a11yProps(0)}
                  />
                  <Tab
                    style={{ fontSize: "14px", fontFamily: "bold",borderBottom:'1px solid #000' }}
                    label="Transport"
                    {...a11yProps(1)}
                  />
                  <Tab
                    style={{ fontSize: "16px", fontFamily: "bold",borderBottom:'1px solid #000' }}
                    label="Airport"
                    {...a11yProps(2)}
                  />
                  <Tab
                    style={{ fontSize: "16px", fontFamily: "bold",borderBottom:'1px solid #000' }}
                    label="Supermarket"
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
                  style={{ color: "#008080" }}
                  value={value}
                  index={0}
                  dir={theme.direction}
                >
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "125ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                  <Input size='lg'  placeholder="Enter the location of the lost/find" />
                      
                    
                  </Box>
                </div>
                <div value={value} index={1} dir={theme.direction}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "125ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                  <Input size='lg' placeholder="Select a transport network" />
                  </Box>
                </div>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "125ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Search"
                      variant="outlined"
                    />
                  </Box>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "125ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="Enter the name of Supermarket"
                      variant="outlined"
                    />
                  </Box>
                </TabPanel>
              </SwipeableViews>
            </Box>

            <div>
              <div style={{ marginLeft: "12px" }}>
                <h6 style={{fontFamily: 'cursive'}}>When</h6>
              </div>
              <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack>
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 4, width: "125ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <DateTimePicker
                        label="Date&Time picker"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Box>
                    <p></p>
                  </Stack>
                </LocalizationProvider>
              </div>
            </div>
           
           <Category />
            <p></p>
          </Card>
        </Container>
      </div>
    </div>
  );
}
