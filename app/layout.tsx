import "react-image-gallery/styles/css/image-gallery.css";
import Layout from '@/components/Layout'

import SectionContextProvider from '@/context/SectionContext';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Dayo Adebanjo',
  description: 'Personal portfolio of Dayo Adebanjo',
  applicationName: 'PWA App',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dayo🙃',  
  },
  formatDetection: {
    telephone: false,
  },
  manifest: '/manifest.json',
  metadataBase: new URL('https://dayo.dev'),
  openGraph: {
    type: 'website',
    title: "Dayo's Portfolio",
    description: 'Personal portfolio of Dayo Adebanjo',
    siteName: 'Dayo Adebanjo',
    url: 'https://dayo.dev',
    images: [
      {
        url: 'https://dayo.dev/apple-touch-icon.png',
        alt: "Dayo's Portfolio",
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: "Dayo's Portfolio",
    description: 'Personal portfolio of Dayo Adebanjo',
    creator: '@dah_yor',
    images: ['https://dayo.dev/android-chrome-192x192.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.ico',
      },
    ],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/icons/browserconfig.xml',
    'msapplication-TileColor': '#2B5797',
    'msapplication-tap-highlight': 'no',
  },
}

export const viewport: Viewport = {
  themeColor: '#4169e1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLFGRTZ"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden"
            }}
          />
        </noscript>
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
          <SectionContextProvider>

              <Layout forceTransparencyDisable={false}>
                {children}
              </Layout>
          </SectionContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
