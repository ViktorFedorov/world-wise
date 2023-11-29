import { createContext, useContext, useEffect, useState } from 'react'

const BASE_URL = 'http://localhost:3000'
const CitiesContext = createContext(null)

const uniqCountries = (cities) => {
  const countries = []

  for (let i = 0; i < cities.length; i++) {
    if (countries.some((country) => country.country === cities[i].country))
      continue
    countries.push(cities[i])
  }
  return countries
}

const CitiesProvider = ({ children }) => {
  const [cities, setCities] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getCities = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`${BASE_URL}/cities`)
        const cities = await response.json()
        setCities(cities)
      } catch {
        alert('loading fail')
      } finally {
        setIsLoading(false)
      }
    }

    getCities()
  }, [])

  return (
    <CitiesContext.Provider
      value={{
        cities,
        countries: uniqCountries(cities),
        isLoading
      }}
    >
      {children}
    </CitiesContext.Provider>
  )
}

const useCities = () => {
  return useContext(CitiesContext)
}

export { CitiesContext, CitiesProvider, useCities }
