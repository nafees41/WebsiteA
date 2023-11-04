import React from "react";
import {
  Typography,
  Box,
  InputLabel,
  TextField,
  Checkbox,
  Button,
  Grid,
  Stack,
  Divider,
} from "@mui/material";
import Header from "../../Layout/Header/Header";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Loginstyle from "../Loginscreen/Login.style";
import theme from "../../Theme/Theme";
import { CssBaseline } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import GppGoodIcon from "@mui/icons-material/GppGood";
import Useimage from "./../../images/user.png";
import Giftimage from "./../../images/Gift.png";
import Carimage from "./../../images/Car.png";
import Otpimage from "../../images/OTPimage.png";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from '@mui/material';



const Securty = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [otpValue, setOtpValue] = useState('');

  const handleOtpChange = (event) => {
    setOtpValue(event.target.value);
  };


  return (
    <ThemeProvider theme={theme}>
    <Box>
      <Grid container spacing={2} sx={{marginTop:'50px'}} >
        <Grid item md={5} sm={12} xs={12} sx={{
            margin:'auto',
          }} >
          <Card
          sx={{
            backgroundColor:'white',
            padding:'15px',
            marginX:'20px'
             }} >
              <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "600",
                lineHeight: { md: "31.12px", sm: "28px", xs: "20px" },
                fontSize: { md: "30px", sm: "30px", xs: "25px" },
                paddingX:'30px'
              }}
            >
            Enter OTP
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                lineHeight: { md: "31.12px", sm: "22px", xs: "15px" },
                fontSize: { md: "14px", sm: "18px", xs: "12px" },
                paddingX:{md:'30px',sm:'10px',xs:'5px'}

              }}
            >
              OTP has been sent to your email.
            </Typography>
              <Grid container spacing={4} sx={{margin:{md:'auto',sm:'0',xs:'0'}}}>
               
                <Grid item md={2} sm={2} xs={6} >
                <Card
      sx={{
        color: '#0a202d',
        backgroundColor: '#FDDFBB',
        textAlign: 'center',
        boxShadow: '0px 0px 0px 0px',
        paddingY: '5px',
      }}
    >
      <TextField
        id="otp-input"
        value={otpValue}
        onChange={handleOtpChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />
    </Card>
     </Grid>
                <Grid item md={2} sm={2} xs={6}>
                <Card
      sx={{
        color: '#0a202d',
        backgroundColor: '#FDDFBB',
        textAlign: 'center',
        boxShadow: '0px 0px 0px 0px',
        paddingY: '5px',
      }}
    >
      <TextField
        id="otp-input"
        value={otpValue}
        onChange={handleOtpChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />
    </Card>
                </Grid>
                <Grid item md={2} sm={2} xs={6} >
                <Card
      sx={{
        color: '#0a202d',
        backgroundColor: '#FDDFBB',
        textAlign: 'center',
        boxShadow: '0px 0px 0px 0px',
        paddingY: '5px',
      }}
    >
      <TextField
        id="otp-input"
        value={otpValue}
        onChange={handleOtpChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />
    </Card>
     </Grid>
                <Grid item md={2} sm={2} xs={6} >
                <Card
      sx={{
        color: '#0a202d',
        backgroundColor: '#FDDFBB',
        textAlign: 'center',
        boxShadow: '0px 0px 0px 0px',
        paddingY: '5px',
      }}
    >
      <TextField
        id="otp-input"
        value={otpValue}
        onChange={handleOtpChange}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": { border: "none" },
        }}
      />
    </Card>
   </Grid>
              </Grid>
              <Grid container  sx={{marginTop:{md:'30px',sm:'20px',xs:'10px'}} }>
              <Grid item>
              <Stack direction={{ md: "row", xs: "column",sm: "column"}} spacing={{ xs: 1, sm: 2, md: 1 }} >
                <Typography variant="subtitle1" sx={{
                                  paddingLeft:'30px',

                   fontWeight: '400', lineHeight: { md: '19.12px', sm: '12px', xs: '10px' }, fontSize: { md: '14px', sm: '18px', xs: '10px' },
                  textAlign: 'center'
                }}>If you don’t receive code.  </Typography>
                <Link to="/login" style={{textDecoration:'none'}}><span style={{ color: '#F7941D' }}>  Resend it? </span> </Link> 
       </Stack>

              </Grid>
            </Grid>
            <br/>
          
              <Grid container spacing={spacing} >
                <Grid item md={12} sm={12} xs={12}>
                  <Link to="/profile">
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{

                        boxShadow: "0px 0px 0px 0px",
                        paddingX: "15px",
                        paddingY: { md: "10px", sm: "8px", xs: "5px" },
                        fontSize: { md: "18px", sm: "15px", xs: "15px" },
                        fontFamily: ["Poppins", "sans-serif"],
                        textTransform: "lowercase",
                        color:'white'
                      }}
                    >
                      Verify & Proceed
                    </Button>
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent={'center'}  sx={{ marginTop: { md: '40px', sm: '38px', xs: '5px' } }}>
                          <Grid item sx={{textAlign:'center'}}>
                           <Link to="/login"
                           style={{textDecoration:'none'}}
                           
                           ><span style={{color: '#F7941D'}}> Go back to login screen? </span> </Link> 
                                </Grid>
                            </Grid>
                            
       
         
                   </Card>
      
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <img src={Otpimage} style={{ width: "100%" }} />
        </Grid>
      </Grid>
  <Callsupport/>

    </Box>
    </ThemeProvider>
  );
};

export default Securty;
