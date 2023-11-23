import React from 'react'
import styles from './logo.module.css'
import logoImage from '../../assets/logo.png'

const Logo = () => {
  return <img className={styles.logo} src={logoImage}></img>
}

export default Logo
