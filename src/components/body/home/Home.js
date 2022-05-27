import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'
import imgcover from '../../../assets/bg-presentation.jpg'
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CountUp from "react-countup";
import Divider from "@mui/material/Divider";
import Navbar from '../Navbar/Navbar'
import Form from '../contactForm/Form'
import idea from '../../../assets/idea.svg'
import Information from '../Infocard/Details'
function Home() {
  return (
    <>
    
    <Box 
    minHeight="75vh"
    width="100%"
    sx={{ 
      backgroundImage: `url(${imgcover})`,
      backgroundSize: "cover",
      backgroundPosition: "top",
      display: "grid",
      placeItems: "center",
    }}
    >
    <Navbar/>
    <Container style={{marginBottom:'6rem'}}>
    <Grid  container item xs={12} lg={9} justifyContent="center" mx="auto">
    <Typography
    style={{fontFamily:"BigJohnPRO", fontWeight:'700',lineHeight:'70px', fontSize:'48px',marginBottom:'20px'}}
    variant="h3"
    color="white"
    textAlign="center"
    mt={0}
    mb={5}
    >
    Lost or found something?
    <br />
    Let us help you{" "}
    </Typography>
    <Typography
    variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}>
              A new service that transforms a stressful experience for your customers into a source of pleasure and loyalty to your brand
    </Typography>
    <br/>
    <br/>
    <div style={{margin:'1rem'}}>
    <Button
    className="Button"
      a
      href="/infoPro"
      style={{
        borderRadius: 12,
        backgroundColor: "#5D8C8E",
        color:'#fff',
        width:'8.5rem',
        height:'2.8rem',
        fontSize: "16px",
        lineHeight:'19px',
        fontFamily:'Roboto',
        fontWeight:'600',
        marginRight:'2px'
      }}
      variant="button"
      sx={{ p: 0 }}
    >
I have lost    </Button>
    <Button
    className="Button"
      a
      href="/infoPro"
      style={{
        borderRadius: 12,
        backgroundColor: "#5D8C8E",
        width:'8.5rem',
        color:'#fff',
        height:'2.8rem',
        fontSize: "16px",
        lineHeight:'19px',
        fontFamily:'Roboto',
        fontWeight:'600',
        marginLeft:'2px'

      }}
      variant="button"
      sx={{ p: 0 }}
    >
I have found    </Button></div>
    </Grid>
    </Container>
    </Box>
    <Card
    sx={{
      boxShadow: 10,
      borderRadius:6,
      p: 2,
      mx: { xs: 1, lg: 4 },
      mt: -8,
      
    }}>

    <Box  component="section" py={3}>
    <Container>    
        <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
     
        
       
          <Grid item xs={12} md={4}>
          <Box p={2} textAlign="center" lineHeight={1}>
          <Typography style={{ color: "#008080" }} variant="h1">
          <CountUp end={1} duration={1}  />
          </Typography>
          <Typography style={{fontFamily:"BigJohnPRO", fontWeight:'700',lineHeight:'28px', color:'#344767', fontSize:'25px'}}  mt={2} mb={1}>
          Report a lost or found item
          </Typography> 
          <Typography style={{fontFamily:"Roboto", fontWeight:'300',lineHeight:'26px', color:'#7b809a', fontSize:'16px'}} variant="body2" color="text">
          Fill the declaration and give as much detail as possible (the location of loss, the type of item, the description) to help the algorithm to identify it quickly
          </Typography> 
          </Box>
          </Grid>
      
          <Grid item xs={12} md={4} display="flex">
          <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />

          <Box p={2} textAlign="center" lineHeight={1}>
          <Typography style={{ color: "#008080" }} variant="h1">
          <CountUp end={2} duration={1}  />
          </Typography>
          <Typography style={{fontFamily:"BigJohnPRO", fontWeight:'700',lineHeight:'28px', color:'#344767', fontSize:'25px'}}  mt={2} mb={1}>
          Prove ownership of the item
          </Typography> 
          <Typography style={{fontFamily:"Roboto", fontWeight:'300',lineHeight:'26px', color:'#7b809a', fontSize:'16px'}} variant="body2" color="text">
          Once the lost item "matched", prove who you are thanks to a security question (ex: describe the shell of your phone, ...). Then, our partner who found this item will be able to validate that this is yours          </Typography> 
          </Box> <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
          </Grid> 
          <Grid item xs={12} md={4} display="flex">
         

          <Box p={2} textAlign="center" lineHeight={1}>
          <Typography style={{ color: "#008080" }} variant="h1">
          <CountUp end={3} duration={1}  />
          </Typography>
          <Typography style={{fontFamily:"BigJohnPRO", fontWeight:'700',lineHeight:'28px', color:'#344767', fontSize:'25px'}}  mt={2} mb={1}>
          Get it back for the owner!
          </Typography> 
          <Typography style={{fontFamily:"Roboto", fontWeight:'300',lineHeight:'26px', color:'#7b809a', fontSize:'16px'}} variant="body2" color="text">
          As soon as you are authenticated, you receive the information to pick it up or have it delivered. Remember to communicate the reference's number found          </Typography> 
          </Box>
          </Grid>
          </Grid>
          </Container>
          <br/>
          <br/>
          <Grid container justifyContent="center" >
          <Paper
          sx={{
            border:'1px solid #ddd',
            borderRadius:2,
            boxShadow: 2,
            minHeight: 150,
            width: 800,
                  }}  >
        <Box sx={{p:0}} display='flex'  >
        <img src={idea} style={{maxWidth:'8rem',minHeight:'1rem'}} alt='Nb'/>
        <div style={{display:'flex',alignSelf:'center',flexDirection:'column',margin:'2px'}}>
        <Typography style={{fontFamily:'BigJohnPro',fontWeight:'700',fontSize:'25px',linHeight:'33px',color:'#344767'}}>You should know!</Typography>
        <Typography style={{fontFamily:'Roboto',fontWeight:'400',fontSize:'18px',linHeight:'29px',color:'#7b809a'}}>If you add a photo to your report, you increase by more than 50% your chances of finding your lost item</Typography></div></Box>
        </Paper>
          </Grid>
    </Box>
   <br/> 
    
<br/>
    <Information/>
 <Form />
    </Card> 
    </>
  );
}

export default Home;