import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './navigation.module.css'

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        <li>
          <NavLink to='/'>home</NavLink>
        </li>
        <li>
          <NavLink to='product'>product</NavLink>
        </li>
        <li>
          <NavLink to='pricing'>pricing</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
