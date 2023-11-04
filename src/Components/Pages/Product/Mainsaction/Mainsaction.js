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

const ITEM_HEIGHT = "100%";
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const About = () => {

  const [expanded, setExpanded] = useState([true, true, true]); // Initialize to true for each Accordion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[panel] = isExpanded;
      return newExpanded;
    });
  };


  return (
    <Box>
      <Grid container spacing={2} sx={{ marginTop: "20px", paddingX: {md:"70px",sm:'40px',xs:'30px'} }}>
        <Grid md={2}  sm={12} xs={12} sx={Mainstyle.FilterSaction}>
          <Typography sx={{ color: "#3C3737", padding: "15px" }}>
            {" "}
            Filters{" "}
          </Typography>

          <Card>
          <div>
      {[
        {
          label: 'Categories',
          content: (
            <div>
              <Typography style={{ color: '#F7941D' }}>Laptop & Mac</Typography>
              <Typography variant="body2">Mobile & Tablet</Typography>
              <Typography variant="body2">Home Devices</Typography>
              <Typography variant="body2">TV & Audio</Typography>
              <Typography variant="body2">Fitness</Typography>
              <Typography variant="body2">Games & Toys</Typography>
              <Typography variant="body2">TV & Audio</Typography>
              <Typography variant="body2">Accessories</Typography>
              <Typography variant="body2">Security</Typography>
            </div>
          ),
        },
        {
          label: 'Price Range',
          content: (
            <div>
              <TextField id="outlined-basic" label="From" />
              <TextField id="filled-basic" label="To" />
              <Typography variant="body2">Price: $0.00 – $3200.00</Typography>
            </div>
          ),
        },
        {
          label: 'Brand',
          content: (
            <div>
              <TextField id="outlined-basic" label="From" />
              <TextField id="filled-basic" label="To" />
              <Stack direction="row" spacing={1}>
                <Checkbox tabIndex={-1} disableRipple />
                <Typography variant="body2">Apple</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Checkbox tabIndex={-1} disableRipple />
                <Typography variant="body2">Samsung</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Checkbox tabIndex={-1} disableRipple />
                <Typography variant="body2">Sony</Typography>
              </Stack>
            </div>
          ),
        },
        {
          label: 'Discount',
          content: (
            <div>
              <TextField id="outlined-basic" label="From" />
              <TextField id="filled-basic" label="To" />
              <Stack direction="row" spacing={1}>
                <Checkbox tabIndex={-1} disableRipple />
                <Typography variant="body2">Any</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Checkbox tabIndex={-1} disableRipple />
                <Typography variant="body2">No</Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <Checkbox tabIndex={-1} disableRipple />
                <Typography variant="body2">Yes</Typography>
              </Stack>
            </div>
          ),
        },
        
      ].map((section, index) => (
        <Accordion
          key={index}
          expanded={expanded[index] || false}
          onChange={handleAccordionChange(index)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{section.label}</Typography>
          </AccordionSummary>
          <AccordionDetails>{section.content}</AccordionDetails>
        </Accordion>
      ))}
    </div>
          </Card>
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
                  <Button sx={Mainstyle.Mainbutton}>Shop Now</Button>
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
