import React from "react";
import { Typography, Box, TextField, Button, Grid } from "@mui/material";

import { Link } from "react-router-dom";
import Loginstyle from "../Loginscreen/Login.style";
import theme from "../../Theme/Theme";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Forgotimage from "../../images/forgotscreen.png";
import Card from "@mui/material/Card";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from "@mui/material";

const Forgotpassword = () => {
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
        <Grid container spacing={4} sx={Loginstyle.Maincontainer}>
          <Grid item md={6} sm={10} xs={12}>
            <Card
              sx={{
                backgroundColor: "white",
                padding: { md: "20px", sm: "40px", xs: "0px" },
                boxShadow: "0px 0px 0px 0px",
                border: "1px solid #D5D5D5",
                borderRadius: "12px",
              }}
            >
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={spacing}>
                  <Grid item md={10} sm={12} xs={12} sx={{ margin: "auto" }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: "600",
                        lineHeight: { md: "40.12px", sm: "50px", xs: "40px" },
                        fontSize: { md: "50px", sm: "30px", xs: "20px" },
                      }}
                    >
                      Forget Password
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        lineHeight: { md: "71.12px", sm: "30px", xs: "30px" },
                      }}
                    >
                      Enter email address that associated with your account.
                    </Typography>
                    <TextField
                      required
                      fullWidth
                      type="email"
                      size="large"
                      label="Email Address"
                      defaultValue="Enter Email"
                      sx={{ marginTop: { md: "0", sm: "30px", xs: "20px" } }}
                      InputProps={{
                        startAdornment: (
                          <MailOutlineIcon
                            style={{
                              fontSize: 14, // Adjust the icon size as needed
                              marginRight: "8px", // Adjust the spacing as needed
                            }}
                          />
                        ),
                        style: {
                          borderRadius: "12px",

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
                          borderRadius: "12px",
                          paddingY: { md: "10px", sm: "8px", xs: "5px" },
                          fontSize: { md: "18px", sm: "15px", xs: "15px" },
                          textTransform: "lowercase",
                          color: "white",
                        }}
                      >
                        Send Email
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent={"center"}
                  sx={{ marginTop: { md: "40px", sm: "38px", xs: "5px" } }}
                >
                  <Grid item sx={{ textAlign: "center" }}>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <span style={{ color: "#F7941D" }}>
                        {" "}
                        Go back to login screen?{" "}
                      </span>{" "}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              display: { md: "flex", sm: "block", xs: "block" },
              justifyContent: "center",
            }}>
            <img src={Forgotimage} style={{width:'100%'}}/>
          </Grid>
        </Grid>

        <Callsupport />
      </Box>
    </ThemeProvider>
  );
};

export default Forgotpassword;
