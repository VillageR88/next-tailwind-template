'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const LeafletMap = () => {
  const customIcon = new Icon({
    iconUrl: '../assets/images/customMarker.svg',
    iconSize: [66, 88],
    iconAnchor: [33, 88],

    popupAnchor: [0, -70],
    attribution: 'Leaflet',
  });

  return (
    <div className="h-[600px] min-h-[calc(100dvh-842px)] w-screen duration-1000 ease-in-out hover:saturate-100 md:min-h-[calc(100dvh-764px)] lg:min-h-[calc(100dvh-792px)]">
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
  );
};

export default LeafletMap;
