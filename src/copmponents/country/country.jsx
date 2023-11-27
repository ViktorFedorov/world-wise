import React from 'react'
import styles from './country.module.css'

const Country = ({ country }) => {
  return (
    <li className={styles.country}>
      <img src={country.emoji} alt='flag' />
      <p>{country.country}</p>
    </li>
  )
}

export default Country
