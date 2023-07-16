import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Theme_Provider from './components/provider';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market',
  description: 'Dine Market By Muhammad Azfar Sikander',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme_Provider>
          <Header />
          {children}
          <Footer />
        </Theme_Provider>
      </body>
    </html>
  )
}
