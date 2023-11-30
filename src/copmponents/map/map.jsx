import React, { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './map.module.css'
import { useCities } from '../../context/cities-context.jsx'

const Map = () => {
  const { cities } = useCities()

  const [mapPosition, setMapPosition] = useState([
    52.53586782505711, 13.376933665713324
  ])

  return (
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
        <Marker position={[city.position.lat, city.position.lng]} key={city.id}>
          <Popup>
            {city.cityName} <br /> {city.notes}
          </Popup>
        </Marker>
      ))}
      {/*<Marker position={mapPosition}>*/}
      {/*  <Popup>*/}
      {/*    A pretty CSS3 popup. <br /> Easily customizable.*/}
      {/*  </Popup>*/}
      {/*</Marker>*/}
    </MapContainer>
  )
}

export default Map
