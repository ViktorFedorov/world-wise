import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProductPage from '../../pages/product/product-page.jsx'
import HomePage from '../../pages/home/home-page.jsx'
import PricingPage from '../../pages/prices/pricing-page.jsx'
import NotFoundPage from '../../pages/not-found/not-found-page.jsx'
import AppLayout from '../../pages/app-layout/app-layout.jsx'
import CityList from '../city-list/city-list.jsx'
import CountryList from '../country-list/country-list.jsx'
import CityDetails from '../city-details/city-details.jsx'
import Form from '../form/form.jsx'
import { CitiesProvider } from '../../context/cities-context'

const App = () => {
  return (
    <div>
      <CitiesProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='product' element={<ProductPage />} />
            <Route path='pricing' element={<PricingPage />} />
            <Route path='app' element={<AppLayout />}>
              <Route index element={<Navigate to='cities' />} />
              <Route path='cities' element={<CityList />} />
              <Route path='countries' element={<CountryList />} />
              <Route path='cities/:id' element={<CityDetails />} />
              <Route path='form' element={<Form />} />
            </Route>
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </CitiesProvider>
    </div>
  )
}

export default App
