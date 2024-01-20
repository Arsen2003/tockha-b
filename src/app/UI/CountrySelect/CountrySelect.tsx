'use client'

import styles from './CountrySelect.module.scss'
import { LocationsType } from '@/app/types'
import { jura } from '@/app/assets/Fonts/Font'
import { useState, useEffect } from 'react'

type CountrySelectProps = {
  title?: string
  options: LocationsType[]
  value: LocationsType

  onSelectChange: (selectedCity: LocationsType ) => void
}

export default function CountrySelect({
  title,
  options,
  value,
  onSelectChange,
}: CountrySelectProps) {

  const [activeValue, setActiveValue] = useState<LocationsType>(value)

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = options?.find(
      (item) => item.city === event.target.value
    )
    if (selectedCity) {
      setActiveValue(selectedCity)
      onSelectChange(selectedCity)
    }
  }
  console.log(activeValue)

  return (
    <div className={styles.select_wrapper}>
      <span>{title}</span>
      <select
        style={jura.style}
        className={styles.select}
        onChange={handleSelectChange}
        value={activeValue?.city || options[0].city}
      >
        {options.map((item) => (
          <option key={item.city} className={styles.option} value={item.city}>
            {item.city}
          </option>
        ))}
      </select>
    </div>
  )
}
