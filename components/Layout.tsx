import CssBaseline from '@mui/material/CssBaseline'
// import useMediaQuery from '@mui/material/useMediaQuery';
import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box'
import React, {useRef} from 'react'
import Navbar from './Navbar'
import GlobalStyles from '@mui/material/GlobalStyles';

const Layout: React.FC = ({children}) => {
  const theme = useTheme();
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  // const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <>
      <CssBaseline />
      <GlobalStyles 
        styles={{
          '*::-webkit-scrollbar': {
            width: '11px',
            borderRadius: '8px',
            backgroundColor: `#F4F5FE`,
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
