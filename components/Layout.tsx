import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
import React, {useState} from 'react'
import NavHamburger from './NavHamburger'
import Sidebar from './Sidebar'
import GlobalStyles from '@mui/material/GlobalStyles';

const Layout: React.FC = ({children}) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  const handleDrawerToggle = () => {
      setMobileOpen(prev => !prev);
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyles 
        styles={{
          '*::-webkit-scrollbar': {
            width: '6px',
            borderRadius: '8px',
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: `rgba(0, 0, 0, 1)`,
          },
        }}
      />
      {isMediumScreen && <NavHamburger onClick={handleDrawerToggle}/>}
      <Box
        sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            width: '100%'
        }}
      >
        <Sidebar 
            mobileOpen={mobileOpen} 
            setMobileOpen={setMobileOpen}
            swipeable={isMediumScreen}
        />
        <Box sx={{flexGrow: 1}}>{children}</Box>
      </Box>
    </>
  )
}

export default Layout
