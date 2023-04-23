
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Styles from "./Footer.module.scss"
import webLogo from "../../../assets/imgs/leave.png";
import { useNavigate } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Case Studies", path: "/casestudies" },
  { label: "Careers", path: "/careers" },
  { label: "Contact Us", path: "/contactus" },
];

const Footer = () => {


 

  return (
    <Box className={Styles.footer}>

      <Grid className={Styles.conatiner} container rowSpacing={1} columnSpacing={{ xs: 1,  }}>
        <Grid className={Styles.footercol1}>
          <Box className={Styles.logoBox}>
          <img src={webLogo}  className={Styles.logo} alt="webLogo" />
          <Typography
           className={Styles.logoText1}
          variant="h2"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
             display: { xs: 'block', md: 'block' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
           
            textDecoration: 'none',
          }}
        >
          Herbify
        </Typography>
          </Box>
         
          
          <Typography className={Styles.col1text1}>
            Contact us for more details
          </Typography>
          <Box className={Styles.formgroup}>
            
            <TextField className={Styles.texteFeild}  id="footerform"  />
            <Button className={Styles.buttongo} variant="contained">
              Go{" "}
            </Button>
          </Box>
        </Grid>
        <Grid className={Styles.footercol2}>

          <Grid className={Styles.footercol2inside}>  
            <h4>Our Services</h4>
          <List  className={Styles.serviceLIst1}>
            <Typography>Product Engineering</Typography>
            <Typography>Software Development</Typography>
            <Typography>Quality Engineering & Assurance</Typography>
            <Typography>UI/UX Design</Typography>
            <Typography>Data Analytics</Typography>
            <Typography>Application Services</Typography>
          </List>
        </Grid>
        <Grid className={Styles.footercol2inside2}>
        <h4>Quick Links</h4>
          <List className={Styles.serviceLIst1}>
            <Typography>Digital Transformation</Typography>
            <Typography>Internet of Things</Typography>
            <Typography>Mobile Applications</Typography>
            <Typography>Business Consulting</Typography>
            <Typography>Enterprise Resource Planning</Typography>
            <Typography>Service for Telco Industry</Typography>
          </List>
        </Grid></Grid>
         
        <Grid className="footer-col4">
          <h4>Quick Links</h4>
          <List className={Styles.serviceLIst}>
            <Typography>
              <Link  underline="hover" className={Styles.linklist} href="/">Home</Link>
            </Typography>
            <Typography>
              <Link   underline="hover"className={Styles.linklist} href="/about">About Us</Link>
            </Typography>
            
            <Typography>
              <Link  underline="hover" className={Styles.linklist} href="/services">Services</Link>
            </Typography>
            
            <Typography>
              <Link underline="hover" className={Styles.linklist} href="/casestudies">Case Studies</Link>
            </Typography>
            
            <Typography>
              <Link  underline="hover" className={Styles.linklist} href="/careers">Careers</Link>
            </Typography>
            
            <Typography>
              <Link  underline="hover" className={Styles.linklist} href="/contactus">Contact Us</Link>
            </Typography>
            
            
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;