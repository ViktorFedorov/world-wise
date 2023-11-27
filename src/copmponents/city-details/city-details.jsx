import React from 'react'
import { useParams } from 'react-router-dom'
import styles from './city-details.module.css'

const CityDetails = () => {
  const { id } = useParams()

  return <div className={styles.details}>{id}</div>
}

export default CityDetails
