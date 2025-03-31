import React from "react";
import { MapContainer, TileLayer, Polygon, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Define **corrected non-overlapping** Coimbatore regions
const regions = [
  {
    name: "North Coimbatore",
    color: "rgba(0, 0, 255, 0.34)", // Light Blue
    coordinates: [
      [11.0700, 76.9000], [11.1200, 76.9500], [11.0800, 77.0000], 
      [11.0500, 76.9600], [11.0300, 76.9300]
    ]
  },
  {
    name: "South Coimbatore",
    color: "rgba(255, 0, 0, 0.33)", // Light Red
    coordinates: [
      [10.9800, 77.0100], [10.9400, 76.9600], [10.9700, 76.9100], 
      [11.0100, 76.9300], [11.0200, 76.9500]
    ]
  },
  {
    name: "East Coimbatore",
    color: "rgba(0, 255, 0, 0.34)", // Light Green
    coordinates: [
      [11.0500, 77.0000], [11.0000, 77.0200], [10.9800, 76.9900], 
      [11.0300, 76.9500]
    ]
  },
  {
    name: "West Coimbatore",
    color: "rgba(255, 166, 0, 0.37)", // Light Orange
    coordinates: [
      [11.0100, 76.8900], [11.0500, 76.8800], [11.0300, 76.9200], 
      [11.0000, 76.9100]
    ]
  },
  {
    name: "Central Coimbatore",
    color: "xrgba(128, 0, 128, 0.32)", // Light Purple
    coordinates: [
      [11.0200, 76.9300], [11.0400, 76.9500], [11.0300, 76.9700], 
      [11.0100, 76.9600]
    ]
  }
];

// Generate random accident locations inside Coimbatore
const accidentLocations = [
  [11.0400, 76.9200], [10.9900, 77.0000], [11.0300, 76.9400], 
  [10.9800, 76.9700], [11.0500, 76.9100], [10.9900, 76.9500]
];

const IncidentMap = () => {
  return (
    <MapContainer center={[11.0168, 76.9558]} zoom={12} style={{ margin:"20px", height: "300px", width: "100%" }}>
      {/* OpenStreetMap Tile Layer */}
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Corrected Non-Overlapping Regions */}
      {regions.map((region, index) => (
        <Polygon 
          key={index} 
          pathOptions={{ fillColor: region.color, fillOpacity: 0.6, weight: 0 }} 
          positions={region.coordinates}
        >
          <Popup>{region.name}</Popup>
        </Polygon>
      ))}

      {/* Accident Markers (⚠️) */}
      {accidentLocations.map((pos, index) => (
        <CircleMarker 
          key={index} 
          center={pos} 
          radius={4} 
          fillColor="red" 
          fillOpacity={0.8} 
          stroke={false}
        >
          <Popup>⚠️ Accident Reported Here</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default IncidentMap;
