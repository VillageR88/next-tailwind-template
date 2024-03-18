'use client';
import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customMarker from '@/public/assets/images/customMarker.svg';

const LeafletMap = () => {
  useEffect(() => {
    // This code runs after the component has mounted, and ensures that Leaflet's CSS styles are applied correctly.
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }, []);

  const customIcon = L.icon({
    iconUrl: customMarker,
    iconSize: [38, 95], // size of the icon
    popupAnchor: [0, -20], // point from which the popup should open relative to the iconAnchor
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
