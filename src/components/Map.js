import { useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker, MapPlaceholder, Popup } from "react-leaflet";
import './Map.css';


const Map = () => {
    const [center, setCenter] = useState([33.6, 117.8]);
  
  return (
    <div className="w-100 h-full rounded">
      {/* <MapContainer
    center={{ lat: 51.505, lng: -0.09 }}
    zoom={13}
    scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <LocationMarker />
  </MapContainer> */}
  <MapContainer
      className="markercluster-map"
      center={center}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* <MarkerClusterGroup>
        <Marker position={[49.8397, 24.0297]} />
        <Marker position={[52.2297, 21.0122]} />
        <Marker position={[51.5074, -0.0901]} />
      </MarkerClusterGroup> */}
    </MapContainer>
    </div>
  );
}

export default Map;