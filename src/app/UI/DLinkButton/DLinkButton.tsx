import styles from './DLinkButton.module.scss'
import { ReactNode } from 'react'
import type { UrlObject } from 'url'

type DLinkButtonProps = {
  children?: ReactNode
  href:  string
}

export default  function DLinkButton({children,href}: DLinkButtonProps) {
  return (
  <a className={styles.a} href={href}>
    {children}
  </a>)
}