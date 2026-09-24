import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Filter, Layers, X } from 'lucide-react';
import { districts, divisions } from '../data';
import { DistrictCard } from '../components/DistrictCard';

export const DistrictsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const divisionParam = searchParams.get('division') || 'all';

  const [selectedDivision, setSelectedDivision] = useState<string>(divisionParam);
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Sync with URL query parameter
  useEffect(() => {
    const div = searchParams.get('division');
    if (div) {
      setSelectedDivision(div);
    }
  }, [searchParams]);

  const handleDivisionChange = (divId: string) => {
    setSelectedDivision(divId);
    if (divId === 'all') {
      searchParams.delete('division');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ division: divId });
    }
  };

  const filteredDistricts = useMemo(() => {
    return districts.filter((d) => {
      const matchesDivision =
        selectedDivision === 'all' || d.divisionId === selectedDivision;
      const q = searchTerm.trim().toLowerCase();
      const matchesSearch =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.divisionName.toLowerCase().includes(q) ||
        d.intro.toLowerCase().includes(q) ||
        d.majorAttractions.some((a) => a.toLowerCase().includes(q));

      return matchesDivision && matchesSearch;
    });
  }, [selectedDivision, searchTerm]);

  // Group by division when 'all' is selected and no search term, or display direct list
  const currentDivisionObj = divisions.find((d) => d.id === selectedDivision);

  return (
    <div id="explore-districts-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Complete Administrative Guide</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore All 64 Districts
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Bangladesh is structured into 8 administrative divisions encompassing 64 unique districts. Select a division or search to find history, natural beauty, and major tourist attractions for each district.
          </p>
        </div>

        {/* Controls Bar: Search & Division Filter Tabs */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-10 space-y-5">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search districts by name, attractions, or features (e.g. Sylhet, Cox's Bazar, tea, beaches)..."
              className="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
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

          {/* Division Selector Buttons */}
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
              <Filter className="w-3.5 h-3.5 text-emerald-600" />
              <span>Filter by Administrative Division ({divisions.length} Divisions)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => handleDivisionChange('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedDivision === 'all'
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All 64 Districts
              </button>
              {divisions.map((div) => (
                <button
                  key={div.id}
                  type="button"
                  onClick={() => handleDivisionChange(div.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    selectedDivision === div.id
                      ? 'bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {div.name} ({div.districtsCount})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Division Summary Banner if specific division is selected */}
        {currentDivisionObj && selectedDivision !== 'all' && (
          <div className="bg-emerald-900 text-white rounded-2xl p-6 mb-10 shadow-md border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center space-x-2 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-1">
                <Layers className="w-4 h-4" />
                <span>Division Profile</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                {currentDivisionObj.name} Division ({currentDivisionObj.districtsCount} Districts)
              </h2>
              <p className="text-emerald-100/90 text-sm mt-1 max-w-2xl leading-relaxed">
                {currentDivisionObj.description}
              </p>
            </div>
            <div className="text-right shrink-0 bg-emerald-950/60 px-5 py-3 rounded-xl border border-emerald-700/50">
              <span className="text-xs text-emerald-300 block">Headquarters</span>
              <span className="text-lg font-bold text-white">{currentDivisionObj.headquarters}</span>
              <span className="text-xs text-emerald-200/70 block mt-0.5">Area: {currentDivisionObj.areaKm2.toLocaleString()} km²</span>
            </div>
          </div>
        )}

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-medium text-slate-600">
            Showing <span className="font-bold text-emerald-700">{filteredDistricts.length}</span> of 64 districts
            {selectedDivision !== 'all' && ` in ${currentDivisionObj?.name} Division`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
          {(selectedDivision !== 'all' || searchTerm) && (
            <button
              type="button"
              onClick={() => {
                handleDivisionChange('all');
                setSearchTerm('');
              }}
              className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Districts Grid */}
        {filteredDistricts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDistricts.map((district) => (
              <DistrictCard key={district.id} district={district} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-lg mx-auto shadow-sm">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-900 mb-1">No districts found</h3>
            <p className="text-sm text-slate-500 mb-6">
              We couldn't find any districts matching your current filter criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                handleDivisionChange('all');
                setSearchTerm('');
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white text-xs font-semibold hover:bg-emerald-800 transition-colors"
            >
              View All 64 Districts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
