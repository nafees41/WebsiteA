import React, { useState } from "react";
import "./Singleproduct.css";
import Grid from "@mui/material/Grid";
import DescriptionSection from "./Productdescription/DescriptionSection";
import Featuredcategories from "./Featuredcategory/Featured";
import { Typography, Divider } from "@mui/material";
import Chairimage from "../../images/back4.jpg";
import Iphoneimage from "../../images/fr.jpg";
import Pinkimage from "../../images/pinkimage.png";
import Callsupport from "../../Callsupport/Callsupport";
import Box from "@mui/material/Box";
const data = [
  {
    image: Iphoneimage,
  },
  {
    image: Chairimage,
  },
];
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const slideTo = (index) => {
    setCurrent(index);
  };
  const [active, setActive] = useState("");

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          paddingX: { md: "75px", sm: "30px", xs: "20px" },
        }}
      >
        <Grid item md={5} sm={12} xs={12}>
          <div className="carouselContent">
            <div className="content">
              {data.map((v, i) => {
                return (
                  i === current &&
                  (i === 2 ? (
                    <img src={v.image} alt="" />
                  ) : (
                    <img src={v.image} alt="" />
                  ))
                );
              })}
            </div>
            <div className="slideContainer">
              {data.map((v, i) => {
                return (
                  <div className="slideTo">
                    <img src={v.image} alt="" onClick={() => slideTo(i)} />
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>
        <Grid item md={7} sm={12} xs={12}>
          <div>
            <Typography
              variant="h5"
              sx={{ paddingBottom: "10px", fontWeight: "bolder" }}
            >
              Apple Iphone 13 Pro Max
            </Typography>
            <Divider />
            <table>
              <tr>
                <td>Model:</td>
                <td>13 Pro Max</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa{" "}
                  <br /> qui officia deserunt mollit anim id es
                </td>
              </tr>
              <tr>
                <td>Brand:</td>
                <td>Apple Original</td>
              </tr>
              <tr>
                <td>Type:</td>
                <td>Accessories/Phone</td>
              </tr>
              <tr>
                <td>Availabilty:</td>
                <td>In Stock</td>
              </tr>
              <tr>
                <td>Size:</td>
                <td>
                  <button
                    key={1}
                    className={active === "1" ? "active" : undefined}
                    id={"1"}
                    onClick={handleClick}
                  >
                    Small
                  </button>

                  <button
                    key={2}
                    className={active === "2" ? "active" : undefined}
                    id={"2"}
                    onClick={handleClick}
                  >
                    Medium
                  </button>

                  <button
                    key={3}
                    className={active === "3" ? "active" : undefined}
                    id={"3"}
                    onClick={handleClick}
                  >
                    Large
                  </button>
                </td>
              </tr>
              <tr>
                <td>Color</td>
                <td>
                  <div class="checkbox-container">
                    <label class="container">
                      <input type="checkbox" />
                      <span class="checkmark" style={{background:'gray'}}></span>
                    </label>
                    <label class="container red">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                    <label class="container pink">
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
