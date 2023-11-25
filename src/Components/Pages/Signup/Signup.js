import React from 'react'
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
  import LockIcon from '@mui/icons-material/Lock';
  import theme from "../../Theme/Theme";
  import PermIdentityIcon from '@mui/icons-material/PermIdentity';
  import MailOutlineIcon from "@mui/icons-material/MailOutline";
  import Signupstyle from './Signup.style'

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
      };
      const spacing = {
        xs: 2, // Spacing for extra small screens
        sm: 2, // Spacing for small screens
        md: 4, // Spacing for medium screens
      };
  return (
    <div>
            <Card
          sx={Signupstyle.cardstyle}
          >
            <Typography
              variant="subtitle1"
              sx={Signupstyle.Signupheading}
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
                    type="Name"
                    size="large"
                    label="Name"
                    placeholder="Name"
                    InputProps={{
                      startAdornment: (
                        <PermIdentityIcon 
                          sx={Signupstyle.iconstyle}
                        />
                      ),
                      style:Signupstyle.myTextField

                     
                    }}
                    InputLabelProps={{
                        style: Signupstyle.myLabel

                    }}
                  />
                </Grid>
                <Grid item md={6} xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="Name"
                    size="large"
                    label="Last Name"
                    placeholder="Last Name"
                    InputProps={{
                      startAdornment: (
                        <PermIdentityIcon 
                          style={{
                            color: "#6D6868", // Adjust the color as needed

                            marginRight: "8px", // Adjust the spacing as needed
                          }}
                        />
                      ),
                      style:Signupstyle.myTextField
                    }}
                    InputLabelProps={{
                        style: Signupstyle.myLabel

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
                    placeholder="Email Address"
                    InputProps={{
                      startAdornment: (
                        <MailOutlineIcon
                        sx={Signupstyle.iconstyle}

                        />
                      ),
                      style:Signupstyle.myTextField

                    }}
                    InputLabelProps={{
                        style: Signupstyle.myLabel

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
                    type="number"
                    size="large"
                    label=" Password"
                    placeholder="Password"
                    InputProps={{
                      startAdornment: (
                        <LockIcon
                        sx={Signupstyle.iconstyle}

                        />
                      ),
                      style:Signupstyle.myTextField

                    }}
                    InputLabelProps={{
                        style: Signupstyle.myLabel

                    }}
                  />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    type="Password"
                    size="large"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    InputProps={{
                      startAdornment: (
                        <LockIcon
                        sx={Signupstyle.iconstyle}

                        />
                      ),
                      style:Signupstyle.myTextField
                    }}
                    InputLabelProps={{
                        style: Signupstyle.myLabel

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
                          color: "#F7941D", // Change to your desired color
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
                sx={Signupstyle.Registerbutton}
              >
                Register Me
              </Button>
            </Box>
            </Card>
    </div>
  )
}

export default Signup
