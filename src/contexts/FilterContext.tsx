import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';

export interface FilterState {
  location: string;
  type: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: number;
  bathrooms: number;
  searchTerm: string;
  sortBy: 'price-asc' | 'price-desc' | 'date-asc' | 'date-desc';
}

interface FilterContextType {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  updateFilter: (key: keyof FilterState, value: string | number) => void;
}

const defaultFilters: FilterState = {
  location: 'all',
  type: 'all',
  minPrice: 0,
  maxPrice: 10000000,
  bedrooms: 0,
  bathrooms: 0,
  searchTerm: '',
  sortBy: 'date-desc'
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export { FilterContext };

export const FilterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const updateFilter = (key: keyof FilterState, value: string | number) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <FilterContext.Provider value={{ filters, setFilters, resetFilters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};
