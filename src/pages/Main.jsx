import { useState } from "react";
// import { MapContainer, TileLayer, useMapEvents, Marker, MapPlaceholder, Popup } from "react-leaflet";

import './Main.css';

// const LocationMarker = () => {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

const Main = () => {
  
  return (
   
    <h3 className="test">LOGO</h3>   

    );
};

export default Main;
