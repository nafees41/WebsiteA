import React from "react";
import { Box, Divider,Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import Logo from "../../Components/images/logo.png";
import Reviewscomp from "../Reviews/Saction";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Chat from '../images/chat.png'


const Footer = () => {
  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can change this to 'auto' for an instant scroll
    });
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Grid container sx={{ marginTop: "40px" }}>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <img src={Logo} style={{width:'20%'}} />
          <Typography
            variant="subtitle1"
            sx={{
              color: "#7F7F7F",
              fontFamily: ["Poppins", "sans-serif"],
              fontWeight: "400",
              lineHeight: { md: "21.59px", sm: "18px", xs: "15px" },
              fontSize: { md: "17px", sm: "12px", xs: "10px" },
            }}>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex <br /> ea commodo con exercitation ullamco
            laboris nisi ut aliquip ex ea commodo con
          </Typography>
        </Grid>
        <Grid item md={11} sm={10} xs={12} sx={{ margin: "auto" }}>
          <Grid container sx={{ marginTop: "20px" }}>
            <Grid item md={8} sm={4} xs={12}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  fontFamily: ["Poppins", "sans-serif"],
                  fontWeight: "600",
                  lineHeight: { md: "50.5px", sm: "18px", xs: "20px" },
                  fontSize: { md: "22px", sm: "12px", xs: "22px" },
                }}
              >
                Get Expert Tips In Your Inbox
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  fontFamily: ["Poppins", "sans-serif"],
                  fontWeight: "400",
                  fontSize: { md: "12px", sm: "12px", xs: "15px" },
                }}
              >
                Get Expert Tips In Your Inbox
              </Typography>
            </Grid>
            <Grid item md={4} sm={8} xs={12}>
              <Paper
                component="form"
                sx={{
                  p: 0,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 7,
                  boxShadow:'0px 0px 0px 0px',
                  border:'2px solid #D9D9D9',

                }}
              >
                <TextField
                  id="search"
                  variant="outlined"
                  placeholder="Enter Your Mail"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    marginLeft: "auto",
                  }}
                />

                <Button
                  type="submit"
                  sx={{
                    color: "#fff",
                    background: "#F7941D",
                    paddingX: "34px",
                    paddingY: "16px",
                    borderRadius: {md:7,sm:10,xs:20},
                    "&:hover": {
                      background: "#F7941D",
                    },
                    "&:focus": {
                      outline: 0,
                      boxShadow: "none",
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Paper>
            </Grid>

            <Grid container sx={{ marginTop: "30px" }}>
              <Grid md={2} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                    fontSize: { md: "25px", sm: "12px", xs: "10px" },
                    color: "#F7941D",
                    paddingBottom:'10px'
                  }}
                >
                  Social
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  <Box sx={{ display: "flex", alignItems: "center" ,color:'#7F7F7F',paddingBottom:'10px'}}>
                    <InstagramIcon sx={{color:'#7F7F7F'}} />
                    <span>Instagram</span>
                  </Box>
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  <Box sx={{ display: "flex", alignItems: "center" ,paddingBottom:'10px'}}>
                    <FacebookIcon sx={{color:'#7F7F7F'}} />
                    <span>Facebook</span>
                  </Box>
              
                </Typography>

           
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
               
                <Box sx={{ display: "flex", alignItems: "center",paddingBottom:'10px' }}>
                    < TwitterIcon sx={{color:'#7F7F7F'}} />
                    <span>Twitter</span>
                  </Box>
                </Typography>
                <Typography variant="subtitle1">
                <Box sx={{ display: "flex", alignItems: "center",paddingBottom:'10px' }}>
                    <  YouTubeIcon sx={{color:'#7F7F7F'}} />
                    <span>YouTube</span>
                  </Box>
                 
                
                  </Typography>
              </Grid>
              <Grid md={2} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                    fontSize: { md: "25px", sm: "12px", xs: "10px" },
                    color: "#F7941D",
                    paddingBottom:'10px'
                  }}
                >
                  Contact
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Leadership
                </Typography>
                <Typography variant="subtitle1">Investor Relations</Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Careers
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Contact Us
                </Typography>
              </Grid>
              <Grid md={3} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                    fontSize: { md: "25px", sm: "12px", xs: "10px" },
                    color: "#F7941D",
                    paddingBottom:'10px'
                  }}
                >
                  Contact
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Privacy policy update
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Terms & conditions
                </Typography>
                <Typography variant="subtitle1">
                  Privacy policy update
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Terms & conditions
                </Typography>
              </Grid>
              <Grid md={3} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                    fontSize: { md: "25px", sm: "12px", xs: "10px" },
                    color: "#F7941D",
                    paddingBottom:'10px'
                  }}
                >
                  Our Information
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Privacy policy update
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Terms & conditions
                </Typography>
                <Typography variant="subtitle1">
                  Privacy policy update
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Terms & conditions
                </Typography>
              </Grid>
              <Grid md={2} sm={4} xs={6}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "black",
                    fontWeight: "600",
                    lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                    fontSize: { md: "25px", sm: "12px", xs: "10px" },
                    color: "#F7941D",
                    paddingBottom:'10px'
                  }}
                >
                  Top Categories
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  About Us
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Leadership
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Investor Relations
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Careers
                </Typography>

                <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                  Contact Us
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Divider/>
            <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              sx={{
                color: "black",
                fontWeight: "300",
                lineHeight: { md: "22px", sm: "18px", xs: "15px" },
                fontSize: { md: "15px", sm: "12px", xs: "10px" },
                textAlign: "center",
                padding:'10px'
              }}
            >
     Copyright © 2023 We Have and You HaveAll rights reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <InputAdornment
        position="end"
        sx={{
          position: {md:"fixed",sm:'absolute',xs:'absolute'},
          bottom: { lg: "100px", sm: "530px", xs: "800px" },
          right: { md: "35px", sm: "25px", xs: "-25px" },

          zIndex: 1,
        }}>
        <IconButton
          type="button"
         onClick={scrollToTop}>
          < img src={Chat}  />
        </IconButton>
      </InputAdornment>
    </Box>
  );
};

export default Footer;
