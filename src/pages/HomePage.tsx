import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, Compass, ArrowRight, Shield, Sparkles, Navigation, Globe } from 'lucide-react';
import { divisions } from '../data/divisions';
import { categories } from '../data/categories';
import { getPopularPlaces, touristPlaces } from '../data';
import { handleImageFallback } from '../data/placeholder';
import { DestinationCard } from '../components/DestinationCard';
import { DivisionCard } from '../components/DivisionCard';
import { CategoryCard } from '../components/CategoryCard';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const popularPlaces = getPopularPlaces();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <div id="home-page" className="min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section
        id="hero-section"
        className="relative min-h-[600px] lg:min-h-[680px] flex items-center justify-center text-white overflow-hidden"
      >
        {/* Landscape Photograph of Bangladesh */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/22/Sajek_Valley_Rangamati.jpg"
            alt="Bangladesh Landscape - Sajek Valley"
            className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
            referrerPolicy="no-referrer"
            onError={handleImageFallback}
          />
          {/* Gradients */}
          <div className="absolute inset-0 bg-linear-to-b from-emerald-950/85 via-emerald-950/65 to-emerald-950/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,78,59,0.3)_0%,rgba(2,44,34,0.8)_100%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-800/70 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-lg">
            <Globe className="w-4 h-4 text-emerald-300" />
            <span>Official Digital Travel Guide of Bangladesh</span>
          </div>

          {/* Heading & Subtitle (strictly from user prompt) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-sm">
            Explore Bangladesh
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif-title italic font-medium text-emerald-300 mb-6 drop-shadow-xs">
            "Discover the Beauty of 64 Districts"
          </p>

          {/* Description (strictly from user prompt) */}
          <p className="text-base sm:text-lg text-emerald-100/90 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            Discover breathtaking destinations, hidden gems, historical landmarks, and natural wonders across Bangladesh.
          </p>

          {/* Prominent Search Bar (placeholder strictly from prompt) */}
          <div className="max-w-2xl mx-auto mb-8">
            <form
              onSubmit={handleSearchSubmit}
              className="relative flex items-center bg-white/95 backdrop-blur-md rounded-2xl p-2 shadow-2xl border border-white/40 focus-within:ring-4 focus-within:ring-emerald-400/50 transition-all"
            >
              <Search className="w-6 h-6 text-emerald-700 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search districts, destinations, or tourist attractions..."
                className="w-full px-4 py-3 text-slate-800 placeholder-slate-400 text-sm sm:text-base bg-transparent focus:outline-none"
              />
              <button
                type="submit"
                id="hero-search-button"
                className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm sm:text-base shadow-md transition-all duration-200 shrink-0"
              >
                Search
              </button>
            </form>
          </div>

          {/* Two Prominent Buttons (strictly from user prompt) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/districts"
              id="hero-btn-explore-districts"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-emerald-900/40 transition-all duration-200"
            >
              <MapPin className="w-5 h-5" />
              <span>Explore Districts</span>
            </Link>
            <Link
              to="/places"
              id="hero-btn-discover-places"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-xl bg-white/20 hover:bg-white text-white hover:text-emerald-950 font-semibold text-sm sm:text-base backdrop-blur-md border border-white/30 transition-all duration-200"
            >
              <Compass className="w-5 h-5" />
              <span>Discover Places</span>
            </Link>
          </div>

          {/* Key Facts strip */}
          <div className="mt-14 pt-8 border-t border-emerald-800/50 grid grid-cols-2 md:grid-cols-4 gap-4 text-emerald-200/90 text-xs sm:text-sm font-medium">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">64</span>
              <span>Districts Covered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">8</span>
              <span>Administrative Divisions</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">120 km</span>
              <span>Longest Natural Beach</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-white">100%</span>
              <span>Free Travel Info</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= POPULAR DESTINATIONS SECTION ================= */}
      <section id="popular-destinations-section" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-emerald-700 font-bold text-xs tracking-wider uppercase bg-emerald-100/70 px-3 py-1 rounded-md">
                Traveler Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
                Popular Destinations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-xl mt-1">
                Explore legendary sea beaches, hill tracts, mangrove sanctuaries, and heritage sites known across Bangladesh.
              </p>
            </div>
            <Link
              to="/places"
              id="view-all-popular-places-btn"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-emerald-700 hover:text-emerald-800 font-semibold text-sm group"
            >
              <span>View All Tourist Places</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPlaces.slice(0, 6).map((place) => (
              <DestinationCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPLORE DIVISIONS SECTION ================= */}
      <section id="explore-divisions-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-emerald-700 font-bold text-xs tracking-wider uppercase bg-emerald-100/70 px-3 py-1 rounded-md">
              Regional Geography
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-2">
              Explore All 8 Divisions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From the coastal ridges of Chattogram to the verdant tea slopes of Sylhet and northern heritage of Rajshahi, explore the 8 divisions of Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map((div) => (
              <DivisionCard key={div.id} division={div} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= TRAVEL CATEGORIES SECTION ================= */}
      <section id="travel-categories-section" className="py-20 bg-emerald-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-emerald-300 font-bold text-xs tracking-wider uppercase bg-emerald-900/90 px-3 py-1 rounded-md border border-emerald-700/50">
                Curated Themes
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
                Travel Categories
              </h2>
              <p className="text-emerald-200/80 text-sm sm:text-base max-w-xl mt-1">
                Browse destinations by landscape archetype, whether you are seeking mountains, sea beaches, or ancient architecture.
              </p>
            </div>
            <Link
              to="/categories"
              id="view-all-categories-btn"
              className="mt-4 md:mt-0 inline-flex items-center space-x-1.5 text-emerald-300 hover:text-white font-semibold text-sm group"
            >
              <span>Explore All Categories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 9 Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= DISTRICT DISCOVERY BANNER ================= */}
      <section className="py-16 bg-emerald-800 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-emerald-700 text-xs font-semibold uppercase tracking-wider text-emerald-200 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full Coverage</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Explore All 64 Districts?
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base mt-2 leading-relaxed">
              Every district in Bangladesh has its own distinctive folklore, natural marvels, culinary delights, and historical roots. Discover local travel guidance for every corner of the country.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              to="/districts"
              id="banner-explore-64-districts-btn"
              className="px-6 py-3.5 rounded-xl bg-white text-emerald-950 font-bold text-sm shadow-md hover:bg-emerald-50 transition-colors inline-flex items-center space-x-2"
            >
              <Navigation className="w-4 h-4 text-emerald-700" />
              <span>Browse All 64 Districts</span>
            </Link>
            <Link
              to="/gallery"
              id="banner-view-gallery-btn"
              className="px-6 py-3.5 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white font-semibold text-sm border border-emerald-600 transition-colors inline-flex items-center space-x-2"
            >
              <span>View Photo Gallery</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
