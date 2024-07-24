import type { NextPage } from 'next'
import Landing from '@/components/Sections/Landing'
import About from '@/components/Sections/About'
import Projects from '@/components/Sections/Projects'
import Contact from '@/components/Sections/Contact'

const Home: NextPage = () => {
  return (
    <>
      <Landing />
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default Home
