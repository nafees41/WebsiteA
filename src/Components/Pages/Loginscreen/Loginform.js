import React from "react";
import {
  Typography,
  Box,
  TextField,
  Checkbox,
  Button,
  Grid,
 
  Card
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link } from "react-router-dom";
import Loginstyle from "./Login.style";
import theme from "../../Theme/Theme";
import { CssBaseline } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from '@mui/material';


const Login = () => {
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


return (
  <ThemeProvider theme={theme}>
        <Box>
       <Grid container spacing={4} sx={Loginstyle.Maincontainer} >
        <Grid item md={6} sm={12} xs={12} sx={{
                      margin:'auto',
              marginX:{md:'0',sm:'40px',xs:'10px'}

        }} >
        <Card
          sx={{
            backgroundColor:'white',
            padding:'30px'
          }}
          >
          <Typography
            variant="subtitle1"
            
            sx={{
             
              fontFamily: ["Poppins", "sans-serif"],
              fontWeight: "600",
              lineHeight: { md: "71.12px", sm: "18px", xs: "15px" },
              fontSize: { md: "50px", sm: "30px", xs: "25px" },
            }}>
            Login
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={spacing}>
              <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  size="large"
                  label="Email Address"
                  defaultValue="Enter Email"
                  InputProps={{
                    startAdornment: (
                      <MailOutlineIcon
                        style={{
                          color: "#241468", // Adjust the color as needed
                          fontSize: 14, // Adjust the icon size as needed
                          marginRight: "8px", // Adjust the spacing as needed
                        }}
                      />
                    ),
                    style: {
                      color: "#241468",
                      fontWeight: "500",
                      fontFamily: ["Poppins", "sans-serif"],
                      fontSize: "14px",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      // Add other label text styles as needed
                    },
                  }}
                />
              </Grid>
              <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  size="large"
                  label="Email Address"
                  defaultValue="Enter Email"
                  InputProps={{
                    startAdornment: (
                      <MailOutlineIcon
                        style={{
                          color: "#241468", // Adjust the color as needed
                          fontSize: 14, // Adjust the icon size as needed
                          marginRight: "8px", // Adjust the spacing as needed
                        }}
                      />
                    ),
                    style: {
                      color: "#241468",
                      fontWeight: "500",
                      fontFamily: ["Poppins", "sans-serif"],
                      fontSize: "14px",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      fontSize: "14px",
                      // Add other label text styles as needed
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{
                paddingX: { lg: "50px", md: "40px", sm: "20px", xs: "15px" },
              }}
            >
              <Grid item xs={6}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      sx={{
                        "&.Mui-checked": {
                          color: "#9F0D7F", // Change to your desired color
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                    variant="body1"

                      sx={{
                        fontFamily: ["Poppins", "sans-serif"],
                        lineHeight: { md: "19.6px", sm: "12px", xs: "15px" },
                        fontWeight: "400",
                      }}>
                      Remember me
                    </Typography>
                  }
                />
              </Grid>
         
              <Grid  item
              xs={6}
             
                spacing={2}
                sx={{
                  marginTop: { md: "12px", sm: "10px", xs: "10px" },
                  display:'flex',
                  justifyContent:'flex-end'
             
                }} >
                 <Link
                    to="/forgotpassword"
                    style={{
                      textDecoration: "none", // Remove underline
                      color: "inherit", // Inherit color from parent (card)
                      display: "block", // Make the link a block element
                    }}
                  >
                  <Typography
                  variant="subtitle2"
                    sx={{
                      lineHeight: { md: "19.6pxpx", sm: "12px", xs: "15px" },
                      fontSize: { md: "14px", sm: "10px", xs: "10px" },

                    }}
                  >
                    Forgot password?
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <br />
            <Grid container spacing={spacing} justifyContent="center">
              <Grid item md={10} sm={12} xs={12}>
                <Link to="/Editprofile">
                  <Button
                    variant="contained"
                     type="submit"
                    color="primary"
                    fullWidth
                    sx={{
                      boxShadow: "0px 0px 0px 0px",
                      paddingX: "25px",
                      paddingY: { md: "10px", sm: "8px", xs: "5px" },
                      fontSize: { md: "18px", sm: "15px", xs: "15px" },
                      fontFamily: ["Poppins", "sans-serif"],
                      textTransform: "lowercase",
                      color:'white'
                    }}
                  >
                    Login Now
                  </Button>
                </Link>
              </Grid>
            </Grid>
            </Box>
          </Card>
        </Grid>
        <Grid item md={6} sm={12} xs={12} >
          <CssBaseline />
          <Card
          sx={{
            backgroundColor:'white',
            padding:'30px'
          }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: { md: 2, sm: 5, xs: 5 },
                fontWeight: "600",
                lineHeight: { md: "71.12px", sm: "18px", xs: "15px" },
                fontSize: { md: "40px", sm: "30px", xs: "25px" },
              }}
            >
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={spacing}>
                <Grid item md={6} xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    size="large"
                    label="First Name"
                    defaultValue="First Name"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon
                          style={{
                            color: "#241468", // Adjust the color as needed
                            fontSize: 14, // Adjust the icon size as needed
                            marginRight: "8px", // Adjust the spacing as needed
                          }}
                        />
                      ),
                      style: {
                        color: "#241468",
                        fontWeight: "500",
                        fontFamily: ["Poppins", "sans-serif"],
                        fontSize: "14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        // Add other label text styles as needed
                      },
                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    size="large"
                    label="Last Name"
                    defaultValue="Last Name"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon
                          style={{
                            color: "#241468", // Adjust the color as needed
                            fontSize: 14, // Adjust the icon size as needed
                            marginRight: "8px", // Adjust the spacing as needed
                          }}
                        />
                      ),
                      style: {
                        color: "#241468",
                        fontWeight: "500",
                        fontFamily: ["Poppins", "sans-serif"],
                        fontSize: "14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        // Add other label text styles as needed
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                spacing={spacing}
                sx={{ marginTop: { md: "1px", sm: "8px", xs: "8px" } }}
              >
                <Grid item md={12} xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    size="large"
                    label="Email Address "
                    defaultValue="Enter Email"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon
                          style={{
                            color: "#241468", // Adjust the color as needed
                            fontSize: 14, // Adjust the icon size as needed
                            marginRight: "8px", // Adjust the spacing as needed
                          }}
                        />
                      ),
                      style: {
                        color: "#241468",
                        fontWeight: "500",
                        fontFamily: ["Poppins", "sans-serif"],
                        fontSize: "14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        // Add other label text styles as needed
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={spacing}
                sx={{ marginTop: { md: "1px", sm: "8px", xs: "8px" } }}
              >
                <Grid item md={12} xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    size="large"
                    label=" Password"
                    defaultValue="Confirm Password"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon
                          style={{
                            color: "#241468", // Adjust the color as needed
                            fontSize: 14, // Adjust the icon size as needed
                            marginRight: "8px", // Adjust the spacing as needed
                          }}
                        />
                      ),
                      style: {
                        color: "#241468",
                        fontWeight: "500",
                        fontFamily: ["Poppins", "sans-serif"],
                        fontSize: "14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        // Add other label text styles as needed
                      },
                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    size="large"
                    label="Confirm Password"
                    defaultValue="Confirm Password"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon
                          style={{
                            color: "#241468", // Adjust the color as needed
                            fontSize: 14, // Adjust the icon size as needed
                            marginRight: "8px", // Adjust the spacing as needed
                          }}
                        />
                      ),
                      style: {
                        color: "#241468",
                        fontWeight: "500",
                        fontFamily: ["Poppins", "sans-serif"],
                        fontSize: "14px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "14px",
                        // Add other label text styles as needed
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="allowExtraEmails"
                      color="primary"
                      sx={{
                        "&.Mui-checked": {
                          color: "#9F0D7F", // Change to your desired color
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                     variant="body1"
                      sx={{
                        lineHeight: { md: "19.6px", sm: "12px", xs: "15px" },
                        fontWeight: "400",
                      }}
                    >
                      Remember me
                    </Typography>
                  }
                />
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: theme.white,
                  boxShadow: "0px 0px 0px 0px",
                  paddingX: "25px",
                  fontSize: { md: "18px", sm: "15px", xs: "10px" },
                  textTransform: "lowercase",
                }}
              >
                Register Me
              </Button>
            </Box>
            </Card>
        </Grid>
      </Grid>
 
   <Callsupport/>
    </Box>
    </ThemeProvider>

  );
};

export default Login;
