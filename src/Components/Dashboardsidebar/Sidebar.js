import React, { useState } from "react";
import { Box, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
import Redwatch from "../../Components/images/dashboardprofile.png";


export default function PermanentDrawerLeft({ children }) {
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const StyledList = styled(List)`
  && .Mui-selected,

  && .Mui-selected:hover {
    background-color: transparent;
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
    <Box >
    <StyledList >
      <List sx={{backgroundColor:'white',border: (theme) => `2px solid ${theme.palette.divider}`,marginX:{md:'50px',sm:'30px',xs:'20px'},borderRadius:'15px'}}>
      
      <Stack direction={{ xs: 'column', sm: 'row' ,md: 'row' }}  justifyContent="center"
  alignItems="center" spacing={1}>
         <Card sx={{backgroundColor:'transparent',boxShadow:'0px 0px 0px 0px'}}>
         <CardMedia
        component="img"
        image={Redwatch}
        style={{ width: "100%"}} alt="Paella dish" />
        </Card>
        <Typography sx={{ fontSize:{ md:'17px',sm:'13px',xs:'10px'},fontWeight:'600'}} >
         NAFEES UR REHMAN
        </Typography>
      </Stack>,
      <Divider/>
      
        <CustomListItem
          to="/securitypage"
          primary={
            <Typography
              sx={{
                color: selectedIndex === 1 ? "black" : "theme.blue", // Set the text color to white when selected
                fontWeight: "400",
                fontSize: { md: "17px", sm: "15px", xs: "12px" },
                 
              }}
            >
              Dashboard
            </Typography>
          }
        />
        <CustomListItem
          to="/Editprofile"
          primary={<Typography >Edit Profile</Typography>}
        />

        <CustomListItem
          to="/orderhistory"
          primary={<Typography >Order History</Typography>}
        />

        <CustomListItem
          to="/forgotpassword"
          primary={<Typography >Change Password</Typography>}
        />

        <CustomListItem
          to="/contact"
          primary={<Typography >Log Out</Typography>}
        />
      </List>
    </StyledList>
    </Box>
  );
}
