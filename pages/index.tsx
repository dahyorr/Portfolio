import type { NextPage } from 'next'
import Landing from '@/components/Sections/Landing'
import About from '@/components/Sections/About'
import Skills from '@/components/Sections/Skills'
import Portfolio from '@/components/Sections/Portfolio'
import Contact from '@/components/Sections/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default Home
