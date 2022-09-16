import React from 'react'
import styles from '../styles/topnav.module.scss'
import Link from 'next/link'

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
    </div>
  )
}

export default Topnav
