import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, MapPin, Tag, X, Compass } from 'lucide-react';
import { touristPlaces, divisions, districts, categories } from '../data';
import { DestinationCard } from '../components/DestinationCard';

export const PlacesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryParam = searchParams.get('category') || 'all';
  const divisionParam = searchParams.get('division') || 'all';
  const districtParam = searchParams.get('district') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedDivision, setSelectedDivision] = useState(divisionParam);
  const [selectedDistrict, setSelectedDistrict] = useState(districtParam);

  // Filter districts available for the selected division
  const availableDistricts = useMemo(() => {
    if (selectedDivision === 'all') return districts;
    return districts.filter((d) => d.divisionId === selectedDivision);
  }, [selectedDivision]);

  // If selected district does not belong to selected division, reset it
  const handleDivisionChange = (divId: string) => {
    setSelectedDivision(divId);
    setSelectedDistrict('all');
  };

  const filteredPlaces = useMemo(() => {
    return touristPlaces.filter((place) => {
      const matchesCategory =
        selectedCategory === 'all' || place.categoryId === selectedCategory;
      const matchesDivision =
        selectedDivision === 'all' || place.divisionId === selectedDivision;
      const matchesDistrict =
        selectedDistrict === 'all' || place.districtId === selectedDistrict;

      const q = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !q ||
        place.name.toLowerCase().includes(q) ||
        place.district.toLowerCase().includes(q) ||
        place.division.toLowerCase().includes(q) ||
        place.category.toLowerCase().includes(q) ||
        place.shortDescription.toLowerCase().includes(q) ||
        place.location.toLowerCase().includes(q);

      return matchesCategory && matchesDivision && matchesDistrict && matchesSearch;
    });
  }, [selectedCategory, selectedDivision, selectedDistrict, searchTerm]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedDivision('all');
    setSelectedDistrict('all');
    setSearchParams({});
  };

  return (
    <div id="tourist-places-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Discover Bangladesh</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Tourist Destinations
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Browse verified tourist attractions across all districts, filter by landscape theme or administrative division, and explore detailed travel guides.
          </p>
        </div>

        {/* Filter Controls Card */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search destinations by name, district, or keyword (e.g., Sundarbans, Sajek, Beach, Waterfall)..."
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* 3 Select Dropdowns: Category, Division, District */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
            {/* Category Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Categories ({categories.length})</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Division Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                Division
              </label>
              <select
                value={selectedDivision}
                onChange={(e) => handleDivisionChange(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All 8 Divisions</option>
                {divisions.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} Division
                  </option>
                ))}
              </select>
            </div>

            {/* District Filter */}
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                District
              </label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="all">All Districts ({availableDistricts.length})</option>
                {availableDistricts.map((dst) => (
                  <option key={dst.id} value={dst.id}>
                    {dst.name} ({dst.divisionName})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-600">
            Found <span className="font-bold text-emerald-700">{filteredPlaces.length}</span> destinations
            {selectedCategory !== 'all' && ` in ${categories.find(c => c.id === selectedCategory)?.name}`}
            {selectedDivision !== 'all' && ` in ${divisions.find(d => d.id === selectedDivision)?.name} Division`}
            {selectedDistrict !== 'all' && ` in ${districts.find(d => d.id === selectedDistrict)?.name} District`}
          </p>
          {(selectedCategory !== 'all' || selectedDivision !== 'all' || selectedDistrict !== 'all' || searchTerm) && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Cards Grid */}
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <DestinationCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
            <Compass className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No destinations found</h3>
            <p className="text-sm text-slate-500 mb-6">
              Try adjusting your search terms, division, district, or category filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
