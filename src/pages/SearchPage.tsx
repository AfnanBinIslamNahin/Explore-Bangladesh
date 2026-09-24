import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, Compass, Layers, ArrowRight, X } from 'lucide-react';
import { searchAll } from '../data';
import { DestinationCard } from '../components/DestinationCard';
import { DistrictCard } from '../components/DistrictCard';

export const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';
  const [query, setQuery] = useState(queryParam);

  useEffect(() => {
    setQuery(queryParam);
  }, [queryParam]);

  const results = useMemo(() => {
    return searchAll(query);
  }, [query]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    } else {
      setSearchParams({});
    }
  };

  const totalResults = results.places.length + results.districts.length + results.divisions.length;

  return (
    <div id="search-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Search Bangladesh Tourism
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mb-6">
            Search across all 64 districts, 8 divisions, and major tourist attractions.
          </p>

          <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-md rounded-2xl bg-white border border-slate-200 p-1.5">
            <Search className="w-5 h-5 text-emerald-700 ml-3 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search districts, places, or categories (e.g. Cox's Bazar, Sylhet, Beach, Waterfall)..."
              className="w-full px-3 py-2.5 text-slate-800 text-sm focus:outline-none bg-transparent"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSearchParams({});
                }}
                className="p-1 text-slate-400 hover:text-slate-600 mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-sm"
            >
              Search
            </button>
          </form>
        </div>

        {/* Results summary */}
        {query ? (
          <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
            <p className="text-sm font-medium text-slate-600">
              Found <span className="font-bold text-emerald-700">{totalResults}</span> results for "
              <span className="font-bold text-slate-900">{query}</span>"
            </p>
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500 text-sm">
            Enter a destination name, district, division, or attraction above to search.
          </div>
        )}

        {/* Results Sections */}
        {totalResults > 0 && (
          <div className="space-y-14">
            {/* Tourist Places Results */}
            {results.places.length > 0 && (
              <section>
                <div className="flex items-center space-x-2 mb-6">
                  <Compass className="w-5 h-5 text-emerald-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Tourist Destinations ({results.places.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.places.map((place) => (
                    <DestinationCard key={place.id} place={place} />
                  ))}
                </div>
              </section>
            )}

            {/* Districts Results */}
            {results.districts.length > 0 && (
              <section>
                <div className="flex items-center space-x-2 mb-6">
                  <MapPin className="w-5 h-5 text-emerald-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Districts ({results.districts.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.districts.map((district) => (
                    <DistrictCard key={district.id} district={district} />
                  ))}
                </div>
              </section>
            )}

            {/* Divisions Results */}
            {results.divisions.length > 0 && (
              <section>
                <div className="flex items-center space-x-2 mb-6">
                  <Layers className="w-5 h-5 text-emerald-700" />
                  <h2 className="text-xl font-bold text-slate-900">
                    Administrative Divisions ({results.divisions.length})
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {results.divisions.map((div) => (
                    <Link
                      key={div.id}
                      to={`/districts?division=${div.id}`}
                      className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm transition-all group"
                    >
                      <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 text-lg">
                        {div.name} Division
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {div.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs font-semibold text-emerald-700">
                        <span>{div.districtsCount} Districts</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* Empty state when query provided but no matches */}
        {query && totalResults === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto shadow-sm">
            <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No matches found</h3>
            <p className="text-sm text-slate-500 mb-6">
              We couldn't find any destinations, districts, or categories matching "{query}". Try checking for spelling or searching for a broader term.
            </p>
            <div className="flex flex-col gap-2">
              <Link
                to="/districts"
                className="px-4 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
              >
                Browse All 64 Districts
              </Link>
              <Link
                to="/places"
                className="px-4 py-2.5 rounded-xl bg-slate-100 text-slate-700 text-xs font-semibold hover:bg-slate-200 transition-colors"
              >
                Browse All Tourist Places
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
