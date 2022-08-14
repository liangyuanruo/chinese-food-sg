import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Divider,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import ReactMapGL, {
  GeolocateControl,
  Source,
  Layer,
  MapLayerMouseEvent,
  Popup,
} from "react-map-gl";
import NextLink from "next/link";

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
      dishes: JSON.parse(p?.dishes),
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
              {/* Badge */}
              <Box display="flex" alignItems="baseline" margin={1}>
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {popupProps?.cuisine}
                </Badge>
              </Box>
              {/* Name */}
              <Heading
                fontWeight="semibold"
                letterSpacing="wide"
                textTransform="uppercase"
                fontSize="xs"
              >
                {popupProps?.name}
              </Heading>
              {/* Address */}
              <Text fontWeight="normal">
                <NextLink href={popupProps?.googleMapUrl!} passHref>
                  <Link>{popupProps?.address}</Link>
                </NextLink>
              </Text>
            </Box>
            <Divider />
            {/* Ratings */}
            <Heading fontWeight="medium" fontSize="xs" marginTop={2}>
              Google Rating
            </Heading>
            <Box display="flex" mt="2" alignItems="center" margin={0}>
              <Text fontWeight="light" marginRight={1}>
                {popupProps?.stars}
              </Text>
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
            {/* Dishes to order */}
            <Heading fontWeight="medium" fontSize="xs" marginTop={2}>
              Dishes to order
            </Heading>
            <List>
              {popupProps?.dishes.map((dish, i) => (
                <ListItem key={i}>
                  <Text fontWeight="normal" fontSize="xs">
                    {dish}
                  </Text>
                </ListItem>
              ))}
            </List>
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
