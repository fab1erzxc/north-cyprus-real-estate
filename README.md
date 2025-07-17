# 🏝️ North Cyprus Real Estate

A modern, responsive web application for browsing and searching real estate properties in North Cyprus. Built with React 18, TypeScript, and Tailwind CSS.

## ✨ Features

- **🏠 Property Listings**: Browse featured and all available properties
- **🗺️ Interactive Map**: View properties on an interactive Leaflet map
- **🔍 Advanced Search**: Filter by location, type, price range, bedrooms, and more
- **📱 Mobile-First**: Fully responsive design optimized for all devices
- **🎨 Modern UI**: Clean, professional design with smooth animations
- **⚡ Fast Performance**: Optimized with lazy loading and code splitting

## 🚀 Live Demo

Visit the live application: [North Cyprus Real Estate](https://yourusername.github.io/test_3files/)

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Maps**: Leaflet, React Leaflet
- **SEO**: React Helmet Async
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/test_3files.git
   cd test_3files
   ```

2. **Install dependencies**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── ui/            # UI components (Card, Button)
│   ├── PropertyCard.tsx
│   ├── PropertyGrid.tsx
│   ├── PropertyMap.tsx
│   └── AdvancedSearch.tsx
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── PropertiesPage.tsx
│   ├── PropertyDetailPage.tsx
│   ├── AboutPage.tsx
│   └── ContactPage.tsx
├── hooks/              # Custom React hooks
│   └── useProperties.ts
├── contexts/           # React contexts
│   └── FilterContext.tsx
├── data/               # Static data
│   └── properties.json
├── types/              # TypeScript type definitions
│   └── index.ts
├── lib/                # Utility functions
│   └── utils.ts
└── App.tsx
```

## 🎯 Development Sprints

The project was built following an agile methodology with 4 main sprints:

### Sprint 1: Project Setup & Core Layout

- ✅ Vite + React + TypeScript setup
- ✅ Tailwind CSS configuration
- ✅ Basic layout components
- ✅ React Router setup

### Sprint 2: Data Handling & Static Display

- ✅ Property data structure
- ✅ Property components (Card, Grid)
- ✅ Basic filtering
- ✅ Responsive design

### Sprint 3: Advanced Features

- ✅ Interactive maps with Leaflet
- ✅ Advanced search and filtering
- ✅ State management with Context
- ✅ Performance optimizations

### Sprint 4: Finalization & Deployment

- ✅ SEO optimization
- ✅ Image lazy loading
- ✅ GitHub Pages deployment
- ✅ Documentation

## 🎨 Design Features

- **Mobile-First**: Responsive design starting from mobile screens
- **Modern UI**: Clean, professional interface with subtle animations
- **Performance**: Lazy loading, code splitting, and optimized images
- **Accessibility**: Semantic HTML and proper ARIA attributes
- **SEO**: Optimized meta tags and structured data

## 🔧 Configuration

### Environment Variables

No environment variables are required for the basic setup. The application uses mock data for demonstration purposes.

### Customization

- **Colors**: Modify the Tailwind CSS configuration in `tailwind.config.js`
- **Data**: Update property data in `src/data/properties.json`
- **Map**: Customize map settings in `src/components/PropertyMap.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- **North Cyprus**: For being an amazing location for real estate
- **React Team**: For the excellent framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Leaflet**: For the interactive map functionality

---

Built with ❤️ using React and TypeScript

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
