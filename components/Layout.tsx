import React from 'react'
import Nav from './ui/Nav'


const Layout: React.FC = ({children}) => {
    return (
        <>
            <Nav/>
                {children}
        </>
    )
}

export default Layout
