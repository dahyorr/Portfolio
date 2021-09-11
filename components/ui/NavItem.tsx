import React from 'react'
import {useRouter} from 'next/router'
import styles from '@/uiStyles/NavModal.module.scss'

interface NavItemProps {
    onNavigate: (path: string) => void;
    path: string;
}

const NavItem: React.FC<NavItemProps> = ({onNavigate, path, children}) => {
    const {pathname: activePath} = useRouter()
    return (
        <>
            <li className={activePath === path ? styles.active : ''} onClick={() => onNavigate(path)}>{children}</li>
        </>
    )
}

export default NavItem
