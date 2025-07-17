import React, { useEffect, useRef, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { Property } from '../types';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface PropertyMapProps {
  properties: Property[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  selectedProperty?: Property | null;
  onPropertySelect?: (property: Property) => void;
}

const PropertyMap: React.FC<PropertyMapProps> = ({
  properties,
  center = [35.3413, 33.3134], // Default to North Cyprus coordinates
  zoom = 10,
  height = '400px',
  selectedProperty,
  onPropertySelect
}) => {
  const mapRef = useRef<L.Map | null>(null);

  // Mock coordinates for demonstration - in real app, these would come from property data
  const getPropertyCoordinates = useCallback((property: Property): [number, number] => {
    // Mock coordinates based on location
    const locationCoords: { [key: string]: [number, number] } = {
      'Kyrenia': [35.3413, 33.3134],
      'Famagusta': [35.1264, 33.9378],
      'Nicosia': [35.1856, 33.3823],
      'Iskele': [35.2942, 33.9067],
      'Lapta': [35.3531, 33.2342],
      'Bellapais': [35.3567, 33.3456],
      'Catalkoy': [35.3234, 33.3890],
      'Esentepe': [35.3687, 33.4123]
    };

    return locationCoords[property.location] || center;
  }, [center]);

  useEffect(() => {
    if (selectedProperty && mapRef.current) {
      const coords = getPropertyCoordinates(selectedProperty);
      mapRef.current.setView(coords, 15);
    }
  }, [selectedProperty, center, getPropertyCoordinates]);

  return (
    <div style={{ height, width: '100%' }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {properties.map((property) => {
          const coords = getPropertyCoordinates(property);
          return (
            <Marker
              key={property.id}
              position={coords}
              eventHandlers={{
                click: () => onPropertySelect?.(property),
              }}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-blue-600 font-bold text-lg mb-2">
                    ${property.price.toLocaleString()}
                  </p>
                  <div className="flex gap-2 text-sm text-gray-500 mb-2">
                    {property.features.bedrooms > 0 && (
                      <span>🛏️ {property.features.bedrooms}</span>
                    )}
                    {property.features.bathrooms > 0 && (
                      <span>🚿 {property.features.bathrooms}</span>
                    )}
                    <span>📐 {property.features.area_sqm} m²</span>
                  </div>
                  <button
                    onClick={() => onPropertySelect?.(property)}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default PropertyMap;
