import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import LinkedButton from '@/components/ui/LinkedButton'
import AnimationWrapper from '@/components/AnimationWrapper'

const Home: NextPage = () => {
  return (
    <AnimationWrapper>
      <div className={styles.home}>
        <Head>
          <title>Dayo Adebanjo | Home</title>
        </Head>

        <h1>{`Hi There!, I'm Dayo`}</h1>
        <p>I&apos;m a pationate FullStack Developer </p>
        {/* <div style={{
          height: '100vh',
          width: '50%',
          background: 'red'
        }}>back</div>
        <div>end</div> */}

        <LinkedButton direction="next" path="/about"> About</LinkedButton>
      </div>
    </AnimationWrapper>
  )
}

export default Home
