export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  type: 'Villa' | 'Apartment' | 'Penthouse' | 'Land';
  status: 'Available' | 'Sold';
  isFeatured: boolean;
  dateAdded: string;
  description: string;
  images: string[];
  features: {
    bedrooms: number;
    bathrooms: number;
    area_sqm: number;
    pool: boolean;
    seaView: boolean;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface FilterState {
  location: string;
  type: string;
  priceRange: {
    min: number;
    max: number;
  };
  bedrooms: number;
  sortBy: 'price-asc' | 'price-desc' | 'date-desc' | 'date-asc';
}
