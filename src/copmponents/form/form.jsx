import React, { useState } from 'react'
import styles from './form.module.css'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [cityName, setCityName] = useState('')
  const [country, setCountry] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')

  const navigate = useNavigate()

  return (
    <form className={styles.form}>
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
        <input
          value={date}
          type='datetime-local'
          id='date'
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className={styles.element}>
        <label htmlFor='text'>Notes about your trip to</label>
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
