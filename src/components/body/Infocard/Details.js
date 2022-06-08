// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import React from 'react'
import './Details.css'

// Material Kit 2 React components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function FeaturesOne() {
  return (
    <Box component="section" py={{ xs: 3, md: 12 }} borderRadius='12px' backgroundColor='#E8F1F2'>
      <Container>
      <Typography  style={{fontFamily:'Roboto',fontWeight:'700',fontSize:'30px',lineHeight:'41px',color:'#344767',textAlign:'center'}} >
            WHY CHOOSING FIND IT?            </Typography>
<br/>
<br/>
            <Grid container alignItems="center">
        
          <Grid item xs={12} lg={5}>
            <Typography  style={{fontFamily:'Roboto',fontWeight:'700',fontSize:'30px',lineHeight:'41px',color:'#344767'}} >
           About Us            </Typography>
            <br/>
            <Typography   style={{fontFamily:"Roboto", fontWeight:'500',lineHeight:'29px', color:'#000', fontSize:'20px'}} variant="body2" color="text">
            We provide a powerful lost & found software to help you transform lost & found into a great customer experience and save time

            Features to change the way you manage lost & found


            </Typography>
            <br/>
            <Typography
            style={{fontFamily:"Roboto", fontWeight:'400',lineHeight:'26px', color:'#1a73e8', fontSize:'20px'}}
              component="a"
              href="#"
              variant="body2"
              color="#008080"
              fontWeight="regular"
              sx={{
                width: "max-content",
                display: "flex",
                alignItems: "center",

                "& .material-icons-round": {
                  fontSize: "1.125rem",
                  transform: "translateX(3px)",
                  transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                },

                "&:hover .material-icons-round, &:focus .material-icons-round": {
                  transform: "translateX(6px)",
                },
              }}
            >
         <Icon sx={{marginLeft:'4px', fontWeight: "bold" }}>arrow_forward</Icon>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: { xs: -2, lg: "auto" }, mt: { xs: 6, lg: 0 } }}>
            <Stack>
              <Box display="flex" alignItems="center" p={2}>
              <Box
              className="iconBox"
                width="3rem"
                height="3rem"
backgroundColor="blue"       
         bgColor="info"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="12px"
                
              >
                <Icon backgroundColor="blue" fontSize="large">bolt</Icon>
              </Box>
                <Typography style={{fontFamily:"Roboto", fontWeight:'500',lineHeight:'26px', color:'#000', fontSize:'17px'}} variant="body2" color="text" pl={2}>
                Found items and owners are automatically matched by our algorithm
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
              <Box
              className="iconBox"
                width="3rem"
                height="3rem"
backgroundColor="blue"       
         bgColor="info"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="12px"
                
              >
                <Icon backgroundColor="blue" fontSize="large">handyman</Icon>
              </Box>
                <Typography style={{fontFamily:"Roboto", fontWeight:'500',lineHeight:'29px', color:'#000', fontSize:'17px'}} variant="body2" color="text" pl={2}>
                All tools required to save time 
                 including<br/> document management system to generate administrative documents              </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
                <Box
                className="iconBox"
                  width="3rem"
                  height="3rem"
backgroundColor="blue"       
           bgColor="info"
                  color="white"
                  coloredShadow="info"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="12px"
                  
                >
                  <Icon backgroundColor="blue" fontSize="large">email</Icon>
                </Box>
                <Typography style={{fontFamily:"Roboto",marginLeft:'2px', fontWeight:'500',lineHeight:'29px', color:'#000', fontSize:'17px'}} variant="body2" color="text" pl={2}>
                your team will 
                  manage the software and we take care<br/> of informing customers. 
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" p={2}>
              <Box
              className="iconBox"
                width="3rem"
                height="3rem"
backgroundColor="blue"       
         bgColor="info"
                color="white"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="12px"
                
              >
                <Icon backgroundColor="blue" fontSize="large">security</Icon>
              </Box>
              <Typography style={{fontFamily:"Roboto", fontWeight:'500',lineHeight:'29px', color:'#000', fontSize:'17px'}} variant="body2" color="text" pl={2}>
              Secured end-to-end solution including private database<br/>authentication process, electronic signature
              </Typography>
            </Box>
              
            </Stack>
          </Grid>
        </Grid>
      </Container>
      </Box>
  )
            }
      export default FeaturesOne;
