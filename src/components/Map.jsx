import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import '@styles/components/Map.css';

const Map = () => {
    const defaultCenter = [19.4267261, -99.1718706]

    return (
        <MapContainer center={defaultCenter} zoom={17} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={defaultCenter} />
        </MapContainer>
    );
}

export { Map };