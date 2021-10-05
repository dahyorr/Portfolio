import styles from '@/styles/Landing.module.scss'

const Landing: React.FC = () => {
    return (
        <div className={styles.Landing}>
            <div className={styles.landingContent}>
                <h1>{`Hi There!, I'm Dayo`}</h1>
                {/* <p>I&apos;m a pationate FullStack Developer </p> */}
            </div>
            <div className={styles.landingDesign}>

            </div>
        </div>
    )
}

export default Landing
