import React from "react";
import { createTheme } from "@mui/material/styles";
import { Box, Grid, Typography,Table,Button, TableBody,TableCell,tableCellClasses,TableContainer,TableHead,
  TableRow,Paper
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Theme from "../../Theme/Theme";

const Dashboard = () => {
  const theme = createTheme({
    components: {
      MuiTabs: {
        styleOverrides: {
          indicator: {
            backgroundColor: "white",
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
      backgroundColor:'white',
      color: '#7F7F7F',
      fontWeight: "600"
        },
    [`&.${tableCellClasses.body}`]: {
      fontSize: {md:14,sm:'18px',xs:'10px'},
          color: Theme.blue,
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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData(
      "April 9, 2023",
      "Hype Mart",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),
    createData(
      "April 9, 2023",
      "Hype Mart",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),
    createData(
      "April 9, 2023",
      "Hype Mart",
      "I will do Dubbing Artist",
      "$829",
      "$829"
    ),


  ];

  console.log(theme);
  return (
    <div className='overlay' >  
    <div className='element' >
    <Box >
      <Grid container spacing={2} sx={{  marginTop: {md:"90px",sm:'40px',xs:'20px'}  }}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ marginBottom: "17px", paddingX: "20px" }} >
          <Typography
            component="h1"
            variant="h5"
            sx={{
              marginTop: { md: 2, sm: 2, xs: 1 },
              color: Theme.blue,
              fontWeight: "600",
              fontSize: { lg: "33px", md: "38px", sm: "30px", xs: "25px" },
              paddingLeft: { lg: "45px", md: "80px", sm: "80px", xs: "40px" }  ,marginTop: "20px" }}> Shopping Cart  </Typography>

          <Grid
            item
            container
            sx={{ color: "#110229", marginTop: "40px", marginBottom: "20px" }}
          >
            <Grid item md={11} sm={12} xs={12}   sx={{marginLeft:{lg:'auto',md:'auto',sm:'auto',xs:'0'},marginRight:{lg:'auto',md:'auto',sm:'auto',xs:'0'}}}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 100 }}  aria-label="a dense table">
                  <TableHead sx={{ fontSize:{md:"25px",sm:'18px',xs:'12px'}}}>
                    <TableRow>
                      <StyledTableCell align="center"> Product </StyledTableCell>
                      <StyledTableCell align="center">Store</StyledTableCell>
                      <StyledTableCell align="center">Quantity</StyledTableCell>
                      <StyledTableCell align="center"> Total</StyledTableCell>
                      <StyledTableCell align="center">
                        Amount Received
                      </StyledTableCell>
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
              </TableContainer>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Box>
    </div>
    </div>
  );
};

export default Dashboard;
