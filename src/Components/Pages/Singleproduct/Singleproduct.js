import React, { useState } from 'react';
import './Singleproduct.css'
import Redwatch from '../../images/image 43.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DescriptionSection from './Productdescription/DescriptionSection'
import Featuredcategories from './Featuredcategory/Featured'
import  Featuredcategories2 from '../../Featuredcategory/Featuredcategory' 
import { TextField,Card,Button} from "@mui/material";
import Pinkimage from '../../images/pinkimage.png'
import Headphones  from '../../images/Headphone.png';
import Chairimage  from '../../images/Chair.png';
import greywatchimage  from '../../images/grey watch.jpeg';
import Callsupport from '../../Callsupport/Callsupport';


const SingleProduct = () => {
   
  return (
    <Box>
<Grid container spacing={2} sx={{marginTop:'50px',paddingX:{md:'75px',sm:'30px',xs:'20px'}}}>
        <Grid item md={6} sm={12} xs={12} >
            <Card sx={{display:'flex',justifyContent:'center',border:'1px solid #BEB2B2',borderRadius:'15px',paddingY:'15px'}} >
     <img src= {Redwatch}   />
     </Card>
     <Grid container spacing={2} sx={{marginTop:'20px'}}>
  <Grid item xs={2}>
    <img src={Headphones} style={{width:'100%'}}/>
  </Grid>
  <Grid item xs={2}>
  <img src={ Chairimage} style={{width:'100%'}}/>

  </Grid>
  <Grid item xs={2}>
  <img src={ Chairimage} style={{width:'100%'}}/>

  </Grid>
  <Grid item xs={2}>
  <img src={ Chairimage} style={{width:'100%'}}/>

  </Grid>
  <Grid item xs={2}>
    <img src={Headphones} style={{width:'100%'}}/>
  </Grid>
  <Grid item xs={2}>
  <img src={ Chairimage} style={{width:'100%'}}/>

  </Grid>
</Grid>

     
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
         <div >
          <h2>Apple Iphone 13 Pro Max</h2>
          <hr></hr>
              <table >
                  <tr>
                      <td>Model:</td>
                      <td>Apple Series 8 G3546</td>
                  </tr>
                  <tr>
                      <td>description:</td>
                      <td>Apple Series 8 G3546</td>
                  </tr>
                  <tr>
                      <td>Brand:</td>
                      <td>Apple Series 8 G3546</td>
                  </tr>
                  <tr>
                      <td>Type:</td>
                      <td>Apple Series 8 G3546</td>
                  </tr>
                  <tr>
                      <td>Availabilty:</td>
                      <td>Apple Series 8 G3546</td>
                  </tr>
                  <tr>
                      <td>Size:</td>
                      <td>
                        <button className="size-button " >Small</button>
                        <button className="size-button"  >Medium</button>
                        <button className="size-button" >Large</button>
                    </td>
                  </tr>
                  <tr>
                      <td>Color</td>
                     <td>
                     <div class="checkbox-container">
        <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
        <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
        <label class="container">
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
    </div>
        
                  
              </td>
                  </tr>

              </table>
                  <button  className='order-btn'>Buy Now</button>
                  <button className='order-btn-2'>
                    <img src={Pinkimage}  style={{width:'15%'}} />  <span style={{fontSize:'16px',color:'#F7941D'}}>  Add to Cart </span></button>
                  </div>
                  </Grid>

</Grid>
<DescriptionSection/>
<Featuredcategories/>
<Callsupport/>


    
      </Box>
  )
};

export default SingleProduct;
