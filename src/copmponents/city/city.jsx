import React from 'react'
import styles from './city.module.css'
import { Link } from 'react-router-dom'
import { useCities } from '../../context/cities-context.jsx'

const City = ({ city }) => {
  const { cityName, emoji, date, id, position } = city
  const { currentCity } = useCities()

  return (
    <li
      className={
        currentCity.id === id ? `${styles.city} ${styles.active}` : styles.city
      }
    >
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
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
