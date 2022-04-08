import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';
import Box from '@mui/material/Box'
import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import GlobalStyles from '@mui/material/GlobalStyles';

const Layout: React.FC = ({children}) => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);

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
        }}
      />
      <Box
        sx={{
            // display: 'flex',
            // justifyContent: 'flex-start',
            width: '100%'
        }}
      >
        {/* <Sidebar 
            mobileOpen={mobileOpen} 
            setMobileOpen={setMobileOpen}
            swipeable={isMediumScreen}
        /> */}
        <Navbar/>
        <Box sx={{flexGrow: 1}}>{children}</Box>
      </Box>
    </>
  )
}

export default Layout
