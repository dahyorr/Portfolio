import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LinkedButton from '@/components/ui/LinkedButton'
import AnimationWrapper from '@/components/AnimationWrapper'
import Landing from '@/components/Landing'

const Home: NextPage = () => {
  return (
    <AnimationWrapper>
      <div className={styles.home}>
        <Head>
          <title>Dayo Adebanjo | Home</title>
        </Head>
          <Landing/>
        {/* <LinkedButton direction="next" path="/about"> About</LinkedButton> */}
      </div>
    </AnimationWrapper>
  )
}

export default Home
