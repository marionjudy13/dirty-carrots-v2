import styles from '../styles/layout.module.scss'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {children}
          <Link href="/">
            <a className={styles.backHome}>Back Home</a>
          </Link>
        </div>
      </div>
    </>
  )
}
