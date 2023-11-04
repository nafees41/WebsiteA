import theme from "../../../Theme/Theme";
const style={
    // Main Top Box

    'nav': {
      display: 'flex'
    
    },
    
    'all-categories-button': {
      display: 'flex',
      alignItems: 'center',
      border: 'none',
      height: '60px',
    borderRadius: '20px 20px 0px 0px',
      marginTop: '-10px',
      cursor: 'pointer',
      width: '150px'
    },
    
    'icon': {
      marginRight:' 5px';
      marginLeft: '15px';
    },
    
    'nav-list': {
      color: 'white'
    },
    'nav-list ul':{
      display: 'flex'
    },
    'nav-list ul li':{
      listStyleType: 'none',
      marginLeft: '20px',
      paddingRight: '13px',
      borderRight: '1px solid white',
      fontSize: '18px',
      fontStyle: 'normal',
      cursor: 'pointer'
    },
    'quote-button ':{
      border: 'none',
      padding: '13px',
      borderRadius: '40px',
      width: '150px',
      position: 'absolute',
      top: '4px',
      right: '0px',
      borderRadius: '40px',
      cursor: 'pointer'
    
    }

}
export default style;