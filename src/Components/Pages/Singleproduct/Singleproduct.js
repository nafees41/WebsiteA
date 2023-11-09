import React, { useState } from "react";
import "./Singleproduct.css";
import Redimage from "../../images/redwatch.png";
import Redimage1 from "../../images/Bag-1.png";
import Redimage2 from "../../images/Bag-2.png";
import Redimage3 from "../../images/Bag-3.png";
import Grid from "@mui/material/Grid";
import DescriptionSection from "./Productdescription/DescriptionSection";
import Featuredcategories from "./Featuredcategory/Featured";
import Featuredcategories2 from "../../Featuredcategory/Featuredcategory";
import { TextField, Card, Button, Typography } from "@mui/material";
import Headphones from "../../images/back3.jpg";
import Chairimage from "../../images/back4.jpg";
import Iphoneimage from "../../images/fr.jpg";
import Pinkimage from '../../images/pinkimage.png'

import Callsupport from "../../Callsupport/Callsupport";
import Box from "@mui/material/Box";

const data = [
  {
    image: Iphoneimage,
  },
  {
    image: Chairimage ,
  },


];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };
  const slideTo = (index) => {
    setCurrent(index);
  };
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          paddingX: { md: "75px", sm: "30px", xs: "20px" },
        }}>
        <Grid item md={6} sm={12} xs={12}>
        <div className="carousel">
            <div className='carouselContainer'>
          
                <div className="carouselContent">
                    <div className='content'>
                        {
                            data.map((v, i) => {
                                return (
                                    i === current && (i === 2 ? 
                                      <img src={v.image} alt="" />
                             
                                        : <img src={v.image} alt="" />
                                    )
                                )
                            })
                        }
                    </div>
                    <div className='slideContainer'>
                        {
                            data.map((v,i) => {
                                return(
                                    <div className="slideTo" >
                                       
                                       <img src={v.image}   alt="" onClick={() => slideTo(i) }  />                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
           
            </div>
        </div>
              </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div>
              <Typography
                variant="h5"
                sx={{ paddingBottom: "10px", fontWeight: "bolder" }}
              >
                Apple Iphone 13 Pro Max
              </Typography>
              <hr></hr>
              <table>
                <tr>
                  <td>Model:</td>
                  <td>13 Pro Max</td>
                </tr>
                <tr>
                  <td>description:</td>
                  <td>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa <br /> qui officia deserunt mollit anim id es
                  </td>
                </tr>
                <tr>
                  <td>Brand:</td>
                  <td>Apple Original</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>Hype Store</td>
                </tr>
                <tr>
                  <td>Availabilty:</td>
                  <td>Accessories/Phone</td>
                </tr>
                <tr>
                  <td>Size:</td>
                  <td>
                    <button className="size-button ">Small</button>
                    <button className="size-button">Medium</button>
                    <button className="size-button">Large</button>
                  </td>
                </tr>
                <tr>
                  <td>Color</td>
                  <td>
                    <div class="checkbox-container">
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                      <label class="container">
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </td>
                </tr>
              </table>
              <button className="order-btn">Buy Now</button>
              <button className="order-btn-2">
                <img src={Pinkimage} style={{ width: "15%" }} />{" "}
                <span style={{ fontSize: "16px", color: "#F7941D" }}>
                  Add to Cart
                </span>
              </button>
            </div>
          </Grid>
      </Grid>
      <DescriptionSection />
      <Featuredcategories />
      <Callsupport />
    </Box>
  );
};

export default Carousel;
