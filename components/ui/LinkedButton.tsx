import styles from '@/uiStyles/LinkedButton.module.scss'
import Link from 'next/link'
import {RiArrowRightCircleLine} from 'react-icons/ri'
import {RiArrowLeftCircleLine} from 'react-icons/ri'

interface LinkedButtonProps{
    path: string;
    direction: 'next' | 'previous' | 'none';
}

const LinkedButton: React.FC<LinkedButtonProps> = ({path, direction, children}) => {
    const props =  direction === 'previous' ? {scroll: false} : {scroll: true}

    return (
        <Link href={path} scroll={false}>
            <a >
            <div className={styles.button}>
                {direction === 'previous' ? <RiArrowLeftCircleLine className={styles.icon}/> : ''}
                {children} 
                {direction === 'next' ? <RiArrowRightCircleLine className={styles.icon}/> : ''}
            </div>
            </a>
        </Link>
    )
}

export default LinkedButton
