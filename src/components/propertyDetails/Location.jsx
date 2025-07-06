import React from "react";
import "./location.less";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Location({ lat, lng }) {
  const position = [lat, lng];
  return (
    <div className="map-container">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Ridge Towers. <br /> Ganesh Nagar
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Location;
