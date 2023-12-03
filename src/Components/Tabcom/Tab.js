import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Tab, Tabs} from "@mui/material";
import PropTypes from "prop-types";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Tabestyle from "./Tabcomp.style";
import Narrationimage from "../images/redwatch.png";
import Watchimage from "../images/watch-1.png";
import Watchimage1 from "../images/watch-2.png";
import axios from 'axios';

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
    title: 'Apple Series 8 ',
    price: 100,
    currentSlide: 0,
    // Add other properties as needed
  },
  {
    title: 'Apple Series 8 ',
    price: 150,
    currentSlide: 0,
    // Add other properties as needed
  },
  {
    title: 'Apple Series 8 ',
    price: 150,
    currentSlide: 0,
    // Add other properties as needed
  },
  {
    title: 'Apple Series 8 ',
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
  const [value, setValue] = React.useState(0);


  


  const [currentSlides, setCurrentSlides] = useState(Array(Data.length).fill(0));
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
    color: "#7F7F7F",
    fontWeight: "600",
    lineHeight: "43.5px", // Remove media queries
    "&.Mui-selected": {
      color: "#F7941D",
    },
  });

  return (
    <Box>
    <Grid
    item
    container
    sx={{
      marginTop: "80px",
      paddingX: {md:"70px",sm:'40px',xs:'30px'},
      backgroundColor: "white",
    }}
  >
    <Grid item lg={12} md={12} sm={12} xs={12}>
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
              label="New Arrivals"
              {...a11yProps(0)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Featured"
              {...a11yProps(1)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
            <StyledTab
              label="Top Selling"
              {...a11yProps(2)}
              sx={{ fontSize: "12px" }} // Remove media queries
            />
          </Tabs>
        </Grid>
      </Grid>
    </Grid>
  
  </Grid>
  <Divider variant="inset"  sx={{marginX:{md:'50px',sm:'0px',xs:'0px'}}} />
  <br/>
    <Grid container spacing={3} sx={{ paddingX: { md: '60px', sm: '20px', xs: '10px' } }}>
      {Data.map((item, index) => (
        <Grid item lg={3} md={6} xs={12} sm={6} key={index}>
          <Card sx={Tabestyle.Tabcard}>
            <Grid container alignItems="center" justifyContent="center" >
              <Grid item xs={12}>
                <Grid container alignItems="center" justifyContent="center">
                  <Grid item xs={2}>
                    <IconButton
                      onClick={() => handlePreviousSlide(index)}
                      disabled={currentSlides[index] === 0}>
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  </Grid>
                  <Grid item xs={8} sx={{ height: '200px' }} >
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
                      disabled={currentSlides[index] === slides.length - 1}>
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
                <Typography variant="subtitle1" sx={{ color: '#1D1E1E', fontWeight: 'bold' }}>
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
