import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FRVR - 13',
  description: 'Love you so bad'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <NavBar/>
        {children}
        <Footer />
        </body>
    </html>
  )
}
