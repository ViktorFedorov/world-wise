import React from 'react'
import styles from './city.module.css'

const City = () => {
  return (
    <li className={styles.city}>
      <p className={styles.name}>Lisbon</p>
      <div className={styles.group}>
        <p>(October 31, 2027)</p>
        <button className={styles.remove}>x</button>
      </div>
    </li>
  )
}

export default City
