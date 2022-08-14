import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Divider, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactMapGL, {
  GeolocateControl,
  Source,
  Layer,
  MapLayerMouseEvent,
  Popup,
} from "react-map-gl";

import places from "../../data/places";
import {
  convertPlacesToGeoJSON,
  PlaceGeoJSONProperties,
} from "../../services/geo";

export default function Map() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupProps, setPopupProps] = useState<PlaceGeoJSONProperties>();

  function showMore(e: MapLayerMouseEvent) {
    // nothing of note was clicked on
    if (!e.features?.length) return;

    // close previous popup if open
    if (showPopup) {
      setShowPopup(false);
      return;
    }

    //open popup with all the information
    const [feature] = e.features;
    const { properties: p } = feature;

    setShowPopup(true);
    setPopupProps({
      name: p?.name,
      cuisine: p?.cuisine,
      dishes: p?.dishes,
      address: p?.address,
      stars: p?.stars,
      region: p?.region,
      icon: p?.icon,
      googleMapUrl: p?.googleMapUrl,
      latitude: p?.latitude,
      longitude: p?.longitude,
    });
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
      <GeolocateControl trackUserLocation={true} showUserHeading={true} />
      {showPopup && (
        <Popup
          latitude={popupProps?.latitude!}
          longitude={popupProps?.longitude!}
          anchor="bottom"
          closeOnMove={true}
          onClose={() => {
            setShowPopup(false);
          }}
        >
          <Box maxW="sm" borderRadius="lg" overflow="hidden">
            <Box margin={1}>
              <Box display="flex" alignItems="baseline" margin={1}>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {popupProps?.cuisine}
                </Badge>
              </Box>
              <Text
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize="xs"
              >
                {popupProps?.name}
              </Text>
            </Box>
            <Divider />
            <Text fontWeight="normal" fontSize="xs" margin={1}>
              Google Rating
            </Text>
            <Box display="flex" mt="2" alignItems="center">
              {popupProps?.stars}{" "}
              {Array(5)
                .fill("")
                .map((_, i) => {
                  const stars = popupProps?.stars ?? 0;
                  return (
                    <StarIcon
                      key={i}
                      color={i < stars ? "teal.500" : "gray.300"}
                    />
                  );
                })}
            </Box>
          </Box>
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
            "icon-size": ["get", "iconSize"],
            "symbol-sort-key": ["get", "symbolSortKey"],
            "symbol-z-order": "source",
            "text-field": "{name}",
            "text-allow-overlap": true,
            "text-variable-anchor": ["top", "bottom", "left", "right"],
            "text-justify": "auto",
            "text-optional": true,
            "text-size": {
              stops: [
                [0, 0],
                [15, 0],
                [16, 13],
              ],
            },
          }}
          paint={{
            "text-color": "#ffffff",
            "text-opacity": {
              stops: [
                [0, 0],
                [15, 0],
                [16, 1],
              ],
            },
          }}
        />
      </Source>
    </ReactMapGL>
  );
}
