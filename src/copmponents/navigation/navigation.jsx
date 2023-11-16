import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>home</NavLink>
        </li>
        <li>
          <NavLink to='/product'>product</NavLink>
        </li>
        <li>
          <NavLink to='/pricing'>pricing</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
