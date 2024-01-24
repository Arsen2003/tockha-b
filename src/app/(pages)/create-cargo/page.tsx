import styles from './CreateCargoPage.module.scss'
import { Metadata } from 'next'
import CargoCreateForm from '@/app/components/CargoComponents/CargoCreateForm/CargoCreateForm'


export const metadata: Metadata = {
  title: 'Создать Груз',
  description: 'TEZ-TEZ CARGO,перевозка сборных грузов по КЫРГЫЗСТАНУ',
}


export default function CreateCargo (){
  return (
    <main className={styles.main}>
      <div  className='container'>
        <CargoCreateForm/>
      </div>
    </main>
  )
}