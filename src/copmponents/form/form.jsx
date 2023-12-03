import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import useCoords from '../../hooks/useCoords.js'
import Message from '../message/message.jsx'
import Spinner from '../spinner/spinner.jsx'
import styles from './form.module.css'
import 'react-datepicker/dist/react-datepicker.css'
import { useCities } from '../../context/cities-context.jsx'

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client'

const Form = () => {
  const [lat, lng] = useCoords()
  const [cityName, setCityName] = useState('')
  const [countryName, setCountryName] = useState('')
  const [date, setDate] = useState(Date.now())
  const [notes, setNotes] = useState('')
  const navigate = useNavigate()
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false)
  const [errorGeocoding, setErrorGeocoding] = useState('')
  const { addCity } = useCities()

  useEffect(() => {
    const getCityData = async () => {
      try {
        setErrorGeocoding('')
        setIsLoadingGeocoding(true)
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`)
        const data = await res.json()

        if (!data.countryCode)
          throw new Error(
            "That doesn't seem to be a city. Click somewhere else"
          )

        setCityName(data.city || data.locality)
        setCountryName(data.countryName)
      } catch (err) {
        setErrorGeocoding(err)
      } finally {
        setIsLoadingGeocoding(false)
      }
    }

    getCityData()
  }, [lat, lng])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!cityName || !date) return

    const newCity = {
      cityName,
      country: countryName,
      emoji: 'https://emojio.ru/images/apple-b/1f1e9-1f1ea.png',
      date,
      notes,
      position: {
        lat,
        lng
      }
    }

    addCity(newCity)
    navigate('/app/cities')
  }

  if (isLoadingGeocoding) return <Spinner />
  if (errorGeocoding) return <Message message={errorGeocoding.message} />

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.element}>
        <label htmlFor='city'>City name</label>
        <input
          value={cityName}
          type='text'
          id='city'
          onChange={(e) => setCityName(e.target.value)}
        />
      </div>
      <div className={styles.element}>
        <label htmlFor='date'>When did you go to?</label>
        <DatePicker
          id='date'
          showIcon
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat='dd.mm.yyyy'
        />
      </div>
      <div className={styles.element}>
        <label htmlFor='text'>Notes about your trip to {cityName}</label>
        <textarea
          value={notes}
          id='text'
          rows={5}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <div className={styles.buttons}>
        <button type='submit' className={styles.button}>
          Submit
        </button>
        <button
          className={styles.button}
          onClick={(e) => {
            e.preventDefault()
            navigate(-1)
          }}
        >
          &larr; Back
        </button>
      </div>
    </form>
  )
}

export default Form
