import React from 'react'
import styles from './city.module.css'
import { Link } from 'react-router-dom'

const City = ({ city }) => {
  const { cityName, emoji, date, id } = city

  return (
    <li className={styles.city}>
      <Link to={`${id}`}>
        <div className={styles.left}>
          <img src={emoji} alt='' className={styles.flag} />
          <p className={styles.name}>{cityName}</p>
        </div>
        <div className={styles.group}>
          <p>({date})</p>
          <button className={styles.remove}>x</button>
        </div>
      </Link>
    </li>
  )
}

export default City
