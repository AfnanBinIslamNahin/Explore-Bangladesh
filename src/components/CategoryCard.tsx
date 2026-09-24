import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mountain, 
  Waves, 
  Trees, 
  Droplets, 
  Landmark, 
  Church, 
  Compass, 
  Leaf, 
  Sun,
  ArrowRight 
} from 'lucide-react';
import { Category } from '../types';
import { handleImageFallback } from '../data/placeholder';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain':
        return <Mountain className="w-6 h-6" />;
      case 'Waves':
        return <Waves className="w-6 h-6" />;
      case 'Trees':
        return <Trees className="w-6 h-6" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6" />;
      case 'Church':
        return <Church className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Leaf':
        return <Leaf className="w-6 h-6" />;
      case 'Sun':
        return <Sun className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <Link
      to={`/categories/${category.id}`}
      id={`category-card-${category.id}`}
      className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 aspect-4/3 flex flex-col justify-end p-5"
    >
      {/* Background Image */}
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={handleImageFallback}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-emerald-950/90 via-emerald-950/50 to-emerald-950/20 group-hover:from-emerald-950/95 transition-colors" />

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="w-10 h-10 rounded-xl bg-emerald-600/90 backdrop-blur-md flex items-center justify-center text-white mb-3 shadow-md group-hover:bg-emerald-500 transition-colors">
          {getIcon(category.iconName)}
        </div>

        <h3 className="text-lg font-bold tracking-tight text-white mb-1 group-hover:text-emerald-300 transition-colors">
          {category.name}
        </h3>
        <p className="text-xs text-emerald-100/80 line-clamp-2 leading-relaxed mb-3">
          {category.description}
        </p>

        <div className="inline-flex items-center space-x-1 text-xs font-semibold text-emerald-300 group-hover:text-white transition-colors">
          <span>Discover Places</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
