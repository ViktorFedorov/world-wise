import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState
} from 'react'

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
    case 'ADD_CITY':
      return {
        ...state,
        isLoading: false,
        cities: action.payload
      }
    case 'DELETE_CITY':
      return {
        ...state,
        isLoading: false,
        cities: [...action.payload]
      }
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true
      }
    // case 'END_LOADING':
    //   return {
    //     ...state,
    //     isLoading: false
    //   }
    default:
      return state
  }
}

const CitiesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const getCities = async () => {
      try {
        dispatch({ action: 'START_LOADING' })
        const response = await fetch(`${BASE_URL}/cities`)
        const cities = await response.json()
        dispatch({ action: 'SET_CITIES', payload: cities })
      } catch {
        alert('loading fail')
      }
    }

    getCities()
  }, [])

  // const getCity = async (id) => {
  //   setIsLoading(true)
  //   try {
  //     const res = await fetch(`${BASE_URL}/cities/${id}`)
  //     const city = await res.json()
  //     setCurrentCity(city)
  //   } catch {
  //     alert('City not loaded =(')
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const addCity = async (city) => {
  //   try {
  //     setIsLoading(true)
  //     const res = await fetch(`${BASE_URL}/cities`, {
  //       method: 'POST',
  //       body: JSON.stringify(city),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8'
  //       }
  //     })
  //     if (res.ok) {
  //       const createdCity = await res.json()
  //       setCities([...cities, createdCity])
  //     } else {
  //       throw new Error('City not added =(')
  //     }
  //   } catch (err) {
  //     alert(err)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  // const removeCity = async (id) => {
  //   try {
  //     setIsLoading(true)
  //     const res = await fetch(`${BASE_URL}/cities/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8'
  //       }
  //     })
  //     if (res.ok) {
  //       const updatedCities = cities.filter((city) => city.id !== id)
  //       setCities(updatedCities)
  //     } else {
  //       throw new Error('City not deleted =(')
  //     }
  //   } catch (err) {
  //     alert(err)
  //   } finally {
  //     setIsLoading(false)
  //   }
  // }

  const { cities, isLoading, currentCity, getCity, addCity, removeCity } = state

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
