import React, { useState } from 'react';
import './Products.css';
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Box,Grid, Tab, Tabs } from "@mui/material";
import { Divider } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';





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

export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const StyledTab = styled(Tab)({
    color: "#7F7F7F",
    fontWeight: "600",
    lineHeight: "43.5px", // Remove media queries
    fontFamily: ["Poppins", "sans-serif"],
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
          marginTop: "20px",
          paddingX: {md:"70px",sm:'0px',xs:'0px'},
          backgroundColor: "white",
        }}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
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
                  label="Description"
                  {...a11yProps(0)}
                  sx={{ fontSize: "12px" }} // Remove media queries
                />
                <StyledTab
                  label="Shipping Details"
                  {...a11yProps(1)}
                  sx={{ fontSize: "12px" }} // Remove media queries
                />
           
              </Tabs>
            </Grid>
          </Grid>
        </Grid>
      
      </Grid>
      <Divider variant="inset"  sx={{marginX:{md:'50px',sm:'0px',xs:'0px'}}} />
      <TabPanel value={value} index={0}>
        <Grid container spacing={2} sx={{paddingX:{md:'40px',sm:'20px',xs:'10px'}} }>
      
          <Grid item lg={12} md={6} xs={12} sm={6}>
          <div className="products" >
        {/* {categoryData[selectedCategory].map((product, index) => (
          <div key={index}>
            <p>{product}</p>
          </div>
        ))} */}
         <CardContent>
    
        <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis
        </Typography>
      </CardContent>
        {/* <p className='description-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque fugit omnis, quod mollitia dolorum at blanditiis, minima ad et ducimus debitis! Tenetur vitae aliquam quaerat obcaecati mollitia accusantium cupiditate exercitationem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero facere rem optio, molestias, reiciendis deserunt commodi rerum vel quam quisquam voluptatem magni sequi perferendis esse itaque ipsum? Ut, alias repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatum incidunt modi optio! Nemo deleniti totam, doloribus reiciendis maiores incidunt odio corrupti consequuntur voluptatem pariatur libero, esse a ipsum officiis?</p> */}
      </div>
          </Grid>
      
          {/* Add more content for the first tab panel here */}
        </Grid>
      </TabPanel>
    </Box>
  );
}
