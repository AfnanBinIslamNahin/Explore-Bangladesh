import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';
import { Division } from '../types';
import { handleImageFallback } from '../data/placeholder';

interface DivisionCardProps {
  division: Division;
}

export const DivisionCard: React.FC<DivisionCardProps> = ({ division }) => {
  return (
    <div
      id={`division-card-${division.id}`}
      className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 aspect-4/3 flex flex-col justify-end p-5"
    >
      {/* Background Image */}
      <img
        src={division.image}
        alt={division.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={handleImageFallback}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-emerald-950/95 via-emerald-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-700/80 text-white backdrop-blur-sm">
            <Layers className="w-3 h-3 mr-1" />
            {division.districtsCount} Districts
          </span>
          {division.bengaliName && (
            <span className="text-xs text-emerald-300 font-medium font-serif-title">
              {division.bengaliName} বিভাগ
            </span>
          )}
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white mb-1 group-hover:text-emerald-300 transition-colors">
          {division.name}
        </h3>
        <p className="text-xs text-emerald-100/80 line-clamp-2 mb-4 leading-relaxed">
          {division.description}
        </p>

        <Link
          to={`/districts?division=${division.id}`}
          id={`explore-division-${division.id}`}
          className="w-full inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-white/15 hover:bg-white text-white hover:text-emerald-950 text-xs font-semibold backdrop-blur-md border border-white/20 transition-all duration-200"
        >
          <span>Explore Districts</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
};
