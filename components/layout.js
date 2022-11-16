import styles from '../styles/layout.module.scss'
import Link from 'next/link'
import Topnav from './topnav'
import WorkInProgress from './work-in-progress'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      {/* <WorkInProgress className="rightSide" /> */}
      <Topnav />
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
