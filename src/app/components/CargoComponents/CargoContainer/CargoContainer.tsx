import CargoItem from "../CargoItem/CargoItem"
import styles from './CargoContainer.module.scss'

export default function CargoContainer () {
  return (
    <div className={styles.container}>
      <CargoItem />
      <CargoItem />
      <CargoItem />
      <CargoItem />
      <CargoItem />
    </div>
  )
}