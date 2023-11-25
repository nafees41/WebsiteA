import React from "react";
import pic1 from "../../../images/Professional Staff.png";
import pic2 from "../../../images/Completed Projects.png";
import pic3 from "../../../images/Acheived Awards.png";
import tickimage from "../../../images/Tick Image.png";
import { Box, Card, Stack, Grid } from "@mui/material";

const WhyUs = () => {
  const data = [
    {
      pic: pic3,
      counting: "10000 +",
      title: "professional stag",
    },
    {
      pic: pic2,
      counting: "3680 +",
      title: "professional stag",
    },
    {
      pic: pic1,
      counting: "8350 +",
      title: "professional stag",
    },
  ];
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          paddingX: { md: "80px", sm: "50px", xs: "30px" },
          marginTop: "56px",
        }}
      >
        <Grid item md={8} sm={12} xs={12} className=" left-div">
          <h1>Why Us?</h1>
          <p>
            You offer a good product, make advertising, analyze the market but{" "}
            <br /> still have no improvement? Our qulificated specialists are
            ready to <br /> solve any of your problems. We work with the newest
            techniques <br /> and create strategies to catch more customers for
            you.
          </p>

          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">Professional Team</div>
          </div>
          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">Affordable Price</div>
          </div>
          <div className="professional-team">
            <div className="professional-team-left">
              <img src={tickimage} alt="professional" />
            </div>
            <div className="professional-team-right">
              Achieve a Specific Goal
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          {data.map((item, index) => (
            <Grid
              container
              spacing={2}
              className="right-div-box "
              key={index}
              
            >
              <Grid item xs={12}>
                <Card
                  sx={{
                    backgroundColor: "#F7941D",
                    marginBottom: { md: "0", sm: "0", xs: "20px" },
                    padding:'30px',
                    color:'#FFFFFF',
                    transition: "box-shadow 0.3s", // Transition for box shadow effect
                    "&:hover": {
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Box shadow on hover
                    },
                  }} >
                  <Stack
                    spacing={1}
                       direction="row" >
                    <img src={item.pic} alt="hussainAhmad" />
                    <h1>{item.counting}</h1>
                  </Stack>
                  <h5>{item.title}</h5>
                </Card>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyUs;
