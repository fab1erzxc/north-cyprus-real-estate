import React from 'react';

const PropertiesPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All Properties
          </h1>
          <p className="text-xl text-gray-600">
            Browse our complete collection of properties in North Cyprus
          </p>
        </div>

        {/* Filters will be added here */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Search & Filter</h2>
          <p className="text-gray-600">Property filters will be implemented here</p>
        </div>

        {/* Property grid will be added here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Property Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Loading properties...</h3>
              <p className="text-gray-600">Properties will be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
