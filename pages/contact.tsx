import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import LinkedButton from '@/components/ui/LinkedButton'
import AnimationWrapper from '@/components/AnimationWrapper'


const Home: NextPage = () => {
  return (
    <AnimationWrapper>
      <div>
        Contact
        <LinkedButton direction="previous" path="/project">  My Projects</LinkedButton>
      </div>
    </AnimationWrapper>
  )
}

export default Home
