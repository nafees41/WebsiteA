import React from "react";
import {
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Card

} from "@mui/material";
import { Link } from "react-router-dom";
import Loginstyle from "../Loginscreen/Login.style";
import theme from "../../Theme/Theme";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from '@mui/material';
import Leftsidebar from "../../Dashboardsidebar/Sidebar";
import LockIcon from "@mui/icons-material/Lock";






const Changepassword = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };
 


  return (
    <ThemeProvider theme={theme}>
    <Box>
    <Grid
        container
        sx={{marginTop:{md: "50px", sm: "40px", xs: "20px"},paddingX:{md:'30px',sm:'20px',xs:'10px'}}}>
        <Grid
          item
          lg={3}
          md={12}
          sm={12}
          xs={11}  >
           <Leftsidebar/>
         </Grid>
        <Grid
          item
          lg={9}
          md={12}
          sm={12}
          xs={12} >
          <Grid container  sx={{
              paddingX:{md:'60px',sm:'30px',xs:'20px'}
          }} >
        <Grid item md={8} sm={10} xs={12}   >
        <Card
          sx={{
            backgroundColor:'white',
            padding:{md:'20px',sm:'40px',xs:'0px'},
            boxShadow: "0px 0px 0px 0px",
            border: "1px solid #D5D5D5",
            borderRadius:'12px'
 }}>
             <Grid container >
             <Grid item md={10} sm={12} xs={12} sx={{margin: "auto"}}>
              <Typography
            variant="subtitle1"
            sx={{
              fontWeight: "600",
              lineHeight: { md: "40.12px", sm: "50px", xs: "40px" },
              fontSize: { md: "40px", sm: "30px", xs: "20px" },
              textAlign:{md:"start",sm:"start",xs:"center"}
            }}>
            Change Password
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              lineHeight: { md: "71.12px", sm: "30px", xs: "30px" },
              textAlign:{md:"start",sm:"start",xs:"center"}

            }}>
             To Change password please input the details.
          </Typography>
                <TextField
                  required
                  fullWidth
                  type="password"
                  size="large"
                  label="Current Password"
                  placeholder="Enter Password"
                  sx={{marginTop:{md:'0',sm:'30px',xs:'20px'}}}
                  InputProps={{
                    startAdornment: (
                      <LockIcon
                        style={{
                          marginRight: "8px", // Adjust the spacing as needed
                        }}
                      />
                    ),
                    style: {
                      borderRadius:'12px',

                      fontWeight: "500",
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
                <br/>
                <br/>
                <br/>
                <TextField
                  required
                  fullWidth
                  type="password"
                  size="large"
                  label="New Password"
                  placeholder="Enter Password"
                  sx={{marginTop:{md:'0',sm:'30px',xs:'20px'}}}
                  InputProps={{
                    startAdornment: (
                      <LockIcon
                        style={{
                          marginRight: "8px", // Adjust the spacing as needed
                        }}
                      />
                    ),
                    style: {
                      borderRadius:'12px',

                      fontWeight: "500",
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
                <br/>
                <br/>
                <br/>
                <TextField
                  required
                  fullWidth
                  type="password"
                  size="large"
                  label="Again Password"
                  placeholder="Enter Password"
                  sx={{marginTop:{md:'0',sm:'30px',xs:'20px'}}}
                  InputProps={{
                    startAdornment: (
                      <LockIcon
                        style={{
                          marginRight: "8px", // Adjust the spacing as needed
                        }}
                      />
                    ),
                    style: {
                      borderRadius:'12px',

                      fontWeight: "500",
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
        <br />
        
            <Grid container spacing={spacing} justifyContent="center">
              <Grid item md={10} sm={12} xs={12}>
                <Link to="/Forgotemail">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      boxShadow: "0px 0px 0px 0px",
                      paddingX: "25px",
                      borderRadius:'12px',
                      paddingY: { md: "10px", sm: "8px", xs: "5px" },
                      fontSize: { md: "18px", sm: "15px", xs: "15px" },
                      textTransform: "lowercase",
                      color:'white'
                    }}
                  >
                    Update Password
                  </Button>
                </Link>
              </Grid>

            </Grid>
     
          </Card>
        </Grid>
  
 
</Grid>  



        </Grid>
      </Grid>
  
        
 <Callsupport/>
   
    </Box>
    </ThemeProvider>
  );
};

export default Changepassword;
