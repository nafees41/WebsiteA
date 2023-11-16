import React, { useState } from "react";
import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ListItemIcon from "@mui/material/ListItemIcon";
import theme from "../Theme/Theme";

export default function PermanentDrawerLeft({ children }) {
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const StyledList = styled(List)`
  && .Mui-selected,
  && .Mui-selected:hover {
    background-color:white;
       color:#F7941D;

    & .MuiListItemIcon-root,
    & .MuiTypography-root {
      color: #F7941D; // Set the text color to white when selected
    }

    @media (max-width: 600px) {
      width: 100%; // Change width to 50% for screens with a maximum width of 600px (extra small screens)
    },

  }
`;

  const CustomListItem = ({ to, primary }) => (
    <ListItem
      button
      component={Link}
      to={to}
      selected={
        to === location.pathname ||
        (to === "/" && location.pathname === "/default-route")
      }
      onClick={() => setIsClicked(!isClicked)}
    >
      <ListItemText primary={primary} />
    </ListItem>
  );

  return (
    <StyledList>
      <List>
        <CustomListItem
          to="/securitypage"
          primary={
            <Typography
              sx={{
                color: selectedIndex === 1 ? "black" : "theme.blue", // Set the text color to white when selected
                fontFamily: ["Poppins", "sans-serif"],
                fontWeight: "400",
                fontSize: { md: "17px", sm: "15px", xs: "12px" },
                 paddingX: { lg: "50px", md: "70px", sm: "50px", xs: "20px" }
              }}
            >
              Dashboard
            </Typography>
          }
        />
        <CustomListItem
          to="/Login"
          primary={<Typography sx={{ paddingX: { lg: "50px", md: "70px", sm: "50px", xs: "20px" }}}>Edit Profile</Typography>}
        />

        <CustomListItem
          to="/"
          primary={<Typography sx={{ paddingX: { lg: "50px", md: "70px", sm: "50px", xs: "20px" }}}>Order History</Typography>}
        />

        <CustomListItem
          to="/forgotpassword"
          primary={<Typography sx={{ paddingX: { lg: "50px", md: "70px", sm: "50px", xs: "20px" }}}>Change Password</Typography>}
        />

        <CustomListItem
          to="/contact"
          primary={<Typography sx={{ paddingX: { lg: "50px", md: "70px", sm: "50px", xs: "20px" }}}>Log Out</Typography>}
        />
      </List>
    </StyledList>
  );
}
