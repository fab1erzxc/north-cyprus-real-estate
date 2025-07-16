import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">North Cyprus Real Estate</h2>
          <p className="text-gray-600 mb-6">
            About us content will be added here. This page will contain information about
            the company, mission, vision, and team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
