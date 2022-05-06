import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
// import logofi from '../assets/logofi.png'
 // import Signup from "../Pages/Auth/Signup";
import "./navbar.css";
const pages = ["Home", "About us", "Contact", "Register", "Login"];
const settings = [""];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      className="navbare"
      style={{ backgroundColor: "#fff",backgroundColor:'transparent' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            color="black"
            fontFamily="bold"
            fontSize="24"
            noWrap
            component="div"
            sx={{ display: { xs: "none", md: "flex" } }}
          ><h3 style={{color:'#fff'}}>FIND IT</h3>
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
           
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{color:'white'}}
            >
              <MenuIcon className="iconmenu"  />
            </IconButton>
            <Menu
            className="menuitem"
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "2", md: "none", color: "black" },
              }}
            >
              <MenuItem             className="menuitem"
              onClick={handleCloseNavMenu}>
              <Typography
              className="navbaritemmenu" 
         >
         HOME
         </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  className="navbaritemmenu"
                  
                >
                  ABOUT US
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  className="navbaritemmenu"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  CONTACT
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography
              className="navbaritemmenu" 
         >
         REGISTER
         </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
              <Typography
              className="navbaritemmenu" 
         >
         LOGIN
         </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            color="black"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            FIND IT
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
              <Typography
                 className="navbaritem" 
            >
            HOME
            </Typography>
              </Button>
            </Link>
            <Link to="/Aboutus" style={{ textDecoration: "none" }}>
              <Button
                className="linke"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
              <Typography
              className="navbaritem" 
              >
            About us
            </Typography>
              </Button>
            </Link>
            <Link to="/Contact" style={{ textDecoration: "none" }}>
              <Button
                className="linke"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
              <Typography
              className="navbaritem"  
              >
            Contact
            </Typography>
              </Button>
            </Link>
           
              <Button
              a
              href="/register"
                className="linke"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
              <Typography
                  
              className="navbaritem" 
            >
            Register
            </Typography>
              </Button>
         
              <Button
              a
              href="/login"
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
              <Typography
              className="navbaritem" 
            >
            lOGIN
            </Typography>
              </Button>
         
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
            className="Button"
              a
              href="/infoPro"
              style={{
                borderRadius: 12,
                backgroundColor: "#5D8C8E",
                width:'8.5rem',
                height:'2.8rem',
                fontSize: "16px",
                lineHeight:'19px',
                fontFamily:'Roboto',
                fontWeight:'600',
                margin:'auto'
              }}
              variant="button"
              sx={{ p: 0 }}
            >
              Offre pro
            </Button>

            <Menu
              sx={{ mr: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
