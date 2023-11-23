import React from 'react'
import styles from './sidebar.module.css'
import Logo from '../logo/logo.jsx'
import AppNav from '../app-nav/app-nav.jsx'
import { Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
    </div>
  )
}

export default Sidebar
