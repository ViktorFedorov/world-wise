import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './map.module.css'
import { useSearchParams } from 'react-router-dom'
import { useCities } from '../../context/cities-context.jsx'

const Map = () => {
  const { cities } = useCities()

  const [searchParams, setSearchParams] = useSearchParams()
  const [mapPosition, setMapPosition] = useState([
    52.53586782505711, 13.376933665713324
  ])

  // const lat = searchParams.get('lat')
  // const lng = searchParams.get('lng')
  //
  // useEffect(() => {
  //   if (!lat && !lng) return
  //   setMapPosition([+lat, +lng])
  // }, [lat, lng])
  //
  // console.log(mapPosition)

  return (
    // <div className={styles.mapContainer}>
    <MapContainer
      center={mapPosition}
      zoom={13}
      scrollWheelZoom={true}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {cities.map((city) => (
        <Marker
          position={[city.position.lat, city.position.lng]}
          key={city.id}
        />
      ))}
      {/*<Marker position={mapPosition}>*/}
      {/*  <Popup>*/}
      {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
      {/*  </Popup>*/}
      {/*</Marker>*/}
    </MapContainer>
    // </div>
  )
}

export default Map
