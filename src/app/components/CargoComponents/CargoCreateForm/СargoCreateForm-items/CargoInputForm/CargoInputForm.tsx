import styles from './CargoInputForm.module.scss'
import { Jura } from 'next/font/google'

const jura = Jura({
  subsets: ['cyrillic'],
})

export default function CargoInputForm () {
  return (
    <textarea  style={jura.style} placeholder='можете добавить описание вашего груза...' className={styles.textarea}  rows={4}  name="" cols={12} id="" >

    </textarea>
  )
}