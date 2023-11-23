import React from 'react'
import styles from './city-list.module.css'
import Spinner from '../spinner/spinner.jsx'
import City from '../city/city.jsx'
import Message from '../message/message.jsx'

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    )

  return (
    <ul className={styles.list}>
      {cities.map((city) => (
        <City city={city} key={city.id} />
      ))}
    </ul>
  )
}

export default CityList
