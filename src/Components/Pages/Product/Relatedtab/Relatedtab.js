import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box, Button, Grid, Card, Typography, Tab, Tabs } from "@mui/material";
import Narrationimage from "../../../images/redwatch.png";
import Watchimage from "../../../images/watch-1.png";
import Watchimage1 from "../../../images/watch-2.png";
import { useState } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Divider } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import Tabestyle from "../../../Tabcom/Tabcomp.style";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children} {/* Render the content here */}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// Assuming you have an array of data called 'Data'
const Data = [
  {
    title: 'Apple Series  ',
    price: 100,
    currentSlide: 0,
    // Add other properties as needed
  },
  {
    title: 'Apple Series  ',
    price: 150,
    currentSlide: 0,
    // Add other properties as needed
  },
  // Add more data objects as needed
];

// Assuming you have an array of slides
const slides = [
  {
    src: Narrationimage,
    alt: "Slide 1",
  },
  {
    src: Watchimage,
    alt: "Slide 2",
  },
  {
    src: Watchimage1,
    alt: "Slide 3",
  },
  // Add more slides as needed
];

const YourComponent = () => {
  const [currentSlides, setCurrentSlides] = useState(Array(Data.length).fill(0));
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePreviousSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      if (newSlides[index] > 0) {
        newSlides[index] -= 1;
      }
      return newSlides;
    });
  };

  const handleNextSlide = (index) => {
    setCurrentSlides(prevSlides => {
      const newSlides = [...prevSlides];
      if (newSlides[index] < slides.length - 1) {
        newSlides[index] += 1;
      }
      return newSlides;
    });
  };
  const StyledTab = styled(Tab)({
    color: "black",
    fontWeight: "600",
    "&.Mui-selected": {
      backgroundColor: "#F7941D",
      color: "white",
      borderRadius: "50px",
    },
  });

  return (
    <Box>
    <Grid
    item
    container
    sx={{
      marginTop: "80px",
      paddingX: { md: "35px", sm: "0px", xs: "0px" },
      backgroundColor: "white",
    }}
  >
    <Grid item lg={10} md={12} sm={12} xs={12}>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            scrollButtons="auto"
            variant="scrollable"
            sx={{
              overflowX: "auto",
              ".MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
            }}
            aria-label="basic tabs example"
          >
            <StyledTab
              label="Hp"
              {...a11yProps(0)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Dell"
              {...a11yProps(1)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Lenovo"
              {...a11yProps(2)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Apple"
              {...a11yProps(0)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Dell"
              {...a11yProps(1)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Lenovo"
              {...a11yProps(2)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Lenovo"
              {...a11yProps(2)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
          </Tabs>
        </Grid>
      </Grid>
    </Grid>
    <Grid
      item
      lg={2}
      md={6}
      xs={12}
      sm={6}
      sx={{ display: "flex", justifyContent: "end" }}
    >
      <Stack direction="row" spacing={2}>
        <Typography sx={{ color: "#484444" }}> Show: </Typography>
        <Typography sx={{ color: "#484444" }}> 12 </Typography>
        <Stack>
          <KeyboardArrowUpIcon sx={{ fontSize: "10px" }} />
          <KeyboardArrowDownIcon sx={{ fontSize: "10px" }} />
        </Stack>
      </Stack>
    </Grid>
  </Grid>
    <Grid container spacing={3} sx={{ paddingX: { md: '40px', sm: '20px', xs: '10px' } }}>
      {Data.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} sm={6} key={index}>
          <Card >
            <Grid container alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={2}>
                    <IconButton
                      onClick={() => handlePreviousSlide(index)}
                      disabled={currentSlides[index] === 0}
                    >
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={8}  sx={{ height: '200px' }}>
                    <Link to='/singleproduct'>
                      <img
                        src={slides[currentSlides[index]].src}
                        alt={slides[currentSlides[index]].alt}
                      />
                    </Link>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton
                      onClick={() => handleNextSlide(index)}
                      disabled={currentSlides[index] === slides.length - 1}
                    >
                      <ChevronRightIcon />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Box display="flex">
              <Divider flexItem sx={{ marginRight: '16px', flexGrow: 1 }} />
              <Typography sx={Tabestyle.Tabsheading}>Watch</Typography>
              <Divider flexItem sx={{ marginLeft: '16px', flexGrow: 1 }} />
            </Box>
            <Grid container spacing={2} sx={{ padding: '10px' }}>
              <Grid item xs={6} sx={{ display: 'flex' }}>
                <Typography variant="subtitle2" sx={{ color: '#1D1E1E', fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Typography variant="h6" sx={{ color: '#F7941D' }}>
                  ${item.price}
                </Typography>
              </Grid>
            </Grid>
            <Typography sx={{ textAlign: 'center', fontSize: '12px', color: '#7F7F7F', padding: '8px' }}>
            Apple Watch Series 8 features temperature sensing for insights into women's health, Car Crash Detection, and sleep stages to understand your sleep.

            </Typography>
            <br />
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

export default YourComponent;
