import React, { useState } from 'react';
import './Singleproduct.css'
import Redwatch from '../../images/image 43.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DescriptionSection from './Productdescription/DescriptionSection'
import Featuredcategories from './Featuredcategory/Featured'
import  Featuredcategories2 from '../../Featuredcategory/Featuredcategory' 

const SingleProduct = () => {
   
  return (
    <Box>
<Grid container spacing={2} sx={{marginTop:'50px',paddingX:'75px'}}>
        <Grid item xs={6} >
     <img src= {Redwatch}   />
        </Grid>
        <Grid item xs={6}>
         <div className='detail-div'>
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
                        <button className="size-button" >Medium</button>
                        <button className="size-button" >Large</button>
                    </td>
                  </tr>
                  <tr>
                      <td>Color</td>
                     <td>
                <button className='color-button' style={{ backgroundColor: '#FF0000',height:'30px' }} > Small</button>
                <button className='color-button' style={{ backgroundColor: '#D3D3D3',height:'30px' }} > Small</button>
                <button className='color-button' style={{ backgroundColor: '#000000',height:'30px'}} > Small</button>
              </td>
                  </tr>

              </table>
                  <button className='order-btn'>Buy Now</button>
                  </div>
                  </Grid>

</Grid>
<DescriptionSection/>
<Featuredcategories/>
<Featuredcategories2/>

    
      </Box>
  )
};

export default SingleProduct;
