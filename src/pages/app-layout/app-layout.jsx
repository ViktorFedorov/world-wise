import React from 'react'
import Sidebar from '../../copmponents/sidebar/sidebar.jsx'
import Map from '../../copmponents/map/map.jsx'
import styles from './app-layout.module.css'

const AppLayout = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  )
}

export default AppLayout
