'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customMarker from '@/public/assets/images/customMarker.svg';

const LeafletMap = () => {
  const customIcon = L.icon({
    iconUrl: customMarker as string,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });

  return (
    <div className="size-full saturate-0 duration-1000 ease-in-out hover:saturate-100">
      <MapContainer center={[41.4803, -71.3109]} zoom={16} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[41.4803, -71.3109]} icon={customIcon}>
          <Popup>
            99 King Street
            <br /> Newport RI 02840 United States of America
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
