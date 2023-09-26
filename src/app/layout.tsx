import AuthProvider from '@/Providers/AuthProvider'
import ThemeProvider from '../Providers/ThemeProvider'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { ThemeContextProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Blog',
  description: 'Arda İlhan own blog site with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_TAG}`} />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.GOOGLE_TAG}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <main className='container'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                  <Analytics />
                </div>
              </main>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
