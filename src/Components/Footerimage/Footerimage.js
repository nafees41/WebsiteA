import React from 'react'
import { Grid } from "@mui/material";

const Footerimage = () => {
  return (
    <div>
      <Grid container spacing={2} sx={{ paddingX: "40px", marginTop: "20px" }}>
        <Grid item xs={12}>
          <img src={Narrationimage7} style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Footerimage
