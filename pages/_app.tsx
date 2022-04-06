import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Dayo Adebanjo</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}> */}
        <Component {...pageProps} />
      {/* </AnimatePresence> */}
    </Layout>
  )
}
export default MyApp
