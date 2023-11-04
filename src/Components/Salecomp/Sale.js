import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Saleimage1 from "../images/Saleimage1.png";
import Saleimage2 from "../images/Saleimage2.png";
import Saleimage3 from "../images/discount.png";
import Saleimage4 from "../images/TwoWatches.png";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import Laptopimage from "../images/Laptop.png";

const Sale = () => {
  const theme = useTheme();

  return (
    <div>
      <Box >
        <Grid container spacing={2} sx={{paddingX:{md:'70px',sm:'0px',xs:'0px'},marginTop:"50px"}} >
          <Grid item md={8} sm={12} xs={12}>
            <Grid container spacing={2} >
            <Grid item md={6} sm={6} xs={12}>
            <img src={Saleimage1} style={{ width: "100%",height:'100%' }} />
              </Grid>
              <Grid item   md={6} sm={6} xs={12}>
              <img src={Saleimage2} style={{ width: "100%",height:'100%' }} />
                 </Grid>
              </Grid>
          <Grid container spacing={2} sx={{ marginTop: "30px",backgroundColor:'#F7F7F7',borderRadius:5}}>
                <Grid item xs={4}>
                  <CardMedia
                      component="img"
                      sx={{ width: "100%" }}
                      image={Saleimage4}
                      alt="Live from space album cover"
                    />
              </Grid>
                <Grid item xs={8}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography component="div" variant="h5" sx={{ fontWeight:'600' ,
                      color:'#000000'}}>
                        Find the best watch for you!
                      </Typography>
                      <Typography
                        variant="h6"
                        color="text.secondary"
                        component="div"
                        sx={{color:'#F7941D',
                        fontWeight:'600' 
                      }}
                      >
               <span style={{color:'#0F75BC',fontWeight:'600' ,fontSize:{md:'22px',sm:'20px',xs:'18px'}}}> Smart </span>
                        <br />
                        Watches
                      </Typography>
                    </CardContent>
                  </Box>
                </Grid>
              </Grid>
          
          </Grid>
          <Grid item md={4}  sm={12} xs={12} >
            <img src={Saleimage3} style={{ width: "100%"}} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Sale;
