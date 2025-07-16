# Project Context: "North Cyprus Real Estate" Portfolio Website

# Audience: AI Development Assistant (Cursor)

# Goal: Build a static portfolio website showcasing real estate properties.

## 1. Core Concept

The project is a static Single Page Application (SPA) built with React. Its purpose is to serve as a portfolio piece for a web developer. The theme is a website for a real estate agency in Northern Cyprus. All data for the properties will be stored locally in a `properties.json` file. There is no backend database or server-side logic. The application is purely client-side.

## 2. Functional Requirements

### 2.1. User-Facing Features

- **Homepage (`/`)**

  - MUST display a curated list of "Featured" properties.
  - MUST include a search/filter component.

- **Property Catalog Page (`/properties`)**

  - MUST display all properties from the `properties.json` data source.
  - MUST allow properties to be displayed in a grid layout.
  - MUST feature a persistent search and filtering mechanism.
  - Filtering MUST be possible by:
    - `location` (e.g., Kyrenia, Famagusta, Iskele)
    - `type` (e.g., Apartment, Villa, Penthouse)
    - `price` (range slider)
    - `bedrooms` (number selection)
  - Sorting MUST be available for:
    - Price (Low to High, High to Low)
    - Date Added (Newest to Oldest)

- **Property Details Page (`/properties/:id`)**

  - MUST be a unique page for each property, accessed via a dynamic route.
  - MUST display all details for a single property, including:
    - Image gallery.
    - Full description.
    - Key features list (area, bedrooms, bathrooms, etc.).
    - Price.
    - Location on an interactive map (e.g., Leaflet, Google Maps Embed).

- **Static Pages**
  - An "About Us" page (`/about`).
  - A "Contact Us" page (`/contact`) with static contact information and a simple contact form (can use a static form service like Tally or an email `mailto:` link).

### 2.2. Data Source Requirements

- All property data MUST be sourced from a single static file: `/src/data/properties.json`.
- The application MUST read this file and render the data on the client-side.
- Any updates to property listings require a manual edit of the `properties.json` file and a redeployment of the application.

## 3. Non-Functional Requirements

- **Technology Stack:** The application MUST use React, Vite, TypeScript, and Tailwind CSS.
- **Architecture:** MUST be a Single Page Application (SPA).
- **Responsiveness:** The UI MUST be fully responsive and optimized for mobile, tablet, and desktop screens (mobile-first approach).
- **Performance:** The application MUST achieve a Google Lighthouse performance score of 85+ for mobile. Images must be optimized.
- **Deployment:** The final build MUST be deployable as a static site to GitHub Pages.
