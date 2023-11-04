import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Grid, Button, Typography, Card, Divider } from "@mui/material";
import productimage from "../../../images/Product.png";
import Mainstyle from "../Mainsaction/Mainsaction.style";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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
  const [expanded, setExpanded] = useState(true);
  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };


  return (
    <Box>
      <Grid container spacing={2} sx={{ marginTop: "20px", paddingX: "70px" }}>
        <Grid xs={2} sx={{ border: "2px solid white", backgroundColor: "white" }}>
          <Typography sx={{ color: "#3C3737", padding: "10px" }}>
            {" "}
            Filters{" "}
          </Typography>

          <Card>
            <Accordion expanded={expanded} onChange={handleAccordionChange}>
              <AccordionSummary
                expandIcon={expanded ? <ExpandMoreIcon /> : <ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#F1F1F1" }}
              >
                <Typography
                  sx={{ fontWeight: "500", fontSize: "17px", color: "#3C3737" }}
                >
                  Categories
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ color: "#3C3737" }}>
                <Typography sx={{ color: "#F7941D" }}>
                  {" "}
                  Laptop & Mac{" "}
                </Typography>
                <Typography> Mobile & Tablet </Typography>
                <Typography> Home Devices </Typography>
                <Typography> TV & Audio </Typography>
                <Typography> Fitness </Typography>
                <Typography> Games & Toys </Typography>
                <Typography> TV & Audio </Typography>
                <Typography> Accessories </Typography>
                <Typography> Secuirty </Typography>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2} sx={{ marginTop: "0px" }}>
            <Grid item xs={10}>
              <Grid container spacing={2} sx={Mainstyle.ProductsMain}>
                <Grid item md={8} sm={12} xs={12}>
                  <img src={productimage} />
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                  <Typography sx={Mainstyle.Mainheading}>
                    Online <br />{" "}
                    <span style={{ color: "#F7941D", fontSize: "3rem" }}>
                      {" "}
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
