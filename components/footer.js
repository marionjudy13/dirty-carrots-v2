import Socials from './socials'
import styles from '../styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <Socials />
        <a
          href="mailto: marion@spiderwebs.dev"
          target="_blank"
          className={styles.link}
        >
          marion@spiderwebs.dev
        </a>
      </div>
    </footer>
  )
}
