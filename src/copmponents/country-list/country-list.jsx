import React from 'react'

const CountryList = ({ countries }) => {
  console.log(countries)

  return (
    <ul>
      {countries.map((country) => (
        <div key={country.country}>1</div>
      ))}
    </ul>
  )
}

export default CountryList
