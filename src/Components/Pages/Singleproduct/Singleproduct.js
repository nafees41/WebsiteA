import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Button, Typography, Card, Divider } from "@mui/material";
import productimage from "../../../images/Product.png";
import Mainstyle from "../Mainsaction/Mainsaction.style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/material";
import Relatedtab from '../Relatedtab/Relatedtab'
import Paginationcomp from '../Paginationcomp/Paginationcomp'

const About = () => {
  return (
    <Box>
      <Grid container spacing={2} >
        <Grid md={2}  sm={12} xs={12}>
      
        </Grid>
        <Grid item md={10}  sm={12} xs={12} >
          <Grid container spacing={2} sx={{ marginTop: "0px" }}>
            <Grid item md={10} sm={12} xs={12} >
              <Grid container spacing={2} sx={Mainstyle.ProductsMain}>
                <Grid item md={8} sm={12} xs={12}>
                  <img src={productimage} style={{width:'100%'}} />
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                  <Typography sx={Mainstyle.Mainheading}>
                    Online <br />
                    <span style={{ color: "#F7941D", fontSize: "3rem" }}>
                      Shopping
                    </span>
                  </Typography>
                  <Typography variant="subtitle1">Up to 50% off</Typography>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse <br /> cillum dolore eu fugiat nulla pariatu
                  </p>
                  <Button >Shop Now</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Relatedtab/>
          
          <Paginationcomp/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
