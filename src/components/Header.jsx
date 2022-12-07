import React from 'react'
import styles from './Header.module.css'

function Header() {
  const title = 'noticiosos'
  return (
    <div className={styles.container}>
      <img className={styles.logo}src='https://cdn-icons-png.flaticon.com/512/44/44386.png' />
      <h1 className={styles.tittle}>{title.toUpperCase()}</h1>
    </div>
  )
}

export default Header