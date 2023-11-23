import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from '../../pages/product/product-page.jsx'
import HomePage from '../../pages/home/home-page.jsx'
import PricingPage from '../../pages/prices/pricing-page.jsx'
import NotFoundPage from '../../pages/not-found/not-found-page.jsx'
import AppLayout from '../../pages/app-layout/app-layout.jsx'
import CityList from '../city-list/city-list.jsx'
import CountryList from '../country-list/country-list.jsx'

const BASE_URL = 'http://localhost:3000'

const App = () => {
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

  console.log(cities)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='app' element={<AppLayout />}>
            <Route
              index
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route
              path='cities'
              element={<CityList cities={cities} isLoading={isLoading} />}
            />
            <Route path='countries' element={<CountryList />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
