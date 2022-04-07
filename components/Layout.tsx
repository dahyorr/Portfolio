import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
import React, {useState} from 'react'
import NavHamburger from './NavHamburger'
import Sidebar from './Sidebar'



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
