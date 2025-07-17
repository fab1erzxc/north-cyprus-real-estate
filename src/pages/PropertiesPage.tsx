import React, { useState } from 'react';
import useProperties from '../hooks/useProperties';
import PropertyGrid from '../components/PropertyGrid';
import PropertyMap from '../components/PropertyMap';
import AdvancedSearch from '../components/AdvancedSearch';
import { FilterProvider } from '../contexts/FilterContext';
import { useFilters } from '../hooks/useFilters';
import type { Property } from '../types';

const PropertiesPageContent: React.FC = () => {
  const { getFilteredProperties, loading } = useProperties();
  const { filters } = useFilters();
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Apply filters to properties
  const filteredProperties = getFilteredProperties(filters);

  return (
    <div className="min-h-screen py-4 sm:py-6 lg:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            🏘️ Properties in North Cyprus
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 px-2 sm:px-0">
            Browse our complete collection of properties with advanced search and map view
          </p>
        </div>

        {/* Advanced Search */}
        <AdvancedSearch />

        {/* View Mode Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8">
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'grid'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              📊 Grid View
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                viewMode === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              🗺️ Map View
            </button>
          </div>
          
          <div className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
            {loading ? 'Loading...' : `${filteredProperties.length} properties found`}
          </div>
        </div>

        {/* Content based on view mode */}
        {viewMode === 'grid' ? (
          <PropertyGrid 
            properties={filteredProperties} 
            loading={loading}
            emptyMessage="No properties match your current filters"
          />
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <PropertyMap
              properties={filteredProperties}
              height="600px"
              selectedProperty={selectedProperty}
              onPropertySelect={setSelectedProperty}
            />
          </div>
        )}

        {/* Selected Property Details in Map View */}
        {viewMode === 'map' && selectedProperty && (
          <div className="mt-6 sm:mt-8 bg-white rounded-2xl shadow-lg p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Selected Property
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {selectedProperty.title}
                </h4>
                <p className="text-gray-600 mb-2">📍 {selectedProperty.location}</p>
                <p className="text-blue-600 font-bold text-xl mb-4">
                  ${selectedProperty.price.toLocaleString()}
                </p>
                <div className="flex gap-4 text-sm text-gray-600">
                  {selectedProperty.features.bedrooms > 0 && (
                    <span>🛏️ {selectedProperty.features.bedrooms} beds</span>
                  )}
                  {selectedProperty.features.bathrooms > 0 && (
                    <span>🚿 {selectedProperty.features.bathrooms} baths</span>
                  )}
                  <span>📐 {selectedProperty.features.area_sqm} m²</span>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-end">
                <button
                  onClick={() => window.open(`/properties/${selectedProperty.id}`, '_blank')}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Full Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const PropertiesPage: React.FC = () => {
  return (
    <FilterProvider>
      <PropertiesPageContent />
    </FilterProvider>
  );
};

export default PropertiesPage;
