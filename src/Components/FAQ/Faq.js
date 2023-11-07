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
  const [expanded, setExpanded] = useState([true, false, false]); // Initialize to true for each Accordion
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[panel] = isExpanded;
      return newExpanded;
    });
  };
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
  
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px", display: "flex", justifyContent: "center" }} >
         <Grid item lg={6} md={12} sm={12} xs={12}>
         <div>
              {[
                {
                  label: "How we work at our brand?",
                  content: (
                    <div>
                      <Typography  variant="body2">
                      You offer a good product, make advertising, analyze the market but still have no improvement Our qulificated specialists 
                      </Typography>
                     
                    </div>
                  ),
                },
                {
                  label: "How we work at our brand?",
                  content: (
                    <div>
                
                      <Typography variant="body2">
                      You offer a good product, make advertising, analyze the market but still have no improvement Our qulificated specialists 

                      </Typography>
                    </div>
                  ),
                },
                {
                  label: "How we work at our brand?",
                  content: (
                    <div>
                      <Typography variant="body2">
                      You offer a good product, make advertising, analyze the market but still have no improvement Our qulificated specialists 
                      </Typography>
                     
                    </div>
                  ),
                },
                {
                  label: "How we work at our brand?",
                  content: (
                    <div>
                
                      <Typography variant="body2">
                      You offer a good product, make advertising, analyze the market but still have no improvement Our qulificated specialists 

                      </Typography>
                    </div>
                  ),
                },

        
              ].map((section, index) => (
                <Accordion
                  key={index}
                  expanded={expanded[index] || false}
                  onChange={handleAccordionChange(index)}
                >
                  <AccordionSummary
                    sx={{ backgroundColor: "#F1F1F1" }}
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <Typography>{section.label}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>{section.content}</AccordionDetails>
                </Accordion>
              ))}
            </div>
 
      </Grid>
        </Grid>
     
    </div>
  );
};

export default Faq;
