import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import axios from 'axios'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import logo from '../../../assets/logo.svg'
import { Button } from '@mui/material';
import { Link} from "react-router-dom";
import proo from '../../../assets/proo.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';





const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 2,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
        await axios.get('localhost://5000/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/login";
    } catch (err) {
        window.location.href = "/login";
    }
}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='appbar'
sx={{flexGrow:0 ,left:0}}
      style={{backgroundColor:'#5D8C8E',display:'flex',flexDirection:'row', minHeight:'4.5rem'}}
      position="fixed" open={open} >
        <Toolbar sx={{display:'flex',justifyContent:'flex-start'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            
            sx={{
              justifyContent:'flex-start',
              marginRight: 3,
              ...(open && { display: 'none' }),
            }}
          >
            <DoubleArrowIcon />
          </IconButton>
     
           <Typography
            variant="h6"
            color="white"
            fontFamily="bold"
            fontSize="24"
            noWrap
            component="div"
            sx={{
              display: {
                xs: 'inline-flex',
                
              }
            }}>
            FIND IT
          </Typography>
        </Toolbar>
        <Box sx={{ flexGrow: 0,marginRight:'3rem',display:'flex', flexDirection:'row' }}>
      
 
        
        <Typography className='username'>USER NAME</Typography>
      </Box>
      </AppBar>
      <Drawer variant="permanent" open={open}  >
        <DrawerHeader>
        <img style={{display:'flex',justifyContent:'center',width:'100%',marginLeft:'3rem'}} src={logo} alt='logo'/>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>

        </DrawerHeader>
       
        
<List style={{marginTop:'2rem'}}>
<ListItemButton
        
sx={{

  minHeight: 48,
          justifyContent: open ? 'center' : 'auto',
          px: 2.5,
  
}}
>
<Link to ='./Addobject'  >
<ListItemIcon
title="Add object"
sx={{
minWidth: 0,
mr: open ? 5 : '2',
justifyContent: 'center',
}}
>
     <AddCircleOutlineIcon label='add object' style={{color:'#008080'}} /> 
     <ListItemText   sx={{ opacity: open ? 1 : 0 }} > 
     <h6 style={{color:"##DCE2C8",marginLeft:'5px'}}>Add Item</h6></ListItemText>
  </ListItemIcon></Link>
  <ListItemText />
</ListItemButton> 

</List>
<Divider />
     
        <List style={{marginTop:'1rem'}}>
       
        <ListItemButton
        title="Home"
        sx={{
          minHeight: 48,
          justifyContent: open ? 'center' : 'auto',
          px: 2.5,
        }}
      >
      <Link to ='./LastItem'  >
      <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 5 : '2',
        justifyContent: 'center',
      }}
    >
             <HomeOutlinedIcon /> 
             <ListItemText  sx={{ opacity: open ? 1 : 0 }} > 
             <h6 style={{color:"##DCE2C8",marginLeft:'5px'}}>Home</h6></ListItemText>
          </ListItemIcon></Link>
          <ListItemText />
        </ListItemButton>
        <br/>
        <ListItemButton
        title="List of items"
        sx={{
          minHeight: 48,
          justifyContent: open ? 'center' : 'auto',
          px: 2.5,
        }}
      >
      <Link to ='./Myitems'  >
      <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 5 : '2',
        justifyContent: 'center',
      }}
    >
             <MenuIcon /> 
             <ListItemText  sx={{ opacity: open ? 1 : 0 }} > 
             <h6 style={{color:"##DCE2C8",marginLeft:'5px'}}>My Items</h6></ListItemText>
          </ListItemIcon></Link>
          <ListItemText />
        </ListItemButton>
        <br/>
        <ListItemButton
        title="Matches"
        sx={{
          minHeight: 48,
          justifyContent: open ? 'center' : 'auto',
          px: 2.5,
        }}
      >
      <Link to ='./Addobject'  >
      <ListItemIcon
      sx={{
        minWidth: 0,
        mr: open ? 5 : '2',
        justifyContent: 'center',
      }}
    >
             <ElectricBoltOutlinedIcon /> 
             <ListItemText  sx={{ opacity: open ? 1 : 0 }} > 
             <h6 style={{color:"##DCE2C8",marginLeft:'5px'}}>Matchs in progress</h6></ListItemText>
          </ListItemIcon></Link>
          <ListItemText />
        </ListItemButton>
        
      
    </List>
    <Divider sx={{ borderColor: '#2D3748' }} />
    <br/>  
   
           
              <Box
              sx={{
                
                mr: open ? 5 : '0',
               
              }}
              >
          
               
                <Typography
               
                  sx={{ opacity: open ? 1 : 0, fontSize:'20px', fontFamily:'extraBold',justifyContent:'center',marginLeft:'5px' }}
             
                  color="black"
                  variant="h6"
                >
                  Check out our Pro solution.
                </Typography> 
              
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mx: 'auto',
                  
                  }}
                > <Link
                to ='./Dashboard/Home'
              >
              <div  style={{marginRight: open ? 0 : '1rem'}}>
                  <img
                  style={{width:'7rem',marginRight: open ? 0 : '1rem'}}
                    alt="Go to pro"
                    src={proo}
                  />
                  </div>
                 </Link>
                </Box>
                <br/>
                <div style={{display:'flex',justifyContent:'center'}}>
                <Link
                  to ='./Dashboard/Home'
                >
                <Button
                sx={{ opacity: open ? 1 : 0 }}
                type='submit'
                style={{backgroundColor:'#008080', width:'10rem',marginLeft:'1.5rem'}}
                className=' tracking-wide font-semibold  text-gray-100 W-full py-2 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center  focus:shadow-outline focus:outline-none'
              >
                
                <span className=' text-white'>Get pro now!</span>
              </Button>
                </Link>
                </div>
              </Box>
           
       <br/>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
   
      </Box>
      <p></p>
    </Box>
  );
}