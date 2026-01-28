import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import React, { PropsWithChildren } from 'react'
import Navbar from '../Navbar'
import GlobalStyles from '@mui/material/GlobalStyles';
import {isMobile} from 'react-device-detect';

interface LayoutProps{
  forceTransparencyDisable?: boolean;
}

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({children, forceTransparencyDisable}) => {
  // const scrollBoxRef = useRef<HTMLDivElement>(null);
  // const cursorRef = useRef<HTMLDivElement>(null);

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


    </>
  )
}

export default Layout
