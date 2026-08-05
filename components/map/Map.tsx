"use client";

import Map, { NavigationControl } from "react-map-gl/maplibre";

export default function GeoVisionMap() {
  return (
    <Map
        initialViewState={{
        longitude: -74.0060,
        latitude: 40.7128,
        zoom: 10,
        }}
    mapStyle="https://demotiles.maplibre.org/style.json"
    style={{
    width: "100vw",
    height: "100vh",
    }}
    onLoad={() => console.log("✅ Map loaded")}
    onError={(e) => console.error("❌ Map error:", e)}
    >
      <NavigationControl position="top-right" />
    </Map>
  );
}