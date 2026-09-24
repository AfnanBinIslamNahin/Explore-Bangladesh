import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DistrictsPage } from './pages/DistrictsPage';
import { DistrictDetailsPage } from './pages/DistrictDetailsPage';
import { PlacesPage } from './pages/PlacesPage';
import { PlaceDetailsPage } from './pages/PlaceDetailsPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SearchPage } from './pages/SearchPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="districts" element={<DistrictsPage />} />
          <Route path="districts/:districtId" element={<DistrictDetailsPage />} />
          <Route path="places" element={<PlacesPage />} />
          <Route path="places/:placeId" element={<PlaceDetailsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:categoryId" element={<CategoriesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
