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
import { Analytics } from '@vercel/analytics/react';

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
        <SectionContextProvider>
          <Head>
            <title>Dayo Adebanjo</title>
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <meta name="description" content="Personal portfolio of Dayo Adebanjo" />
            <meta name='application-name' content='PWA App' />
            <meta name='apple-mobile-web-app-capable' content='yes' />
            <meta name='apple-mobile-web-app-status-bar-style' content='default' />
            <meta name='apple-mobile-web-app-title' content='Dayo🙃' />
            <meta name='format-detection' content='telephone=no' />
            <meta name='mobile-web-app-capable' content='yes' />
            <meta name='msapplication-config' content='/icons/browserconfig.xml' />
            <meta name='msapplication-TileColor' content='#2B5797' /> {/* check again */}
            <meta name='msapplication-tap-highlight' content='no' />
            <meta name='theme-color' content='#4169e1' />

            <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
            <link rel='apple-touch-icon' sizes='152x152' href='/apple-touch-icon.png' />
            <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
            <link rel='apple-touch-icon' sizes='167x167' href='/apple-touch-icon.png' />

            <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
            <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
            <link rel='manifest' href='/manifest.json' />
            <link rel='mask-icon' href='/favicon.ico' />
            <link rel='shortcut icon' href='/favicon.ico' />

            <meta name='twitter:card' content='Personal portfolio of Dayo Adebanjo' />
            <meta name='twitter:url' content='https://dayo.dev' />
            <meta name='twitter:title' content="Dayo's Portfolio" />
            <meta name='twitter:description' content='Personal portfolio of Dayo Adebanjo' />
            <meta name='twitter:image' content='https://dayo.dev/android-chrome-192x192.png' />
            <meta name='twitter:creator' content='@dah_yor' />
            <meta property='og:type' content='website' />
            <meta property='og:title' content="Dayo's Portfolio" />
            <meta property='og:description' content='Personal portfolio of Dayo Adebanjo' />
            <meta property='og:site_name' content='Dayo Adebanjo' />
            <meta property='og:url' content='https://dayo.dev' />
            <meta property='og:image' content='https://dayo.dev/apple-touch-icon.png' />

          </Head>
          {/* <Preloader /> */}
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
          >
            <Layout forceTransparencyDisable={router.pathname !== '/'}>

              {/* <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}> */}
              <Component {...pageProps} />
              {/* </AnimatePresence> */}
            </Layout>
          </SnackbarProvider>
        </SectionContextProvider>
      </ThemeProvider>
      <Analytics />
    </>
  )
}
export default MyApp
