import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Compass } from 'lucide-react';
import { District } from '../types';
import { handleImageFallback } from '../data/placeholder';

interface DistrictCardProps {
  district: District;
}

export const DistrictCard: React.FC<DistrictCardProps> = ({ district }) => {
  return (
    <div
      id={`district-card-${district.id}`}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
        <img
          src={district.coverImage}
          alt={district.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={handleImageFallback}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        
        {/* Division Badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 backdrop-blur-md text-emerald-200 border border-emerald-700/50 shadow-sm">
            <Compass className="w-3 h-3 text-emerald-300" />
            <span>{district.divisionName} Division</span>
          </span>
        </div>

        {/* District Title Overlay */}
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <h3 className="text-xl font-bold tracking-tight">
            {district.name}
          </h3>
          {district.bengaliName && (
            <span className="text-xs text-emerald-200 font-medium">
              {district.bengaliName} জেলা
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
            {district.intro}
          </p>

          {/* Major Attractions preview */}
          {district.majorAttractions && district.majorAttractions.length > 0 && (
            <div className="pt-2">
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
                Key Attractions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {district.majorAttractions.slice(0, 3).map((attr, idx) => (
                  <span
                    key={idx}
                    className="inline-block text-[11px] bg-slate-100 text-slate-700 font-medium px-2 py-0.5 rounded-md line-clamp-1 max-w-[170px]"
                  >
                    {attr}
                  </span>
                ))}
                {district.majorAttractions.length > 3 && (
                  <span className="inline-block text-[11px] bg-emerald-50 text-emerald-700 font-medium px-1.5 py-0.5 rounded-md">
                    +{district.majorAttractions.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center text-xs text-slate-500 font-medium">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 mr-1" />
            <span>District Guide</span>
          </div>
          <Link
            to={`/districts/${district.id}`}
            id={`explore-district-${district.id}`}
            className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all duration-200 group-hover:translate-x-0.5"
          >
            <span>Explore District</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
