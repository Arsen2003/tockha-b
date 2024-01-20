import { ReactNode } from "react"
import styles from './CButton.module.scss'
import { jura } from "@/app/assets/Fonts/Font"
type CButtonProps = {
  children :ReactNode,
}


export default function CButton ({children}:CButtonProps){
  return (
    <button style={jura.style} className={styles.button}>
      {children}
    </button>
  )
}