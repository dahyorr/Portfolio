import 'styles/global.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
// import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/helpers/theme";
import SectionContextProvider from 'context/SectionContext';
import { useRouter } from 'next/router'
// import Preloader from 'components/Preloader'
import { SnackbarProvider } from 'notistack';
import Script from 'next/script';


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MLFGRTZ');
      `}
      </Script>
      <Script
        strategy="afterInteractive"
        id="clarity-track"
        dangerouslySetInnerHTML={{
          __html: `(function(c,l,a,r,i,t,y){
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "h3w1a5mofn");`
        }}
      />
      <ThemeProvider theme={theme}>

            <Layout forceTransparencyDisable={router.pathname !== '/'}>

              {/* <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}> */}
              <Component {...pageProps} />
              {/* </AnimatePresence> */}
            </Layout>

      </ThemeProvider>

    </>
  )
}
export default MyApp
