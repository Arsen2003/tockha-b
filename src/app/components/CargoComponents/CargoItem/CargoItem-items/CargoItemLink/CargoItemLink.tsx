import styles from './CargoItemLink.module.scss'
import Link from 'next/link'
import { ReactNode } from 'react'
import type { UrlObject } from 'url'

type CargoItemLinkProps = {
  children?: ReactNode
  href: UrlObject | string
}

export default function CargoItemLink({ children, href }: CargoItemLinkProps) {
  return (
    <Link className={styles.link} href={href}>
      {children} &#10512;
    </Link>
  )
}