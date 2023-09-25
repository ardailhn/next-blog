import AuthProvider from '@/Providers/AuthProvider'
import ThemeProvider from '../Providers/ThemeProvider'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import { ThemeContextProvider } from '../context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Blog',
  description: 'Arda İlhan own blog site with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <main className='container'>
                <div className='wrapper'>
                  <Navbar />
                  {children}
                  <Footer />
                </div>
              </main>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
