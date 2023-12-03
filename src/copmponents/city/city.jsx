import React from 'react'
import { Link } from 'react-router-dom'
import { useCities } from '../../context/cities-context.jsx'
import styles from './city.module.css'

const City = ({ city }) => {
  const { cityName, emoji, date, id, position } = city
  const { currentCity, removeCity } = useCities()

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
        <p>({date})</p>
      </Link>
      <button className={styles.remove} onClick={() => removeCity(id)}>
        x
      </button>
    </li>
  )
}

export default City
