// components/LeafletMapComponent.jsx
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
//
// delete L.Icon.Default.prototype._getIconUrl;
//
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
//   iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
// });
//
// const LeafletMapComponent = () => {
//   const position = [24.870956, 91.418665]; // Coordinates for Sunamganj Science & Technology University
//
//   return (
//     <MapContainer
//       center={position}
//       zoom={15}
//       style={{ height: "300px", width: "400px" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={position}>
//         <Popup>Sunamganj Science & Technology University</Popup>
//       </Marker>
//     </MapContainer>
//   );
// };
//
// export default LeafletMapComponent;

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LeafletMapComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const { MapContainer, TileLayer, Marker, Popup, Tooltip } = require("react-leaflet");
  const L = require("leaflet");

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

  const position = [24.93936649076108, 91.41963677385326]; // Coordinates for Sunamganj Science & Technology University

  return (
      <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={true}
          style={{ height: "300px" }}
          className="w-full"
      >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Tooltip permanent direction="top">Sunamganj Science & Technology University</Tooltip>
        </Marker>
        <style jsx global>
        {`
          .leaflet-tooltip {
            background-color: rgba(0, 0, 0, 0.6);
            border: none;
            color: white;
            font-size: 14px;
          }

          .leaflet-tooltip-pane{
            margin-top: -5px;
            margin-left: -15px;
          }
        `}
      </style>
      </MapContainer>
  );
};

export default LeafletMapComponent;
