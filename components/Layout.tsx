import CssBaseline from '@mui/material/CssBaseline'
import React from 'react'
import Nav from './Nav'


const Layout: React.FC = ({children}) => {
    return (
        <>
            <CssBaseline />
            <Nav/>
                {children}
        </>
    )
}

export default Layout
