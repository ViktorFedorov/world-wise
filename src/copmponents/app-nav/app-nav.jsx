import React from 'react'
import styles from './app-nav.module.css'
import { Link } from 'react-router-dom'

const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        <li className={styles.active}>
          <Link to='cities'>cities</Link>
        </li>
        <li>
          <Link to='countries'>countries</Link>
        </li>
      </ul>
    </nav>
  )
}

export default AppNav
