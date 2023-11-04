import React from 'react'
import pic from "../images/How We Work.png"
import { Box } from '@mui/material';
import  { useState, useRef, useEffect } from 'react';
import Aboutstyle from  '../Styles/about'
import VideoPlayer from '../Videoplayer/Videoplayer';
import Faq from '../FAQ/Faq';
import { Grid } from "@mui/material";

const HowWeWork = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const [progressHidden, setProgressHidden] = useState(false);
  const [isSpeedOptionsVisible, setIsSpeedOptionsVisible] = useState(false);
  const [speedListItemActive, setSpeedListItemActive] = useState(false);


 
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: "20px" }}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <div className='how-we-work-main'>
           <h1>How We Work</h1>
          <p>You offer a good product, make advertising, analyze the market but still have no improvement? </p>

   <VideoPlayer/>
             </div>

             
    </Grid>
    </Grid>
    <Faq />

 
  
   
    </Box>
  )
}

export default HowWeWork
