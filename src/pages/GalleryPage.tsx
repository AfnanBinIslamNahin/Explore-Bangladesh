import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Image, Filter, Maximize2, X, MapPin, ArrowRight } from 'lucide-react';
import { getAllGalleryItems, categories } from '../data';
import { handleImageFallback } from '../data/placeholder';
import { GalleryItem } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const allGallery = useMemo(() => getAllGalleryItems(), []);

  const filteredGallery = useMemo(() => {
    if (selectedCategory === 'all') return allGallery;
    return allGallery.filter((item) => {
      const catObj = categories.find((c) => c.id === selectedCategory);
      return catObj ? item.category === catObj.name : true;
    });
  }, [allGallery, selectedCategory]);

  return (
    <div id="gallery-page" className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Image className="w-3.5 h-3.5" />
            <span>Visual Exploration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Photo Gallery
          </h1>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Discover the scenic splendor of Bangladesh through high-resolution photography spanning hills, sea beaches, wetlands, and historic monuments.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-emerald-700 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Photos ({allGallery.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === c.id
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => setActiveItem(item)}
              className="group relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-200 shadow-sm hover:shadow-xl cursor-pointer border border-slate-200/80 transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={handleImageFallback}
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-bold text-sm tracking-tight line-clamp-1 group-hover:text-emerald-300 transition-colors">
                  {item.placeName}
                </p>
                <p className="text-xs text-emerald-200/90 flex items-center mt-0.5">
                  <MapPin className="w-3 h-3 mr-1 text-emerald-400" />
                  <span>{item.districtName}, {item.divisionName}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        {activeItem && (
          <div
            id="gallery-lightbox"
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center bg-slate-900 rounded-2xl overflow-hidden border border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.imageUrl}
                  alt={activeItem.caption}
                  className="max-h-[65vh] w-auto object-contain"
                  referrerPolicy="no-referrer"
                  onError={handleImageFallback}
                />
              </div>

              <div className="p-6 w-full bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block mb-1">
                    {activeItem.category}
                  </span>
                  <h3 className="text-xl font-bold">{activeItem.placeName}</h3>
                  <p className="text-sm text-slate-300 flex items-center mt-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                    <span>{activeItem.districtName} District, {activeItem.divisionName} Division</span>
                  </p>
                </div>

                <Link
                  to={`/places/${activeItem.placeId}`}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold shrink-0 transition-colors shadow-md"
                >
                  <span>View Destination Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
