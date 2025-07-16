import React from 'react';
import { Link } from 'react-router-dom';
import type { Property } from '../types';
import { formatPrice } from '../lib/utils';
import Card from './ui/Card';
import Button from './ui/Button';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={property.images[0] || '/images/placeholder.jpg'}
          alt={property.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder.jpg';
          }}
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded text-xs font-semibold ${
            property.status === 'Available' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {property.status}
          </span>
        </div>
        {property.isFeatured && (
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-800">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {property.title}
          </h3>
        </div>
        
        <div className="flex items-center text-gray-600 mb-2">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            {property.features.bedrooms > 0 && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-4a2 2 0 012-2h4a2 2 0 012 2v4" />
                </svg>
                {property.features.bedrooms}
              </span>
            )}
            {property.features.bathrooms > 0 && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                </svg>
                {property.features.bathrooms}
              </span>
            )}
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4M4 8l4-4m0 0v4m0-4H4m16 0h-4m4 0v4m0-4l-4 4m4-4H16m0 4v4m0-4l4 4" />
              </svg>
              {property.features.area_sqm}m²
            </span>
          </div>
          <div className="flex items-center space-x-2">
            {property.features.pool && (
              <span className="text-blue-600" title="Pool">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10s3-1 4-1 4 1 4 1 3-1 4-1 4 1 4 1v1s-3 1-4 1-4-1-4-1-3 1-4 1-4-1-4-1v-1z" />
                </svg>
              </span>
            )}
            {property.features.seaView && (
              <span className="text-blue-600" title="Sea View">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12l-2 2v4h4v-4l-2-2z" />
                  <path d="M2 8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2z" />
                </svg>
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">
            {formatPrice(property.price)}
          </div>
          <Link to={`/properties/${property.id}`}>
            <Button size="sm">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
