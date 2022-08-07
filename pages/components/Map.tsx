import ReactMapGL from 'react-map-gl'

export default function Map() {
  return (<ReactMapGL
    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
    initialViewState={{
      longitude: 103.83,
      latitude: 1.35,
      zoom: 10
    }}
    style={{width: '100%', height: '100%', position: 'absolute'}}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />)
}
