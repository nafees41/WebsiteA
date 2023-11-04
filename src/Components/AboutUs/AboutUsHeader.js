import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Button } from "@mui/material";
const About = () => {
  return (
    <Grid container spacing={2} sx={{ marginTop: "0px" }}>
      <Grid item xs={12} >
        <Grid container spacing={2} className="about-main" sx={{ paddingX: {md:"55px" ,sm:'0px',xs:'20px'}, paddingY: {md:"70px",sm:'40px',xs:'30px'} }}>
          <Grid item md={12}  sm={12}  xs={12} className="about-content">
              <span>BRIEFLY ABOUT US</span>
              <h1>
                Large experience <br /> in sales
              </h1>
              <p>
                We have been working in the marketing sphere for more than 35
                <br/>
                years. During this time we successfully finished 10 000+
                projects. <br/> Our company guarantee the quality that have been
                tested  over  <br/> the years.
              </p>
              <Button>Free Consultation</Button>
      
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
