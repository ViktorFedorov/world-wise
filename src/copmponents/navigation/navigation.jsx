import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './navigation.module.css'
import Logo from '../logo/logo.jsx'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <NavLink to='/'>
            <Logo />
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.login} to='/login'>
            login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
