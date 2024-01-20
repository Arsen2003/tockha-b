import { ReactNode } from 'react'
import styles from './TextInput.module.scss'
import { jura } from '@/app/assets/Fonts/Font'

type CountryInputProps = {
  children?: ReactNode
  placeholder?: string
}

export default function TextInput({
  children,
  placeholder,
}: CountryInputProps) {
  return (
    <label className={styles.label}>
      {children}
      <input style={jura.style} placeholder={placeholder} />
    </label>
  )
}
