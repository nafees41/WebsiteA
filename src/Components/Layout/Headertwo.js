import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Logo from "../images/logo.png";
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Stack } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import { List, ListItem, ListItemText } from "@mui/material";

function TopNavbar() {
  const textFieldStyle = {
    backgroundColor: "#C8C2C2",

    "& input::placeholder": {
      color: "black", // Change this to your desired placeholder text color
    },
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = useState("");
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const options = [
    "All Category",
    "Electronis",
    "Twenty",
    "Thirty",
    "Electronis",
    "Twenty",
    "Thirty",
    "Ten",
    "Twenty",
    "Thirty",
  ];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (value) => {
    setAge(value);
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={2}
              sx={{
                paddingX: { md: "60px", sm: "0px", xs: "0px" },
                paddingBottom: "25px",
                marginTop: "10px",
              }}
            >
              <Grid item md={7} sm={12} xs={12}>
                <img src={Logo} style={{ width: "20%" }} />
              </Grid>
              <Grid
                item
                md={5}
                sm={12}
                xs={12}
                sx={{
              
                  marginLeft: "auto",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: 0,
                    backgroundColor: "#F7F7F7",
                    display: "flex",
                    borderRadius: 7,
                    border:'2px solid #D9D9D9',
                  }}
                >
                  <FormControl
                    sx={{ m: 1, minWidth: { md: 140, sm: 100, xs: 110 } }}
                    size="small"
                  >
                    <div>
                      <div ref={anchorRef}>
                        <Typography
                          variant="body2"
                          sx={{
                            display: "inline-block",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#7F7F7F",
                            margin: "7px",
                            fontSize:'12px'
                          }}
                          onClick={handleToggle}
                        >
                          {age || "Select Category"}
                          <ArrowDropDownIcon />
                        </Typography>
                      </div>
                      <Popper
                        open={open}
                        anchorEl={anchorRef.current}
                        placement="bottom-start"
                      >
                        <Paper
                          sx={{
                            maxHeight: "200px",
                            overflowY: "scroll",
                            "&::-webkit-scrollbar": {
                              width: "6px",
                            },
                            "&::-webkit-scrollbar-thumb": {
                              background: "#F7941D",
                              borderRadius: "10px",
                            },
                          }}
                        >
                          <List>
                            {options.map((option, index) => (
                              <ListItem
                                button
                                key={option}
                                onClick={() => handleMenuItemClick(option)}
                              >
                                <ListItemText primary={option} />
                              </ListItem>
                            ))}
                          </List>
                        </Paper>
                      </Popper>
                    </div>
                    <Popper
                      open={age !== null}
                      role={undefined}
                      transition
                      style={{ overflowX: "auto" }}
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper>{/* Your Select menu items */}</Paper>
                        </Grow>
                      )}
                    </Popper>
                  </FormControl>

                  <Divider orientation="vertical" variant="middle" flexItem />

                  <TextField
                    id="search"
                    variant="outlined"
                    placeholder="What you looking for ?"
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    }}
                  />

                  <IconButton
                    type="submit"
                    sx={{
                      color: "#fff",
                      background: "#F7941D",
                      paddingX: { md: "34px", sm: "25px", xs: "20px" },
                      paddingY: { md: "16px", sm: "0px", xs: "0px" },
                      borderRadius: { md: 7, sm: 10, xs: 20 },
                      "&:hover": {
                        background: "#F7941D",
                      },
                      "&:focus": {
                        outline: 0,
                        boxShadow: "none",
                      },
                    }}
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default TopNavbar;
