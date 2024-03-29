import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, green } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import devices0 from '../../../assets/devices0.gif'
import Container from "@mui/material/Container";
import { Grid } from '@mui/material';
import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [item, setItem] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [callback, setCallback] = useState(false);
  const handleDelete = async (id) => {
    try {
      if (localStorage.getItem('userId') !== id) {
        if (window.confirm('Are you sure you want to delete this account?')) {
          setLoading(true);
          await Axios.delete(`http://localhost:5000/user/delete/${localStorage.getItem('userId')}`);
          setLoading(false);
          setCallback(!callback);
        }
      }
    } catch (err) {
      
    }
  };
  React.useEffect(() => {
    
    Axios.get(`http://localhost:5000/object/getObject/${localStorage.getItem('userId')}`).then((res) => {
      // let aaa = Object.entries(res.data);
      // console.info(aaa);
      setItem(res.data);
    });
  }, []);

  return (
    <div>
   
      <CssBaseline />
            
        <br/>
        <Container fixed sx={{Width:300}}>
        <Card
        display='flex'
        sx={{
          display:'flex',
          flexDirectionn:'row',
          boxShadow: 10,
          borderRadius:6,
          p: 2,
          mx: { xs: 1, lg: 4 },
          
  
        }}>        
  
      <br/>
      {  item.map((val,key) => (
      <Card key={key} style={{border:'0.5px solid gray', margin:'2rem', borderRadius:'15px'}} sx={{ maxWidth: 280, minHeight:'60ch' }}> 

      <CardContent> 
      <Grid item>
      <Box
        sx={{
          backgroundColor: 'error.main',
          height: 30,
          width: 30,
          borderRadius:'50%'
        }}
      >
       <h5 style={{display:'flex',justifyContent:'center',color:'#fff'}}>{val.statut?"L":"F"}</h5>
      </Box>
    </Grid>
      <div>
      <h5 style={{textAlign:'center'}}>{val.refCategory.name}</h5>
      <br/>
        <h6 style={{textAlign:'center',color:'#a7a7a7'}}>{val.objectDate}</h6>
        <h6 style={{textAlign:'center',color:'#a7a7a7'}}>
          {val.adress}
        </h6>
        </div>
        <br/>
      </CardContent> 
      <h6 style={{textAlign:'center',color:'#a7a7a7'}}>
        Name:  {val.formInput.Name}
        </h6>
        <h6 style={{textAlign:'center',color:'#a7a7a7'}}>
        Color:  {val.formInput.Color}
        </h6>
        <h6 style={{textAlign:'center',color:'#a7a7a7'}}>
        Description:  {val.formInput.Description ? val.formInput.Description :"Empty"}
        </h6>
     <br/>
     <br/>

      <div className='flex flex-column items-center justify-center space-x-5' >
        <Link to ='Matching'>
      <button
      style={{backgroundColor:'#fff',border:'2px solid #5D8C8E'}}   
      className='w-3/4   font-bold shadow-sm  rounded-lg py-2 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline '
      >
      
      <span className=' items-center text-color-black'>Show Matching</span>
    </button></Link>
       </div>
       <br/>
       <div className='flex flex-column items-center justify-center space-x-5' >
       <button
       onClick={handleDelete}
      style={{backgroundColor:'#fff',border:'2px solid #5D8C8E'}}   
      className='w-3/4   font-bold shadow-sm  rounded-lg py-2 text-black flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline '
      >
      
      <span className=' items-center text-color-black'>Delete</span>
    </button>
      </div>
    </Card>))}
    
      </Card>
      </Container>
      </div>
  );
}