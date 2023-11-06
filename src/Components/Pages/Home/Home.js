import React from 'react'
import { Typography } from '@mui/material'
import Slider from '../../Slidercomp/Slider'
import Salecomp from '../../Salecomp/Sale'
import Tabcomp from '../../Tabcom/Tab'
import Featured from '../Singleproduct/Featuredcategory/Featured'



const Home = () => {
  return (
    <div>

        <Slider/>
        <Salecomp />
        <Tabcomp/>
        <Featured/>

    </div>
  )
}

export default Home
