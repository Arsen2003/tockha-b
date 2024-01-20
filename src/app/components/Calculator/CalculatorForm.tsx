'use client'
import CountrySelect from '@/app/UI/CountrySelect/CountrySelect'
import arrowIcon from '../../assets/icons/arrow-right-icon.svg'
import Image from 'next/image'
import SizeInput from '@/app/UI/SizeInput/SizeInput'
import styles from './CalculatorForm.module.scss'
import { useState, useEffect } from 'react'
import { ChangeEvent } from 'react'
import { LocationsType } from '@/app/types'

export default function CalculatorForm() {
  const locations: LocationsType[] = [
  {
    city: 'Бишкек',
  },
  {
    city: 'Ош',
  },
]
  const [volume,setVolume] = useState<number | null>(null)
  const [weight, setWeight] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [fromCity, setFromCity] = useState <LocationsType | null>(locations[0])
  const [toCity, setToCity] = useState<LocationsType | null>(locations[0])
  const [price,setPrice] = useState<number | null >(0)

  console.log(toCity,fromCity)


  const handleFromCityChange = (selectedCity: LocationsType ) => {
  if (selectedCity) {
    setFromCity(selectedCity)
  }
  }

  const handleToCityChange = (selectedCity: LocationsType | undefined) => {
  if (selectedCity) {
  setToCity(selectedCity)
  }
  }

  const changeWeight = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value))
  }

  const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value))
  }

const calculatePrice = () => {


  if (!weight || !volume || !fromCity || !toCity) {
    setError('ошибка: Заполните все поля!')
    return
  } else {
    setError(null)
  }

  let PricePerKilogram = weight
  console.log(`${fromCity.city}-${toCity.city}`)
  switch (`${fromCity.city}-${toCity.city}`) {
    case 'Бишкек-Ош':
      PricePerKilogram = 5
      break
    case 'Ош-Бишкек':
      PricePerKilogram = 3
      console.log('Ош-Бишкек')
      break
    case 'Чолпон-Ата-Бишкек':
      PricePerKilogram = 2
      break
    default:
      PricePerKilogram = 5
      break
  }

  if (weight / volume < 1111) {
    const newPrice = volume * 1111
  setPrice(newPrice)
  } else {
    const newPrice = weight * PricePerKilogram
    setPrice(newPrice)
  }
}



  return (
    <div className={styles.content}>
      <div className={styles.locations}>
        <CountrySelect
          onSelectChange={handleFromCityChange}
          options={locations}
          title="откуда"
          value={locations[0]}
        />
        <Image src={arrowIcon} width={30} height={30} alt="" />
        <CountrySelect
          onSelectChange={handleToCityChange}
          options={locations}
          title="куда"
          value={locations[0]}
        />
      </div>
      <div className={styles.sizes}>
        <SizeInput
          onChange={changeWeight}
          value={weight}
          placeholder="вес в кг"
        />
        <SizeInput
          onChange={changeVolume}
          value={volume}
          placeholder="объем в м3"
        />
      </div>
      <div className={styles.price}>
        <button onClick={calculatePrice}>посчитать</button>
        <span className={styles.price_item}>цена: {price} сом</span>
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
