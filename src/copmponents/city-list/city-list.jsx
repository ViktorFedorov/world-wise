import React from 'react'
import styles from './city-list.module.css'
import City from '../city/city.jsx'

const CityList = () => {
  return (
    <ul className={styles.list}>
      <City />
      <City />
      <City />
    </ul>
  )
}

export default CityList
