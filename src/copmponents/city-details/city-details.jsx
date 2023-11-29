import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCities } from '../../context/cities-context.jsx'
import Spinner from '../spinner/spinner.jsx'
import styles from './city-details.module.css'

const CityDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { currentCity, getCity, isLoading } = useCities()
  const { cityName, emoji, notes } = currentCity

  useEffect(() => {
    getCity(id)
  }, [id])

  if (isLoading) return <Spinner />

  return (
    <div className={styles.details}>
      <p className={styles.heading}>city name</p>
      <div className={styles.wrapper}>
        <img className={styles.flag} src={emoji} alt='' />
        <p className={styles.name}>{cityName}</p>
      </div>
      <p className={styles.heading}>you went to lisbon on</p>
      <p className={styles.date}>Sunday, November 31, 2025</p>
      <p className={styles.heading}>your notes</p>
      <p className={styles.notes}>{notes}</p>
      <p className={styles.heading}>learn more</p>
      <a
        className={styles.link}
        href={`https://en.wikipedia.org/wiki/${cityName}`}
        target='_blank'
      >
        Check out {cityName} on Wikipedia &rarr;{' '}
      </a>
      <button className={styles.button} onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  )
}

export default CityDetails
