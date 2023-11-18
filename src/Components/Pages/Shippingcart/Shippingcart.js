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
import CardMedia from '@mui/material/CardMedia';
import Callsupport from "../../Callsupport/Callsupport";


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
      color: "#7F7F7F",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(even)": {
      backgroundColor: 'white',
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
      <Stack direction={{ xs: 'column', sm: 'row' ,md: 'row' }} spacing={1}>
         <Card>
         <CardMedia
        component="img"
        image={Redwatch}
        style={{ width: "100%", height: "80px"}} alt="Paella dish" />
        </Card>
        <Typography sx={{ fontSize:{ md:'15px',sm:'13px',xs:'10px'}}} >
          Samsung - Galaxy <br /> S6 4G
        </Typography>
      </Stack>,
      "Hype Mart",
      <Box>
      <Grid
      container
      spacing={2}>
      <Grid
        lg={6}
        md={12}
        sm={12}
        xs={12} sx={{border:'2px solid #D5D5D5',borderRadius:'40px',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
       <Card sx={Shippingstyle.quantitystyle}  >
          <RemoveIcon onClick={handleDecrease} sx={{ color: "#7F7F7F" }} />
        </Card>
      
        <Divider orientation="vertical"   sx={{paddingRight:{md:'10px',sm:'10px',xs:'8px'}}}  flexItem />
        <Card sx={Shippingstyle.quantitystyle} >
          <Typography
            sx={{
              color: "#0a202d",
              fontSize: {md:"14px",sm:'20px',xs:'15px'},
              fontWeight: "bold",
            }}>
            {updateDisplay()}
          </Typography>
        </Card>
   <Divider orientation="vertical"   sx={{paddingRight:{md:'10px',sm:'10px',xs:'8px'}}}   flexItem />
       <Card
          sx={Shippingstyle.quantitystyle} >
          <AddIcon onClick={handleIncrease} sx={{ color: "#7F7F7F" }} />
        </Card>
            </Grid>
      </Grid>
    </Box>,
        <Typography  sx={{color:'#F7941D',fontWeight:'500'}}> $356,68.97
      </Typography>
    ),
    createData(
      <Stack direction={{ xs: 'column', sm: 'row' ,md: 'row' }} spacing={1}>
         <Card>
         <CardMedia
        component="img"
        image={Redwatch}
        style={{ width: "100%", height: "80px"}} alt="Paella dish" />
        </Card>
        <Typography sx={{ fontSize:{ md:'15px',sm:'13px',xs:'10px'}}} >
          Samsung - Galaxy <br /> S6 4G
        </Typography>
      </Stack>,
      "Hype Mart",
      <Box>
      <Grid
      container
      spacing={2}>
      <Grid
        lg={6}
        md={12}
        sm={12}
        xs={12} sx={{border:'2px solid #D5D5D5',borderRadius:'40px',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
       <Card sx={Shippingstyle.quantitystyle}  >
          <RemoveIcon onClick={handleDecrease} sx={{ color: "#7F7F7F" }} />
        </Card>
      
        <Divider orientation="vertical"   sx={{paddingRight:{md:'10px',sm:'10px',xs:'8px'}}}  flexItem />
        <Card sx={Shippingstyle.quantitystyle} >
          <Typography
            sx={{
              color: "#0a202d",
              fontSize: {md:"14px",sm:'20px',xs:'15px'},
              fontWeight: "bold",
            }}>
            {updateDisplay()}
          </Typography>
        </Card>
   <Divider orientation="vertical"   sx={{paddingRight:{md:'10px',sm:'10px',xs:'8px'}}}   flexItem />
       <Card
          sx={Shippingstyle.quantitystyle} >
          <AddIcon onClick={handleIncrease} sx={{ color: "#7F7F7F" }} />
        </Card>
            </Grid>
      </Grid>
    </Box>,
        <Typography  sx={{color:'#F7941D',fontWeight:'500'}}> $356,68.97
      </Typography>
    ),
     createData(
      <Stack direction={{ xs: 'column', sm: 'row' ,md: 'row' }} spacing={1}>
         <Card>
         <CardMedia
        component="img"
        image={Redwatch}
        style={{ width: "100%", height: "80px"}} alt="Paella dish" />
        </Card>
        <Typography sx={{ fontSize:{ md:'15px',sm:'13px',xs:'10px'}}} >
          Samsung - Galaxy <br /> S6 4G
        </Typography>
      </Stack>,
      "Hype Mart",
      <Box>
      <Grid
      container
      spacing={2}>
      <Grid
        lg={6}
        md={12}
        sm={12}
        xs={12} sx={{border:'2px solid #D5D5D5',borderRadius:'40px',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
       <Card sx={Shippingstyle.quantitystyle}  >
          <RemoveIcon onClick={handleDecrease} sx={{ color: "#7F7F7F" }} />
        </Card>
      
        <Divider orientation="vertical"   sx={{paddingRight:{md:'10px',sm:'10px',xs:'8px'}}}  flexItem />
        <Card sx={Shippingstyle.quantitystyle} >
          <Typography
            sx={{
              color: "#0a202d",
              fontSize: {md:"14px",sm:'20px',xs:'15px'},
              fontWeight: "bold",
            }}>
            {updateDisplay()}
          </Typography>
        </Card>
   <Divider orientation="vertical"   sx={{paddingRight:{md:'10px',sm:'10px',xs:'8px'}}}   flexItem />
       <Card
          sx={Shippingstyle.quantitystyle} >
          <AddIcon onClick={handleIncrease} sx={{ color: "#7F7F7F" }} />
        </Card>
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
        sx={{ marginTop: { md: "10px", sm: "40px", xs: "20px"},paddingX: "25px" }}>
        <Grid
          item
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{ marginBottom: "17px"}}  >
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
          
                <Table 
                sx={{
                  '& .MuiTableCell-sizeMedium': {
                    padding:{md: '20px ',sm:'16px',xs:'12px'},
                  },
                }}
                
                aria-label="a dense table">
                  <TableHead
                    sx={{ fontSize: { md: "18px", sm: "18px", xs: "12px" } }}
                  >
                    <TableRow>
                      <StyledTableCell>
                        Product{" "}
                      </StyledTableCell>
                      <StyledTableCell>Store</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell align="center" > Total</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.name}>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell>{row.calories}</StyledTableCell>
                        <StyledTableCell>{row.fat}</StyledTableCell>
                        <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
                <Divider/>
            
          <Grid container spacing={2} sx={{paddingX:'40px',paddingBottom:"20px"}}>
                <Grid
                  item
                  xs={12} sx={{display:'flex',justifyContent:'end'}}>
                 <Typography  sx={{fontWeight:'600',color:'#000000',fontSize:'18px',paddingRight:'40px'}}>Cart Totals</Typography>
                 <Typography sx={{color:'#F7941D',fontWeight:'600',fontSize:'16px'}}>$1,591.00</Typography>
                       </Grid>
                       <Button variant="contained" size="large" sx={{marginTop:'10px',fontSize:'12px',color:'white',marginLeft:"auto", borderRadius: '40px',
                      paddingX: { md: "30px", sm: "15px", xs: "10px" }}}>   Proceed to Check Out
                       </Button>
                    </Grid>
             
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Callsupport/>
     
    </Box>
  );
};

export default Dashboard;
