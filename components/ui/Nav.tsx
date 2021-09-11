import React, {useState} from 'react'
import styles from '@/uiStyles/Nav.module.scss'
import {GiHamburger} from 'react-icons/gi'
import NavModal from './NavModal'

const Nav: React.FC = () => {
    const [navOpen, setNavOpen] = useState(false)

    const openNav = () => setNavOpen(true)

    const closeNav = () => setNavOpen(false)

    return (
        <div className={styles.nav}>
            <div className={styles.hamburger} onClick={openNav}>
                <GiHamburger className={styles.hamburgerIcon}/>
            </div>
            {navOpen && <NavModal onClose={closeNav}/>}
        </div>
    )
}

export default Nav