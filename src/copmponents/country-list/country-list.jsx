import React from 'react'

const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries.map((country) => (
        <div key={country}>{country}</div>
      ))}
    </ul>
  )
}

export default CountryList
