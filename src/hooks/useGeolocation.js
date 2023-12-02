import React, { useState } from 'react'

const useGeolocation = () => {
  const [position, setPosition] = useState(null)

  const getPosition = () => {
    if (!navigator.geolocation) {
      return console.log('Geolocation is disabled on your browser')
    }

    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lan: pos.coords.latitude,
        lng: pos.coords.longitude
      })
    })
  }

  return { position, getPosition }
}

export default useGeolocation
