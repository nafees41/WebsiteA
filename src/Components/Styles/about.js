const style = {
    container: {
      width: '98%',
      userSelect: 'none',
      overflow: 'hidden',
      maxWidth: 900,
      borderRadius: 5,
      background: '#000',
      aspectRatio: '16 / 9',
      position: 'relative',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
    fullscreen: {
      maxWidth: '100%',
      width: '100%',
      height: '100vh',
      borderRadius: 0,
    },
    wrapper: {
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: 1,
      opacity: 0,
      bottom: -15,
      transition: 'all 0.08s ease',
    },
    showControls: {
      opacity: 1,
      bottom: 0,
      transition: 'all 0.13s ease',
    },
    wrapperBefore: {
      content: '""',
      bottom: 0,
      width: '100%',
      zIndex: -1,
      position: 'absolute',
      height: 'calc(100% + 35px)',
      pointerEvents: 'none',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
    },
    videoTimeline: {
      height: 7,
      width: '100%',
      cursor: 'pointer',
    },
    progressArea: {
      height: 3,
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.6)',
    },
    progressAreaSpan: {
      position: 'absolute',
      left: '50%',
      top: -25,
      fontSize: 13,
      color: '#fff',
      pointerEvents: 'none',
      transform: 'translateX(-50%)',
    },
    progressBar: {
      width: '0%',
      height: '100%',
      position: 'relative',
      background: '#2289ff',
    },
    progressBarBefore: {
      content: '""',
      right: 0,
      top: '50%',
      height: 13,
      width: 13,
      position: 'absolute',
      borderRadius: '50%',
      background: '#2289ff',
      transform: 'translateY(-50%)',
    },

    videoControls: {
      padding: '5px 20px 10px',
    },
    options: {
      width: '100%',
    },
    optionsFirst: {
      justifyContent: 'flex-start',
    },
    optionsLast: {
      justifyContent: 'flex-end',
    },
    button: {
      height: 40,
      width: 40,
      fontSize: 19,
      border: 'none',
      cursor: 'pointer',
      background: 'none',
      color: '#efefef',
      borderRadius: 3,
      transition: 'all 0.3s ease',
    },
    buttonIcon: {
      height: '100%',
      width: '100%',
      lineHeight: 40,
    },
    buttonHover: {
      color: '#fff',
    },
    buttonActive: {
      transform: 'scale(0.9)',
    },
    buttonSpan: {
      fontSize: 23,
    },
    input: {
      height: 4,
      marginLeft: 3,
      maxWidth: 75,
      accentColor: '#0078FF',
    },
    videoTimer: {
      color: '#efefef',
      marginLeft: 15,
      fontSize: 14,
    },
    separator: {
      margin: '0 5px',
      fontSize: 16,
      fontFamily: 'Open sans',
    },
    playbackContent: {
      display: 'flex',
      position: 'relative',
    },
    speedOptions: {
      position: 'absolute',
      listStyle: 'none',
      left: -40,
      bottom: 40,
      width: 95,
      overflow: 'hidden',
      opacity: 0,
      borderRadius: 4,
      pointerEvents: 'none',
      background: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      transition: 'opacity 0.13s ease',
    },
    speedOptionsShow: {
      opacity: 1,
      pointerEvents: 'auto',
    },
    speedListItem: {
      cursor: 'pointer',
      color: '#000',
      fontSize: 14,
      margin: '2px 0',
      padding: '5px 0 5px 15px',
      transition: 'all 0.1s ease',
    },
    speedListItemFirstLast: {
      margin: 0,
    },
    speedListItemHover: {
      background: '#dfdfdf',
    },
    speedListItemActive: {
      color: '#fff',
      background: '#3e97fd',
    },
    video: {
      width:"320" ,
      height:"190"
    },
  };
  export default style;
