import React from 'react'
// import Background from '@/components/ui/Background'
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
