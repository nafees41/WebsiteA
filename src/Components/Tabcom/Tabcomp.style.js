import theme from "../Theme/Theme";
const style = {
    'Tabcard':{
        background:'white' ,
        textAlign: "center",
          padding: "30px",
         
    },
    'Tabsheading':{
        color: theme. blue,
        fontFamily: ["Poppins", "sans-serif"],
        fontWeight: "600",
        lineHeight: { md: "22px", sm: "18px", xs: "15px" },
        fontSize: { md: "15px", sm: "12px", xs: "10px" },
    },    
    'Subheading':{
        color:  theme. blue,
         fontFamily: ["Poppins", "sans-serif"],
             fontWeight: "400",
             lineHeight: { md: "24px", sm: "10px", xs: "8px" },
             fontSize: { md: "16px", sm: "10px", xs: "8px" },
    },
    'Tabbutton':{
        color: 'white',
         boxShadow: "0px 0px 0px 0px",
        paddingX: "25px",
            fontSize: "12px",
            fontFamily: ["Poppins", "sans-serif"],
             textTransform: "lowercase",
             marginTop: "10px",
             background:'#F7941D',
             "&.MuiButtonBase-root:hover": {
              background: "#F7941D",
             boxShadow: "0px 0px 0px 0px",
                 color: "#FFFFFFE5",
                        },
    }

    
}
export default style;