import React from 'react'
import { Box, Pagination, PaginationItem} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CardContent from '@mui/material/CardContent';



const Paginationcomp = () => {
  return (
    <Box sx={{marginTop:'20px',display:'flex',justifyContent:'center'}}>
            <Pagination
            count={10} // Total number of pages
            variant="outlined"
            shape="rounded"
            size="large"
            color="primary"
            className="work"
            renderItem={(item) => (
              <PaginationItem
                {...item}
                icon={
                  item.type === "previous" ? (
                    <ArrowBackIosIcon style={{color:'#F7941D'}}/>
                  ) : item.type === "next" ? (
                    <PlayArrowIcon style={{color:'#F7941D'}} />
                  ) : (
                    undefined
                  )
                }
                sx={{
                  border: "2px solid #F7941D", 
                  color:'#B4B4B4',
                  justifyContent:'center',
                  borderRadius:'15px',
                  padding:'15px',
                  "&.Mui-selected": {
                    backgroundColor: "#F7941D", // Selected tab color
                    color: "#FFFFFF", // Text color for selected tab
                  },
                  "&:hover": {
                    backgroundColor: "#F7941D", // Selected tab color
                    color: "#FFFFFF", // Text color for selected tab
                  },
                }}
              />
            )}
          />
    </Box>
  )
}

export default Paginationcomp
