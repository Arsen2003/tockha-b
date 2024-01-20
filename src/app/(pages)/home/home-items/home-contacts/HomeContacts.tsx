import styles from './HomeContacts.module.scss'
import Image from 'next/image'
import locationIcon from '../../../../assets/icons/location-icon.svg'
import telephoneIcon from '../../../../assets/icons/telephone-icon.svg'
import emailIcon from '../../../../assets/icons/email-icon.svg'
import DLinkButton from '@/app/UI/DLinkButton/DLinkButton'
export default function HomeContacts() {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <section className={styles.contacts}>
          <div className={styles.contacts_info}>
            <h2>КОНТАКТЫ</h2>
            <address>
              <a href="tel:+996707250558">
                <Image
                  src={telephoneIcon}
                  alt="telephone-icon"
                  width={30}
                  height={30}
                />
                +996 707 250 558
              </a>
              <a href="https://2gis.kg/bishkek/search/%D1%81%D0%B0%D0%B4%D1%8B%D0%B1%D0%B0%D0%BA%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%20169/geo/15763234350982574/74.549773%2C42.843218?m=74.549615%2C42.842071%2F16.37">
                <Image src={locationIcon} alt="" width={30} height={30} />
                г.Бишкек,Садыбакасова 169
              </a>
              <a href="">
                <Image
                  src={emailIcon}
                  alt="email-icon"
                  width={30}
                  height={30}
                />
                arsen_nurdavletov@mail.ru
              </a>
            </address>
            <DLinkButton href="https://wa.me/996707250558">
              написать на Whats app
            </DLinkButton>
          </div>
          <div className={styles.contacts_map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d351.3916504039136!2d74.54970842090826!3d42.8431404925236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2skg!4v1704530937496!5m2!1sru!2skg"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  )
}