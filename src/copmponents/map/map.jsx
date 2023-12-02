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
import { useNavigate } from 'react-router-dom'
import useGeolocation from '../../hooks/useGeolocation.js'
import useCoords from '../../hooks/useCoords.js'

const Map = () => {
  const [lat, lng] = useCoords()
  const { position, getPosition } = useGeolocation()
  const { cities } = useCities()
  const [mapPosition, setMapPosition] = useState([60.0052036, 30.2096536])

  useEffect(() => {
    if (lat && lng) {
      setMapPosition([+lat, +lng])
    }
  }, [lat, lng])

  useEffect(() => {
    if (position) {
      setMapPosition([position.lan, position.lng])
    }
  }, [position])

  return (
    <>
      <button onClick={getPosition} className={styles.whereiam}>
        get position
      </button>
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
          >
            <Popup>
              <p>{city.cityName}</p>
            </Popup>
          </Marker>
        ))}
        <JumpToCoords position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </>
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
    click: (e) => {
      const lat = e.latlng.lat
      const lng = e.latlng.lng

      navigate(`form?lat=${lat}&lng=${lng}`)
    }
  })
}

export default Map
