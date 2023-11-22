import React from 'react'
import s from './app-nav.module.css'

const AppNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.links}>
        <li>cities</li>
        <li>countries</li>
      </ul>
    </nav>
  )
}

export default AppNav
