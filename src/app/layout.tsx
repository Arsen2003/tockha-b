import type { Metadata } from 'next'
import { jura } from './assets/Fonts/Font'
import './globals.css'
import Header from './(pages)/util/Header/Header'
import Footer from './(pages)/util/Footer/Footer'

export const metadata: Metadata = {
  title: 'TEZ-TEZ CARGO',
  description: 'TEZ-TEZ CARGO,перевозка сборных грузов по КЫРГЫЗСТАНУ,Логистическими и распрделетильными базами.Услуги от склада до склада (Бишкек - Ош)',
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
        <Footer />
      </body>
    </html>
  )
}
