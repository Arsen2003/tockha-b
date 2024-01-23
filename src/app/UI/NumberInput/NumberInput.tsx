import styles from './NumberInput.module.scss'
import { jura } from '@/app/assets/Fonts/Font'


export default function NumberInput() {
  return (
    <label className={styles.label}>
      <input
        style={jura.style}
        type="tel"
        placeholder='ваш номер телефона:'
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
      />
    </label>
  )
}