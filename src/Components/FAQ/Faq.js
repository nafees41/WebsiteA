import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Grid ,Button,Typography,Paper,Box,Stack} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Faq = () => {
    const [expanded, setExpanded] = useState(false);
     const handleAccordionChange = () => {
      setExpanded(!expanded);
    };
  const faqItems = [
    {
      question: "Why is the moon sometimes out during the day?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
   },

   
    ];
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
        <Grid item lg={6} md={12} sm={12} xs={12}>
          <Typography variant="h3" sx={{textAlign:'center',fontWeight:'bolder'}}>FAQ'S</Typography>
          <Typography variant="subtitle1" sx={{textAlign:'center'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </Grid>
      </Grid>
      {faqItems.map((item, index) => (
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }} >
         <Grid item lg={6} md={12} sm={12} xs={12}>
          <Accordion expanded={expanded} onChange={handleAccordionChange} sx={{backgroundColor:'#FAFAFA'}}>
        <AccordionSummary
          expandIcon={expanded ? <RemoveCircleOutlineIcon sx={{backgroundColor:'#F7941D',color:'white'}} /> : <AddCircleOutlineIcon sx={{backgroundColor:'#F7941D',color:'white'}} />}
            aria-controls="panel1a-content"
          id="panel1a-header">
            <Stack direction="row" spacing={2}>
         <Typography>01</Typography>
        <Typography>Accordion 1</Typography>
          </Stack>
      </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
        </Grid>
         ))}
    </div>
  );
};

export default Faq;
