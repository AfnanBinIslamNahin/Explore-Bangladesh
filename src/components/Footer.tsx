import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, MapPin, Heart, ExternalLink, ShieldCheck } from 'lucide-react';
import { divisions } from '../data/divisions';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore Districts', path: '/districts' },
    { name: 'Tourist Places', path: '/places' },
    { name: 'Categories', path: '/categories' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer id="main-footer" className="bg-emerald-950 text-emerald-100/90 border-t border-emerald-900/60 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                Explore Bangladesh
              </span>
            </Link>
            <p className="text-emerald-300 font-medium text-sm">
              "Discover the Beauty of 64 Districts"
            </p>
            <p className="text-xs text-emerald-200/70 leading-relaxed max-w-md">
              A comprehensive travel and tourism information platform dedicated to showcasing the natural wonders, historical landmarks, cultural heritage, and tourist attractions across all 64 districts of Bangladesh.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-300/80 bg-emerald-900/50 p-3 rounded-lg border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Pure travel information guide. No tour booking, ticket sales, or payment gateways.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-emerald-200/80 hover:text-white hover:underline transition-colors inline-flex items-center"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 8 Divisions */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">
              8 Divisions
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {divisions.map((div) => (
                <li key={div.id}>
                  <Link
                    to={`/districts?division=${div.id}`}
                    className="text-emerald-200/80 hover:text-white hover:underline transition-colors block"
                  >
                    {div.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* District Highlights */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">
              Key Destinations
            </h3>
            <ul className="space-y-2 text-sm text-emerald-200/80">
              <li>
                <Link to="/places/coxs-bazar-sea-beach" className="hover:text-white hover:underline">
                  Cox's Bazar Sea Beach
                </Link>
              </li>
              <li>
                <Link to="/places/sajek-valley" className="hover:text-white hover:underline">
                  Sajek Valley
                </Link>
              </li>
              <li>
                <Link to="/places/sundarbans-mangrove-forest" className="hover:text-white hover:underline">
                  The Sundarbans
                </Link>
              </li>
              <li>
                <Link to="/places/jaflong" className="hover:text-white hover:underline">
                  Jaflong
                </Link>
              </li>
              <li>
                <Link to="/places/ratargul-swamp-forest" className="hover:text-white hover:underline">
                  Ratargul Swamp Forest
                </Link>
              </li>
              <li>
                <Link to="/places/kuakata-sea-beach" className="hover:text-white hover:underline">
                  Kuakata Sea Beach
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-emerald-900/60 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-300/70 gap-4">
          <p>© 2026 Explore Bangladesh. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-white transition-colors">
              About Platform
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact & Inquiries
            </Link>
            <span className="inline-flex items-center text-emerald-300">
              Travel Responsibly in Bangladesh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
