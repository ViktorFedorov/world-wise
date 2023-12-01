import React, { useEffect, useState } from 'react'
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents
} from 'react-leaflet'
import styles from './map.module.css'
import { useCities } from '../../context/cities-context.jsx'
import { useNavigate, useSearchParams } from 'react-router-dom'

const Map = () => {
  const { cities } = useCities()
  const [searchParams, setSearchParams] = useSearchParams()
  const [mapPosition, setMapPosition] = useState([59.5358, 30.376])

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  useEffect(() => {
    if (!lat && !lng) return
    setMapPosition([+lat, +lng])
  }, [lat, lng])

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
            <p>{city.cityName}</p>
          </Popup>
        </Marker>
      ))}
      <JumpToCoords position={mapPosition} />
      <DetectClick />
    </MapContainer>
  )
}

// docs to leaflet https://react-leaflet.js.org/docs/api-map/#usemapevents
const JumpToCoords = ({ position }) => {
  const map = useMap()
  map.setView(position)
  return null
}

const DetectClick = () => {
  const navigate = useNavigate()
  useMapEvents({
    click: () => {
      navigate('form')
    }
  })
}

export default Map
