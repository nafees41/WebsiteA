import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardActionArea } from "@mui/material";
import Personimage from "../images/person.png";
import { Divider } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function MultiActionAreaCard() {
  const cardStyle = {
    textAlign: "center",
    backgroundColor: "#F7F7F7",
    borderRight: "4px solid transparent",
  };
  const [isCardClicked, setCardClicked] = useState(new Array(2).fill(false)); // Assuming you have two cards

  const handleCardClick = (index) => {
    const newClickedState = [...isCardClicked];
    newClickedState[index] = !newClickedState[index];
    setCardClicked(newClickedState);
  };

  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "50px",
          paddingX: { md: "50px", sm: "50px", xs: "30px" },
        }}
      >
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "#1D1D1D", fontWeight: "600" }}>
            Our Latest Reviews
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: "50px",
            paddingX: { md: "50px", sm: "0px", xs: "0px" },
          }}
        >
          {isCardClicked.map((clicked, index) => (
            <Grid item md={6} sm={12} xs={12} key={index}>
              <Card
                sx={{
                  ...cardStyle,
                  borderColor: clicked ? "#F7941D" : "transparent", // Add red border if clicked
                }}
                onClick={() => handleCardClick(index)}
              >
                <CardActionArea>
                  <img
                    component="img"
                    src={Personimage}
                    style={{ margin: "auto" }}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "600", color: "#000000" }}
                    >
                      Anna Merry
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo con exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo con
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      sx={{ textAlign: "center", color: "#7F7F7F" }}
                    >
                      23rd Oct, 2023
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <KeyboardBackspaceIcon
              sx={{ color: "#7F7F7F", fontSize: "40px" }}
            />
            <ArrowRightAltIcon sx={{ color: "#F7941D", fontSize: "60px" }} />
          </Stack>
        </Grid>
      </Grid>
      <Divider
        variant="inset"
        sx={{
          marginX: { md: "50px", sm: "0px", xs: "0px" },
          marginTop: "20px",
        }}
      />
    </Box>
  );
}
