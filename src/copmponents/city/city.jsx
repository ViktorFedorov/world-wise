import React from 'react'
import styles from './city.module.css'

const City = ({ city }) => {
  const { cityName, emoji, date } = city

  const data = date.toLocaleString()

  return (
    <li className={styles.city}>
      <div className={styles.left}>
        <img src={emoji} alt='' className={styles.flag} />
        <p className={styles.name}>{cityName}</p>
      </div>
      <div className={styles.group}>
        <p>({data})</p>
        <button className={styles.remove}>x</button>
      </div>
    </li>
  )
}

export default City
