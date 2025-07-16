# Technical Design Specification: "North Cyprus Real Estate"

# Audience: AI Development Assistant (Cursor)

# Architecture: Static Site Generation (SSG) / Single Page Application (SPA)

## 1. Frontend Technology Stack

- **Framework:** React 18+ (using functional components and hooks).
- **Build Tool:** Vite.
- **Language:** TypeScript.
- **Styling:** Tailwind CSS.
- **UI Component Library:** shadcn/ui. This will be used for creating accessible and themeable components like `Button`, `Card`, `Input`, `Slider`.
- **Routing:** React Router (`react-router-dom`) using `BrowserRouter`.
- **State Management:**
  - React Context API for global state, specifically for search filters and favorites.
  - `useState` and `useReducer` for local component state.
- **Mapping:** `react-leaflet` for displaying property locations on an interactive map.
- **Linting/Formatting:** ESLint and Prettier, configured for TypeScript and React.

## 2. Data Source and Schema

The application's single source of truth for property data is `/src/data/properties.json`.

### `properties.json` Schema

The file will contain a JSON array. Each object in the array represents a single property and MUST conform to the following schema:

```json
{
  "id": "string", // Unique identifier (e.g., "villa-seaview-01")
  "title": "string", // "Luxury 3+1 Villa in Kyrenia"
  "price": "number", // 350000
  "location": "string", // "Kyrenia", "Famagusta", "Iskele", etc.
  "type": "string", // "Villa", "Apartment", "Penthouse", "Land"
  "status": "string", // "Available", "Sold"
  "isFeatured": "boolean", // true if it should appear on the homepage
  "dateAdded": "string", // ISO 8601 format: "2025-07-15T10:00:00Z"
  "description": "string", // Detailed text description
  "images": ["string"], // Array of URLs to property images
  "features": {
    "bedrooms": "number",
    "bathrooms": "number",
    "area_sqm": "number",
    "pool": "boolean",
    "seaView": "boolean"
  },
  "coordinates": {
    "lat": "number", // Latitude for map
    "lng": "number" // Longitude for map
  }
}
```

3. Application Structure (File System)

/
|-- public/
| |-- /images/ (property images will be stored here)
|-- src/
| |-- /components/
| | |-- /layout/ (Navbar.tsx, Footer.tsx, MainLayout.tsx)
| | |-- /ui/ (components from shadcn/ui: Button.tsx, Card.tsx, etc.)
| | |-- /map/ (PropertyMap.tsx - Leaflet implementation)
| | |-- PropertyCard.tsx
| | |-- PropertyGrid.tsx
| | |-- SearchFilter.tsx
| | |-- ImageGallery.tsx
| |-- /data/
| | |-- properties.json (The single source of truth for data)
| |-- /hooks/
| | |-- useProperties.ts (Custom hook to read, filter, and sort data from properties.json)
| |-- /lib/
| | |-- utils.ts (Helper functions, e.g., for formatting price)
| |-- /pages/
| | |-- HomePage.tsx
| | |-- PropertiesPage.tsx
| | |-- PropertyDetailPage.tsx
| | |-- AboutPage.tsx
| | |-- ContactPage.tsx
| | |-- NotFoundPage.tsx
| |-- /contexts/
| | |-- FilterContext.tsx (Manages state for search and filters)
| |-- App.tsx (Main component with routing setup)
| |-- main.tsx (Application entry point)
|-- tailwind.config.js
|-- tsconfig.json

---
