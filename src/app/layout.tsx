import type { Metadata } from 'next'
import { jura } from './assets/Fonts/Font'
import './globals.css'
import Header from './(pages)/util/Header/Header'
import Footer from './(pages)/util/Footer/Footer'
import { Analytics } from '@vercel/analytics/react'
export const metadata: Metadata = {
  title: 'TEZ-TEZ CARGO',

  description:
    'Грузоперевозки по Кыргызстану,сборные грузы всем регионам (LTL) ,так же (FTL). Отправка всех видов грузов и грузоперевозка по самым низким рыночным ценам в Россию ,Китай, Турция Иран. ',
  keywords:
    'Грузоперевозки,сборные грузы,LTL,FTL,Москва ,Бишкек,Ош ,Кыргызстан,Баткенская, Чуйская, Джалал-Абадская, Нарын, Таласс, Иссык-Куль, Джалал-Абад,Торугарт ',
  openGraph: {
    url: 'https://tez-tez-cargo.vercel.app/',
    title: 'TEZ-TEZ CARGO',
    description:
      'Грузоперевозки по Кыргызстану,сборные грузы всем регионам (LTL) ,так же (FTL) ',
  },
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
