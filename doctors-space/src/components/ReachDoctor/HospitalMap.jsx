import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const HospitalMap = ({ hospital, userLocation }) => {
  const position = [hospital.lat, hospital.lon];
  
  return (
    <div className="hospital-map">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: '200px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>{hospital.display_name}</Popup>
        </Marker>
        {userLocation && (
          <Marker position={[userLocation.latitude, userLocation.longitude]}>
            <Popup>Your Location</Popup>
          </Marker>
        )}
      </MapContainer>
      {userLocation && (
        <div className="directions-link">
          <a
            href={`https://www.openstreetmap.org/directions?engine=osrm_car&route=${userLocation.latitude},${userLocation.longitude};${hospital.lat},${hospital.lon}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
        </div>
      )}
    </div>
  );
};

export default HospitalMap;
