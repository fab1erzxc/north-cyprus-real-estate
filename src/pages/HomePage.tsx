import React from 'react';
import { Link } from 'react-router-dom';
import useProperties from '../hooks/useProperties';
import PropertyGrid from '../components/PropertyGrid';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  const { getFeaturedProperties, loading } = useProperties();
  const featuredProperties = getFeaturedProperties;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Home in North Cyprus
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover luxury villas, modern apartments, and prime real estate opportunities
              in the beautiful Mediterranean paradise of Northern Cyprus.
            </p>
            <div className="space-x-4">
              <Link to="/properties">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Browse Properties
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked selection of our finest properties
            </p>
          </div>
          
          <PropertyGrid 
            properties={featuredProperties} 
            loading={loading}
            emptyMessage="No featured properties available"
          />
          
          {!loading && featuredProperties.length > 0 && (
            <div className="text-center mt-12">
              <Link to="/properties">
                <Button size="lg" variant="outline">
                  View All Properties
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Properties Listed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Locations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
