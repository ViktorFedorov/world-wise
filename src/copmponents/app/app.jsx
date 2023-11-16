import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductPage from '../../pages/product/product-page.jsx'
import HomePage from '../../pages/home/home-page.jsx'
import PricingPage from '../../pages/prices/pricing-page.jsx'
import NotFoundPage from '../../pages/not-found/not-found-page.jsx'
import Navigation from '../navigation/navigation.jsx'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='product' element={<ProductPage />} />
          <Route path='pricing' element={<PricingPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
