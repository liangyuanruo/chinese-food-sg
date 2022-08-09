import { useState } from "react";
import ReactMapGL, {
  Source,
  Layer,
  MapLayerMouseEvent,
  Popup,
} from "react-map-gl";

import Cuisine from "../../data/cuisines";
import Region from "../../data/regions";
import places, { Place } from "../../data/places";

function getCuisineRegion(cuisine: Cuisine) {
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

type PlaceGeoJSONProperties = Place & {
  region: Region;
  icon: string;
};

function convertPlacesToGeoJSON(
  places: Place[]
): GeoJSON.FeatureCollection<GeoJSON.Point, PlaceGeoJSONProperties> {
  return {
    type: "FeatureCollection",
    features: places.map((p) => {
      return {
        type: "Feature",
        geometry: { type: "Point", coordinates: [p.longitude, p.latitude] },
        properties: {
          name: p.name,
          cuisine: p.cuisine,
          dishes: p.dishes,
          address: p.address,
          stars: p.stars,
          region: getCuisineRegion(p.cuisine),
          icon: "restaurant",
          google_map_url: p.google_map_url,
          latitude: p.latitude,
          longitude: p.longitude,
        },
      };
    }),
  };
}

export default function Map() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupProps, setPopupProps] = useState<PlaceGeoJSONProperties>();

  function showMore(e: MapLayerMouseEvent) {
    if (e.features?.length) {
      const [feature] = e.features;
      const { properties: p } = feature;
      console.log(p);
      setPopupProps({
        name: p?.name,
        cuisine: p?.cuisine,
        dishes: p?.dishes,
        address: p?.address,
        stars: p?.stars,
        region: p?.region,
        icon: p?.icon,
        google_map_url: p?.google_map_url,
        latitude: p?.latitude,
        longitude: p?.longitude,
      });
      setShowPopup(true);
    }
  }
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
      interactiveLayerIds={["places-layer"]}
      onClick={showMore}
    >
      {" "}
      {showPopup && (
        <Popup
          latitude={popupProps?.latitude!}
          longitude={popupProps?.longitude!}
          anchor="bottom"
          onClose={() => {
            setShowPopup(false);
          }}
        >
          {popupProps?.name}
        </Popup>
      )}
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
