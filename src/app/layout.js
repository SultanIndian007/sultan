import Navbar from '@/components/navbar/Navbar.jsx'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer.jsx'
import { ThemeProvider } from '../context/ThemeContext.js'
import AuthProvider from '@/components/AuthProvider/AuthProvider.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sultan',
  description: 'This is the description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
      <AuthProvider>
        <div className="container">  
          <Navbar />
          {children}
          <Footer />
        </div>
        </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
