import React from 'react'
import styles from '../styles/topnav.module.scss'

function Topnav() {
  return (
    <div className={styles.wrapper}>
      <nav>
        <img src="/images/carrot-01.jpg" />
        Dirty Carrots
      </nav>
    </div>
  )
}

export default Topnav
