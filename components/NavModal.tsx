import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {useRouter} from 'next/router'
import styles from '@/uiStyles/NavModal.module.scss'
import {GrClose} from 'react-icons/gr'
import { motion, AnimatePresence } from 'framer-motion';
import NavItem from './NavItem'

interface NavModalProps{
    onClose: () => void
}

const NavModal: React.FC<NavModalProps>= ({onClose}) => {
    const router = useRouter()
    const [hideModal, setHideModal] = useState(false)

    const onNavigate = (path: string) => {
        router.push(path)
        closeModal();
    }

    const closeModal= () => {
        setHideModal(true)
    }

    const backdropVariant ={
        visible: {
            opacity: 1,
            
        },
        hidden: {opacity: 0},
    }

    const modalVariant ={
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
        },
    }

    return ReactDOM.createPortal(
        (
        <AnimatePresence exitBeforeEnter onExitComplete={onClose}>    
            {!hideModal && (<motion.div 
                className={styles.modalContainer} 
                onClick={closeModal}  
                variants={backdropVariant}
                animate="visible"
                initial="hidden"
                exit="hidden"
            >
                <motion.div 
                    className={styles.modal} 
                    onClick={(e) => e.stopPropagation()}
                    variants={modalVariant}
                    animate="visible"
                    initial="hidden"
                >
                    <GrClose onClick={closeModal} className={styles.closeIcon}/>
                    <ul>
                        <NavItem onNavigate={onNavigate} path="#home" >Home</NavItem>
                        <NavItem onNavigate={onNavigate} path="#about" >About</NavItem>
                        <NavItem onNavigate={onNavigate} path="#portfolio">Portfolio</NavItem>
                        <NavItem onNavigate={onNavigate} path="#contact" >Contact</NavItem>
                        <NavItem onNavigate={onNavigate} path="/test">Test</NavItem>
                    </ul>
                </motion.div>
            </motion.div>)}
        </AnimatePresence>
        )
    , document.getElementById('navModal') as HTMLElement);
}

export default NavModal
