import styles from './SizeInput.module.scss'
import { jura } from '@/app/assets/Fonts/Font'
import { ChangeEvent } from 'react'
type SizeInputType = {
  placeholder?: string
  value: number | null
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}


export default function SizeInput({ placeholder, onChange, value }: SizeInputType) {
  return (
    <label className={styles.label}>
      <input
        style={jura.style}
        onChange={onChange}
        placeholder={placeholder}
        type="number"
      />

    </label>
  )
}