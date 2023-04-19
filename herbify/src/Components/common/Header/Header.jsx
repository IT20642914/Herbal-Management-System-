
import React, { useState, useEffect, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Styled from "./Header.module.scss"
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import HerbfyLogo from "../../../assets/imgs/leave.png"
import styles from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
const pages = ['Home', 'about us', 'Store'];


export const headerNavigations = [
  {
    key: 1,
    name: 'Home',
    path: '/',
    selected: true,
  },
  { key: 2, name: 'About Us', path: '/about', selected: false },
  { key: 3, name: 'Store', path: '/store', selected: false },
  
];




const settings = ['Profile', 'Account', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
 

/////////////////
const [currentPath, setCurrentPath] = useState('/');
const navigate = useNavigate();
const [navigations, setNavigations] = useState(headerNavigations);
const location = useLocation();

useEffect(() => {

  console.log(headerNavigations)
  setCurrentPath(location.pathname);
}, [location]);



useEffect(() => {
  console.log("log details")
  const currentNavigations = headerNavigations.map((nav) => {
    if (nav.path === currentPath) {
      return {
        ...nav,
        selected: true,
      };
    }

    return {
      ...nav,
      selected: false,
    };
  });

  setNavigations(currentNavigations);
}, [currentPath]);


const onNavClick = (path: string) => {
  if (path !== 'services') {
    navigate(path);
  } else {
    // start dropdown
  }
};


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Box className={Styled.box}>
      </Box>
    <AppBar className={Styled.AppBar} position="static">
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          
          <Box  sx={{  display: { xs: 'none', md: 'flex' } }} >

          <img src={HerbfyLogo}  className={styles.logo} alt="logo" />
        
        {/* <HerbfyLogo sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/> */}
        
          </Box>
          
          <Typography
           className={styles.logoText}
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
             display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
           
            textDecoration: 'none',
          }}
        >
          Herbify
        </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {headerNavigations.map((nav) => (
                <MenuItem key={nav.key} onClick={() => onNavClick(nav.path)}>
                  <Typography textAlign="center">{nav.name}</Typography>
                </MenuItem>
              ))}
          <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
          
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
            </Menu>
            
          </Box>
          <Box  sx={{
              display: { xs: 'flex', md: 'none' },
            }}><img src={HerbfyLogo}  className={styles.logo} alt="logo" /></Box>
          
          <Typography
            className={styles.logoText}
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
            }}
          >
            Herbify
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {headerNavigations.map((nav) => (
              <Typography className={styles.navText}
                key={nav.key}
                // onClick={handleCloseNavMenu}
                  sx={{ mr: nav.key !== 6 ? 8 : 0, fontWeight: nav.selected ? 600 : 400 }}
                
                onClick={() => onNavClick(nav.path)}
              >
                {nav.name}
              </Typography>
            ))}
          </Box>

    
          <IconButton size="large" aria-label="show 4 new mails" color="disabled">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>



          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
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
    </Box>
  );
}
export default ResponsiveAppBar;