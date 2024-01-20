import styles from './CargoItem.module.scss'
import CargoItemLink from './CargoItem-items/CargoItemLink/CargoItemLink'

type CargoItem = {

}


export default function CargoItem () {
  return (
    <div className={styles.item}>
      <div className={styles.location}>
        <span>Кыргызстан,Бишкек</span>&#10174;<span> Кыргызстан,Ош</span>
      </div>
      <div className={styles.sizes}>
        <span>16000 килограмм</span>
      </div>
      <div className={styles.category}>
        <span>кузов:тентовый</span>
        <span>груз:сборный</span>
      </div>
      <span className={styles.price}>12000 сом</span>
      <CargoItemLink href={'/'}>Подробнее</CargoItemLink>
    </div>
  )
}