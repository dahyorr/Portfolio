import React from 'react'
import Background from './ui/Background'
import Nav from './ui/Nav'

const Layout: React.FC = ({children}) => {
    return (
        <Background>
            <Nav/>
            {children}
        </Background>
    )
}

export default Layout
