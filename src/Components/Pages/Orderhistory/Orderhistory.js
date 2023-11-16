import React from "react";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import Leftsidebar from "../../Dashboardsidebar/Sidebar";
import { Button,Table,Box, Grid, Typography,TableBody ,TableCell, tableCellClasses,
  TableContainer,TableHead,TableRow,Paper, Divider 
 } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const Orderrecord = () => {
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "#2E3192",
            height: 3,
            color: "#2E3192",
            fontWeight: "bold",
          },
        },
      },
    },
  });
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: 'white',
      color: "black",
      fontWeight: "600"
        },
    [`&.${tableCellClasses.body}`]: {
      fontSize: {md:14,sm:'18px',xs:'10px'},
          color:'black',
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "white",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  function createData(name, calories, fat, carbs,protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "April 9, 2023",
      "Dubbing Artist",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),
    createData(
      "April 9, 2023",
      "Dubbing Artist",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),
    createData(
      "April 9, 2023",
      "Dubbing Artist",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),
    createData(
      "April 9, 2023",
      "Dubbing Artist",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),
    createData(
      "April 9, 2023",
      "Dubbing Artist",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),
    createData(
        "April 9, 2023",
        "Dubbing Artist",
        "I will do Dubbing Artist",
        "$829",
        "$829"
      ),
      createData(
        "April 9, 2023",
        "Dubbing Artist",
        "I will do Dubbing Artist",
        "$829",
        "$829"
      ),
  ];

  console.log(theme);
  return (

    <Box>
      <Grid container spacing={2} sx={{marginTop: {md:"50px",sm:'40px',xs:'20px'}  }}>
        <Grid item lg={3} md={12} sm={12} xs={11} sx={{border: (theme) => `1px solid ${theme.palette.divider}`}}>
          <Grid
            container
            spacing={2}>
            <Grid xs={12} sx={{ marginTop: "20px" ,}}>
              <Leftsidebar />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={9}
          md={12}
          sm={12}
          xs={12}
          sx={{ marginBottom: "17px", paddingX: "20px"}} >


          <Grid
            item
            container
            sx={{ color: "#110229", marginTop: "20px", marginBottom: "20px",border: (theme) => `1px solid ${theme.palette.divider}` }}
          >
            <Grid item md={11} sm={12} xs={12}   sx={{marginLeft:{lg:'auto',md:'auto',sm:'auto',xs:'0'},marginRight:{lg:'auto',md:'auto',sm:'auto',xs:'0'}}}>
            <Typography
            component="h1"
            variant="h5"
            sx={{
              marginTop: { md: 1, sm: 2, xs: 1 },
              color: 'black',
              fontWeight: "600",
              fontSize: { lg: "33px", md: "38px", sm: "30px", xs: "25px" },
              paddingLeft: { lg: "45px", md: "80px", sm: "80px", xs: "40px" }  ,marginTop: "20px" }}> Order History  </Typography>
              <Divider/>
        
              <Table sx={{ minWidth: 100 }}  aria-label="a dense table">
                  <TableHead sx={{ fontSize:{md:"25px",sm:'18px',xs:'12px'}}}>
                    <TableRow>
                      <StyledTableCell align="center"> Orders </StyledTableCell>
                      <StyledTableCell align="center">Date</StyledTableCell>
                      <StyledTableCell align="center">Status</StyledTableCell>
                      <StyledTableCell align="center"> Items</StyledTableCell>
                      <StyledTableCell align="center"> Payment </StyledTableCell>

                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell align="center">
                         {row.name}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.calories}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.fat}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.carbs}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.protein}
                        </StyledTableCell>
                    
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  
  );
};

export default Orderrecord ;
