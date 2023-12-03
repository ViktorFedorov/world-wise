import { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import tr from 'react-datepicker'

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
  const [currentCity, setCurrentCity] = useState({})
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

  const getCity = async (id) => {
    setIsLoading(true)
    try {
      const res = await fetch(`${BASE_URL}/cities/${id}`)
      const city = await res.json()
      setCurrentCity(city)
    } catch {
      alert('City not loaded =(')
    } finally {
      setIsLoading(false)
    }
  }

  const addCity = async (city) => {
    try {
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(city),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (res.ok) {
        const createdCity = await res.json()
        setCities([...cities, createdCity])
      } else {
        throw new Error('City not added =(')
      }
    } catch (err) {
      alert(err)
    } finally {
      setIsLoading(false)
    }
  }

  const removeCity = async (id) => {
    try {
      setIsLoading(true)
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (res.ok) {
        const updatedCities = cities.filter((city) => city.id !== id)
        setCities(updatedCities)
      } else {
        throw new Error('City not deleted =(')
      }
    } catch (err) {
      alert(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        countries: uniqCountries(cities),
        isLoading,
        currentCity,
        getCity,
        addCity,
        removeCity
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
