import React from 'react'
import s from './sidebar.module.css'
import Logo from '../logo/logo.jsx'
import AppNav from '../app-nav/app-nav.jsx'

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <Logo />
      <AppNav />
    </div>
  )
}

export default Sidebar
