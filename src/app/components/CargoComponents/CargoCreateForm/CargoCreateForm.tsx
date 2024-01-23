import styles from './CargoCreateForm.module.scss'
import TextInput from '@/app/UI/TextInput/TextInput'
import arrowIcon from '../../../assets/icons/arrow-right-icon.svg'
import Image from 'next/image'
import NumberInput from '@/app/UI/NumberInput/NumberInput'
import CountrySelect from '@/app/UI/CountrySelect/CountrySelect'
import CargoInputForm from './СargoCreateForm-items/CargoInputForm/CargoInputForm'
export default function CargoCreateForm() {
  return (
    <form className={styles.form} action="">
      <div className={styles.location}>
        {/* <CountrySelect title="откуда" />
        <Image src={arrowIcon} width={30} height={30} alt="" />
        <CountrySelect title="куда" /> */}
      </div>
      <div className={styles.location}>
        <TextInput placeholder="ваше имя "></TextInput>
        <TextInput placeholder="ваша фамилия "></TextInput>
        <TextInput placeholder="ваше отчество"></TextInput>
      </div>
      <NumberInput/>
      <CargoInputForm></CargoInputForm>
      <button className={styles.button}>Оставить Заявку</button>
    </form>
  )
}
