import React from 'react'
import Sidebar from '../../copmponents/sidebar/sidebar.jsx'
import Map from '../../copmponents/map/map.jsx'
import User from '../../copmponents/user/user.jsx'
import styles from './app-layout.module.css'

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  )
}

export default AppLayout
