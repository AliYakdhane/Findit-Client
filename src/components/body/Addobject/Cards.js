import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React , {useState} from 'react'
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import devices0 from "../../../assets/devices0.gif";


function Cards() {
    const [cards, setCard] = useState([{
        id : '1',
        name : 'pino',
        image : devices0,
        selected : false
    },
    {
        id : '2',
        name : 'pino',
        image : devices0,
        selected : false
    },
    {
        id : '3',
        name : 'pino',
        image : devices0,
        selected : false
    },
    {
        id : '4',
        name : 'pino',
        image : devices0,
        selected : false
    },
    {
        id : '5',
        name : 'pino',
        image : devices0,
        selected : false
    },
{
        id : '6',
        name : 'pino',
        image : devices0,
        selected : false
    }])
    const changeCard = (id) =>{
        const tempArray = [...cards]
        tempArray.forEach((ele)=>{
            ele.selected = false
        })
        const Index = tempArray.findIndex((ele)=>{
            return ele.id === id
        })
        tempArray[Index].selected = true
        setCard(tempArray)
    }
  return (
    <div>
    {
        cards.map((ele)=>{
            return (
                
                <Card key={ele.id}
                onClick={()=>{changeCard(ele.id)}}
                sx=
                {{
                  margin:'1rem',
                  backgroundColor:'white',
                 alignItems:'center',
                  justifyContent:'center',
                  display: "inline-block",
                  width: "10%",
                  borderRadius:'1.5rem',
                  border:  ele.selected  ?  "1px solid #00AEAD"  : "none",
                  minWidth: 200,
                  position: 'relative',
                  boxShadow: '0 8px 10px 0 rgba(0,0,0,0.12)',
                  overflow: 'visible',
                  transition: '0.4s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    '& $shadow': {
                      bottom: '-1.5rem',
                    },
                    '& $shadow2': {
                      bottom: '-2.5rem',
                    },
                  },
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    zIndex: 0,
                    display: 'block',
                    width: '100%',
                    bottom: -1,
                    height: '100%',
                    borderRadius: '1.5rem',
                    backgroundColor: 'rgba(0,0,0,0.08)',
                  }
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
                    style={{ display: "flex", justifyContent: "center",backgroundColor:'white' }}
                  >
                    <Typography className="font-mono" variant="h6">
                      {ele.name}
                    </Typography>
                  </CardContent>
                </Box>
            
                <CardMedia
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "30rem",
                    borderRadius:'1.5rem'
                  }}
                  component="img"
                  icon={<ArrowCircleRightOutlinedIcon />}
                  image={ele.image}
                  alt="electronics"
                />
              </Card>
            )
        })
    }
    </div>
  )
}

export default Cards

/*

    <Card
    style={{
      display: "inline-block",
      width: "20%",
      marginLeft: "28px",
      border: "1px solid #00AEAD",
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

*/