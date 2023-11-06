import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Card,Button } from "@mui/material";
import {Typography,CardContent} from "@mui/material";
import {Divider} from "@mui/material";
import Narrationimage from "../../../images/red watch.jpeg";
import Watchimage from "../../../images/watch-1.png";
import Watchimage1 from "../../../images/watch-2.png";
import { useState } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Featured = () => {
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
  ];
  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div>
      <Box >
      <Grid container spacing={2} sx={{marginTop:'50px',paddingX:{md:'65px',sm:'0px',xs:'0px'}}}>
        <Grid item xs={12} >
        <Typography variant="h5" sx={{color:'#F7941D'}}>Featured Categories</Typography>
        </Grid>
      </Grid>
      <Divider variant="inset"  sx={{marginX:{md:'50px',sm:'0px',xs:'0px'}}} />


      <Grid container spacing={3} sx={{paddingX:{md:'40px',sm:'20px',xs:'10px'}} }>


<Grid item lg={3} md={6} xs={12} sm={6}>
  <Card >
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={2}>
            <IconButton
              onClick={handlePreviousSlide}
              disabled={currentSlide === 0}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Card >
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                style={{ width: "100%" }}
              />
            </Card>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              onClick={handleNextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRightIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Box display="flex">
      <Divider
        flexItem
        sx={{ marginRight: "16px", flexGrow: 1 }}
      />
      <Typography >Watch</Typography>
      <Divider flexItem sx={{ marginLeft: "16px", flexGrow: 1 }} />
    </Box>
    <Grid container spacing={2} >
      <Grid item xs={6} sx={{ display: "flex" }}>
        <Typography variant="subtitle1" sx={{color:'#1D1E1E',fontWeight:'bold'}}> Apple Series  </Typography>
      </Grid>
      <Grid item xs={6}>
        <Button
          type="submit"
          sx={{
            color: "#F7941D",
            fontSize: "15px",
           
          }}
        >
          $2,435
        </Button>
      </Grid>
    </Grid>

      <Typography  sx={{textAlign:'center',fontSize:'12px',color:'#7F7F7F'}}>
      Apple Watch Series 8 features  temperature sensing for insights into women's health, Car  Crash Detection, and sleep stages to understand your sleep.
      </Typography>


  </Card>
</Grid>


{/* Add more content for the first tab panel here */}
</Grid> 

 </Box>
    </div>
  );
};

export default Featured;
