'use client'

import styles from './Aside.module.scss'
import Link from 'next/link'
import boxIcon from '../../assets/icons/box-icon.svg'
import truckIcon from '../../assets/icons/truck-icon.svg'
import Image from 'next/image'
import aboutUsIcon from '../../assets/icons/about-us-icon.svg'


type AsideProps = {
  changeShow: () => void,
  isShow:boolean
}
{

}

export default function Aside ({isShow,changeShow}:AsideProps) {


  return (
    <aside className={`${styles.aside} ${isShow ? styles.active : ''} `}>
      <button onClick={changeShow} className={styles.aside_button}>
        {' '}
        &raquo;
      </button>
      <div className={styles.aside_nav}>
        <Link onClick={changeShow} href={'/create-cargo'}>
          <Image src={truckIcon} width={40} height={40} alt="truck-icon" />
          НАДО ПЕРЕВЕЗТИ?
        </Link>
        <Link onClick={changeShow} href={'./calculator'}>
          <Image src={aboutUsIcon} width={40} height={40} alt="about-us-icon" />
          КАЛЬКУЛЯТОР
        </Link>
        <Link onClick={changeShow} href={''}>
          <Image src={boxIcon} width={40} height={40} alt="box-icon" />
          СТАТЬ ГРУЗОПЕРЕВОЗЧИКОМ?
        </Link>
      </div>
    </aside>
  )
}