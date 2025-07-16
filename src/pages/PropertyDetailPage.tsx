import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Property Details
          </h1>
          <p className="text-xl text-gray-600">
            Property ID: {id}
          </p>
        </div>

        {/* Property details will be rendered here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Property Information</h2>
          <p className="text-gray-600">Detailed property information will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
