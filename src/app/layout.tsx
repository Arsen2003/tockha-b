import type { Metadata } from 'next'
import { jura } from './assets/Fonts/Font'
import './globals.css'
import Header from './(pages)/util/Header/Header'
import Footer from './(pages)/util/Footer/Footer'
import { Analytics } from '@vercel/analytics/react'
export const metadata: Metadata = {
  title: 'TEZ-TEZ CARGO',
  description: '  ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={jura.className}>
        <Header />
        {children}
        <Analytics/>
        <Footer />
      </body>
    </html>
  )
}
