import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Compass, 
  ArrowLeft, 
  Search, 
  Layers, 
  Landmark, 
  Mountain, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  ExternalLink 
} from 'lucide-react';
import { getDistrictById, getPlacesByDistrict, getDivisionById, touristPlaces } from '../data';
import { handleImageFallback } from '../data/placeholder';
import { DestinationCard } from '../components/DestinationCard';

export const DistrictDetailsPage: React.FC = () => {
  const { districtId } = useParams<{ districtId: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const district = getDistrictById(districtId || '');
  const division = district ? getDivisionById(district.divisionId) : undefined;
  const places = district ? getPlacesByDistrict(district.id) : [];

  // Filter tourist places in this district
  const filteredPlaces = useMemo(() => {
    if (!searchQuery.trim()) return places;
    const q = searchQuery.toLowerCase();
    return places.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
    );
  }, [places, searchQuery]);

  if (!district) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
        <MapPin className="w-16 h-16 text-slate-300 mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">District Not Found</h2>
        <p className="text-slate-600 mb-6 text-sm">
          The requested district could not be located in the 64 districts directory.
        </p>
        <Link
          to="/districts"
          className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs hover:bg-emerald-800 transition-colors"
        >
          Return to All Districts
        </Link>
      </div>
    );
  }

  return (
    <div id={`district-details-page-${district.id}`} className="min-h-screen bg-slate-50 pb-20">
      {/* 3. District Cover Photograph & Header */}
      <div className="relative h-[340px] sm:h-[420px] bg-slate-900 overflow-hidden">
        <img
          src={district.coverImage}
          alt={district.name}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          onError={handleImageFallback}
        />
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950/95 via-emerald-950/60 to-emerald-950/30" />

        <div className="absolute inset-0 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-white">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-emerald-200/90 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/districts" className="hover:text-white transition-colors">Districts</Link>
            <span>/</span>
            <Link to={`/districts?division=${district.divisionId}`} className="hover:text-white transition-colors">
              {district.divisionName} Division
            </Link>
            <span>/</span>
            <span className="text-white font-semibold">{district.name}</span>
          </div>

          {/* 1. District Name & 2. Division Name */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-800/80 backdrop-blur-md border border-emerald-600/50 text-emerald-200 text-xs font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>{district.divisionName} Division</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-2">
              {district.name} District
            </h1>
            {district.bengaliName && (
              <p className="text-lg text-emerald-300 font-serif-title">
                {district.bengaliName} জেলা
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Column (Left 2 cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* 4. Introduction to the District */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Introduction</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                About {district.name}
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {district.intro}
              </p>
            </div>

            {/* 5. Geography and Natural Beauty */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                <Mountain className="w-4 h-4" />
                <span>Geography & Nature</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                Geography & Natural Landscape
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {district.geography}
              </p>
            </div>

            {/* 6. Historical and Cultural Background */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2">
                <Landmark className="w-4 h-4" />
                <span>Historical Heritage</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                History & Culture
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                {district.history}
              </p>
            </div>

            {/* 7. & 8. Tourist Attractions & Searchable Cards */}
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Tourist Attractions in {district.name}
                  </h2>
                  <p className="text-slate-600 text-sm">
                    Discover places to visit, explore, and experience in this district.
                  </p>
                </div>
                {places.length > 0 && (
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Filter attractions..."
                      className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    />
                  </div>
                )}
              </div>

              {/* Verified Detailed Tourist Place Cards */}
              {filteredPlaces.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {filteredPlaces.map((place) => (
                    <DestinationCard key={place.id} place={place} />
                  ))}
                </div>
              ) : places.length > 0 && searchQuery ? (
                <div className="bg-white rounded-xl p-8 text-center border border-slate-200 text-slate-500 text-sm mb-8">
                  No tourist destinations match "{searchQuery}" in {district.name}.
                </div>
              ) : null}

              {/* 7. Major Tourist Attractions list & additional unindexed spots */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>Notable Landmarks & Heritage Sites in {district.name}</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {district.majorAttractions.map((attraction, idx) => {
                    // Check if an existing place card matches
                    const norm = (s: string) => s.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]/g, ' ').trim();
                    const cleanAttr = norm(attraction);

                    const matchingPlace = 
                      places.find((p) => {
                        const cleanName = norm(p.name);
                        return cleanName === cleanAttr || p.id === attraction.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      }) ||
                      places.find((p) => {
                        const cleanName = norm(p.name);
                        return cleanName.includes(cleanAttr) || cleanAttr.includes(cleanName);
                      }) ||
                      places.find((p) => {
                        const tokens = cleanAttr.split(/\s+/).filter((t) => t.length >= 4);
                        return tokens.some((t) => norm(p.name).split(/\s+/).includes(t));
                      }) ||
                      touristPlaces.find((p) => {
                        const cleanName = norm(p.name);
                        return cleanName.includes(cleanAttr) || cleanAttr.includes(cleanName) || p.id === attraction.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      }) ||
                      touristPlaces.find((p) => {
                        const tokens = cleanAttr.split(/\s+/).filter((t) => t.length >= 5);
                        return tokens.some((t) => norm(p.name).includes(t));
                      }) ||
                      (cleanAttr.includes('sajek') ? touristPlaces.find((p) => p.id === 'sajek-valley') : undefined) ||
                      (cleanAttr.includes('shuriya') ? touristPlaces.find((p) => p.id === 'dhanshiri-riverfront') : undefined) ||
                      (cleanAttr.includes('chandra') ? touristPlaces.find((p) => p.id === 'chandrabati-mandir') : undefined) ||
                      (cleanAttr.includes('rudrakar') ? touristPlaces.find((p) => p.id === 'rudrakar-zamindar-bari') : undefined) ||
                      (cleanAttr.includes('fateh') ? touristPlaces.find((p) => p.id === 'fatehabad-mosque') : undefined) ||
                      (cleanAttr.includes('shakuni') ? touristPlaces.find((p) => p.id === 'shakuni-lake') : undefined) ||
                      (cleanAttr.includes('rajaram') ? touristPlaces.find((p) => p.id === 'rajaram-roy-mandir') : undefined) ||
                      (cleanAttr.includes('sunamukhi') ? touristPlaces.find((p) => p.id === 'sunamukhi-zamindar-bari') : undefined) ||
                      (cleanAttr.includes('ariel') || cleanAttr.includes('arial') ? touristPlaces.find((p) => p.id === 'ariel-khan-river-view') : undefined) ||
                      (cleanAttr.includes('malnicherra') ? touristPlaces.find((p) => p.id === 'malnicherra-tea-estate') : undefined) ||
                      (cleanAttr.includes('bisanakandi') || cleanAttr.includes('bichnakandi') ? touristPlaces.find((p) => p.id === 'bisanakandi') : undefined) ||
                      (cleanAttr.includes('madhabkunda') ? touristPlaces.find((p) => p.id === 'madhabkunda-waterfall') : undefined) ||
                      (cleanAttr.includes('baikka') ? touristPlaces.find((p) => p.id === 'baikka-beel') : undefined) ||
                      (cleanAttr.includes('hum hum') || cleanAttr.includes('hamham') ? touristPlaces.find((p) => p.id === 'hum-hum-waterfall') : undefined) ||
                      (cleanAttr.includes('hakaluki') ? touristPlaces.find((p) => p.id === 'hakaluki-haor') : undefined) ||
                      (cleanAttr.includes('satchari') ? touristPlaces.find((p) => p.id === 'satchari-national-park') : undefined) ||
                      (cleanAttr.includes('rema') || cleanAttr.includes('kalenga') ? touristPlaces.find((p) => p.id === 'rema-kalenga-wildlife-sanctuary') : undefined) ||
                      (cleanAttr.includes('baniyachong') ? touristPlaces.find((p) => p.id === 'baniyachong-village') : undefined) ||
                      (cleanAttr.includes('shankar') || cleanAttr.includes('uchail') ? touristPlaces.find((p) => p.id === 'shankarpasha-shahi-mosque') : undefined) ||
                      (cleanAttr.includes('chunarughat') ? touristPlaces.find((p) => p.id === 'chunarughat-tea-gardens') : undefined) ||
                      (cleanAttr.includes('shimul') ? touristPlaces.find((p) => p.id === 'shimul-bagan') : undefined) ||
                      (cleanAttr.includes('jadukata') ? touristPlaces.find((p) => p.id === 'jadukata-river-barek-tila') : undefined) ||
                      (cleanAttr.includes('niladri') ? touristPlaces.find((p) => p.id === 'tekerghat-niladri-lake') : undefined) ||
                      (cleanAttr.includes('hason') ? touristPlaces.find((p) => p.id === 'hason-raja-museum') : undefined) ||
                      (cleanAttr.includes('t badh') || cleanAttr.includes('padma river embankment') ? touristPlaces.find((p) => p.id === 'padma-river-t-groin') : undefined) ||
                      (cleanAttr.includes('makhdum') ? touristPlaces.find((p) => p.id === 'hazrat-shah-makhdum-dargah') : undefined) ||
                      (cleanAttr.includes('nawab palace') ? touristPlaces.find((p) => p.id === 'bogura-nawab-palace') : undefined) ||
                      (cleanAttr.includes('dubalhati') || cleanAttr.includes('dubolhati') ? touristPlaces.find((p) => p.id === 'dubolhati-rajbari') : undefined) ||
                      (cleanAttr.includes('gonobhaban') || cleanAttr.includes('dighapatia') ? touristPlaces.find((p) => p.id === 'uttara-ganabhaban') : undefined) ||
                      (cleanAttr.includes('hardinge') ? touristPlaces.find((p) => p.id === 'hardinge-bridge-pabna') : undefined) ||
                      (cleanAttr.includes('suchitra') ? touristPlaces.find((p) => p.id === 'suchitra-sen-memorial-house') : undefined) ||
                      (cleanAttr.includes('pabna jor') || cleanAttr.includes('jor bangla') ? touristPlaces.find((p) => p.id === 'pabna-jor-bangla-temple') : undefined) ||
                      (cleanAttr.includes('tarash') ? touristPlaces.find((p) => p.id === 'tarash-zamindar-bari-pabna') : undefined) ||
                      (cleanAttr.includes('jamuna bridge') ? touristPlaces.find((p) => p.id === 'bangabandhu-jamuna-bridge-sirajganj') : undefined) ||
                      (cleanAttr.includes('hatikumrul') || cleanAttr.includes('navaratna') ? touristPlaces.find((p) => p.id === 'navaratna-temple-hatikumrul') : undefined) ||
                      (cleanAttr.includes('shahjadpur') ? touristPlaces.find((p) => p.id === 'rabindra-kachari-bari-shahjadpur') : undefined) ||
                      (cleanAttr.includes('lockma') || cleanAttr.includes('lokma') ? touristPlaces.find((p) => p.id === 'lokma-rajbari') : undefined) ||
                      (cleanAttr.includes('hinda') || cleanAttr.includes('kasba') ? touristPlaces.find((p) => p.id === 'hinda-kasba-shahi-mosque') : undefined) ||
                      (cleanAttr.includes('nandail') ? touristPlaces.find((p) => p.id === 'nandail-dighi') : undefined) ||
                      (cleanAttr.includes('mahananda') || cleanAttr.includes('mango orchards') ? touristPlaces.find((p) => p.id === 'mahananda-riverfront-mango-orchards') : undefined) ||
                      (cleanAttr.includes('rupsha') ? touristPlaces.find((p) => p.id === 'rupsha-bridge-khulna') : undefined) ||
                      (cleanAttr.includes('khulna divisional museum') ? touristPlaces.find((p) => p.id === 'khulna-divisional-museum') : undefined) ||
                      (cleanAttr.includes('sheikh russel') ? touristPlaces.find((p) => p.id === 'sheikh-russel-eco-park-khulna') : undefined) ||
                      (cleanAttr.includes('sundarbans gateway') ? touristPlaces.find((p) => p.id === 'sundarbans-gateway-khulna') : undefined) ||
                      (cleanAttr.includes('nine dome') ? touristPlaces.find((p) => p.id === 'nine-dome-mosque') : undefined) ||
                      (cleanAttr.includes('karamjal') ? touristPlaces.find((p) => p.id === 'karamjal-wildlife-centre') : undefined) ||
                      (cleanAttr.includes('khan jahan ali shrine') || cleanAttr.includes('thakur dighi') ? touristPlaces.find((p) => p.id === 'khan-jahan-ali-shrine') : undefined) ||
                      (cleanAttr.includes('kalagachia') ? touristPlaces.find((p) => p.id === 'kalagachia-ecotourism-satkhira') : undefined) ||
                      (cleanAttr.includes('akashlina') ? touristPlaces.find((p) => p.id === 'akashlina-ecotourism-centre') : undefined) ||
                      (cleanAttr.includes('tetulia') ? touristPlaces.find((p) => p.id === 'tetulia-shahi-mosque') : undefined) ||
                      (cleanAttr.includes('pratapaditya') || cleanAttr.includes('hammamkhana') ? touristPlaces.find((p) => p.id === 'ishwaripur-pratapaditya-palace') : undefined) ||
                      (cleanAttr.includes('madhusudan') || cleanAttr.includes('sagardari') ? touristPlaces.find((p) => p.id === 'sagardari-madhusudan-memorial') : undefined) ||
                      (cleanAttr.includes('godkhali') || cleanAttr.includes('flower') ? touristPlaces.find((p) => p.id === 'godkhali-flower-market') : undefined) ||
                      (cleanAttr.includes('chanchra') ? touristPlaces.find((p) => p.id === 'chanchra-rajbari') : undefined) ||
                      (cleanAttr.includes('benapole') ? touristPlaces.find((p) => p.id === 'benapole-border-crossing') : undefined) ||
                      (cleanAttr.includes('barobazar') || cleanAttr.includes('gorar') ? touristPlaces.find((p) => p.id === 'barobazar-archaeological-mosques') : undefined) ||
                      (cleanAttr.includes('naldanga') ? touristPlaces.find((p) => p.id === 'naldanga-temple-complex') : undefined) ||
                      (cleanAttr.includes('miah bari') || cleanAttr.includes('muraripukur') ? touristPlaces.find((p) => p.id === 'miah-bari-mosque-jhenaidah') : undefined) ||
                      (cleanAttr.includes('pagla kanai') ? touristPlaces.find((p) => p.id === 'pagla-kanai-mazar') : undefined) ||
                      (cleanAttr.includes('sitaram') ? touristPlaces.find((p) => p.id === 'raja-sitaram-ray-palace') : undefined) ||
                      (cleanAttr.includes('siddheswari math') ? touristPlaces.find((p) => p.id === 'siddheswari-math-magura') : undefined) ||
                      (cleanAttr.includes('nabaganga') ? touristPlaces.find((p) => p.id === 'nabaganga-riverfront-magura') : undefined) ||
                      (cleanAttr.includes('sultan') ? touristPlaces.find((p) => p.id === 'sm-sultan-memorial-museum') : undefined) ||
                      (cleanAttr.includes('chitra') ? touristPlaces.find((p) => p.id === 'chitra-riverfront-narail') : undefined) ||
                      (cleanAttr.includes('victoria collegiate') ? touristPlaces.find((p) => p.id === 'narail-zamindar-bari-heritage') : undefined) ||
                      (cleanAttr.includes('lalon') || cleanAttr.includes('chheuriya') ? touristPlaces.find((p) => p.id === 'lalon-shah-shrine') : undefined) ||
                      (cleanAttr.includes('shilaidaha') || cleanAttr.includes('kuthibari') ? touristPlaces.find((p) => p.id === 'shilaidaha-rabindra-kuthibari') : undefined) ||
                      (cleanAttr.includes('lahinipara') || (cleanAttr.includes('mosharraf') && district.id === 'kushtia') ? touristPlaces.find((p) => p.id === 'mir-mosharraf-hossain-memorial-kushtia') : undefined) ||
                      (cleanAttr.includes('mosharraf') ? touristPlaces.find((p) => p.id === 'mir-mosharraf-hossain-memorial') : undefined) ||
                      (cleanAttr.includes('hardinge') && cleanAttr.includes('bheramara') ? touristPlaces.find((p) => p.id === 'hardinge-bridge-kushtia-approach') : undefined) ||
                      (cleanAttr.includes('gholdari') ? touristPlaces.find((p) => p.id === 'gholdari-shahi-mosque') : undefined) ||
                      (cleanAttr.includes('carew') || cleanAttr.includes('darsana') ? touristPlaces.find((p) => p.id === 'carew-and-co-heritage') : undefined) ||
                      (cleanAttr.includes('durgapur') ? touristPlaces.find((p) => p.id === 'durgapur-zamindar-bari-chuadanga') : undefined) ||
                      (cleanAttr.includes('mathabhanga') ? touristPlaces.find((p) => p.id === 'mathabhanga-riverfront-chuadanga') : undefined) ||
                      (cleanAttr.includes('mujibnagar') ? touristPlaces.find((p) => p.id === 'mujibnagar-memorial-complex') : undefined) ||
                      (cleanAttr.includes('amjhupi') ? touristPlaces.find((p) => p.id === 'amjhupi-nilkuthi') : undefined) ||
                      (cleanAttr.includes('bhatpara') ? touristPlaces.find((p) => p.id === 'bhatpara-nilkuthi') : undefined) ||
                      (cleanAttr.includes('siddheswari kali') ? touristPlaces.find((p) => p.id === 'siddheswari-kali-temple-meherpur') : undefined) ||
                      (cleanAttr.includes('carmichael') ? touristPlaces.find((p) => p.id === 'carmichael-college-heritage') : undefined) ||
                      (cleanAttr.includes('rokeya') || cleanAttr.includes('pairaband') ? touristPlaces.find((p) => p.id === 'begum-rokeya-memorial-pairaband') : undefined) ||
                      (cleanAttr.includes('chikli') ? touristPlaces.find((p) => p.id === 'chikli-water-park-rangpur') : undefined) ||
                      (cleanAttr.includes('bhinna jagat') ? touristPlaces.find((p) => p.id === 'bhinna-jagat-amusement-park') : undefined) ||
                      (cleanAttr.includes('ramsagar') ? touristPlaces.find((p) => p.id === 'ramsagar-national-park') : undefined) ||
                      (cleanAttr.includes('nayabad') ? touristPlaces.find((p) => p.id === 'nayabad-mosque') : undefined) ||
                      (cleanAttr.includes('dinajpur rajbari') ? touristPlaces.find((p) => p.id === 'dinajpur-rajbari') : undefined) ||
                      (cleanAttr.includes('shopnopuri') ? touristPlaces.find((p) => p.id === 'shopnopuri-amusement-park') : undefined) ||
                      (cleanAttr.includes('singra') ? touristPlaces.find((p) => p.id === 'singra-national-park') : undefined) ||
                      (cleanAttr.includes('banglabandha') ? touristPlaces.find((p) => p.id === 'banglabandha-zero-point') : undefined) ||
                      (cleanAttr.includes('tetulia') && (cleanAttr.includes('viewpoint') || cleanAttr.includes('kanchenjunga') || cleanAttr.includes('mahananda')) ? touristPlaces.find((p) => p.id === 'tetulia-himalayan-viewpoint') : undefined) ||
                      (cleanAttr.includes('tea') && (cleanAttr.includes('tetulia') || cleanAttr.includes('plain')) ? touristPlaces.find((p) => p.id === 'tetulia-plain-land-tea-gardens') : undefined) ||
                      (cleanAttr.includes('mirzapur') ? touristPlaces.find((p) => p.id === 'mirzapur-shahi-mosque-panchagarh') : undefined) ||
                      (cleanAttr.includes('bhitargarh') ? touristPlaces.find((p) => p.id === 'bhitargarh-archaeological-site') : undefined) ||
                      (cleanAttr.includes('haripur') ? touristPlaces.find((p) => p.id === 'haripur-rajbari-thakurgaon') : undefined) ||
                      (cleanAttr.includes('ballia') ? touristPlaces.find((p) => p.id === 'ballia-shahi-mosque') : undefined) ||
                      (cleanAttr.includes('surya puri') || cleanAttr.includes('mango tree') ? touristPlaces.find((p) => p.id === 'surya-puri-historic-mango-tree') : undefined) ||
                      (cleanAttr.includes('jagaddal') ? touristPlaces.find((p) => p.id === 'jagaddal-rajbari-thakurgaon') : undefined) ||
                      (cleanAttr.includes('nilsagar') ? touristPlaces.find((p) => p.id === 'nilsagar-dighi') : undefined) ||
                      (cleanAttr.includes('chini mosque') ? touristPlaces.find((p) => p.id === 'saidpur-chini-mosque') : undefined) ||
                      (cleanAttr.includes('railway workshop') ? touristPlaces.find((p) => p.id === 'saidpur-railway-workshop') : undefined) ||
                      (cleanAttr.includes('dimla') ? touristPlaces.find((p) => p.id === 'dimla-rajbari-heritage') : undefined) ||
                      (cleanAttr.includes('teesta barrage') ? touristPlaces.find((p) => p.id === 'teesta-barrage-dalia') : undefined) ||
                      (cleanAttr.includes('tin bigha') || cleanAttr.includes('dahagram') ? touristPlaces.find((p) => p.id === 'tin-bigha-corridor') : undefined) ||
                      (cleanAttr.includes('harano') ? touristPlaces.find((p) => p.id === 'harano-masjid-lalmonirhat') : undefined) ||
                      (cleanAttr.includes('teesta railway bridge') ? touristPlaces.find((p) => p.id === 'teesta-railway-bridge-lalmonirhat') : undefined) ||
                      (cleanAttr.includes('chilmari') ? touristPlaces.find((p) => p.id === 'chilmari-river-port') : undefined) ||
                      (cleanAttr.includes('dharla') ? touristPlaces.find((p) => p.id === 'dharla-bridge-kurigram') : undefined) ||
                      (cleanAttr.includes('shonahat') ? touristPlaces.find((p) => p.id === 'shonahat-railway-bridge-kurigram') : undefined) ||
                      (cleanAttr.includes('chandamari') || cleanAttr.includes('chondorpath') ? touristPlaces.find((p) => p.id === 'chondorpath-dighi-kurigram') : undefined) ||
                      (cleanAttr.includes('balashi') ? touristPlaces.find((p) => p.id === 'balashi-ghat-gaibandha') : undefined) ||
                      (cleanAttr.includes('bardhankuthi') ? touristPlaces.find((p) => p.id === 'bardhankuthi-historic-ruins') : undefined) ||
                      (cleanAttr.includes('mirerbag') ? touristPlaces.find((p) => p.id === 'mirerbag-mosque-gaibandha') : undefined) ||
                      (cleanAttr.includes('ghagot') ? touristPlaces.find((p) => p.id === 'ghagot-riverfront-gaibandha') : undefined) ||
                      (cleanAttr.includes('shashi lodge') ? touristPlaces.find((p) => p.id === 'shashi-lodge-mymensingh') : undefined) ||
                      (cleanAttr.includes('zainul abedin') ? touristPlaces.find((p) => p.id === 'zainul-abedin-sangrahashala') : undefined) ||
                      (cleanAttr.includes('muktagacha') ? touristPlaces.find((p) => p.id === 'muktagacha-zamindar-bari') : undefined) ||
                      (cleanAttr.includes('brahmaputra') && (cleanAttr.includes('embankment') || cleanAttr.includes('riverfront') || cleanAttr.includes('park')) ? touristPlaces.find((p) => p.id === 'brahmaputra-riverfront-mymensingh') : undefined) ||
                      (cleanAttr.includes('alexander') ? touristPlaces.find((p) => p.id === 'alexander-castle-mymensingh') : undefined) ||
                      (cleanAttr.includes('bau botanical') ? touristPlaces.find((p) => p.id === 'bau-botanical-garden') : undefined) ||
                      (cleanAttr.includes('birishiri') || cleanAttr.includes('white clay') ? touristPlaces.find((p) => p.id === 'birishiri-white-clay-lake') : undefined) ||
                      (cleanAttr.includes('someshwari') ? touristPlaces.find((p) => p.id === 'someshwari-river') : undefined) ||
                      (cleanAttr.includes('ranikhong') ? touristPlaces.find((p) => p.id === 'ranikhong-church') : undefined) ||
                      (cleanAttr.includes('susang durgapur') || cleanAttr.includes('tribal cultural') ? touristPlaces.find((p) => p.id === 'susang-durgapur-rajbari-heritage') : undefined) ||
                      (cleanAttr.includes('dingapota') ? touristPlaces.find((p) => p.id === 'dingapota-haor-netrokona') : undefined) ||
                      (cleanAttr.includes('shah sultan') || cleanAttr.includes('madanpur') ? touristPlaces.find((p) => p.id === 'hazrat-shah-sultan-rumi-shrine') : undefined) ||
                      (cleanAttr.includes('gajni') || cleanAttr.includes('ghazni') ? touristPlaces.find((p) => p.id === 'gajni-abakash-leisure-center') : undefined) ||
                      (cleanAttr.includes('madhutila') ? touristPlaces.find((p) => p.id === 'madhutila-eco-park') : undefined) ||
                      (cleanAttr.includes('maisaheba') ? touristPlaces.find((p) => p.id === 'maisaheba-mosque-sherpur') : undefined) ||
                      (cleanAttr.includes('garo') && (cleanAttr.includes('trail') || cleanAttr.includes('kantha') || cleanAttr.includes('trek')) ? touristPlaces.find((p) => p.id === 'garo-hills-nakshi-kantha-sherpur') : undefined) ||
                      (cleanAttr.includes('shah jamal') ? touristPlaces.find((p) => p.id === 'hazrat-shah-jamal-shrine') : undefined) ||
                      (cleanAttr.includes('lauchapra') ? touristPlaces.find((p) => p.id === 'lauchapra-picnic-spot-jamalpur') : undefined) ||
                      (cleanAttr.includes('bahadurabad') || (cleanAttr.includes('jamuna') && (cleanAttr.includes('char') || cleanAttr.includes('riverfront'))) ? touristPlaces.find((p) => p.id === 'jamuna-river-charlands-jamalpur') : undefined) ||
                      (cleanAttr.includes('gandhi ashram') || cleanAttr.includes('jigatola') ? touristPlaces.find((p) => p.id === 'gandhi-ashram-jigatola-jamalpur') : undefined) ||
                      (cleanAttr.includes('jamuna fertilizer') || cleanAttr.includes('tarakandi') ? touristPlaces.find((p) => p.id === 'jamuna-fertilizer-eco-park') : undefined);
                    return (
                      <div
                        key={idx}
                        className="flex items-start justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition-colors"
                      >
                        <div className="pr-2">
                          <span className="text-sm font-semibold text-slate-800 block">
                            {attraction}
                          </span>
                          <span className="text-xs text-slate-500 block mt-0.5">
                            {district.name} District, {district.divisionName}
                          </span>
                        </div>
                        {matchingPlace ? (
                          <Link
                            to={`/places/${matchingPlace.id}`}
                            className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 hover:underline shrink-0 pt-1"
                          >
                            Guide &rarr;
                          </Link>
                        ) : (
                          <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-medium shrink-0 pt-0.5 flex items-center space-x-1">
                            <Clock className="w-3 h-3 mr-0.5" />
                            <span>Detailed info soon</span>
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (Right 1 col) */}
          <div className="space-y-6">
            {/* Quick Facts Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
              <h3 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>District Summary</span>
              </h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <dt className="text-slate-500 font-medium">District Name:</dt>
                  <dd className="font-semibold text-slate-900">{district.name}</dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <dt className="text-slate-500 font-medium">Division:</dt>
                  <dd>
                    <Link
                      to={`/districts?division=${district.divisionId}`}
                      className="font-semibold text-emerald-700 hover:underline"
                    >
                      {district.divisionName}
                    </Link>
                  </dd>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <dt className="text-slate-500 font-medium">Key Highlights:</dt>
                  <dd className="font-semibold text-slate-900">{district.majorAttractions.length} listed</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt className="text-slate-500 font-medium">Detailed Guides:</dt>
                  <dd className="font-semibold text-emerald-700">{places.length} active</dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to="/districts"
                  className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to All 64 Districts</span>
                </Link>
              </div>
            </div>

            {/* Division Exploration */}
            {division && (
              <div className="bg-emerald-900 text-white rounded-2xl p-6 shadow-sm border border-emerald-800">
                <span className="text-emerald-300 text-xs font-bold uppercase tracking-wider block mb-1">
                  Administrative Division
                </span>
                <h4 className="text-lg font-bold mb-2">
                  {division.name} Division
                </h4>
                <p className="text-xs text-emerald-100/80 leading-relaxed mb-4">
                  {division.description}
                </p>
                <Link
                  to={`/districts?division=${division.id}`}
                  className="w-full inline-flex items-center justify-center space-x-1.5 py-2 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <span>Explore All {division.districtsCount} Districts in {division.name}</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
