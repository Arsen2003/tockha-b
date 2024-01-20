import Link from "next/link"
import { ReactNode } from "react"
import type { UrlObject } from 'url'
import styles  from "./LinkButton.module.scss"
type LinkButtonProps = {
  children?: ReactNode
  href: UrlObject | string
}

export default function LinkButton ({children,href}:LinkButtonProps) {
  return  (
    <Link className={styles.a} href={href}>{children}</Link>
  )
}