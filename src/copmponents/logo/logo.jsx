import React from 'react'
import s from './logo.module.css'
import logoImage from '../../assets/logo.png'

const Logo = () => {
  return <img className={s.logo} src={logoImage}></img>
}

export default Logo
