import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
export default MyApp
