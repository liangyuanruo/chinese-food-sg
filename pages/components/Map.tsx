import ReactMapGL from 'react-map-gl'

export default function Map() {
  return (<ReactMapGL
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    initialViewState={{
      longitude: 103.83,
      latitude: 1.35,
      zoom: 10
    }}
    style={{width: 600, height: 400}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />)
}
