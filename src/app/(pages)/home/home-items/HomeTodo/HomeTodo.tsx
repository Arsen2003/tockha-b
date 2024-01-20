import styles from './HomeTodo.module.scss'
import Image from 'next/image'
import { ReactNode } from 'react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
type HomeTodoType = {
  image: string | StaticImport
  children: ReactNode
  title: string
}


export default function HomeTodo ({image,children,title}:HomeTodoType ) {
return (
  <div className={styles.item}>
    <Image src={image} alt="item-image"  width={80} height={80}/>
    <div  className={styles.content}>
      <span>{title}</span>
      <p>{children}</p>
    </div>
  </div>
)
}