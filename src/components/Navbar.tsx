import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, MapPin, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore Districts', path: '/districts' },
    { name: 'Tourist Places', path: '/places' },
    { name: 'Categories', path: '/categories' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-emerald-950/95 backdrop-blur-md shadow-lg border-b border-emerald-800/40 py-3 text-white'
            : 'bg-emerald-950/90 backdrop-blur-sm border-b border-emerald-900/30 py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              id="brand-logo-link"
              className="flex items-center space-x-3 group focus:outline-none"
            >
              <img
                src="/images/explore-bangladesh-logo.png"
                alt="Explore Bangladesh Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  Explore Bangladesh
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-emerald-300/80 uppercase">
                  Discover 64 Districts
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav id="desktop-nav-menu" className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-800 text-white font-semibold shadow-inner'
                        : 'text-emerald-100/90 hover:text-white hover:bg-emerald-900/60'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Search Toggle Button */}
              <button
                id="search-toggle-btn"
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/70 transition-colors focus:outline-none"
                aria-label="Search"
                title="Search destinations & districts"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Quick 64 Districts Badge Button */}
              <Link
                to="/districts"
                id="nav-quick-districts-btn"
                className="hidden sm:inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>64 Districts</span>
              </Link>

              {/* Mobile Menu Hamburger */}
              <button
                id="mobile-menu-toggle-btn"
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-900/70 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Search Dropdown / Bar */}
          {searchOpen && (
            <div
              id="navbar-search-bar"
              className="mt-3 pt-3 border-t border-emerald-800/40 animate-fadeIn"
            >
              <form onSubmit={handleSearchSubmit} className="relative flex items-center">
                <Search className="w-5 h-5 text-emerald-300 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search districts, destinations, or tourist attractions (e.g. Sylhet, Cox's Bazar, Waterfall)..."
                  className="w-full pl-11 pr-24 py-2.5 rounded-xl bg-emerald-900/80 border border-emerald-700/50 text-white placeholder-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-semibold transition-colors"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-menu"
            className="lg:hidden bg-emerald-950 border-b border-emerald-800 px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-fadeIn"
          >
            <div className="pb-3 mb-2 border-b border-emerald-800/60">
              <form onSubmit={handleSearchSubmit} className="relative">
                <Search className="w-4 h-4 text-emerald-300 absolute left-3 top-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Bangladesh tourism..."
                  className="w-full pl-9 pr-20 py-2 rounded-lg bg-emerald-900 border border-emerald-700 text-white text-sm placeholder-emerald-300/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 px-3 py-1 rounded bg-emerald-500 text-white text-xs font-semibold"
                >
                  Go
                </button>
              </form>
            </div>
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-800 text-white font-semibold'
                      : 'text-emerald-100 hover:bg-emerald-900/70 hover:text-white'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-emerald-400" />
              </NavLink>
            ))}
            <div className="pt-3 border-t border-emerald-800/60 flex items-center justify-between text-xs text-emerald-300/80 px-2">
              <span>Explore Bangladesh</span>
              <span>64 Districts Guide</span>
            </div>
          </div>
        )}
      </header>
      {/* Spacer so content does not get hidden under fixed navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};
