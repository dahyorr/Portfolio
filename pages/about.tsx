import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import LinkedButton from '@/components/ui/LinkedButton'
import AnimationWrapper from '@/components/AnimationWrapper'

const About: NextPage = () => {
  return (
    <AnimationWrapper >
      <div>
        About
        <LinkedButton direction="previous" path="/"> Home</LinkedButton>
        <LinkedButton direction="next" path="/project"> My Projects</LinkedButton>
      </div>
    </AnimationWrapper>
  )
}

export default About
