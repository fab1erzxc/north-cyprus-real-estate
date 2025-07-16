### `tasks.md`

```markdown
# Development Task List: "North Cyprus Real Estate"

# Audience: AI Development Assistant (Cursor)

# Methodology: Sequential feature-based development sprints.

## Sprint 1: Project Initialization & Core Layout

- [ ] Execute `npm create vite@latest . -- --template react-ts` to initialize the project.
- [ ] Configure `Tailwind CSS`, `ESLint`, and `Prettier`.
- [ ] Initialize a Git repository and perform the initial commit.
- [ ] Create the file structure as defined in `design.md`.
- [ ] Build the reusable layout components: `Navbar.tsx`, `Footer.tsx`, and `MainLayout.tsx`.
- [ ] Set up `react-router-dom` in `App.tsx` with routes for all pages defined in `requirements.md`.

## Sprint 2: Data Handling and Static Display

- [ ] Create the `/src/data/properties.json` file.
- [ ] Define the JSON schema in the file's comments and add 5-10 mock property objects conforming to the schema.
- [ ] Create the `useProperties.ts` custom hook. It should initially fetch and return all properties from `properties.json`.
- [ ] Build the `PropertyCard.tsx` component to display a single property's summary (image, title, price, location).
- [ ] Build the `PropertyGrid.tsx` component that uses `PropertyCard.tsx` to display a list of properties.
- [ ] Implement the `HomePage.tsx` to display only featured properties (`isFeatured: true`).
- [ ] Implement the `PropertiesPage.tsx` to display all properties using the `PropertyGrid.tsx`.
- [ ] Implement the `PropertyDetailPage.tsx` to display all details for a selected property.

## Sprint 3: Filtering, Sorting, and Interactivity

- [ ] Build the UI for the `SearchFilter.tsx` component with all specified filter inputs.
- [ ] Create `FilterContext.tsx` to manage the state of all active filters.
- [ ] Update the `useProperties.ts` hook to accept filter state from the context and return a filtered/sorted list of properties.
- [ ] Integrate `SearchFilter.tsx` and the `FilterContext` into `PropertiesPage.tsx`.
- [ ] Implement sorting functionality (by price, date) on the `PropertiesPage.tsx`.
- [ ] Implement the `PropertyMap.tsx` component using `react-leaflet`.
- [ ] Add the `PropertyMap.tsx` to the `PropertyDetailPage.tsx` to show the property's location.

## Sprint 4: Finalization and Deployment

- [ ] Build the static `AboutPage.tsx` and `ContactPage.tsx`.
- [ ] Perform a full review of the application's responsiveness across all pages and devices.
- [ ] Optimize all images in the `/public/images` folder (e.g., using an online tool like TinyPNG).
- [ ] Implement lazy loading for images in the `PropertyGrid.tsx`.
- [ ] Add appropriate `<title>` and `<meta name="description">` tags for each page for basic SEO (e.g., using `react-helmet-async`).
- [ ] Configure the project for deployment to GitHub Pages (update `vite.config.ts` with the correct `base` path).
- [ ] Write a `README.md` file explaining the project and how to run it locally.
- [ ] Deploy the final application to GitHub Pages.
```
