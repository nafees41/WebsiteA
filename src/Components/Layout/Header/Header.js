import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import Headertwo from "../Headertwo";
import { Popover, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import Saleimage1 from "../../images/Saleimage1.png";
import Saleimage2 from "../../images/Saleimage2.png";
import { Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StayCurrentPortraitIcon from "@mui/icons-material/StayCurrentPortrait";
import HouseIcon from "@mui/icons-material/House";
import AirplayIcon from "@mui/icons-material/Airplay";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import Headerstyle from "../Header/Header.style";
import {  InputAdornment } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`v-pills-${index}`}
      aria-labelledby={`v-pills-${index}-tab`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

function Header() {
  const navItems = [
    "Home",
    "About",
    "Shop Now",
    "Flash Deals",
    "Daily Deals",
    "Contact",
    "Create Account",
  ];
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [megaMenuAnchorEl, setMegaMenuAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMegaMenuAnchorEl(null);
  };
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div>
        <button
          variant="contained"
          onClick={handleOpen}
          className="all-categories-button global-button-style"
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <MenuIcon className="icon" />
          All Categories
        </button>
        <Popover
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "right",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "right",
            horizontal: "left",
          }}
          sx={{
            ".css-3bmhjh-MuiPaper-root-MuiPopover-paper": {
              backgroundColor: "transparent",
              boxShadow: "0px 0px 0px 0px",
            },
          }}
        >
          <Box>
            <div style={{ display: "flex" }}>
              {/* Left Card (Tab List) */}
              <div
                style={{
                  flex: 1,
                  marginRight: "20px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                <Tabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  id="v-pills-tab"
                >
                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <LaptopChromebookIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Laptop and Mac
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />
                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <StayCurrentPortraitIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Mobile & Tablet
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />
                  <Divider />
                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <HouseIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Home Devices
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />

                  <Divider />

                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <FitnessCenterIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Fitness and Fitness
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />
                  <Divider />

                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <LaptopChromebookIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "15px" }}>
                            TV & Audio
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />
                  <Divider />

                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <AirplayIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Game & Toys
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />
                  <Divider />

                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <LaptopChromebookIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "12px" }}>
                            Accessories
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />
                  <Divider />

                  <Tab
                    label={
                      <div>
                        <Stack direction="row" spacing={2}>
                          <SettingsIcon sx={{ color: "#7F7F7F" }} />
                          <Typography sx={{ fontSize: "16px" }}>
                            Settings
                          </Typography>
                          <ChevronRightIcon />
                        </Stack>
                      </div>
                    }
                    id="v-pills-messages-tab"
                    aria-controls="v-pills-messages"
                  />
                  <Divider />
                </Tabs>
              </div>

              {/* Right Card (Tab Content) */}
              <div
                style={{
                  flex: 4,
                  border: "1px solid white",
                  borderRadius: "5px",
                  padding: "20px",
                  backgroundColor: "white",
                }}
              >
                <TabPanel value={value} index={0}>
                  <Grid
                    spacing={2}
                    container
                    sx={{ marginTop: "30px", paddingX: "20px" }}
                  >
                    <Grid md={3} sm={4} xs={6}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "black",
                          fontFamily: ["Poppins", "sans-serif"],
                          fontWeight: "600",
                          lineHeight: {
                            md: "25.5px",
                            sm: "18px",
                            xs: "15px",
                          },
                          fontSize: {
                            md: "18px",
                            sm: "12px",
                            xs: "10px",
                          },
                          color: "#F7941D",
                        }}
                      >
                        Contact
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        About Us
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        Leadership
                      </Typography>
                      <Typography variant="subtitle1">
                        Investor Relations
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        Careers
                      </Typography>

                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        Contact Us
                      </Typography>
                    </Grid>

                    <Grid md={3} sm={4} xs={6}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "black",
                          fontFamily: ["Poppins", "sans-serif"],
                          fontWeight: "600",
                          lineHeight: {
                            md: "25.5px",
                            sm: "18px",
                            xs: "15px",
                          },
                          fontSize: {
                            md: "18px",
                            sm: "12px",
                            xs: "10px",
                          },
                          color: "#F7941D",
                        }}
                      >
                        Top Categories
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        About Us
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        Leadership
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        Investor Relations
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        Careers
                      </Typography>

                      <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                        Contact Us
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <img src={Saleimage1} />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Content for Profile tab
                </TabPanel>
                <TabPanel value={value} index={2}>
                  Content for Messages tab
                </TabPanel>
                <TabPanel value={value} index={3}>
                  Content for Settings tab
                </TabPanel>
                <TabPanel value={value} index={4}>
                  Content for Profile tab
                </TabPanel>
                <TabPanel value={value} index={5}>
                  Content for Messages tab
                </TabPanel>
                <TabPanel value={value} index={6}>
                  Content for Settings tab
                </TabPanel>
                <TabPanel value={value} index={7}>
                  Content for Profile tab
                </TabPanel>
                <TabPanel value={value} index={8}>
                  Content for Messages tab
                </TabPanel>
                <TabPanel value={value} index={9}>
                  Content for Settings tab
                </TabPanel>
              </div>
            </div>
          </Box>
        </Popover>

        <Popover
          open={Boolean(megaMenuAnchorEl)}
          anchorEl={megaMenuAnchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right", // Change this to "right"
          }}
          transformOrigin={{
            vertical: "right",
            horizontal: "left",
          }}
          sx={{
            marginLeft: "30px", // Add spacing here
          }}
        >
          <Grid
            spacing={2}
            container
            sx={{
              marginTop: "30px",
              paddingX: "20px",
              backgroundColor: "white",
            }}
          >
            <Grid md={3} sm={4} xs={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  fontFamily: ["Poppins", "sans-serif"],
                  fontWeight: "600",
                  lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                  fontSize: { md: "18px", sm: "12px", xs: "10px" },
                  color: "#F7941D",
                }}
              >
                Contact
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                About Us
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Leadership
              </Typography>
              <Typography variant="subtitle1">Investor Relations</Typography>
              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Careers
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Contact Us
              </Typography>
            </Grid>

            <Grid md={3} sm={4} xs={6}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  fontFamily: ["Poppins", "sans-serif"],
                  fontWeight: "600",
                  lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                  fontSize: { md: "18px", sm: "12px", xs: "10px" },
                  color: "#F7941D",
                }}
              >
                Top Categories
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                About Us
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Leadership
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Investor Relations
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Careers
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                Contact Us
              </Typography>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <img src={Saleimage1} />
              <img src={Saleimage2} />
            </Grid>
          </Grid>
        </Popover>
      </div>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Headertwo />
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#F7941D",
          boxShadow: "0px 0px 0px 0px",
          paddingX: "75px",
        }}
      >
        <Toolbar disableGutters variant="dense">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleDrawerToggle}
            color="inherit"
            sx={{ display: { lg: "none", xs: "flex" } }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleOpen}
              className="global-button-style"
              sx={Headerstyle.allCategoriesButton}
            >
              <MenuIcon sx={Headerstyle.icon} />
              All Categories
            </Button>
            <Popover
              open={Boolean(anchorEl)}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              sx={{
                ".css-3bmhjh-MuiPaper-root-MuiPopover-paper": {
                  backgroundColor: "transparent",
                  boxShadow: "0px 0px 0px 0px",
                },
              }}
            >
              <Box>
                <div style={{ display: "flex" }}>
                  {/* Left Card (Tab List) */}
                  <div
                    style={{
                      flex: 1,
                      marginRight: "20px",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: "white",
                    }}
                  >
                    <Tabs
                      orientation="vertical"
                      value={value}
                      onChange={handleChange}
                      aria-label="Vertical tabs example"
                      id="v-pills-tab"
                    >
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <LaptopChromebookIcon sx={{ color: "#7F7F7F" }} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Laptop and Mac
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <StayCurrentPortraitIcon
                                sx={{ color: "#7F7F7F" }}
                              />
                              <Typography sx={{ fontSize: "12px" }}>
                                Mobile & Tablet
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />
                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <HouseIcon sx={{ color: "#7F7F7F" }} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Home Devices
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />

                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <FitnessCenterIcon sx={{ color: "#7F7F7F" }} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Fitness and Fitness
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <LaptopChromebookIcon sx={{ color: "#7F7F7F" }} />
                              <Typography sx={{ fontSize: "15px" }}>
                                TV & Audio
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <AirplayIcon sx={{ color: "#7F7F7F" }} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Game & Toys
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <LaptopChromebookIcon sx={{ color: "#7F7F7F" }} />
                              <Typography sx={{ fontSize: "12px" }}>
                                Accessories
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />

                      <Tab
                        label={
                          <div>
                            <Stack direction="row" spacing={2}>
                              <SettingsIcon sx={{ color: "#7F7F7F" }} />
                              <Typography sx={{ fontSize: "16px" }}>
                                Settings
                              </Typography>
                              <ChevronRightIcon />
                            </Stack>
                          </div>
                        }
                        id="v-pills-messages-tab"
                        aria-controls="v-pills-messages"
                      />
                      <Divider />
                    </Tabs>
                  </div>

                  {/* Right Card (Tab Content) */}
                  <div
                    style={{
                      flex: 4,
                      border: "1px solid white",
                      borderRadius: "5px",
                      padding: "20px",
                      backgroundColor: "white",
                    }}
                  >
                    <TabPanel value={value} index={0}>
                      <Grid
                        spacing={2}
                        container
                        sx={{ marginTop: "30px", paddingX: "20px" }}
                      >
                        <Grid md={3} sm={4} xs={6}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "black",
                              fontFamily: ["Poppins", "sans-serif"],
                              fontWeight: "600",
                              lineHeight: {
                                md: "25.5px",
                                sm: "18px",
                                xs: "15px",
                              },
                              fontSize: {
                                md: "18px",
                                sm: "12px",
                                xs: "10px",
                              },
                              color: "#F7941D",
                            }}
                          >
                            Contact
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            About Us
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            Leadership
                          </Typography>
                          <Typography variant="subtitle1">
                            Investor Relations
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            Careers
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            Contact Us
                          </Typography>
                        </Grid>

                        <Grid md={3} sm={4} xs={6}>
                          <Typography
                            variant="subtitle1"
                            sx={{
                              color: "black",
                              fontFamily: ["Poppins", "sans-serif"],
                              fontWeight: "600",
                              lineHeight: {
                                md: "25.5px",
                                sm: "18px",
                                xs: "15px",
                              },
                              fontSize: {
                                md: "18px",
                                sm: "12px",
                                xs: "10px",
                              },
                              color: "#F7941D",
                            }}
                          >
                            Top Categories
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            About Us
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            Leadership
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            Investor Relations
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            Careers
                          </Typography>

                          <Typography
                            variant="subtitle1"
                            sx={{ color: "#484444" }}
                          >
                            Contact Us
                          </Typography>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                          <img src={Saleimage1} />
                        </Grid>
                      </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      Content for Profile tab
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      Content for Messages tab
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      Content for Settings tab
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                      Content for Profile tab
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                      Content for Messages tab
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                      Content for Settings tab
                    </TabPanel>
                    <TabPanel value={value} index={7}>
                      Content for Profile tab
                    </TabPanel>
                    <TabPanel value={value} index={8}>
                      Content for Messages tab
                    </TabPanel>
                    <TabPanel value={value} index={9}>
                      Content for Settings tab
                    </TabPanel>
                  </div>
                </div>
              </Box>
            </Popover>

            <Popover
              open={Boolean(megaMenuAnchorEl)}
              anchorEl={megaMenuAnchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right", // Change this to "right"
              }}
              transformOrigin={{
                vertical: "right",
                horizontal: "left",
              }}
              sx={{
                marginLeft: "30px", // Add spacing here
              }}
            >
              <Grid
                spacing={2}
                container
                sx={{
                  marginTop: "30px",
                  paddingX: "20px",
                  backgroundColor: "white",
                }}
              >
                <Grid md={3} sm={4} xs={6}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "black",
                      fontFamily: ["Poppins", "sans-serif"],
                      fontWeight: "600",
                      lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                      fontSize: { md: "18px", sm: "12px", xs: "10px" },
                      color: "#F7941D",
                    }}
                  >
                    Contact
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    Leadership
                  </Typography>
                  <Typography variant="subtitle1">
                    Investor Relations
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    Careers
                  </Typography>

                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    Contact Us
                  </Typography>
                </Grid>

                <Grid md={3} sm={4} xs={6}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "black",
                      fontFamily: ["Poppins", "sans-serif"],
                      fontWeight: "600",
                      lineHeight: { md: "25.5px", sm: "18px", xs: "15px" },
                      fontSize: { md: "18px", sm: "12px", xs: "10px" },
                      color: "#F7941D",
                    }}
                  >
                    Top Categories
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    About Us
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    Leadership
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    Investor Relations
                  </Typography>
                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    Careers
                  </Typography>

                  <Typography variant="subtitle1" sx={{ color: "#484444" }}>
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <img src={Saleimage1} />
                  <img src={Saleimage2} />
                </Grid>
              </Grid>
            </Popover>
          </div>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              display: { lg: "flex", md: "none", sm: "none", xs: "none" },
            }}
          >
            <Box sx={Headerstyle.nav}>
              <Link
                to="/home"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "inherit", // Inherit color from parent (card)
                  display: "block", // Make the link a block element
                }}
              >
                <Typography sx={Headerstyle.navItem}>Home</Typography>
              </Link>
              <Link
                to="/about"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "inherit", // Inherit color from parent (card)
                  display: "block", // Make the link a block element
                }}
              >
                <Typography sx={Headerstyle.navItem}>About</Typography>
              </Link>
              <Link
                to="/product"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "inherit", // Inherit color from parent (card)
                  display: "block", // Make the link a block element
                }}
              >
                <Typography sx={Headerstyle.navItem}>Shop Now</Typography>
              </Link>
              <Link
                to="singleproduct"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "inherit", // Inherit color from parent (card)
                  display: "block", // Make the link a block element
                }}
              >
                <Typography sx={Headerstyle.navItem}>Flash Deals</Typography>
              </Link>
              <Typography sx={Headerstyle.navItem}>Daily Deals</Typography>
              <Link
                to="/contact"
                style={{
                  textDecoration: "none", // Remove underline
                  color: "inherit", // Inherit color from parent (card)
                  display: "block", // Make the link a block element
                }}
              >
                <Typography sx={Headerstyle.navItem}>Contact</Typography>
              </Link>

              <Stack direction="row">
                <Typography
                  variant="subtitle1"
                  sx={{ color: "white", paddingX: "20px", fontSize: "12px" }}
                >
                  Creta an account?
                </Typography>
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none", // Remove underline
                    color: "inherit", // Inherit color from parent (card)
                    display: "block", // Make the link a block element
                  }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className="quote-button global-button-style"
                    sx={Headerstyle.QuoteButton}>Login Account </Button>
               <div>
    </div>
                  </Link>
                <IconButton 
                
                sx={{
               backgroundColor: "#0F75BC", // Change this to your desired background color
               color: "#182733", // Change this to the text color you want
               borderRadius: "23px",
               height: "45.42px",
               width: "50px",
               position:'absolute',
               top:'5px',
               right:'10px',
               '&:hover': {
                backgroundColor: '#0F75BC', // Change this to your desired hover background color
              }}} >
         <ShoppingCartIcon sx={{ color:'white' }} />
           </IconButton>
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
             "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Header;
