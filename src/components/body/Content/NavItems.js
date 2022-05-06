import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import axios from 'axios'
import {  FaChevronDown } from "react-icons/fa";
import  './Navitems.css'
import icons8 from '../../../assets/icons88.png'
import icons32 from '../../../assets/icons32.png'
import icons12 from '../../../assets/icons12.png'
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Icon, Menu, MenuItem } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

import './gopro'


const useStyles = makeStyles(({ spacing }) => ({
  card: {
    marginTop: 40,
    borderRadius: spacing(0.5),
    transition: '0.3s',
    width: '90%',
    overflow: 'initial',
    background: '#ffffff',
  },
  content: {
    paddingTop: 0,
    textAlign: 'left',
    overflowX: 'auto',
    '& table': {
      marginBottom: 0,
    }
  },
}));

const drawerWidth = 220;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = async () => {
    try {
        await axios.get('http://localhost:5000/user/logout')
        localStorage.removeItem('firstLogin')
        window.location.href = "/login";
    } catch (err) {
        window.location.href = "/login";
    }
}
const cardHeaderStyles = useContainedCardHeaderStyles();
const cardHeaderShadowStyles = useFadedShadowStyles();
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
           <Link to ='/lastitem'>
                 <Typography
               
                  sx={{
                    display: {
                      xs: 'inline-flex',
                      textDecoration:'none',
                      fontFamily:'BigJohonPro',
                      fontWeight:'700',
                      fontSize:'27px',
                      lineHeight:'78px',
                      color:'#fff'
                      
                    }
                  }}>
                  FIND IT
                </Typography></Link>
              </Toolbar>
              <Box sx={{ flexGrow: 0,marginRight:'3rem',display:'flex', flexDirection:'row' }}>
            
              
              <NotificationsOutlinedIcon style={{width:'30px',height:'30px',maringBottom:'0.6rem'}}/>
           
              <Avatar sx={{ bgcolor: 'primary' }} style={{width:'30px',height:'30px'}} label='A' />
              <p className="profileName">Ali Yakdhane</p>
              <i className="menuChevron" id="menuChevron">
                <FaChevronDown onClick={handleOpenUserMenu}/>
                <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                 <Link to ='/account'>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem></Link>
                  <Link to ='/login'  onClick={handleLogout}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Log out</Typography>
                  </MenuItem></Link>
               
              </Menu> </i>            </Box>
            </AppBar>
      <Drawer
        sx={{
         
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
             backgroundColor:'#E8F1F2',
             border:'1px solid #cacaca'
          },
        }}
       
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader><br/>
        <Typography style={{fontFamily:'Roboto',fontWeight:'700',fontSize:'19px',lineHeight:'26px',color:'#344767',paddingLeft:'1rem'}}>
Menu          </Typography>
<br/>

        <List sx={{marginRight:'2px'}}>
         
           
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
            justifyContent: 'center',
            }}
            >
            <Box
            width="1.9rem"
            height="1.9rem"
            backgroundColor='white'
            color="gray"
            coloredShadow="info"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="6px"
           
            
          >
            <Icon backgroundColor="white" fontSize="medium">              <img src={icons12} alt='thunder' /> 
            </Icon>
          </Box>
                 <ListItemText    > 
                 <h6 style={{fontFamily:'Roboto',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginLeft:'5px',color:'#67748e'}}>Add Item</h6></ListItemText>
              </ListItemIcon></Link>
              <ListItemText />
            </ListItemButton> 
            
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
    >  <Box
    width="1.9rem"
    height="1.9rem"
    backgroundColor='white'
    color='gray'
    coloredShadow="info"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="6px"
    
  >
    <Icon backgroundColor="white" fontSize="medium">  <img src={icons32} alt='home' /> </Icon>
  </Box>
             
             <ListItemText  sx={{ opacity: open ? 1 : 0 }} > 
             <h6 style={{fontFamily:'Roboto',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginLeft:'5px',color:'#67748e'}}>Home</h6></ListItemText>
          </ListItemIcon></Link>
          <ListItemText />
        </ListItemButton>

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
    <Box
    width="1.9rem"
    height="1.9rem"
    backgroundColor='white'
    color="gray"
    coloredShadow="info"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="6px"
    
  >
    <Icon backgroundColor="white" fontSize="medium"> menu </Icon>
  </Box>
            
             <ListItemText  sx={{ opacity: open ? 1 : 0 }} > 
             <h6  style={{fontFamily:'Roboto',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginLeft:'5px',color:'#67748e'}}>My Items</h6></ListItemText>
          </ListItemIcon></Link>
          <ListItemText />
        </ListItemButton>
        
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
       marginLeft: -1,
        justifyContent: 'center',
      }}
    >
    <Box
    width="1.9rem"
    height="1.9rem"
    backgroundColor='white'
    color="gray"
    coloredShadow="info"
    display="flex"
    alignItems="center"
    justifyContent="center"
    borderRadius="6px"
    marginLeft='7px'
    
  >
    <Icon backgroundColor="white" fontSize="medium">              <img src={icons8} alt='thunder' /> 
    </Icon>
  </Box>
             <ListItemText  sx={{ opacity: open ? 1 : 0 }} > 
             <h6 style={{fontFamily:'Roboto',fontWeight:'400',fontSize:'16px',lineHeight:'22px',marginLeft:'5px',whiteSpace:'nowrap',color:'#67748e'}}>Matchs in progress</h6></ListItemText>
          </ListItemIcon></Link>
          <ListItemText />
        </ListItemButton>
            
          
        </List>
       <Link to ='/dashboard/home'> 
      <CardHeader
      style={{marginTop:'12rem',cursor:'pointer',backgroundColor:'#008080'}}
      className={cardHeaderShadowStyles.root}
      classes={cardHeaderStyles}
      title={'Pro Solution'}
      subheader={'Upgrade to pro now!'}
    />
        </Link>
    
   </Drawer>
      <Main open={open}>
        <DrawerHeader />
     
      </Main>
    </Box>
  );
}
