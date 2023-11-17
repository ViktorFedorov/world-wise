import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to='app'>Go to the App</Link>
    </div>
  )
}

export default HomePage
