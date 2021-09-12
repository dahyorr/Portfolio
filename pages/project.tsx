import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import LinkedButton from '@/components/ui/LinkedButton'
import AnimationWrapper from '@/components/AnimationWrapper'


const Project: NextPage = () => {
  return (
    <AnimationWrapper>
      <div>
        Project
        <LinkedButton direction="previous" path="/about"> About</LinkedButton>
        <LinkedButton direction="next" path="/contact"> Contact Me</LinkedButton>
      </div>
    </AnimationWrapper>
    
  )
}

export default Project
