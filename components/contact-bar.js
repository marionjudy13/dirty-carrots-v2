import Socials from './socials'
import styles from '../styles/contact-bar.module.scss'

export default function ContactBar() {
  return (
    <footer className={styles.container}>
      <div className="wrapper">
        <Socials />
        <a href="mailto: marion@spiderwebs.dev" target="_blank">
          marion@spiderwebs.dev
        </a>
      </div>
    </footer>
  )
}
