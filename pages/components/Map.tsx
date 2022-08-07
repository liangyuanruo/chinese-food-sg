import ReactMapGL, { Source, Layer } from "react-map-gl";
import Cuisine from "../data/cuisines";
import places, { Place } from "../data/places";

function convertPlacesToGeoJSON(
  places: Place[]
): GeoJSON.FeatureCollection<GeoJSON.Point> {
  return {
    type: "FeatureCollection",
    features: places.map((p) => {
      return {
        type: "Feature",
        geometry: { type: "Point", coordinates: [p.longitude, p.latitude] },
        properties: { cuisine: p.cuisine },
      };
    }),
  };
}

export default function Map() {
  return (
    <ReactMapGL
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        longitude: 103.83,
        latitude: 1.35,
        zoom: 12,
      }}
      style={{ width: "100%", height: "100%", position: "absolute" }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Source
        id="places-source"
        type="geojson"
        data={convertPlacesToGeoJSON(places)}
      >
        <Layer
          id="liaoning-layer"
          type="circle"
          paint={{ "circle-radius": 10, "circle-color": "grey" }}
          filter={["==", ["get", "cuisine"], Cuisine.LIAONING]}
        />
        <Layer
          id="shandong-layer"
          type="circle"
          paint={{ "circle-radius": 10, "circle-color": "green" }}
          filter={["==", ["get", "cuisine"], Cuisine.SHANDONG]}
        />
        <Layer
          id="sichuan-layer"
          type="circle"
          paint={{ "circle-radius": 10, "circle-color": "red" }}
          filter={["==", ["get", "cuisine"], Cuisine.SICHUAN]}
        />
        <Layer
          id="hunan-layer"
          type="circle"
          paint={{ "circle-radius": 10, "circle-color": "yellow" }}
          filter={["==", ["get", "cuisine"], Cuisine.HUNAN]}
        />
      </Source>
    </ReactMapGL>
  );
}
