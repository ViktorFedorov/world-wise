import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import styles from './city-details.module.css'

const CityDetails = () => {
  const { id } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  return (
    <div className={styles.details}>
      <p>Id: {id}</p>
      <p>Latitude: {lat}</p>
      <p>Longitude: {lng}</p>
    </div>
  )
}

export default CityDetails
