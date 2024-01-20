import styles from './Footer.module.scss'
import Image from 'next/image'
import telegramIcon from '../../../assets/icons/telegram-icon.svg'
import instagramIcon from '../../../assets/icons/instagram-icon.svg'
import whatsAppIcon from '../../../assets/icons/whatsApp-icon.svg'
export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <a target="_blank" href="https://t.me/okarinnnn">
            <Image src={telegramIcon} alt="telegram" width={50} height={50} />
          </a>
          <a target="_blank" href="https://www.instagram.com/teztezcargo">
            <Image src={instagramIcon} alt="telegram" width={50} height={50} />
          </a>
          <a target="_blank" href="https://wa.me/996707250558">
            <Image src={whatsAppIcon} alt="telegram" width={50} height={50} />
          </a>
        </div>
      </div>
    </footer>
  )
}