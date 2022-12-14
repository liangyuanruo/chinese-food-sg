import Cuisine from "../data/cuisines";
import { Place } from "../data/places";
import Region from "../data/regions";

export type PlaceGeoJSONProperties = Place & {
  region: Region;
  icon: string;
};

export function getCuisineRegion(cuisine: Cuisine) {
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

// icon-image name, icon-size, and symbol-sort-key
type IconInfo = [string, number, number];

/**
 * Computes = properties for ReactMapGL layer
 * @param p Place
 * @returns IconInfo
 */
function computeIcon(p: Place): IconInfo {
  if (p.recommended) return ["custom-star", 0.05, 2];
  return ["custom-marker-red", 0.05, 1];
}

export function convertPlacesToGeoJSON(
  places: Place[]
): GeoJSON.FeatureCollection<GeoJSON.Point, PlaceGeoJSONProperties> {
  return {
    type: "FeatureCollection",
    features: places.map((p) => {
      const [icon, iconSize, symbolSortKey] = computeIcon(p);
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
          icon,
          iconSize,
          symbolSortKey,
          googleMapUrl: p.googleMapUrl,
          latitude: p.latitude,
          longitude: p.longitude,
        },
      };
    }),
  };
}
