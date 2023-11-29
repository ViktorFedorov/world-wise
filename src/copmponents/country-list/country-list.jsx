import React from 'react'
import Country from '../country/country.jsx'
import { useCities } from '../../context/cities-context.jsx'
import styles from './country-list.module.css'

const CountryList = () => {
  const { countries } = useCities()

  return (
    <ul className={styles.countries}>
      {countries.map((country) => (
        <Country country={country} key={country.emoji} />
      ))}
    </ul>
  )
}

export default CountryList
