import { Box, Container, Grid, Typography,Button } from "@mui/material";
import React from "react";
import thunderr from "../../../assets/thunderr.png";
import premcard from "../../../assets/premcard.png";

function InfoCard() {
  return (
    <Box component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <Typography
            style={{
              fontFamily: "RobotoSlab",
              fontWeight: "700",
              fontSize: "36px",
              lineHeight: "47px",
              color: "#344767",
            }}
          >
            Why Choosing Find it!
          </Typography>
        </Grid>
      </Container>
      <br/>
      <br/>
      <br />
      <br />
      <Container>
        <Grid mt={1} container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Box
              style={{
                backgroundImage: `linear-gradient(to right, #008080, #e4e5e6 150%)`,
              }}
              className="boxinfo"
              display={{
                xs: "block",
                md: "flex",
                minHeight: 438,
                maxWidth: 300,
              }}
              borderRadius="12px"
              mt={-3}
              pt={3.5}
              pb={3}
              px={3}
            >
              <Typography display="block" variant="h3" mt={-0.625}></Typography>
              <Box pt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }} lineHeight={1}>
                <Typography
                  style={{
                    fontFamily: "RobotoSlab",
                    fontWeight: "700",
                    fontSize: "26px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  display="block"
                  color="white"
                  fontWeight="bold"
                  justifyContent="center"
                  mb={1}
                >
                  Discover our pro
                  <br /> offre now!
                </Typography>
                <Typography>
              <img src={premcard} alt='premium'/>
                </Typography>
                <Typography
                  target="_blank"
                  rel="noreferrer"
                  variant="body2"
                  fontWeight="regular"
                ></Typography>
                <div style={{display:'flex',justifyContent:'center',marginTop:''}}>
                <Button
                
                type="submit"
                minWidth='22rem'
                sx={{
                  backgroundColor: "#fff",
                  marginTop: "1rem",
height:'3rem',                  
                  fontSize: "16px",
                  lineHeight:'19px',
                  fontFamily:'Roboto',
                  fontWeight:'600',
                  margin:'auto'
                }}
                variant="contained"
              >
               
                <span style={{color:'#000',fontSize:'14px',lineHeight:'19px',fontFamily:'Roboto',fontWeight:'600'}} >Upgrade top pro now</span>
              </Button>   </div>           </Box> 
              
              
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
          <Box
          backgroundColor="#fff"
          className="boxinfo"
          display={{ xs: "block", border: "1px solid #008080" }}
          borderRadius="12px"
          pt={3.5}
          pb={3}
          px={3}
        >
          <Box
            display="flex"
            pt={{ xs: 2, md: 0 }}
            pl={{ xs: 0, md: 2 }}
            lineHeight={1}
            
          >
            <Typography
              style={{
                fontFamily: "RobotoSlab",
                fontWeight: "700",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
              }}
              display="block"
              color="#344767"
              fontWeight="bold"
              justifyContent="center"
            >
            PROFESSIONAL TOOLS
            </Typography>
          
          </Box>
          <br/>
          <Typography
          style={{fontFamily:"Roboto", fontWeight:'300',lineHeight:'23px', color:'#7b809a', fontSize:'16px'}}
            xs={5}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
          >
            Found items and owners are automatically matched by our
            algorithm
          </Typography>
        </Box>
            <Box
            backgroundColor="#fff"
            className="boxinfo"
            display={{ xs: "block", border: "1px solid #008080" }}
            borderRadius="12px"
            mt={3}
            pt={3.5}
            pb={3}
            px={3}
          >
            <Box
              display="flex"
              pt={{ xs: 2, md: 0 }}
              pl={{ xs: 0, md: 2 }}
              lineHeight={1}
              
            >
              <Typography
                style={{
                  fontFamily: "RobotoSlab",
                  fontWeight: "700",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                }}
                display="block"
                color="#344767"
                fontWeight="bold"
                justifyContent="center"
              >
              SECURITY
                            </Typography>
            
            </Box>
            <br/>
            <Typography
            style={{fontFamily:"Roboto", fontWeight:'300',lineHeight:'23px', color:'#7b809a', fontSize:'16px'}}
              xs={5}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              fontWeight="regular"
            >
              Found items and owners are automatically matched by our
              algorithm
            </Typography>
          </Box>
          </Grid>

          <Grid item xs={12} lg={3}>
          <Box
          backgroundColor="#fff"
          className="boxinfo"
          display={{ xs: "block", border: "1px solid #008080" }}
          borderRadius="12px"
          pt={3.5}
          pb={3}
          px={3}
        >
          <Box
            display="flex"
            pt={{ xs: 2, md: 0 }}
            pl={{ xs: 0, md: 2 }}
            lineHeight={1}
            
          >
            <Typography
              style={{
                fontFamily: "RobotoSlab",
                fontWeight: "700",
                fontSize: "18px",
                display: "flex",
                justifyContent: "center",
              }}
              display="block"
              color="#344767"
              fontWeight="bold"
              justifyContent="center"
            >
            AUTOMATED COMMUNICATION
            </Typography>
          
          </Box>
          <br/>
          <Typography
          style={{fontFamily:"Roboto", fontWeight:'300',lineHeight:'23px', color:'#7b809a', fontSize:'16px'}}
            xs={5}
            target="_blank"
            rel="noreferrer"
            variant="body2"
            fontWeight="regular"
          >
            Found items and owners are automatically matched by our
            algorithm
          </Typography>
        </Box>

        <Box
        backgroundColor="#fff"
        className="boxinfo"
        display={{ xs: "block", border: "1px solid #008080" }}
        borderRadius="12px"
        pt={3.5}
        pb={3}
        px={3}
        mt={3}
      >
        <Box
          display="flex"
          pt={{ xs: 2, md: 0 }}
          pl={{ xs: 0, md: 2 }}
          lineHeight={1}
          
        >
          <Typography
            style={{
              fontFamily: "RobotoSlab",
              fontWeight: "700",
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
            }}
            display="block"
            color="#344767"
            fontWeight="bold"
            justifyContent="center"
          >
            SMART MATCHING
          </Typography>
        
        </Box>
        <br/>
        <Typography
        style={{fontFamily:"Roboto", fontWeight:'300',lineHeight:'23px', color:'#7b809a', fontSize:'16px'}}
          xs={5}
          target="_blank"
          rel="noreferrer"
          variant="body2"
          fontWeight="regular"
        >
          Found items and owners are automatically matched by our
          algorithm
        </Typography>
      </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default InfoCard;
