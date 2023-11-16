import React from "react";
import { createTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Typography,
  Table,
  Button,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,Divider
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import Redwatch from "../../images/redwatch.png";
import Stack from "@mui/material/Stack";
import Shippingstyle from './Shoppingcart.style'

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
      backgroundColor: "white",
      color: "#7F7F7F",
      fontWeight: "600",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: { md: 10, sm: "18px", xs: "10px" },
      color: "#7F7F7F",
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

  const [number, setNumber] = useState(0);

  // Function to update the display with the current number
  const updateDisplay = () => {
    return number;
  };

  // Event handler for decreasing the number
  const handleDecrease = () => {
    setNumber(number - 1);
  };
  // Event handler for increasing the number
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const rows = [
    createData(
      <Stack direction="row" spacing={1}>
        <img src={Redwatch} style={{ width: "20%", height: "50px" }} />
        <Typography>
          Samsung - Galaxy <br /> S6 4G
        </Typography>
      </Stack>,
      "Hype Mart",
      <Box>
      <Grid
      container
      spacing={2}>
      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xs={12} sx={{border:'2px solid #D5D5D5',borderRadius:'40px',textAlign:'center'}} >
       <Grid
      container
      spacing={2} >
      <Grid
          item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
             <Card sx={Shippingstyle.quantitystyle}  >
          <RemoveIcon onClick={handleDecrease} sx={{ color: "#7F7F7F" }} />
        </Card>
         </Grid>
        <Divider orientation="vertical"   sx={{paddingRight:'10px'}}  flexItem />
        <Grid
           item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
          <Card sx={Shippingstyle.quantitystyle} >
          <span
            style={{
              color: "#0a202d",
              fontSize: "14px",
              fontWeight: "bold",
            }}>
            {updateDisplay()}
          </span>
        </Card>
        </Grid>
        <Divider orientation="vertical"   sx={{paddingRight:'10px'}} flexItem />
        <Grid
            item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
        <Card
          sx={Shippingstyle.quantitystyle} >
          <AddIcon onClick={handleIncrease} sx={{ color: "#7F7F7F" }} />
        </Card>
        </Grid>
      </Grid>
      </Grid>
          </Grid>

      </Box>,
        <Typography  sx={{color:'#F7941D',fontWeight:'500'}}> $356,68.97
      </Typography>
    ),
    createData(
      <Stack direction="row" spacing={1}>
        <img src={Redwatch} style={{ width: "20%", height: "50px" }} />
        <Typography>
          Samsung - Galaxy <br /> S6 4G
        </Typography>
      </Stack>,
      "Hype Mart",
      <Box>
      <Grid
      container
      spacing={2}>
      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xs={12} sx={{border:'2px solid #D5D5D5',borderRadius:'40px',textAlign:'center'}} >
       <Grid
      container
      spacing={2} >
      <Grid
          item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
             <Card sx={Shippingstyle.quantitystyle}  >
          <RemoveIcon onClick={handleDecrease} sx={{ color: "#7F7F7F" }} />
        </Card>
         </Grid>
        <Divider orientation="vertical"   sx={{paddingRight:'10px'}}  flexItem />
        <Grid
           item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
          <Card sx={Shippingstyle.quantitystyle} >
          <span
            style={{
              color: "#0a202d",
              fontSize: "14px",
              fontWeight: "bold",
            }}>
            {updateDisplay()}
          </span>
        </Card>
        </Grid>
        <Divider orientation="vertical"   sx={{paddingRight:'10px'}} flexItem />
        <Grid
            item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
        <Card
          sx={Shippingstyle.quantitystyle} >
          <AddIcon onClick={handleIncrease} sx={{ color: "#7F7F7F" }} />
        </Card>
        </Grid>
      </Grid>
      </Grid>
          </Grid>

      </Box>,
        <Typography  sx={{color:'#F7941D',fontWeight:'500'}}> $356,68.97
      </Typography>
    ),
    createData(
      <Stack direction="row" spacing={1}>
        <img src={Redwatch} style={{ width: "20%", height: "50px" }} />
        <Typography>
          Samsung - Galaxy <br /> S6 4G
        </Typography>
      </Stack>,
      "Hype Mart",
      <Box>
      <Grid
      container
      spacing={2}>
      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xs={12} sx={{border:'2px solid #D5D5D5',borderRadius:'40px',textAlign:'center'}} >
       <Grid
      container
      spacing={2} >
      <Grid
          item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
             <Card sx={Shippingstyle.quantitystyle}  >
          <RemoveIcon onClick={handleDecrease} sx={{ color: "#7F7F7F" }} />
        </Card>
         </Grid>
        <Divider orientation="vertical"   sx={{paddingRight:'10px'}}  flexItem />
        <Grid
           item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
          <Card sx={Shippingstyle.quantitystyle} >
          <span
            style={{
              color: "#0a202d",
              fontSize: "14px",
              fontWeight: "bold",
            }}>
            {updateDisplay()}
          </span>
        </Card>
        </Grid>
        <Divider orientation="vertical"   sx={{paddingRight:'10px'}} flexItem />
        <Grid
            item
        lg={3}
        md={12}
        sm={12}
        xs={12} >
        <Card
          sx={Shippingstyle.quantitystyle} >
          <AddIcon onClick={handleIncrease} sx={{ color: "#7F7F7F" }} />
        </Card>
        </Grid>
      </Grid>
      </Grid>
          </Grid>

      </Box>,
        <Typography  sx={{color:'#F7941D',fontWeight:'500'}}> $356,68.97
      </Typography>
    ),
];
  return (
    <Box>
      <Grid
        container
        spacing={2}
        sx={{ marginTop: { md: "10px", sm: "40px", xs: "20px"}}}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ marginBottom: "17px", paddingX: "20px" }}  >
          <Typography
            component="h1"
            variant="h5"
            sx={Shippingstyle.Shippingheading} > Shopping Cart
          </Typography>
        <Grid item container sx={{marginTop: "10px" }}>
            <Grid
              item
              md={11}
              sm={12}
              xs={12}
              sx={ Shippingstyle.Tablecontainer}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="a dense table">
                  <TableHead
                    sx={{ fontSize: { md: "18px", sm: "18px", xs: "12px" } }}
                  >
                    <TableRow>
                      <StyledTableCell>
                        {" "}
                        Product{" "}
                      </StyledTableCell>
                      <StyledTableCell>Store</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell > Total</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell>{row.calories}</StyledTableCell>
                        <StyledTableCell>{row.fat}</StyledTableCell>
                        <StyledTableCell>{row.carbs}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
          <Grid container spacing={2} sx={{padding:'10px'}}>
                <Grid
                  item
                  xs={12} sx={{display:'flex',justifyContent:'end'}}>
                 <Typography  sx={{fontWeight:'600',color:'#000000',fontSize:'22px',paddingRight:'40px'}}>Cart Totals:</Typography>
                 <Typography sx={{color:'#F7941D',fontWeight:'600',fontSize:'16px'}}>$1,591.00</Typography>
                       </Grid>
                    </Grid>
                {/* <Button variant="contained" size="small" sx={{fontSize:'12px',color:'white'}}>   Proceed to Check Out
                  </Button> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
     
    </Box>
  );
};

export default Dashboard;
