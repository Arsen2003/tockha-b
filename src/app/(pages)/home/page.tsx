import styles from './HomePage.module.scss'
import { jura } from '@/app/assets/Fonts/Font'
import LinkButton from '@/app/UI/LinkButton/LinkButton'
import HomeTodo from './home-items/HomeTodo/HomeTodo'
import truckImage from '../../assets/images/truck-image.png'
import forkLiftImage from '../../assets/images/forklift-image.png'
import wareHouseImage from '../../assets/images/warehouse-image.png'
import miniTruckImage from '../../assets/images/mini-truck-image.png'
import HomeContacts from './home-items/home-contacts/HomeContacts'
import Image from 'next/image'
import arrowIcon from '../../assets/icons/arrow-right-icon.svg'
import Head from 'next/head'

export default function HomePage () {


  return (
    <main style={jura.style} className={styles.main}>
      <Head>
        <title>home</title>
      </Head>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <HomeTodo title="ПОГРУЗКА" image={forkLiftImage}>
              Наша погрузка и безопсность груза исполняется,лучшими
              специалистами.Ваш груз будет загружен исходя из параметров вашего
              груза.
            </HomeTodo>
            <HomeTodo title="ДОСТАВКА" image={truckImage}>
              Быстрая и надежная перезвозка от 0 до 25т до пункта выдачи,в нашем
              арсенале только проверенные исполнители.
            </HomeTodo>
            <HomeTodo title="СКЛАД" image={wareHouseImage}>
              В нашем арсенале имеется пункты выдачи ,где ваш груз будет имееть
              право быть в складе после доставки
            </HomeTodo>
            <HomeTodo title="ЭСПРЕCС-ТАКСИ" image={miniTruckImage}>
              При дополнительной надобности мы предостволяем перевозку груза ,до
              пункта распредления (до 2 тонн)
            </HomeTodo>
          </div>
          <div className={styles.right}>
            <h1> TEZ TEZ </h1>
            <p>
              <span> TEZ TEZ </span>- это платформа для осуществления услуг
              логистики сборных грузов по Кыргызстану
            </p>
            <div>
              <LinkButton href={'/create-cargo'}>Доставить груз</LinkButton>
            </div>
          </div>
        </div>
        <section className={styles.info}>
          <h1>КАК МЫ РАБОТАЕМ ?</h1>
          <div className={styles.info__content}>
            <span>Вы оставляете свой товар в пункте распределения</span>
            <Image
              src={arrowIcon}
              width={50}
              height={50}
              alt="arrow-icon"
              translate="yes"
            />
            <span>Проверка и загрузка груза</span>
            <Image
              src={arrowIcon}
              width={50}
              height={50}
              alt="arrow-icon"
              translate="yes"
            />
            <span>Отправка на пункт выдачи</span>
          </div>
        </section>
      </div>
      <HomeContacts />
    </main>
  )
}