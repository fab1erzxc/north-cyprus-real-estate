import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">North Cyprus Real Estate</h3>
            <p className="text-gray-300 mb-4">
              Your trusted partner for finding the perfect property in Northern Cyprus.
              We offer a wide range of villas, apartments, and commercial properties.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/properties" className="text-gray-300 hover:text-white">
                  Properties
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Phone: +90 533 123 45 67</p>
              <p>Email: info@ncrealestate.com</p>
              <p>Address: Kyrenia, North Cyprus</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 North Cyprus Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
