import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useProperties from '../hooks/useProperties';
import { formatPrice } from '../lib/utils';

const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getPropertyById } = useProperties();
  const property = getPropertyById(id || '');

  if (!property) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Property Not Found</h1>
            <p className="text-gray-600 mb-8">The property you're looking for doesn't exist.</p>
            <Link to="/properties" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Browse All Properties
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const placeholderImage = "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial, sans-serif' font-size='24'%3E🏠 Property Image%3C/text%3E%3C/svg%3E";

  return (
    <div className="min-h-screen py-4 sm:py-6 lg:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <ol className="flex items-center space-x-2 text-sm overflow-x-auto">
            <li>
              <Link to="/" className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Home</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <Link to="/properties" className="text-blue-600 hover:text-blue-800 whitespace-nowrap">Properties</Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600 truncate">{property.title}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-200">
            <img
              src={property.images[0] || placeholderImage}
              alt={property.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = placeholderImage;
              }}
            />
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                property.status === 'Available' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {property.status}
              </span>
            </div>
            {property.isFeatured && (
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-500 text-white">
                  ⭐ Featured
                </span>
              </div>
            )}
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{property.title}</h1>
                
                <div className="flex items-center text-gray-600 mb-6">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-base sm:text-lg">{property.location}</span>
                </div>

                <div className="text-4xl font-bold text-blue-600 mb-6">
                  {formatPrice(property.price)}
                </div>

                <div className="prose max-w-none mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Description</h2>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {property.features.bedrooms > 0 && (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                        </svg>
                        <div>
                          <div className="font-semibold">{property.features.bedrooms}</div>
                          <div className="text-sm text-gray-600">Bedrooms</div>
                        </div>
                      </div>
                    )}
                    
                    {property.features.bathrooms > 0 && (
                      <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11" />
                        </svg>
                        <div>
                          <div className="font-semibold">{property.features.bathrooms}</div>
                          <div className="text-sm text-gray-600">Bathrooms</div>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4a1 1 0 011-1h4M4 8l4-4m0 0v4m0-4H4m16 0h-4m4 0v4m0-4l-4 4m4-4H16m0 4v4m0-4l4 4" />
                      </svg>
                      <div>
                        <div className="font-semibold">{property.features.area_sqm}m²</div>
                        <div className="text-sm text-gray-600">Area</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <div className="font-semibold">{property.type}</div>
                        <div className="text-sm text-gray-600">Type</div>
                      </div>
                    </div>
                  </div>
                  
                  {(property.features.pool || property.features.seaView) && (
                    <div className="mt-4 flex items-center space-x-4">
                      {property.features.pool && (
                        <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 10s3-1 4-1 4 1 4 1 3-1 4-1 4 1 4 1v1s-3 1-4 1-4-1-4-1-3 1-4 1-4-1-4-1v-1z" />
                          </svg>
                          Pool
                        </span>
                      )}
                      {property.features.seaView && (
                        <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12l-2 2v4h4v-4l-2-2z" />
                            <path d="M2 8c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2z" />
                          </svg>
                          Sea View
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-4">
                  <h3 className="text-xl font-semibold mb-4">Contact Agent</h3>
                  <div className="space-y-4">
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                      📞 Call Now
                    </button>
                    <button className="w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                      ✉️ Send Message
                    </button>
                    <button className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                      🏠 Schedule Visit
                    </button>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold mb-2">Property ID</h4>
                    <p className="text-gray-600 text-sm">{property.id}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
