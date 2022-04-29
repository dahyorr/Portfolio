import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import React from 'react'
import Navbar from '../Navbar'
import GlobalStyles from '@mui/material/GlobalStyles';
import {isMobile} from 'react-device-detect';
import Footer from '@/components/Sections/Footer'

interface LayoutProps{
  forceTransparencyDisable?: boolean;
}

const Layout: React.FC<LayoutProps> = ({children, forceTransparencyDisable}) => {
  const theme = useTheme();
  // const scrollBoxRef = useRef<HTMLDivElement>(null);
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
          '*':{
            scrollBehavior: 'smooth',
          },
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
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
        }}
      />
      <Navbar forceTransparencyDisable={forceTransparencyDisable || false}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
