
import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Styled from "./Header.module.scss"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import HerbfyLogo from "../../../assets/imgs/leave.png"
import styles from './Header.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
//navigations
import { headerNavigations } from '../../../constants/constants';
import { styled, alpha } from '@mui/material/styles';


// export const headerNavigations = [
//   {
//     key: 1,
//     name: 'Home',
//     path: '/',
//     selected: true,
//   },
//   { key: 2, name: 'About Us', path: '/about', selected: false },
//   { key: 3, name: 'Store', path: '/store', selected: false },
  
// ];


const Search = styled('div')(({ theme }) => ({

  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
 color:"Black",

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

 

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


  return (
    <Box>
      <Box className={Styled.box}>
        <Typography className={Styled.boxText} > Get Your Herbales </Typography>
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
              color="red"
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
              // onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}

            >
              {navigations.map((nav) => (
                <MenuItem key={nav.key} onClick={() => onNavClick(nav.path)}>
                  <Typography textAlign="center">{nav.name}</Typography>
                </MenuItem>
              ))}
          <MenuItem>
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
            {navigations.map((nav) => (
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




       
          <Box className={styles.hederRightBOX} >

            <Box className={styles.serchbox}>
            <Search>
            <SearchIconWrapper>
              <SearchIcon   color="success"  />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            </Box>
<Box><IconButton size="large" aria-label="show 4 new mails" color="disabled">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton></Box>
          

          </Box>

    
        


        
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
}
export default ResponsiveAppBar;