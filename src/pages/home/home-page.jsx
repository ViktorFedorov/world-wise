import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../copmponents/navigation/navigation.jsx'
import styles from './home-page.module.css'

const HomePage = () => {
  return (
    <div className={styles.home}>
      <Navigation />
      <h1 className={styles.heding}>
        You travel the world.
        <br />
        WorldWise keeps track of your adventures.
      </h1>
      <h2 className={styles.subheader}>
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </h2>
      <Link className={styles.gotoapp} to='app'>
        start tracking now
      </Link>
    </div>
  )
}

export default HomePage
