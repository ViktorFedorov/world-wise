import { useSearchParams } from 'react-router-dom'

const useCoords = () => {
  const [searchParams] = useSearchParams()

  const lat = searchParams.get('lat')
  const lng = searchParams.get('lng')

  return [+lat, +lng]
}

export default useCoords