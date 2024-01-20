'use client'
import styles from './Header.module.scss'
import Link from 'next/link'
// import boxIcon from '../../../assets/icons/box-icon.svg'
import truckIcon from '../../../assets/icons/truck-icon.svg'
import Image from 'next/image'
import logoIcon from '../../../assets/icons/logo-icon.svg'
import aboutUsIcon from '../../../assets/icons/about-us-icon.svg'
import Aside from '../../../components/Aside/Aside'
import { useState } from 'react'
export default function Header () {
  const [show,setShow] = useState<boolean>(false)
  const handleChangeShow = () => {
    setShow(!show)
  }
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link className={styles.logo} href={'/'}>
            <Image src={logoIcon} alt="" width={80} height={80} />
          </Link>
          <nav>
            {/* <Link href={'./cargo'}>
              <Image src={boxIcon} width={30} height={30} alt="box-icon" />
              <span>ГРУЗЫ</span>
            </Link> */}
            <Link href={'/create-cargo'}>
              <Image src={truckIcon} width={30} height={30} alt="truck-icon" />
              НАДО ПЕРЕВЕЗТИ?
            </Link>
            <Link href={'./calculator'}>
              <Image
                src={aboutUsIcon}
                width={30}
                height={30}
                alt="about-us-icon"
              />
              КАЛЬКУЛЯТОР
            </Link>
            <Link href={''}>СТАТЬ ГРУЗОПЕРЕВОЗЧИКОМ?</Link>
          </nav>
          <button onClick={handleChangeShow} className={styles.aside_button}>
            &laquo;
          </button>
       
          <Aside changeShow={handleChangeShow} isShow={show} />
        </div>
      </div>
    </header>
  )
}