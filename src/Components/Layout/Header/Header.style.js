const style={
    // Main Top Box

     'allCategoriesButton': {
     borderRadius: '20px 20px 0px 0px',
      marginTop: '-10px',
      padding: '20px',
      display: { xs: "none", sm: "block" },
      display:'flex'
    },
    
    'icon': {
      marginRight:' 5px',
      marginLeft: '15px',
    },
    
  
    'nav':{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      },
    'navItem':{
     fontWeight: "500",
      fontSize: { md: "1rem", sm: "12px", xs: "10px" },
      color: "white",
      paddingRight: '30px',
      borderRight: '1px solid white',
      marginRight: '13px',

 
    },

 
    'QuoteButton':{
      border: 'none',
      padding: '10px',
      borderRadius: '40px',
      position: 'absolute',
      top: '4px',
      right: '0px',
      borderRadius: '40px',
      cursor: 'pointer',
      paddingX: { md: "30px", sm: "15px", xs: "10px" },
    
    }

}
export default style;