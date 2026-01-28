import 'styles/global.scss'
import React, { PropsWithChildren } from 'react'
import Providers from './providers'
import { CssBaseline } from '@mui/material'
import BaseStyles from '@/components/BaseStyles'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
type Props = {}

const Layout = ({ children }: PropsWithChildren<Props>) => {

  // const scrollBoxRef = useRef<HTMLDivElement>(null); 
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          <BaseStyles />
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

export const viewport: Viewport = {
  themeColor: '#4169e1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Dayo Adebanjo",
  description: "Personal portfolio of Dayo Adebanjo",
  applicationName: "Dayo's Portfolio",
  creator: "Dayo Adebanjo",
  keywords: ["Dayo Adebanjo", "Portfolio", "Web Developer", "Software Engineer", "Full Stack Developer"],
  publisher: "Dayo Adebanjo",
  icons: {
    icon: [
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32' },
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16' },
      { rel: 'icon', url: '/favicon.ico' }
    ],
    apple: [
      { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', url: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', sizes: '167x167', url: '/apple-touch-icon.png' }
    ],
    shortcut: '/favicon.ico',

  },
  manifest: '/manifest.json',
  formatDetection: {
    telephone: false,
  },
  other: {
    'msapplication-TileColor': '#2B5797',
    'msapplication-tap-highlight': 'no',
    'mobile-web-app-capable': 'yes',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: "Dayo's Portfolio",
  },
  openGraph: {
    title: "Dayo's Portfolio",
    description: 'Personal portfolio of Dayo Adebanjo',
    url: 'https://dayo.dev',
    siteName: "Dayo Adebanjo",
    images: [
      {
        url: 'https://dayo.dev/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: "Dayo's Portfolio"
      }
    ],
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: "Dayo's Portfolio",
    description: 'Personal portfolio of Dayo Adebanjo',
    creator: 'Dayo Adebanjo',
    creatorId: 'dah_yor',
    images: ['https://dayo.dev/apple-touch-icon.png']
  }
}

export default Layout