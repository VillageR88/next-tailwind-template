'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const LeafletMap = () => {
  const [client, setClient] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setClient(true);
    }
  }, []);
  const customIcon = new Icon({
    iconUrl: '../assets/images/customMarker.svg',
    iconSize: [66, 88],
    iconAnchor: [33, 88],

    popupAnchor: [0, -70],
    attribution: 'Leaflet',
  });

  return (
    client && (
      <div className="size-full duration-1000 ease-in-out hover:saturate-100">
        <MapContainer center={[41.4805, -71.3109]} zoom={16} className="relative z-10 size-full">
          <TileLayer
            className="saturate-0"
            attribution={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[41.4805, -71.3109]} icon={customIcon}>
            <Popup>
              99 King Street
              <br /> Newport RI 02840 United States of America
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  );
};

export default LeafletMap;
