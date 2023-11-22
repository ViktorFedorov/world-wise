import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../copmponents/navigation/navigation.jsx'

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <h1>Home page</h1>
      <Link to='app'>Go to the App</Link>
    </div>
  )
}

export default HomePage
