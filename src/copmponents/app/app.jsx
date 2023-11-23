import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from '../../pages/product/product-page.jsx'
import HomePage from '../../pages/home/home-page.jsx'
import PricingPage from '../../pages/prices/pricing-page.jsx'
import NotFoundPage from '../../pages/not-found/not-found-page.jsx'
import AppLayout from '../../pages/app-layout/app-layout.jsx'
import CityList from '../city-list/city-list.jsx'
import CountryList from '../country-list/country-list.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='app' element={<AppLayout />}>
            <Route index element={<CityList />} />
            <Route path='cities' element={<CityList />} />
            <Route path='countries' element={<CountryList />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
