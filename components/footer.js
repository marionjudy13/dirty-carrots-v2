import Socials from './socials'
import styles from '../styles/footer.module.scss'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Socials />
        <Link href="/contact">
          <a className={styles.link}>Contact Me</a>
        </Link>
      </div>
    </footer>
  )
}
