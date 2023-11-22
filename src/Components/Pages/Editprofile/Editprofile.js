import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
  Checkbox,CardMedia,
} from "@mui/material";
import Profilepicture from "../../images/dashboardprofile.png";
import Leftsidebar from "../../Dashboardsidebar/Sidebar";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FormControlLabel from "@mui/material/FormControlLabel";
import CameraAltIcon from '@mui/icons-material/CameraAlt';


const Sidebar = () => {
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: { md: "40px", sm: "0px", xs: "50px" } }}
      >
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <Leftsidebar />
        </Grid>
        <Grid
          item
          lg={5}
          md={12}
          sm={12}
          xs={12}
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
            bgcolor: "white",
            color: "#110229",
            borderRadius: 2,
            padding: { md: "30px", sm: "15px", xs: "2px" },
            marginTop: "20px",
          }}>
          <Grid
        container
        spacing={2} sx={{paddingX:{md:'0',sm:'40px',xs:"30px"},
      }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Typography
            component="h1"
            variant="h5"
            sx={{
              color: "black",
              fontWeight: "600",
              fontSize: { md: "28px", sm: "20px", xs: "20px" },
            }}
          >
            Profile
          </Typography>
          </Grid>
          <Grid item lg={6} md={12} sm={12} xs={12} sx={{display:'flex',justifyContent:'flex-end'}}>      
           <CardMedia
                component="div" // Use a div as the component
                sx={{
                  position: "relative", // Make the container relative for absolute positioning
                }}
              >
                {/* Main image */}
                <img
                  src={Profilepicture}
                  alt="Image Alt Text"
                  style={{
                
                    objectFit: "cover",
                  }}
                />
                 <Box
                  sx={{
                    position: "absolute",
                    top: "0", // Adjust as needed
                    right:'0'
                  }}
                >   <CameraAltIcon sx={{color:'#F7941D',fontSize:'18px'}} />
                  </Box>

              </CardMedia>
          </Grid>
          </Grid>
          <Divider />
 <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={5} sx={{paddingX:{md:'0',sm:'30px',xs:"20px"}}}>
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="Name"
                  size="large"
                  label="First Name"
                  placeholder="NAFEES"
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
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="Name"
                  size="large"
                  label="Last Name*"
                  placeholder="Nafees"
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
            <Grid
              container
              spacing={3}
              sx={{
                marginTop: { md: "1px", sm: "8px", xs: "8px" },
                paddingX:{md:'0',sm:'30px',xs:"20px"},
              }}
            >
              <Grid item lg={12} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  size="large"
                  label="Email Address*"
                  placeholder="nafeesurrehman5566@gmail.com"
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

            <Grid
              container
              spacing={3}
              sx={{
                marginTop: { md: "1px", sm: "8px", xs: "8px" },
                paddingX:{md:'0',sm:'30px',xs:"20px"},

              }}
            >
              <Grid item lg={12} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="Phone"
                  size="large"
                  label="Phone No*"
                  placeholder="+1 3493 3894 43"
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

            <Grid container spacing={5} sx={{ marginTop: "10px",paddingX:{md:'0',sm:'30px',xs:"20px"},
 }}>
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="Country"
                  size="large"
                  label="Country*"
                  placeholder="Romania"
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
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="city"
                  size="large"
                  label="City*"
                  placeholder="Bucharest"
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
            <Grid container spacing={5} sx={{ marginTop: "10px",paddingX:{md:'0',sm:'30px',xs:"20px"},
 }}>
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  size="large"
                  label="Zip Code*"
                  defaultValue="46564*"
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
              <Grid item lg={6} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  size="large"
                  label="State*"
                  placeholder="Bucharest"
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
            <Grid
              container
              spacing={3}
              sx={{
                marginTop: { md: "10px", sm: "8px", xs: "8px" },
                paddingX:{md:'0',sm:'30px',xs:"20px"},

              }}
            >
              <Grid item lg={12} md={12} xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  size="large"
                  label="Street  Address*"
                  placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
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
            <Grid container spacing={2} sx={{ paddingX:{md:'0',sm:'30px',xs:"20px"},
}}>
              <Grid item xs={6}>
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
                      Same as above
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <br/>
            <Grid item lg={12} md={12} xs={12} sm={12} sx={{paddingX:{md:'0',sm:'30px',xs:"20px"},
}} >
                <TextField
                  required
                  fullWidth
                  type="email"
                  size="large"
                  label="Shipping Address*"
                  placeholder="2715 Ash Dr. San Jose, South Dakota 83475"
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

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              sx={{
                mt: 3,
                mb: 2,
                color: "#FFFFFFE5",
                boxShadow: "0px 0px 0px 0px",
                padding: "15px",
                fontSize: "15px",
                textTransform: "lowercase",
                fontWeight: "700",
                borderRadius:'10px',
                marginLeft: { md: "5px", sm: "0px", xs: "0px" },
                
              }}
            >
              Save Profile
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sidebar;
