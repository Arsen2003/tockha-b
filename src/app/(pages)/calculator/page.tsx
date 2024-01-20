import styles from './CalculatorPage.module.scss'
import CalculatorForm from '@/app/components/Calculator/CalculatorForm'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Калькулятор Грузов',
  description: 'TEZ-TEZ CARGO,перевозка сборных грузов по КЫРГЫЗСТАНУ',
}




export default function CalculatorPage() {
  return (
    <main className={styles.main}>
      <div className="container ">
        <CalculatorForm />
      </div>
    </main>
  )
}
