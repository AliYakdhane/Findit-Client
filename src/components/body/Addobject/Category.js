import React, { useState } from "react";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import devices5 from "../../../assets/devices5.gif";
import devices4 from "../../../assets/devices4.gif";
import devices3 from "../../../assets/devices3.gif";
import devices1 from "../../../assets/devices1.gif";
import devices2 from "../../../assets/devices2.gif";
import devices0 from "../../../assets/devices0.gif";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Checkbox from "@mui/material/Checkbox";
import { FormGroup, Label, Input } from "reactstrap";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { CFormInput,CInputGroup,CInputGroupText } from '@coreui/react'
import ListItemAvatar from "@mui/material/ListItemAvatar";

import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import CircleIcon from "@mui/icons-material/Circle";
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CFormTextarea,CFormSelect } from '@coreui/react'


const label = { inputProps: { "aria-label": "Checkbox demo" } };

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));
export default function Category() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  const [ouvertState, setOuvertState] = useState(false);
  const [toggleState, setToggleState] = useState(false);
  const [toggleeState, setToggleeState] = useState(false);
  const [togglerState, setTogglerState] = useState(false);
  const [value, setValue] = React.useState("ok");
  const [valuee, setValuee] = React.useState("female");

  const handleChange = (event, newValue) => {
    setValuee(newValue);
  };
  const handlerChange = (event, newValue) => {
    setValue(newValue);
  };

  const ouvertFonction = () => {
    setOuvertState(!ouvertState);
  };
  const toggleFonction = () => {
    setToggleState(!toggleState);
  };
  const togglerFonction = () => {
    setTogglerState(!togglerState);
  };
  const toggleeFonction = () => {
    setToggleeState(!toggleeState);
  };
 

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ marginLeft: "12px", marginTop: "25px" }}>
        <h5 style={{fontFamily: 'cursive'}}>Select a Category</h5>
      </div>
      <br />
      <br />
      <div value={valuee} onChange={handleChange} style={{ display: "flex", flexDirection: "column" }}>
        <box
          style={{
            marginLeft: "2.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
        <div >
        
          {toggleState ? (
            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #00AEAD",
                cursor: "pointer",
              }}
              onChange={handleChange}
              onClick={toggleFonction}
              value="female"
              control={<Radio />}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography variant="h6">Electronics</Typography>
                </CardContent>
              </Box>

              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "30rem",
                }}
                component="img"
                icon={<ArrowCircleRightOutlinedIcon />}
                image={devices0}
                alt="electronics"
              />
            </Card>
          ) : (
            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #E8F1F2",
                cursor: "pointer",
              }}
              onChange={handleChange}
              onClick={toggleFonction}
              value="female"
              control={<Radio />}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography className="text-gray-700" variant="h6">
                    Electronics
                  </Typography>
                </CardContent>
              </Box>

              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "30rem",
                }}
                component="img"
                icon={<ArrowCircleRightOutlinedIcon />}
                image={devices0}
                alt="electronics"
              />
            </Card>
          )}

          
            {toggleeState ? (
              <Card
                style={{
                  display: "inline-block",
                  width: "20%",
                  marginLeft: "28px",
                  border: "1px solid #00AEAD",
                  cursor: "pointer",
                }}
                onChange={handleChange}
                onClick={toggleeFonction}
                value="male"
                control={<Radio />}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <CardContent
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography className="font-mono" variant="h6">
                      Electronics
                    </Typography>
                  </CardContent>
                </Box>

                <CardMedia
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "30rem",
                  }}
                  component="img"
                  icon={<ArrowCircleRightOutlinedIcon />}
                  image={devices0}
                  alt="electronics"
                />
              </Card>
            ) : (
              <Card
                style={{
                  display: "inline-block",
                  width: "20%",
                  marginLeft: "28px",
                  border: "1px solid #E8F1F2",
                  cursor: "pointer",
                }}
                onChange={handleChange}
                onClick={toggleeFonction}
                value="male"
                control={<Radio />}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <CardContent
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Typography className="text-gray-700" variant="h6">
                      Electronics
                    </Typography>
                  </CardContent>
                </Box>

                <CardMedia
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "30rem",
                  }}
                  component="img"
                  icon={<ArrowCircleRightOutlinedIcon />}
                  image={devices0}
                  alt="electronics"
                />
              </Card>
            )}

            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #E8F1F2",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography className="text-gray-700" variant="h6">
                    Bags, suitcase
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100",
                }}
                component="img"
                image={devices2}
                alt="electronics"
              />
            </Card>
            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #E8F1F2",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  <Typography className="text-gray-700" variant="h6">
                    Identity document
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100",
                }}
                component="img"
                image={devices3}
                alt="electronics"
              />
            </Card>

            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #E8F1F2",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography className="text-gray-700" variant="h6">
                    Pets
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100",
                  backgroundColor: "#fff",
                }}
                component="img"
                image={devices4}
                alt="electronics"
              />
            </Card>
            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #E8F1F2",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography className="text-gray-700" variant="h6">
                    Keys
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100",
                }}
                component="img"
                image={devices5}
                alt="electronics"
              />
            </Card>
            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #E8F1F2",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography className="text-gray-700" variant="h6">
                    Electronics
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100",
                }}
                component="img"
                image={devices2}
                alt="electronics"
              />
            </Card>
            <Card
              style={{
                display: "inline-block",
                width: "20%",
                marginLeft: "28px",
                border: "1px solid #E8F1F2",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Typography className="text-gray-700" variant="h6">
                    Electronics
                  </Typography>
                </CardContent>
              </Box>
              <CardMedia
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100",
                }}
                component="img"
                image={devices2}
                alt="electronics"
              />
            </Card>
            {toggleState && (
              <div>
                {" "}
                <div style={{ marginLeft: "12px", marginTop: "25px" }}>
                  <h4 style={{fontFamily: 'cursive'}}>Describe your item:</h4>

                  <h4 style={{ marginTop: "2px",fontFamily: 'cursive' }}>Brand</h4>
                  <br />
                </div>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": {  width: "125ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Enter the location of the lost/find"
                    variant="outlined"
                  />
                </Box>
                <FormControl style={{marginLeft:'5px'}} component="fieldset">
                  <FormControlLabel
                  className="text-gray-700 "
                    value="end"
                    control={<Checkbox />}
                    label="No Brand"
                    labelPlacement="end"
                  />
                </FormControl>
                <FormGroup>
                <div style={{ marginLeft: "12px", marginTop: "25px" }}>
                <h4 style={{fontFamily: 'cursive'}}>Item's picture</h4>
              </div>
              <br/>
              <CInputGroup style={{width:'125ch',height:'3.5rem'}} className="flex-nowrap">
  <CInputGroupText id="addon-wrapping">Browse</CInputGroupText>
  <CFormInput placeholder="Choose or drop a file here..." aria-label="Username" aria-describedby="addon-wrapping" />
</CInputGroup>
                  
                  <div style={{ marginLeft: "12px", marginTop: "25px" }}>
                  <h4 style={{fontFamily: 'cursive'}}>Item color</h4>
                  <br/>
                </div>
                    <Box
                    sx={{
                      flexGrow: 1,
                      maxWidth: { xs: 320, sm: 480 },
                      bgcolor: 'background.paper',
                    }}
                  >

                    <Tabs value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    aria-label="visible arrows tabs example"
                    sx={{
                      [`& .${tabsClasses.scrollButtons}`]: {
                        '&.Mui-disabled': { opacity: 0.54 },
                      },
                      width:'125ch'
                    }}>
                    <Tab icon={<CircleIcon style={{color:'red'}} />} label="Red" />
                    <Tab icon={<CircleIcon  style={{color:'blue'}}/>} label="Blue" />
                    <Tab icon={<CircleIcon   style={{color:'white',borderRadius:'50%', border:'1px solid gray'}}/>} label="White" />
                    <Tab icon={<CircleIcon  style={{color:'green'}}/>} label="Green" />
                    <Tab icon={<CircleIcon  style={{color:'black'}}/>} label="Black" />
                    <Tab icon={<CircleIcon style={{color:'red'}} />} label="Red" />
                    <Tab icon={<CircleIcon  style={{color:'blue'}}/>} label="Blue" />
                    <Tab icon={<CircleIcon   style={{color:'white',borderRadius:'50%', border:'1px solid gray'}}/>} label="White" />
                    <Tab icon={<CircleIcon  style={{color:'green'}}/>} label="Green" />
                    <Tab icon={<CircleIcon  style={{color:'black'}}/>} label="Black" />
              
                    <Tab icon={<CircleIcon style={{color:'gray'}} />} label="Gray" />
                    <Tab icon={<CircleIcon  style={{color:'blue'}}/>} label="Blue" />
                    <Tab icon={<CircleIcon   style={{color:'white',borderRadius:'50%', border:'1px solid gray'}}/>} label="White" />
                    <Tab icon={<CircleIcon  style={{color:'green'}}/>} label="Green" />
                    <Tab icon={<CircleIcon  style={{color:'black'}}/>} label="Black" />
                    <Tab icon={<CircleIcon style={{color:'red'}} />} label="Red" />
                    <Tab icon={<CircleIcon  style={{color:'blue'}}/>} label="Blue" />
                    <Tab icon={<CircleIcon   style={{color:'white',borderRadius:'50%', border:'1px solid gray'}}/>} label="White" />
                    <Tab icon={<CircleIcon  style={{color:'green'}}/>} label="Green" />
                    <Tab icon={<CircleIcon  style={{color:'black'}}/>} label="Black" />
                 
                    <Tab icon={<CircleIcon style={{color:'red'}} />} label="Red" />
                    <Tab icon={<CircleIcon  style={{color:'blue'}}/>} label="Blue" />
                    <Tab icon={<CircleIcon   style={{color:'white',borderRadius:'50%', border:'1px solid gray'}}/>} label="White" />
                    <Tab icon={<CircleIcon  style={{color:'green'}}/>} label="Green" />
                    <Tab icon={<CircleIcon  style={{color:'black'}}/>} label="Black" />
                    <Tab icon={<CircleIcon style={{color:'red'}} />} label="Red" />
                    <Tab icon={<CircleIcon  style={{color:'blue'}}/>} label="Blue" />
                    <Tab icon={<CircleIcon   style={{color:'white',borderRadius:'50%', border:'1px solid gray'}}/>} label="White" />
                    <Tab icon={<CircleIcon  style={{color:'green'}}/>} label="Green" />
                    <Tab icon={<CircleIcon  style={{color:'black'}}/>} label="Black" />
               </Tabs> 
              
                  </Box>
                   
                  <div style={{ marginLeft: "12px", marginTop: "25px" }}>
               <h5 style={{fontFamily: 'cursive'}}>Model</h5>
               <br/>
             </div>
             <Box
             component="form"
             sx={{
               "& > :not(style)": {  width: "125ch" },
             }}
             noValidate
             autoComplete="off"
           >
             <TextField
               id="outlined-basic"
               label="What's the item's model?"
               variant="outlined"
             />
             
           </Box>

           
           <div style={{ marginLeft: "12px", marginTop: "25px" }}>
           <h5 style={{fontFamily: 'cursive'}}>Detail</h5>
           <br/>
         </div>
         <CFormTextarea style={{width:'125ch'}} id="exampleFormControlTextarea1" rows="3"></CFormTextarea>

       
       <div style={{ marginLeft: "12px", marginTop: "25px" }}>
       <h5 style={{fontFamily: 'cursive'}}>State</h5>
       <br/>
     </div>
       <CFormSelect 
       style={{width:'125ch',height:'3.5rem'}}
       aria-label=""
       options={[
         'Specify the state...',
         { label: 'New with price tag', value: '1' },
         { label: 'New without tag', value: '2' },
         { label: 'Satisfying', value: '3' },
         { label: 'Damaged', value: '4' }
       ]}
     />
     
     <br/>
  
       
                  <div>
                    {ouvertState ? (
                      <CancelIcon
                        onClick={ouvertFonction}
                        style={{ color: "red" }}
                      />
                    ) : (
                      <AddCircleIcon
                        onClick={ouvertFonction}
                        style={{ color: "#008080" }}
                      />
                    )}
                    <span style={{ marginLeft: "1rem" }}>
                      Add an authentication question. This question allows you
                      to prove that you are the owner of this itel.Please give
                      an information that you are the only one to know.
                    </span>
                    {ouvertState &&
                        <div>
                        <div style={{ marginLeft: "12px", marginTop: "25px" }}>
                        <h4 style={{fontFamily: 'cursive'}}>Create a question so that the finder can identify you</h4>
                        <br/>
                      </div>
                        <CFormSelect 
                        style={{width:'125ch',height:'3.5rem'}}
                        aria-label=""
                        options={[
                          'Specify the state...',
                          { label: 'Wich model is it? Upload a screenshot of the model from the merchant site', value: '1' },
                          { label: 'What does the case look like', value: '2' },
                          { label: 'Satisfying', value: '3' },
                          { label: 'Damaged', value: '4' }
                        ]}
                      /></div>}{" "}
                     
                  </div>
                  <br />
                  <div>
                    {togglerState ? (
                      <CancelIcon
                        onClick={togglerFonction}
                        style={{ color: "red" }}
                      />
                    ) : (
                      <AddCircleIcon
                        onClick={togglerFonction}
                        style={{ color: "#008080" }}
                      />
                    )}
                    <span style={{ marginLeft: "1rem" }}>
                Related items
                    </span>
                    <br/>
                    {togglerState &&   <TextField
                        style={{width:'125ch',marginTop:'1rem'}}
                        id="outlined-basic"
                        label="Enter the reference number"
                        variant="outlined"
                      />}{" "}
                  </div>
                  
                </FormGroup>
              </div>
            )}
            {toggleeState && <p>hii</p>}
          </div>
          <br />

          <div style={{ display: "flex", justifyContent: "center" }}>
          <Button sx={{backgroundColor:'#008080',width:'25%'}} variant="contained">Add Item</Button>

          </div>
          <br/>
        </box>
      </div>
    </div>
  );
}
