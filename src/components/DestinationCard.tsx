import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Tag } from 'lucide-react';
import { TouristPlace } from '../types';
import { handleImageFallback } from '../data/placeholder';

interface DestinationCardProps {
  place: TouristPlace;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({ place }) => {
  return (
    <div
      id={`destination-card-${place.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image with Category Badge */}
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <img
          src={place.coverImage}
          alt={place.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handleImageFallback}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 backdrop-blur-md text-emerald-100 border border-emerald-700/50 shadow-sm">
            <Tag className="w-3 h-3 text-emerald-300" />
            <span>{place.category}</span>
          </span>
        </div>

        {/* Division pill */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <span className="flex items-center space-x-1 font-medium bg-slate-900/60 backdrop-blur-md px-2 py-0.5 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>{place.district}, {place.division}</span>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
            {place.name}
          </h3>
          {place.bengaliName && (
            <p className="text-xs text-slate-500 mb-2 font-medium">
              {place.bengaliName}
            </p>
          )}
          <p className="text-sm text-slate-600 line-clamp-2 mt-1 leading-relaxed">
            {place.shortDescription}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
            Travel Guide
          </span>
          <Link
            to={`/places/${place.id}`}
            id={`view-details-${place.id}`}
            className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-sm transition-all duration-200 group-hover:translate-x-0.5"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
