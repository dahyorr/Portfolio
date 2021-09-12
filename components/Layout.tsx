import React from 'react'
import AnimatedBackground from './ui/AnimatedBackground'
import Nav from './ui/Nav'


const Layout: React.FC = ({children}) => {
    return (
        <AnimatedBackground>
            <Nav/>
                {children}
        </AnimatedBackground>
    )
}

export default Layout
