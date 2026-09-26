import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Compass, 
  Calendar, 
  DollarSign, 
  Navigation, 
  ShieldAlert, 
  ExternalLink, 
  Info, 
  ArrowLeft, 
  Car, 
  Train, 
  Plane, 
  Bus, 
  Maximize2, 
  X, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { getPlaceById, touristPlaces, getDistrictById } from '../data';
import { handleImageFallback } from '../data/placeholder';
import { getCreditsForDestination, getCreditForImage } from '../data/imageCredits';
import { DestinationCard } from '../components/DestinationCard';

export const PlaceDetailsPage: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const [activeImageModal, setActiveImageModal] = useState<string | null>(null);

  const place = getPlaceById(placeId || '');
  const district = place ? getDistrictById(place.districtId) : undefined;

  // Nearby places
  const nearbyPlaces = place
    ? touristPlaces.filter(
        (p) =>
          p.id !== place.id &&
          (place.nearbyPlaceIds.includes(p.id) || p.districtId === place.districtId)
      ).slice(0, 3)
    : [];

  if (!place) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <Compass className="w-16 h-16 text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Destination Not Found</h2>
        <p className="text-slate-600 mb-6 text-sm">
          The requested tourist destination could not be found.
        </p>
        <Link
          to="/places"
          className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-colors"
        >
          Explore All Tourist Places
        </Link>
      </div>
    );
  }

  return (
    <div id={`place-details-${place.id}`} className="min-h-screen bg-slate-50 pb-20">
      {/* ================= B. PHOTO GALLERY (Cover Section) ================= */}
      <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] bg-slate-950 overflow-hidden">
        <img
          src={place.coverImage}
          alt={place.name}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          onError={handleImageFallback}
        />
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950/95 via-emerald-950/50 to-emerald-950/20" />

        {/* View Full Cover Button */}
        <button
          type="button"
          onClick={() => setActiveImageModal(place.coverImage)}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-colors flex items-center space-x-1.5 text-xs font-semibold"
          title="Click to view large photo"
        >
          <Maximize2 className="w-4 h-4" />
          <span className="hidden sm:inline">View Large Photo</span>
        </button>

        {/* Header Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white z-10 pointer-events-none">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-emerald-200/90 font-medium pointer-events-auto">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/places" className="hover:text-white transition-colors">Tourist Places</Link>
            <span>/</span>
            <Link to={`/districts/${place.districtId}`} className="hover:text-white transition-colors">
              {place.district}
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{place.name}</span>
          </div>

          {/* A. PLACE NAME */}
          <div className="max-w-4xl pointer-events-auto">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-800/80 backdrop-blur-md border border-emerald-600/50 text-emerald-200 text-xs font-semibold">
                {place.category}
              </span>
              <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-slate-900/70 backdrop-blur-md text-slate-200 text-xs font-medium">
                <MapPin className="w-3 h-3 text-emerald-400" />
                <span>{place.district}, {place.division}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
              {place.name}
            </h1>
            {place.bengaliName && (
              <p className="text-xl sm:text-2xl text-emerald-300 font-serif-title">
                {place.bengaliName}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Additional Photographs Gallery */}
        {place.galleryImages && place.galleryImages.length > 1 && (
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200/80 mb-8">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Photo Gallery ({place.galleryImages.length} Photos - Click to expand)
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {place.galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImageModal(img)}
                  className="group relative aspect-16/10 rounded-xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200"
                >
                  <img
                    src={img}
                    alt={`${place.name} view ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={handleImageFallback}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Grid: Content & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* C. LOCATION INFORMATION */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                <MapPin className="w-4 h-4" />
                <span>Location Information</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Where is {place.name}?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                <div>
                  <span className="text-xs text-slate-500 block">Division</span>
                  <span className="font-semibold text-slate-900">{place.division}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">District</span>
                  <span className="font-semibold text-slate-900">{place.district} District</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Upazila / Local Area</span>
                  <span className="font-semibold text-slate-900">{place.upazila}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Category</span>
                  <span className="font-semibold text-slate-900">{place.category}</span>
                </div>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-5">
                <span className="font-semibold text-slate-900">Detailed Location: </span>
                {place.location}
              </p>

              {/* H. GOOGLE MAPS LOCATION BUTTON (strictly from user prompt) */}
              <div>
                <a
                  href={place.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-google-maps-location"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>View Location on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
                </a>
              </div>
            </div>

            {/* D. ABOUT THE PLACE */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Info className="w-4 h-4" />
                <span>About The Destination</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                About {place.name}
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1 text-emerald-900">
                    Overview & Character
                  </h3>
                  <p>{place.about.overview}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1 text-emerald-900">
                    Natural or Historical Significance
                  </h3>
                  <p>{place.about.significance}</p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-1 text-emerald-900">
                    What Visitors Can See and Experience
                  </h3>
                  <p>{place.about.experience}</p>
                </div>
              </div>
            </div>

            {/* E. HOW TO GO */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <Car className="w-4 h-4" />
                <span>Transportation & Routes</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                How to Go to {place.name}
              </h2>

              <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                {/* From Dhaka */}
                <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-100">
                  <span className="font-bold text-emerald-950 block text-sm mb-1">
                    How to Travel from Dhaka:
                  </span>
                  <p>{place.howToGo.fromDhaka}</p>
                </div>

                {/* From District HQ */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <span className="font-bold text-slate-900 block text-sm mb-1">
                    From {place.district} District Headquarters:
                  </span>
                  <p>{place.howToGo.fromDistrictHq}</p>
                </div>

                {/* Available Transport Options */}
                <div>
                  <span className="font-bold text-slate-900 block text-sm mb-2">
                    Available Transportation Modes:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {place.howToGo.transportOptions.map((opt, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center text-xs bg-slate-100 text-slate-700 font-medium px-3 py-1.5 rounded-lg border border-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                        <span>{opt}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Local Transport */}
                <div>
                  <span className="font-bold text-slate-900 block text-sm mb-1">
                    Local Transportation Guidance:
                  </span>
                  <p className="text-slate-600">{place.howToGo.localTransport}</p>
                </div>
              </div>
            </div>

            {/* I. TRAVEL TIPS */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>Travel Advice & Etiquette</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                Essential Travel Tips
              </h2>

              <ul className="space-y-3 text-sm text-slate-700">
                {place.travelTips.map((tip, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar (Right 1 col) */}
          <div className="space-y-6">
            {/* F. BEST TIME TO VISIT */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                <Calendar className="w-4 h-4" />
                <span>Seasonality</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Best Time to Visit
              </h3>
              <div className="bg-emerald-50 text-emerald-950 font-semibold text-xs px-3 py-1.5 rounded-lg border border-emerald-200 mb-3">
                {place.bestTimeToVisit.season}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {place.bestTimeToVisit.description}
              </p>
            </div>

            {/* G. ENTRY FEES AND COSTS */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                <DollarSign className="w-4 h-4" />
                <span>Entry & Costs</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Entry Fees & Costs
              </h3>
              <div className="text-sm font-semibold text-slate-800 mb-2">
                {place.entryFees.feeInfo}
              </div>
              {place.entryFees.details ? (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {place.entryFees.details}
                </p>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  Please confirm current fees and transportation costs before your visit.
                </p>
              )}
            </div>

            {/* District Quick Link */}
            {district && (
              <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-sm border border-emerald-800">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider block mb-1">
                  Explore The District
                </span>
                <h4 className="text-lg font-bold mb-2">
                  {district.name} District
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
                  {district.intro}
                </p>
                <Link
                  to={`/districts/${district.id}`}
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <span>Explore Full {district.name} Guide</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* J. NEARBY TOURIST PLACES */}
        {nearbyPlaces.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Continue Exploring
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Nearby Tourist Attractions
                </h2>
                <p className="text-slate-600 text-sm mt-0.5">
                  Other destinations located in the same region or adjacent districts.
                </p>
              </div>
              <Link
                to="/places"
                className="text-xs font-semibold text-emerald-700 hover:underline hidden sm:inline-block"
              >
                View All Destinations &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nearbyPlaces.map((p) => (
                <DestinationCard key={p.id} place={p} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Large Photograph */}
      {activeImageModal && (
        <div
          id="photo-lightbox-modal"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImageModal(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveImageModal(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={activeImageModal}
              alt={place.name}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl border border-white/10"
              referrerPolicy="no-referrer"
              onError={handleImageFallback}
            />
            <div className="mt-3 text-center text-white">
              <p className="font-semibold text-sm">{place.name}</p>
              <p className="text-xs text-emerald-300">{place.district}, {place.division} Division</p>
              {activeImageModal && getCreditForImage(activeImageModal) && (
                <p className="text-[11px] text-slate-300 mt-1">
                  Photo: {getCreditForImage(activeImageModal)?.artist || 'Contributor'} ({getCreditForImage(activeImageModal)?.license})
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
