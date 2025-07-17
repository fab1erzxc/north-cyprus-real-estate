import { useState, useEffect, useMemo } from 'react';
import type { Property } from '../types';
import type { FilterState } from '../contexts/FilterContext';
import propertiesData from '../data/properties.json';

const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Симулируем загрузку данных
  useEffect(() => {
    const loadProperties = async () => {
      try {
        setLoading(true);
        // Симулируем задержку сети
        await new Promise(resolve => setTimeout(resolve, 500));
        setProperties(propertiesData as Property[]);
      } catch {
        setError('Failed to load properties');
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, []);

  // Функция для фильтрации и сортировки недвижимости
  const getFilteredProperties = useMemo(() => {
    return (filters: Partial<FilterState>) => {
      let filtered = [...properties];

      // Фильтрация по статусу (показываем только доступные)
      filtered = filtered.filter(property => property.status === 'Available');

      // Фильтрация по местоположению
      if (filters.location && filters.location !== 'all') {
        filtered = filtered.filter(property => 
          property.location.toLowerCase().includes(filters.location!.toLowerCase())
        );
      }

      // Фильтрация по типу
      if (filters.type && filters.type !== 'all') {
        filtered = filtered.filter(property => property.type === filters.type);
      }      // Фильтрация по цене
      if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
        filtered = filtered.filter(property => 
          property.price >= filters.minPrice! &&
          property.price <= filters.maxPrice!
        );
      }

      // Фильтрация по количеству спален
      if (filters.bedrooms && filters.bedrooms > 0) {
        filtered = filtered.filter(property => property.features.bedrooms >= filters.bedrooms!);
      }

      // Фильтрация по количеству ванных комнат
      if (filters.bathrooms && filters.bathrooms > 0) {
        filtered = filtered.filter(property => property.features.bathrooms >= filters.bathrooms!);
      }

      // Поиск по тексту
      if (filters.searchTerm && filters.searchTerm.length > 0) {
        const searchLower = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(property => 
          property.title.toLowerCase().includes(searchLower) ||
          property.description.toLowerCase().includes(searchLower) ||
          property.location.toLowerCase().includes(searchLower)
        );
      }

      // Сортировка
      if (filters.sortBy) {
        filtered.sort((a, b) => {
          switch (filters.sortBy) {
            case 'price-asc':
              return a.price - b.price;
            case 'price-desc':
              return b.price - a.price;
            case 'date-desc':
              return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
            case 'date-asc':
              return new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime();
            default:
              return 0;
          }
        });
      }

      return filtered;
    };
  }, [properties]);

  // Получить рекомендуемые недвижимости
  const getFeaturedProperties = useMemo(() => {
    return properties.filter(property => property.isFeatured && property.status === 'Available');
  }, [properties]);

  // Получить недвижимость по ID
  const getPropertyById = useMemo(() => {
    return (id: string) => properties.find(property => property.id === id);
  }, [properties]);

  // Получить уникальные местоположения
  const getLocations = useMemo(() => {
    const locations = Array.from(new Set(properties.map(property => property.location)));
    return locations.sort();
  }, [properties]);

  // Получить уникальные типы
  const getTypes = useMemo(() => {
    const types = Array.from(new Set(properties.map(property => property.type)));
    return types.sort();
  }, [properties]);

  return {
    properties,
    loading,
    error,
    getFilteredProperties,
    getFeaturedProperties,
    getPropertyById,
    getLocations,
    getTypes,
  };
};

export default useProperties;
