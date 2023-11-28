import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import styles from './map.module.css'

const Map = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  const navigate = useNavigate()

  return (
    <div className={styles.map} onClick={() => navigate('form')}>
      <h1>Map</h1>
      <h2>
        Position: {lat} {lng}
      </h2>
    </div>
  )
}

export default Map
