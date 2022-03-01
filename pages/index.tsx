import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
// import LinkedButton from '@/components/ui/LinkedButton'
// import AnimationWrapper from '@/components/AnimationWrapper'
// import Landing from '@/components/Landing'

const Home: NextPage = () => {
  return (
    <>
      <Head>
            <title>Dayo Adebanjo | Home</title>
      </Head>
      <div className={styles.Home}>
        
          {/* <Landing/> */}
        {/* <LinkedButton direction="next" path="/about"> About</LinkedButton> */}
        {/* <div><Image src='/wave.svg' alt='Background' width='100vw' height='100vh'/></div> */}
        <div className={styles.content}>
          <h2>Hi I&apos;m Dayo, A FullStack Web Developer</h2>
        </div>
      </div>
    </>
  )
}

export default Home
