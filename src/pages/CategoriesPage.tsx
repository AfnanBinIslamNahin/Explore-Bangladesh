import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Tag, ArrowLeft, Compass } from 'lucide-react';
import { categories, getPlacesByCategory, touristPlaces } from '../data';
import { handleImageFallback } from '../data/placeholder';
import { CategoryCard } from '../components/CategoryCard';
import { DestinationCard } from '../components/DestinationCard';

export const CategoriesPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [selectedCatId, setSelectedCatId] = useState<string>(categoryId || 'all');

  useEffect(() => {
    if (categoryId) {
      setSelectedCatId(categoryId);
    } else {
      setSelectedCatId('all');
    }
  }, [categoryId]);

  const activeCategory = categories.find((c) => c.id === selectedCatId);
  const placesForCategory =
    selectedCatId === 'all'
      ? touristPlaces
      : getPlacesByCategory(selectedCatId);

  return (
    <div id="categories-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Theme-Based Tourism</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Travel Categories
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Explore Bangladesh by natural landscapes, historic marvels, and cultural themes across all 9 designated tourism categories.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <Link
            to="/categories"
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCatId === 'all'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Themes ({categories.length})
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/categories/${cat.id}`}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCatId === cat.id
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* If 'all' is selected: Show category overview cards first, followed by places */}
        {selectedCatId === 'all' ? (
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                <Compass className="w-6 h-6 text-emerald-700" />
                <span>Browse All 9 Categories</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                  <CategoryCard key={cat.id} category={cat} />
                ))}
              </div>
            </section>

            <section className="pt-8 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                All Categorized Destinations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {touristPlaces.map((place) => (
                  <DestinationCard key={place.id} place={place} />
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* Specific category selected */
          <div>
            {/* Category Header Card */}
            {activeCategory && (
              <div className="relative rounded-2xl overflow-hidden mb-10 shadow-lg border border-slate-200">
                <div className="h-48 sm:h-64 relative bg-emerald-950">
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={handleImageFallback}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-emerald-950/95 via-emerald-950/70 to-emerald-950/40" />
                  <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 text-white max-w-2xl">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-1">
                      Travel Theme
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold mb-2">
                      {activeCategory.name}
                    </h2>
                    <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                      {activeCategory.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Destinations belonging to this category */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm font-medium text-slate-600">
                Found <span className="font-bold text-emerald-700">{placesForCategory.length}</span> destinations under {activeCategory?.name}
              </p>
              <Link
                to="/categories"
                className="text-xs font-semibold text-emerald-700 hover:underline inline-flex items-center space-x-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>View All Categories</span>
              </Link>
            </div>

            {placesForCategory.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {placesForCategory.map((place) => (
                  <DestinationCard key={place.id} place={place} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
                <Tag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 mb-1">No destinations listed</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Detailed destination guides for this category are actively being indexed.
                </p>
                <Link
                  to="/places"
                  className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
                >
                  Explore Other Places
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
