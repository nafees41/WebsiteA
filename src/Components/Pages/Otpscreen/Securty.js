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
import { Link } from "react-router-dom";
import theme from "../../Theme/Theme";
import Otpimage from "../../images/OTPimage.png";
import Card from "@mui/material/Card";
import { useState } from "react";
import Callsupport from "../../Callsupport/Callsupport";
import { ThemeProvider } from "@mui/material";

const Securty = () => {
  const spacing = {
    xs: 2, // Spacing for extra small screens
    sm: 2, // Spacing for small screens
    md: 4, // Spacing for medium screens
  };

  const [otpValue, setOtpValue] = useState("");

  const handleOtpChange = (event) => {
    setOtpValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Grid container spacing={2}>
          <Grid
            item
            md={5}
            sm={12}
            xs={12}
            sx={{
              margin: "auto",
            }}
          >
            <Card
              sx={{
                backgroundColor: "white",
                padding: "15px",
                marginX: "20px",
                boxShadow: "0px 0px 0px 0px",
                border: "1px solid #D5D5D5",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "600",
                  lineHeight: { md: "31.12px", sm: "28px", xs: "20px" },
                  fontSize: { md: "30px", sm: "30px", xs: "25px" },
                  paddingX: "30px",
                }}
              >
                Enter OTP
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  lineHeight: { md: "31.12px", sm: "22px", xs: "15px" },
                  fontSize: { md: "14px", sm: "18px", xs: "12px" },
                  paddingX: { md: "45px", sm: "10px", xs: "5px" },
                }}
              >
                OTP has been sent to your email.
              </Typography>
              <Grid
                container
                spacing={4}
                sx={{ margin: { md: "auto", sm: "0", xs: "0" } }}
              >
                <Grid item md={2} sm={2} xs={6}>
                  <Card
                    sx={{
                      color: "#0a202d",
                      backgroundColor: "#FDDFBB",
                      textAlign: "center",
                      boxShadow: "0px 0px 0px 0px",
                    }}
                  >
                    <TextField
                      id="otp-input"
                      onChange={handleOtpChange}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item md={2} sm={2} xs={6}>
                  <Card
                    sx={{
                      color: "#0a202d",
                      backgroundColor: "#FDDFBB",
                      textAlign: "center",
                      boxShadow: "0px 0px 0px 0px",
                    }}
                  >
                    <TextField
                      id="otp-input"
                      onChange={handleOtpChange}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item md={2} sm={2} xs={6}>
                  <Card
                    sx={{
                      color: "#0a202d",
                      backgroundColor: "#FDDFBB",
                      textAlign: "center",
                      boxShadow: "0px 0px 0px 0px",
                    }}
                  >
                    <TextField
                      id="otp-input"
                      onChange={handleOtpChange}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item md={2} sm={2} xs={6}>
                  <Card
                    sx={{
                      color: "#0a202d",
                      backgroundColor: "#FDDFBB",
                      textAlign: "center",
                      boxShadow: "0px 0px 0px 0px",
                    }}
                  >
                    <TextField
                      id="otp-input"
                      onChange={handleOtpChange}
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  </Card>
                </Grid>
              </Grid>
              <Grid
                container
                sx={{ marginTop: { md: "30px", sm: "20px", xs: "10px" } }}
              >
                <Grid item>
                  <Stack
                    direction={{ md: "row", xs: "column", sm: "column" }}
                    spacing={{ xs: 1, sm: 2, md: 1 }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        paddingLeft: "30px",

                        fontWeight: "400",
                        lineHeight: { md: "19.12px", sm: "12px", xs: "10px" },
                        fontSize: { md: "14px", sm: "18px", xs: "10px" },
                        textAlign: "center",
                      }}
                    >
                      If you don’t receive code.{" "}
                    </Typography>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <span style={{ color: "#F7941D" }}> Resend it? </span>{" "}
                    </Link>
                  </Stack>
                </Grid>
              </Grid>
              <br />

              <Grid container spacing={spacing}>
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
                        textTransform: "lowercase",
                        color: "white",
                      }}
                    >
                      Verify & Proceed
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
            </Card>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img src={Otpimage} style={{ width: "100%",height:'95%' }} />
          </Grid>
        </Grid>
        <Callsupport />
      </Box>
    </ThemeProvider>
  );
};

export default Securty;
