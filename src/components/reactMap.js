// import React from 'react';
// import { Map, TileLayer, MapContainer, LayersControl } from 'react-leaflet';

// const MiniMap = ({ position, zoom }) => {
//   return (
//     <LayersControl position="bottomright">
//       <LayersControl.BaseLayer checked name="Main Map">
//         <MapContainer
//           center={position}
//           zoom={zoom}
//           style={{ width: '150px', height: '150px' }}
//         >
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         </MapContainer>
//       </LayersControl.BaseLayer>
//       <LayersControl.Overlay name="Mini Map">
//         <Map center={position} zoom={zoom} style={{ width: '150px', height: '150px' }}>
//           <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         </Map>
//       </LayersControl.Overlay>
//     </LayersControl>
//   );
// };

// const reactMap = () => {
//   const position = [51.505, -0.09]; // Initial map position
//   const zoom = 13; // Initial map zoom level

//   return (
//     <div style={{ height: '400px', width: '100%' }}>
//       <Map center={position} zoom={zoom}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <MiniMap position={position} zoom={zoom} />
//       </Map>
//     </div>
//   );
// };

// export default reactMap;
