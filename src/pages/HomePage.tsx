import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useProperties from '../hooks/useProperties';
import PropertyGrid from '../components/PropertyGrid';

const HomePage: React.FC = () => {
  const { getFeaturedProperties, loading } = useProperties();
  const featuredProperties = getFeaturedProperties;

  return (
    <>
      <Helmet>
        <title>North Cyprus Real Estate - Find Your Dream Home</title>
        <meta name="description" content="Discover premium properties in North Cyprus. Villas, apartments, and investment opportunities in Kyrenia, Famagusta, Iskele and more. Your trusted real estate partner." />
        <meta name="keywords" content="North Cyprus, real estate, properties, villas, apartments, Kyrenia, Famagusta, Cyprus property investment" />
        <meta property="og:title" content="North Cyprus Real Estate - Find Your Dream Home" />
        <meta property="og:description" content="Discover premium properties in North Cyprus. Villas, apartments, and investment opportunities." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://northcyprusrealestate.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="North Cyprus Real Estate - Find Your Dream Home" />
        <meta name="twitter:description" content="Discover premium properties in North Cyprus. Villas, apartments, and investment opportunities." />
        <link rel="canonical" href="https://northcyprusrealestate.com" />
      </Helmet>
      
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Find Your Dream Home in <br className="hidden sm:block"/>
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                North Cyprus
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-3xl mx-auto opacity-90 px-4 sm:px-0">
              Discover luxury villas, modern apartments, and prime real estate opportunities
              in the beautiful Mediterranean paradise of Northern Cyprus.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <Link to="/properties" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  🏠 Browse Properties
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  📞 Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ Featured Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of our finest properties. Each one chosen for its unique appeal and investment potential.
            </p>
          </div>
          
          <PropertyGrid 
            properties={featuredProperties} 
            loading={loading}
            emptyMessage="No featured properties available at the moment"
          />
          
          {!loading && featuredProperties.length > 0 && (
            <div className="text-center mt-12 sm:mt-16">
              <Link to="/properties" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                  🔍 View All Properties
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4 sm:px-0">
              Your trusted partner in North Cyprus real estate
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2 sm:mb-3">500+</div>
              <div className="text-gray-700 font-semibold text-base sm:text-lg">Properties Listed</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Active listings across Cyprus</div>
            </div>
            <div className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2 sm:mb-3">200+</div>
              <div className="text-gray-700 font-semibold text-base sm:text-lg">Happy Clients</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Satisfied customers worldwide</div>
            </div>
            <div className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-purple-600 mb-2 sm:mb-3">15+</div>
              <div className="text-gray-700 font-semibold text-base sm:text-lg">Years Experience</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">In Cyprus real estate market</div>
            </div>
            <div className="text-center bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-4xl sm:text-5xl font-bold text-orange-600 mb-2 sm:mb-3">10+</div>
              <div className="text-gray-700 font-semibold text-base sm:text-lg">Locations</div>
              <div className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">Across Northern Cyprus</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default HomePage;
