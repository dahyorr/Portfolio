import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box'
import React, {useRef} from 'react'
import Navbar from './Navbar'
import GlobalStyles from '@mui/material/GlobalStyles';
import {isMobile} from 'react-device-detect';

const Layout: React.FC = ({children}) => {
  const theme = useTheme();
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  // const cursorRef = useRef<HTMLDivElement>(null);
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  // useEffect(() => {
  //   const cursor = cursorRef.current;
  //   const onMouseMove = (e: MouseEvent) => {
  //     if(cursor) {
  //       cursor.style.left = e.clientX + "px",
  //       cursor.style.top = e.clientY + "px";
  //     }
  //   }
  //   window.addEventListener('mousemove', onMouseMove);
  //   return () => {
  //     window.removeEventListener('mousemove', onMouseMove);
  //   }
  // }, []) 

  return (
    <>
      <CssBaseline />
      <GlobalStyles 
        styles={(isMediumScreen && isMobile) ? undefined :{
          '*::-webkit-scrollbar': {
            width: '11px',
            borderRadius: '8px',
            backgroundColor: `transparent`,
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: `#999`,
            borderRadius: '6px',
            border: '3px solid white',
          },
          scrollBehavior: 'smooth'
        }}
      />
      <Box
        sx={{
            width: '100%'
        }}
      >
        {/* <Box 
          id="cursor" 
          ref={cursorRef}
          sx={{
            position: 'fixed',
            borderRadius: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            pointerEvents: 'none',
            // left: '-100px',
            top: '50%',
            // mixBlendMode: 'difference',
            bgcolor: 'primary.main', 
            zIndex: 10000,
            border: '2px solid #fff',
            height: '30px',
            width: '30px',
            transition: 'all 140ms ease-out',
          }}
        ></Box> */}
        <Navbar scrollRef={scrollBoxRef}/>
        <Box 
          ref={scrollBoxRef}
          sx={{
            flexGrow: 1,
            height: "100vh",
            width: "100vw",
            scrollSnapType: 'y mandatory',
            overflowY: 'scroll',
            scrollBehavior: 'smooth'
          }}
        >{children}</Box>
      </Box>
    </>
  )
}

export default Layout
