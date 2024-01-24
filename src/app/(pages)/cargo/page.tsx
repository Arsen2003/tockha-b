import styles from './Cargo.module.scss'
import TextInput from '@/app/UI/TextInput/TextInput'
import doubleArrowIcon from '../../assets/icons/double-arrow-icon.svg'
import Image from 'next/image'
import CButton from '@/app/UI/CButton/CButtont'
import CargoContainer from '@/app/components/CargoComponents/CargoContainer/CargoContainer'
export default function CargoPage() {
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.search}>
            <div className={styles.search__place}>
              <TextInput placeholder="откуда?"></TextInput>
              <Image
                src={doubleArrowIcon}
                width={40}
                height={40}
                alt="double-arrow-icon"
              />
              <TextInput placeholder="куда?"></TextInput>
            </div>

            {/* <div className={styles.search__sizes}>
              <SizeInput placeholder="вес в тоннах" />
              <Image
                src={weightIcon}
                width={40}
                height={40}
                alt="double-arrow-icon"
              />
              <SizeInput placeholder="вес в тоннах" />
            </div> */}
            <CButton>найти</CButton>
          </div>
          <CargoContainer />
        </div>
      </div>
    </main>
  )
}
