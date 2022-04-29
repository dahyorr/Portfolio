import 'styles/global.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/helpers/theme";
import SectionContextProvider from 'context/SectionContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SectionContextProvider>
        <Layout>
          <Head>
            <title>Dayo Adebanjo</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
          </Head>
          {/* <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}> */}
            <Component {...pageProps} />
          {/* </AnimatePresence> */}
        </Layout>
      </SectionContextProvider>
    </ThemeProvider>
  )
}
export default MyApp
