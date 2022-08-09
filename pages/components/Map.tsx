import ReactMapGL, { Source, Layer } from "react-map-gl";

import Cuisine from "../../data/cuisines";
import Region from "../../data/regions";
import places, { Place } from "../../data/places";

function getCuisineGroup(cuisine: Cuisine) {
  switch (cuisine) {
    case Cuisine.QINGHAI:
    case Cuisine.GANSU:
    case Cuisine.NINGXIA:
    case Cuisine.XINJIANG:
    case Cuisine.SHAANXI:
      return Region.NORTHWEST;

    case Cuisine.HEILONGJIANG:
    case Cuisine.JILIN:
    case Cuisine.LIAONING:
      return Region.NORTHEAST;

    case Cuisine.INNER_MONGOLIA:
    case Cuisine.BEIJING:
    case Cuisine.TIANJIN:
    case Cuisine.HEBEI:
    case Cuisine.SHANXI:
      return Region.NORTH;

    case Cuisine.SHANDONG:
    case Cuisine.SHANGHAI:
    case Cuisine.JIANGSU:
    case Cuisine.ZHEJIANG:
    case Cuisine.ANHUI:
    case Cuisine.JIANGXI:
    case Cuisine.FUJIAN:
    case Cuisine.TAIWAN:
      return Region.EAST;

    case Cuisine.SICHUAN:
    case Cuisine.CHONGQING:
    case Cuisine.YUNNAN:
    case Cuisine.GUIZHOU:
    case Cuisine.TIBET:
      return Region.SOUTHWEST;

    case Cuisine.GUANGDONG:
    case Cuisine.HONGKONG:
    case Cuisine.MACAU:
    case Cuisine.HAINAN:
    case Cuisine.HUBEI:
    case Cuisine.HUNAN:
    case Cuisine.HENAN:
    case Cuisine.GUANGXI:
      return Region.SOUTHCENTRAL;
  }
}

function convertPlacesToGeoJSON(
  places: Place[]
): GeoJSON.FeatureCollection<GeoJSON.Point> {
  return {
    type: "FeatureCollection",
    features: places.map((p) => {
      return {
        type: "Feature",
        geometry: { type: "Point", coordinates: [p.longitude, p.latitude] },
        properties: {
          cuisine: p.cuisine,
          group: getCuisineGroup(p.cuisine),
          icon: "restaurant",
        },
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
      mapStyle="mapbox://styles/liangyuanruo/cl6lm1aiz000n14msstcj6oc6"
    >
      <Source
        id="places-source"
        type="geojson"
        data={convertPlacesToGeoJSON(places)}
      >
        <Layer
          id="places-layer"
          type="symbol"
          layout={{
            "icon-image": "{icon}",
            "icon-allow-overlap": true,
            "icon-size": 1.3,
          }}
        />
      </Source>
    </ReactMapGL>
  );
}
