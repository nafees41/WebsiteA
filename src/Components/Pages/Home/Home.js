import React from 'react'
import { Typography } from '@mui/material'
import Slider from '../../Slidercomp/Slider'
import Salecomp from '../../Salecomp/Sale'
import Tabcomp from '../../Tabcom/Tab'
import Featured from '../../Featuredcategory/Featuredcategory'



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
