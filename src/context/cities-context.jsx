import { createContext, useContext, useEffect, useReducer } from 'react'

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

const initialState = {
  cities: [],
  currentCity: {},
  isLoading: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CITIES':
      return {
        ...state,
        isLoading: false,
        cities: [...action.payload]
      }
    case 'OPEN_CITY_DETAILS':
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload
      }
    case 'ADD_CITY':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload
      }
    case 'DELETE_CITY':
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities.filter((city) => city.id !== action.payload)],
        currentCity: {}
      }
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'ERROR':
      return alert(action.payload)
    default:
      return state
  }
}

const CitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getCities = async () => {
      try {
        dispatch({ type: 'START_LOADING' })
        const response = await fetch(`${BASE_URL}/cities`)
        const cities = await response.json()
        dispatch({ type: 'SET_CITIES', payload: cities })
      } catch {
        dispatch({ type: 'ERROR', payload: 'loading fail' })
      }
    }

    getCities()
  }, [])

  const getCity = async (id) => {
    try {
      dispatch({ type: 'START_LOADING' })
      const res = await fetch(`${BASE_URL}/cities/${id}`)
      const city = await res.json()
      dispatch({ type: 'OPEN_CITY_DETAILS', payload: city })
    } catch {
      dispatch({ type: 'ERROR', payload: 'City not loaded =(' })
    }
  }

  const addCity = async (city) => {
    try {
      dispatch({ type: 'START_LOADING' })
      const res = await fetch(`${BASE_URL}/cities`, {
        method: 'POST',
        body: JSON.stringify(city),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (res.ok) {
        const createdCity = await res.json()
        dispatch({ type: 'ADD_CITY', payload: createdCity })
      } else {
        throw new Error('City not added =(')
      }
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err })
    }
  }

  const removeCity = async (id) => {
    try {
      dispatch({ type: 'START_LOADING' })
      const res = await fetch(`${BASE_URL}/cities/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      if (res.ok) {
        dispatch({ type: 'DELETE_CITY', payload: id })
      } else {
        throw new Error('City not deleted =(')
      }
    } catch (err) {
      dispatch({ type: 'ERROR', payload: err })
    }
  }

  const { cities, currentCity, isLoading } = state

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
