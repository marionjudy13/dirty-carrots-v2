import React from 'react'
import styles from '../styles/topnav.module.scss'
import Link from 'next/link'
import Socials from './socials'

function Topnav() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <Link href="/">
          <a>
            <img src="/images/carrot-01.jpg" />
            <span>Dirty Carrots</span>
          </a>
        </Link>
      </nav>
      <Socials />
    </div>
  )
}

export default Topnav
