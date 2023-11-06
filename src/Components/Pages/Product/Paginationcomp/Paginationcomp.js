import React from 'react'
import { Box, Pagination, PaginationItem} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


const Paginationcomp = () => {
  return (
    <Box sx={{margin:'auto'}}>
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
                    <ArrowBackIosIcon sx={{color:'#182733'}}  />
                  ) : item.type === "next" ? (
                    <ArrowForwardIosIcon sx={{color:'#182733'}} />
                  ) : (
                    undefined
                  )
                }
                sx={{
                  border: "2px solid #F7941D", 
                  color:'#182733',
                  justifyContent:'center',
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
