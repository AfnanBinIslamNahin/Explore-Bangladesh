import { TouristPlace } from '../types';
import { PHOTO_COMING_SOON } from './placeholder';

export const barishalPlaces: TouristPlace[] = [
  // ==================== BARISHAL DISTRICT ====================
  {
    id: 'oxford-mission-church',
    name: 'Oxford Mission Epiphany Church',
    bengaliName: 'অক্সফোর্ড মিশন এপিফানি চার্চ',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barishal',
    district: 'Barishal',
    upazila: 'Barishal Sadar',
    category: 'Historical Places',
    categoryId: 'historical-places',
    shortDescription: 'A magnificent red-brick Greek-Byzantine cathedral built in 1903, regarded as one of the largest and most architecturally striking churches in South Asia.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Oxford_Mission_Church_Barisal.jpg',
    galleryImages: [
      'https://upload.wikimedia.org/wikipedia/commons/0/02/Oxford_Mission_Church_Barisal.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Oxford_Mission_Church%2C_Barisal.jpg/1280px-Oxford_Mission_Church%2C_Barisal.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9A%E0%A7%87%E0%A6%B0_%E0%A6%9B%E0%A6%AC%E0%A6%BF.jpg/1280px-%E0%A6%9A%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%9A%E0%A7%87%E0%A6%B0_%E0%A6%9B%E0%A6%AC%E0%A6%BF.jpg'
    ],
    location: 'Bogura Road, Barishal Sadar, Barishal',
    googleMapsUrl: 'https://maps.google.com/?q=Oxford+Mission+Epiphany+Church+Barisal+Bangladesh',
    about: {
      overview: 'The Church of the Epiphany, commonly known as Oxford Mission Church, is an architectural marvel established in 1903 by the Oxford Brotherhood. Built over a 35-acre serene compound surrounded by palm trees, flower gardens, and a large pond, it is renowned for its Greek architectural layout and single-floor sanctuary that can accommodate hundreds of worshippers without internal pillars.',
      significance: 'Designed by Sister Edith and engineer Frederick Douglas, the red-brick cathedral incorporates deep verandas and high arched windows engineered to resist tropical cyclones, earth tremors, and the humid southern delta climate.',
      experience: 'Visitors can admire the towering bell tower, the graceful marble font, the peaceful reflecting pond, and the tranquil spiritual atmosphere of the mission gardens.'
    },
    howToGo: {
      fromDhaka: 'By Launch: Overnight passenger launch from Sadarghat to Barishal Launch Ghat (approx. 7-8 hours). By Road: AC bus from Sayedabad via Padma Bridge to Nathullabad Bus Terminal (approx. 3.5 to 4 hours). From either terminal, take an auto-rickshaw or battery rickshaw to Bogura Road (10-15 minutes).',
      fromDistrictHq: 'Located right within Barishal City on Bogura Road; easily accessible by rickshaw or easy-bike (5-10 minutes from city center).',
      transportOptions: ['Overnight River Launch from Sadarghat', 'AC/Non-AC Highway Bus via Padma Bridge', 'Local Battery Rickshaw / Easy-bike'],
      localTransport: 'Shared and reserved battery easy-bikes and pedal rickshaws operate continuously along Bogura Road.'
    },
    bestTimeToVisit: {
      season: 'October to March (Autumn and Winter)',
      description: 'Pleasant weather and clear skies make touring the cathedral and its gardens comfortable.'
    },
    entryFees: {
      feeInfo: 'Free admission for visitors and worshippers.',
      details: 'Visitors should dress modestly and ask permission from church caretakers before taking photographs inside the sanctuary.'
    },
    travelTips: [
      'Maintain solemn silence inside the main worship hall.',
      'Check visiting hours with the caretaker, as gates are closed during quiet prayer times.',
      'Visit in late afternoon to witness warm sunset light illuminating the red brick facade.'
    ],
    nearbyPlaceIds: ['durga-sagar-dighi', 'guthiya-mosque', 'kirtonkhola-riverfront'],
    isPopular: true
  },
  {
    id: 'durga-sagar-dighi',
    name: 'Durga Sagar Dighi',
    bengaliName: 'দুর্গাসাগর দিঘি',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barishal',
    district: 'Barishal',
    upazila: 'Babuganj',
    category: 'Lakes & Wetlands',
    categoryId: 'lakes-wetlands',
    shortDescription: 'The largest man-made lake in southern Bangladesh, excavated in 1780 CE by Queen Durgabati with an emerald forested island in its center.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Durga_Sagor_Dighi_at_Madhabpasha%2C_Barisal.jpg/1280px-Durga_Sagor_Dighi_at_Madhabpasha%2C_Barisal.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Durga_Sagor_Dighi_at_Madhabpasha%2C_Barisal.jpg/1280px-Durga_Sagor_Dighi_at_Madhabpasha%2C_Barisal.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%97%E0%A6%B0_%E0%A6%A6%E0%A6%BF%E0%A6%98%E0%A6%BF....jpg/1280px-%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A6%BE%E0%A6%B8%E0%A6%BE%E0%A6%97%E0%A6%B0_%E0%A6%A6%E0%A6%BF%E0%A6%98%E0%A6%BF....jpg'
    ],
    location: 'Madhabpasha, Babuganj Upazila, approx. 11 km northwest of Barishal City',
    googleMapsUrl: 'https://maps.google.com/?q=Durga+Sagar+Dighi+Barishal+Bangladesh',
    about: {
      overview: 'Durga Sagar Dighi, also known as Madhabpasha Dighi, spans across 45 acres of sparkling fresh water and green embankment forest. In 1780 CE, Rani Durgabati, mother of Raja Joynarayan of Chandradwip kingdom, had this giant lake excavated to relieve chronic drinking water shortages for local villagers.',
      significance: 'In the middle of the lake lies a picturesque artificial island covered in bamboo groves, coconut palms, and mahogany trees, which serves as a thriving sanctuary for hundreds of migratory birds each winter.',
      experience: 'A peaceful 1.6-kilometer walking track circles the entire dighi, shaded by fruit and timber trees with gazebos and ghats overlooking the calm waters.'
    },
    howToGo: {
      fromDhaka: 'Take an AC bus or river launch to Barishal. From Nathullabad Bus Stand in Barishal, take a shared tempo, mahindra, or battery auto-rickshaw towards Banaripara/Babuganj and get off at Madhabpasha Durga Sagar gate (approx. 25-30 minutes).',
      fromDistrictHq: 'Located 11 km northwest of Barishal Sadar; direct auto-rickshaws and CNGs take about 25 minutes along the Barishal-Banaripara road.',
      transportOptions: ['Highway Bus / Launch to Barishal', 'CNG Auto-rickshaw from Barishal city', 'Local Mahindra / Tempo'],
      localTransport: 'Auto-rickshaws and battery easy-bikes wait outside the main entry gate.'
    },
    bestTimeToVisit: {
      season: 'November to February (Winter months)',
      description: 'Ideal season to observe thousands of migratory wild ducks, herons, and teal resting on the central island and gliding across the morning mist.'
    },
    entryFees: {
      feeInfo: 'Nominal entrance fee (BDT 20 to 30 per adult).',
      details: 'Managed by Barishal District Administration; boating facilities are occasionally available.'
    },
    travelTips: [
      'Bring binoculars if you enjoy bird watching on the central island.',
      'Wear comfortable walking shoes for the scenic 1.6 km circuit walk around the embankment.',
      'Combine your trip with Guthiya Mosque, which is located just 4 km further west on the same route.'
    ],
    nearbyPlaceIds: ['guthiya-mosque', 'oxford-mission-church'],
    isPopular: true
  },
  {
    id: 'jibanananda-das-memorial',
    name: 'Jibanananda Das Memorial',
    bengaliName: 'জীবনানন্দ দাশ স্মৃতি পাঠাগার ও জাদুঘর',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barishal',
    district: 'Barishal',
    upazila: 'Barishal Sadar',
    category: 'Historical Places',
    categoryId: 'historical-places',
    shortDescription: 'Dedicated to Bengal’s foremost modernist poet of Bengal’s idyllic beauty ("Rupashi Bangla"), preserving his legacy, books, and birthplace memories.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Jibanananda_Das_%281899%E2%80%931954%29.jpg',
    galleryImages: [
      'https://upload.wikimedia.org/wikipedia/commons/d/da/Jibanananda_Das_%281899%E2%80%931954%29.jpg'
    ],
    location: 'Bogura Road, Barishal Sadar, Barishal',
    googleMapsUrl: 'https://maps.google.com/?q=Jibanananda+Das+Memorial+Barishal+Bangladesh',
    about: {
      overview: 'Located near the historic homestead of Bengal’s beloved poet Jibanananda Das (1899–1954) on Bogura Road, this memorial library and cultural hall honors the mastermind behind classic works like "Banalata Sen", "Dhusar Pandulipi", and "Rupashi Bangla".',
      significance: 'Jibanananda spent his formative childhood and early teaching years in Barishal along the banks of Kirtonkhola and Dhanshiri, which profoundly shaped the atmospheric natural imagery of his verses.',
      experience: 'Literary enthusiasts can browse through collections of his poems, biographical photographs, handwritten letters, and learn about the cultural revival of Barishal.'
    },
    howToGo: {
      fromDhaka: 'Reach Barishal by launch or bus, then take a local rickshaw to Bogura Road in Barishal Sadar.',
      fromDistrictHq: 'Centrally situated within Barishal City; 5 to 10 minutes by rickshaw from Bibir Pukur or Sadar Hospital road.',
      transportOptions: ['Rickshaw', 'Battery Easy-bike', 'Walking from city center'],
      localTransport: 'City center rickshaws are available everywhere.'
    },
    bestTimeToVisit: {
      season: 'October to March',
      description: 'Ideal during pleasant weather, especially around February during poet birth anniversary commemorations.'
    },
    entryFees: {
      feeInfo: 'Free public entry.',
      details: 'Subject to official library open hours (typically 10:00 AM to 5:00 PM on weekdays).'
    },
    travelTips: [
      'Read a few verses of "Banalata Sen" or "Rupashi Bangla" before visiting to appreciate the landscape.',
      'Check with local cultural organizations for annual poetry gatherings.'
    ],
    nearbyPlaceIds: ['oxford-mission-church', 'kirtonkhola-riverfront'],
    isPopular: false
  },
  {
    id: 'kirtonkhola-riverfront',
    name: 'Kirtonkhola Riverfront',
    bengaliName: 'কীর্তনখোলা নদী তীর ও রিভারফ্রন্ট',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barishal',
    district: 'Barishal',
    upazila: 'Barishal Sadar',
    category: 'Rivers & Waterfalls',
    categoryId: 'rivers-waterfalls',
    shortDescription: 'The romantic lifeline river of Barishal, bustling with traditional fishing trawlers, majestic triple-deck passenger launches, and serene evening breezes.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Kirtankhola_River%2C_Barisal.jpg/1280px-Kirtankhola_River%2C_Barisal.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Kirtankhola_River%2C_Barisal.jpg/1280px-Kirtankhola_River%2C_Barisal.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/Barisal_River_Port_and_Kirtankhola_river%2C_Bangladesh.jpg/1280px-Barisal_River_Port_and_Kirtankhola_river%2C_Bangladesh.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Kirtonkhola_River_Barisal_11.jpg/1280px-Kirtonkhola_River_Barisal_11.jpg'
    ],
    location: 'Band Road & River Port Promenade, Barishal Sadar, Barishal',
    googleMapsUrl: 'https://maps.google.com/?q=Barisal+River+Port+Kirtankhola+River+Bangladesh',
    about: {
      overview: 'Kirtonkhola is an iconic distributary river flowing past Barishal City on its journey toward the Meghna and the Bay of Bengal. The riverfront promenade along Band Road and Muktijoddha Park is the favorite evening gathering point for city residents and travelers.',
      significance: 'As the principal artery of the southern waterway transit system, Kirtonkhola hosts one of the busiest and most vibrant river ports in Bangladesh, with grand multi-deck passenger vessels docked alongside traditional wooden cargo boats.',
      experience: 'Take an open wooden country boat ride across the river at sunset, enjoy fresh river breeze at Muktijoddha Park walkway, and taste authentic hot street snacks from local vendors.'
    },
    howToGo: {
      fromDhaka: 'Board a river passenger launch from Sadarghat directly to Barishal Launch Terminal on the Kirtonkhola riverbank.',
      fromDistrictHq: 'Right at the eastern fringe of Barishal city center; within walking distance or 5 minutes by rickshaw from Sadar Road.',
      transportOptions: ['Passenger River Launch', 'Rickshaw from Barishal city center', 'Walking along Band Road'],
      localTransport: 'Small wooden dinghy boats provide scenic crossing rides between ghats.'
    },
    bestTimeToVisit: {
      season: 'October to March (Late afternoon / Sunset)',
      description: 'Golden hour sunsets over the vast river waters provide breathtaking photo opportunities.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Wooden boat crossing rides cost approximately BDT 10 to 30 per person.'
    },
    travelTips: [
      'Visit between 4:30 PM and 6:30 PM for the sunset over the launch harbor.',
      'Try fresh roasted groundnuts and street tea on the promenade.',
      'Exercise caution near wet concrete ghat steps during high tide.'
    ],
    nearbyPlaceIds: ['oxford-mission-church', 'durga-sagar-dighi'],
    isPopular: true
  },
  {
    id: 'guthiya-mosque',
    name: 'Guthiya Mosque (Baitul Aman Complex)',
    bengaliName: 'গুঠিয়া মসজিদ (বাইতুল আমান জামে মসজিদ)',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barishal',
    district: 'Barishal',
    upazila: 'Wazirpur',
    category: 'Religious Places',
    categoryId: 'religious-places',
    shortDescription: 'One of the most breathtaking modern Islamic architectural wonders in Bangladesh, boasting a 193-foot minaret, 9 domes, and an expansive decorative lake.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1280px-Guthiya_mosque_Ri_palash_03.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6f/Guthiya_mosque_Ri_palash_03.jpg/1280px-Guthiya_mosque_Ri_palash_03.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Guthia_Mosque_Barisal.jpg/1280px-Guthia_Mosque_Barisal.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%A4%E0%A7%81%E0%A6%B2_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%A8_%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6_002.jpg/1280px-%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%A4%E0%A7%81%E0%A6%B2_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%A8_%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6_002.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/43/%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%A4%E0%A7%81%E0%A6%B2_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%A8_%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6_003.jpg/1280px-%E0%A6%AC%E0%A6%BE%E0%A6%87%E0%A6%A4%E0%A7%81%E0%A6%B2_%E0%A6%86%E0%A6%AE%E0%A6%BE%E0%A6%A8_%E0%A6%9C%E0%A6%BE%E0%A6%AE%E0%A7%87_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6_003.jpg'
    ],
    location: 'Changashia village, Guthiya Union, Wazirpur Upazila, approx. 16 km from Barishal City',
    googleMapsUrl: 'https://maps.google.com/?q=Guthia+Mosque+Wazirpur+Barishal+Bangladesh',
    about: {
      overview: 'Baitul Aman Jame Masjid Complex, universally celebrated as Guthiya Mosque, was constructed in 2003 on 14 acres of manicured land. It features a dazzling central prayer hall accommodating 1,500 worshippers inside and 5,000 on the outer marble terrace.',
      significance: 'The mosque boasts a soaring 193-foot (58-meter) minaret, the tallest in southern Bangladesh. The architecture combines elements of Middle Eastern and Saracenic design with hand-crafted calligraphic inscriptions, Italian marble floorings, and a grand turquoise-lit pond reflecting its illuminated domes at night.',
      experience: 'Strolling through the serene gardens, admiring the Arabic calligraphy on the domes, watching colorful fish in the surrounding lake, and witnessing the magical evening illumination.'
    },
    howToGo: {
      fromDhaka: 'Travel to Barishal City by bus or launch. From Nathullabad bus terminal, board a bus or shared Mahindra heading towards Swarupkathi/Banaripara; alight directly in front of Guthiya Mosque gate (approx. 35 minutes).',
      fromDistrictHq: 'Located about 16 km west of Barishal City center; reserve a CNG or take a shared tempo along the Barishal-Swarupkathi road.',
      transportOptions: ['Shared Mahindra / Tempo from Barishal', 'Reserved CNG Auto-rickshaw', 'Direct Highway Bus to Wazirpur'],
      localTransport: 'Easy-bikes and CNGs are readily available along the highway.'
    },
    bestTimeToVisit: {
      season: 'All year round (especially late afternoon into nightfall)',
      description: 'Late afternoon allows viewing the white and pink marble architecture in sunlight, followed by the enchanting evening multi-color LED illumination after Maghrib prayer.'
    },
    entryFees: {
      feeInfo: 'Free admission for all worshippers and visitors.',
      details: 'Modest attire is required; separate ablution facilities and prayer spaces exist.'
    },
    travelTips: [
      'Visitors must take off shoes before stepping onto the marble plaza.',
      'Photography is permitted in the outer garden and pond areas; be respectful during prayer times.',
      'Stay until dusk to witness the spectacular lake reflection when lights turn on.'
    ],
    nearbyPlaceIds: ['durga-sagar-dighi', 'bhimruli-floating-market'],
    isPopular: true
  },

  // ==================== BHOLA DISTRICT ====================
  {
    id: 'char-kukri-mukri',
    name: 'Char Kukri Mukri Wildlife Sanctuary',
    bengaliName: 'চর কুকরি মুকরি বন্যপ্রাণী অভয়ারণ্য',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'bhola',
    district: 'Bhola',
    upazila: 'Char Fasson',
    category: 'Forests & Wildlife',
    categoryId: 'forests-wildlife',
    shortDescription: 'An offshore wildlife sanctuary where the Meghna River meets the Bay of Bengal, known for mangrove wilderness, spotted deer, and winter migratory birds.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/A_boat_at_Char_Kukri-Mukri_Wildlife_Sanctuary.jpg/1280px-A_boat_at_Char_Kukri-Mukri_Wildlife_Sanctuary.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/A_boat_at_Char_Kukri-Mukri_Wildlife_Sanctuary.jpg/1280px-A_boat_at_Char_Kukri-Mukri_Wildlife_Sanctuary.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f8/Char_Kukri-Mukri_Wildlife_Sanctuary.jpg/1280px-Char_Kukri-Mukri_Wildlife_Sanctuary.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Boats_at_the_Char_Kukri-Mukri_Wildlife_Sanctuary.jpg/1280px-Boats_at_the_Char_Kukri-Mukri_Wildlife_Sanctuary.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/28/Beach_at_Char_Kukri-Mukri_Wildlife_Sanctuary5.jpg/1280px-Beach_at_Char_Kukri-Mukri_Wildlife_Sanctuary5.jpg'
    ],
    location: 'Southernmost tip of Char Fasson Upazila, Bhola District',
    googleMapsUrl: 'https://maps.google.com/?q=Char+Kukri+Mukri+Bhola+Bangladesh',
    about: {
      overview: 'Char Kukri Mukri is an isolated coastal island sanctuary established in 1989 across approximately 40 square kilometers of mangrove forests and tidal mudflats. It is separated from the mainland by estuarine channels and offers an untouched wilderness experience.',
      significance: 'It is one of the premier breeding havens for spotted deer (Chital), fishing cats, wild boars, otters, and countless waterfowls. In winter, thousands of migratory birds fly from Siberia and Central Asia to feed on its nutrient-rich tidal shallows.',
      experience: 'Cruising through winding mangrove creeks in wooden country boats, catching glimpses of grazing spotted deer among Kewra and Bain trees, and camping under coastal starlight.'
    },
    howToGo: {
      fromDhaka: 'Board a passenger launch from Sadarghat (Dhaka) bound for Betua or Ghosherhat ghat in Char Fasson, Bhola (overnight, approx. 10-12 hours). From Char Fasson town, take an auto-rickshaw or motorbike to Kachhapia Ghat (approx. 45 minutes). From Kachhapia Ghat, take a mechanized trawler or speed boat across the channel to Char Kukri Mukri (approx. 1 to 1.5 hours).',
      fromDistrictHq: 'From Bhola Sadar, take a highway bus southward to Char Fasson (approx. 70 km, 2.5 hours), then proceed to Kachhapia ghat.',
      transportOptions: ['Overnight River Launch from Dhaka', 'Local Bus / Trawler', 'Speedboat from Kachhapia Ghat'],
      localTransport: 'Motorbikes and walking along earthen bunds are the primary travel modes on the island.'
    },
    bestTimeToVisit: {
      season: 'November to February (Winter months)',
      description: 'The weather is calm, sea channels are smooth, and migratory bird populations peak during winter.'
    },
    entryFees: {
      feeInfo: 'Free sanctuary access; boat crossing fees apply.',
      details: 'Trawler fares from Kachhapia ghat range between BDT 50 and 100 per person; reserved engine boats cost BDT 2,000 to 4,000.'
    },
    travelTips: [
      'Avoid traveling during monsoon months (June-September) due to rough estuarine waves and tidal surges.',
      'Carry power banks, torchlights, and personal drinking water as power is solar-dependent on the char.',
      'A local Forest Department rest house and eco-cottages exist for overnight stays; book in advance.'
    ],
    nearbyPlaceIds: ['jacob-tower', 'tarua-beach'],
    isPopular: true
  },
  {
    id: 'jacob-tower',
    name: 'Jacob Tower (Char Fasson)',
    bengaliName: 'জ্যাকব টাওয়ার (চরফ্যাশন)',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'bhola',
    district: 'Bhola',
    upazila: 'Char Fasson',
    category: 'Historical Places',
    categoryId: 'historical-places',
    shortDescription: 'A modern 225-foot observation tower in Char Fasson, offering panoramic 360-degree views of offshore islands and the Bay of Bengal horizon.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Jakob_Tower.jpg/1280px-Jakob_Tower.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Jakob_Tower.jpg/1280px-Jakob_Tower.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/e/ef/Fashion_Square_view_from_Jakob_Tower.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Jakob_Watch_Tower.jpg/1280px-Jakob_Watch_Tower.jpg'
    ],
    location: 'Fashion Square, Char Fasson Municipality, Bhola',
    googleMapsUrl: 'https://maps.google.com/?q=Jakob+Tower+Char+Fasson+Bhola+Bangladesh',
    about: {
      overview: 'Rising 225 feet (68.5 meters) above the coastal terrain of Char Fasson, Jacob Tower is celebrated as one of the tallest modern watchtowers in South Asia. Inaugurated in 2018, the tower features an ultra-modern 16-story steel structure equipped with high-speed panoramic glass capsules and observation binoculars.',
      significance: 'Engineered to withstand earthquakes and high-category cyclonic winds, the 16th floor observation deck allows visitors to view an expansive 100-square-kilometer radius encompassing green farmland, the Char Kukri Mukri forests, and passing ships.',
      experience: 'Riding the glass elevator to the 16th floor, viewing the sprawling Fashion Square park below through high-powered telescopes, and photographing sunset over the island.'
    },
    howToGo: {
      fromDhaka: 'Overnight passenger launch from Sadarghat directly to Betua/Char Fasson Ghat (10 hours). The tower is just 10 minutes by auto-rickshaw from the launch terminal.',
      fromDistrictHq: 'From Bhola Sadar, board a direct bus or microbus south to Char Fasson town center (approx. 2 hours).',
      transportOptions: ['Direct Launch from Dhaka to Betua', 'Bus from Bhola Sadar', 'Local Easy-bike'],
      localTransport: 'Located right beside Char Fasson Fashion Square; easy-bikes are available everywhere.'
    },
    bestTimeToVisit: {
      season: 'October to March (Afternoon & Sunset)',
      description: 'Clear atmospheric visibility provides views reaching far into the Bay of Bengal coastline.'
    },
    entryFees: {
      feeInfo: 'Entry ticket BDT 100 per person.',
      details: 'Includes the high-speed elevator ride to the top observation platform.'
    },
    travelTips: [
      'Visit on weekdays to avoid long queues for the elevator on public holidays.',
      'Spend time exploring the adjacent Fashion Square and Sheikh Russel amusement park.'
    ],
    nearbyPlaceIds: ['char-kukri-mukri', 'tarua-beach'],
    isPopular: true
  },
  {
    id: 'tarua-beach',
    name: 'Tarua Beach',
    bengaliName: 'তরুয়া সমুদ্র সৈকত',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'bhola',
    district: 'Bhola',
    upazila: 'Char Fasson',
    category: 'Sea Beaches',
    categoryId: 'sea-beaches',
    shortDescription: 'A tranquil, virgin sea beach and coastal island in southern Bhola where dense tamarisk (Jhau) forests meet silvery Bay of Bengal sands.',
    coverImage: PHOTO_COMING_SOON,
    galleryImages: [PHOTO_COMING_SOON],
    location: 'Tarua Island, Char Fasson Upazila, southern Bhola',
    googleMapsUrl: 'https://maps.google.com/?q=Tarua+Beach+Char+Fasson+Bhola+Bangladesh',
    about: {
      overview: 'Tarua Beach is a pristine, relatively secluded coastal beach situated on the southern fringe of Char Fasson. Unlike commercialized beaches, Tarua is fringed by an emerald green canopy of pine and tamarisk trees where red sea crabs create intricate natural patterns along the shoreline.',
      significance: 'Tarua is part of the dynamic estuarine ecosystem of Bhola, serving as an important natural barrier and stopover for migratory coastal shorebirds.',
      experience: 'Walking barefoot on soft untouched sands, swimming in calm coastal waters, listening to the ocean breeze through pine needles, and watching red crabs scurry away at low tide.'
    },
    howToGo: {
      fromDhaka: 'Take an overnight launch from Dhaka to Betua Ghat, Char Fasson. From Char Fasson town, hire a motorbike or auto-rickshaw to Kachhapia or Samraj Ghat, then board an engine trawler to Tarua Island (approx. 1 to 1.5 hours).',
      fromDistrictHq: 'Travel from Bhola Sadar to Char Fasson by bus (2.5 hours), then continue south to the boat ghat.',
      transportOptions: ['River Launch to Char Fasson', 'Local Motorbike / CNG', 'Engine Trawler across channel'],
      localTransport: 'Walking is the only way to explore the beach once you land on the island.'
    },
    bestTimeToVisit: {
      season: 'November to February (Winter months)',
      description: 'Calm water conditions and gentle sea waves make winter the safest and most enjoyable time to visit.'
    },
    entryFees: {
      feeInfo: 'Free public beach access.',
      details: 'Boat rental costs vary depending on group size (shared boat BDT 50-100; private boat BDT 2,500-3,500).'
    },
    travelTips: [
      'Pack all necessary food, drinking water, and snacks before departing Char Fasson as there are no commercial shops on the beach.',
      'Check tide tables before going into the water.',
      'Always return to the mainland before nightfall unless camping in an organized group.'
    ],
    nearbyPlaceIds: ['char-kukri-mukri', 'jacob-tower'],
    isPopular: false
  },
  {
    id: 'monpura-island',
    name: 'Monpura Island',
    bengaliName: 'মনপুরা দ্বীপ',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'bhola',
    district: 'Bhola',
    upazila: 'Monpura',
    category: 'Islands',
    categoryId: 'islands',
    shortDescription: 'A five-hundred-year-old legendary offshore island in the Meghna estuary, famed for deer reserves, vast mangrove forests, and traditional buffalo curd.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/River_Erosion_Padma_River_Bangladesh_Monpura_Dec_2009.jpg',
    galleryImages: [
      'https://upload.wikimedia.org/wikipedia/commons/e/e9/River_Erosion_Padma_River_Bangladesh_Monpura_Dec_2009.jpg'
    ],
    location: 'Monpura Upazila, offshore in the northern Bay of Bengal, Bhola District',
    googleMapsUrl: 'https://maps.google.com/?q=Monpura+Island+Bhola+Bangladesh',
    about: {
      overview: 'Monpura is an isolated paradise of over 370 square kilometers nestled amidst the vast Meghna River and the Bay of Bengal. Established centuries ago, it was once a temporary hideout for Portuguese buccaneers and is now celebrated for its idyllic rural tranquility, mangrove canopy, and friendly coastal inhabitants.',
      significance: 'The island is famous for indigenous deer breeding centers, vast tidal water bodies, fish farms, and its signature culinary heritage—thick buffalo milk curd (doi) served in traditional clay pots.',
      experience: 'Cruising through the mangrove trails of Choakhabir Char, visiting the deer rehabilitation center, biking along endless embankment roads, and savoring fresh Hilsa fish and sweet buffalo curd.'
    },
    howToGo: {
      fromDhaka: 'Direct overnight passenger launches depart Dhaka Sadarghat daily bound directly for Monpura Island (Ramnewaz Ghat) taking about 12-14 hours.',
      fromDistrictHq: 'From Bhola Sadar, travel to Tajumuddin or Char Fasson ghat and board a sea truck or mechanized trawler to Monpura (approx. 2 hours on water).',
      transportOptions: ['Direct Launch from Sadarghat Dhaka (MV Farhan / MV Tashrif)', 'Sea Truck from Tajumuddin Ghat', 'Motorbike on Island'],
      localTransport: 'Motorbikes and electric easy-bikes are the chief means of transport on the island.'
    },
    bestTimeToVisit: {
      season: 'November to March (Winter months)',
      description: 'Gentle river conditions, pleasant afternoon breezes, and clear blue skies provide the ultimate peaceful retreat.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Accommodations are available at local Zila Parishad dak bungalow and private guest houses.'
    },
    travelTips: [
      'Taste authentic buffalo milk curd (Moish-er Dahi) with local liquid date molasses.',
      'Book your launch cabin at least 2-3 days in advance during weekend winter getaways.',
      'Rent a motorbike with driver for a day to tour all parts of the island from north to south.'
    ],
    nearbyPlaceIds: ['char-kukri-mukri', 'meghna-river-banks'],
    isPopular: true
  },
  {
    id: 'meghna-river-banks',
    name: 'Meghna River Banks (Bhola)',
    bengaliName: 'মেঘনা নদী তীর (ভোলা)',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'bhola',
    district: 'Bhola',
    upazila: 'Bhola Sadar',
    category: 'Rivers & Waterfalls',
    categoryId: 'rivers-waterfalls',
    shortDescription: 'The majestic riverfront along the widest river in Bangladesh, offering dramatic views of maritime fishing boats, fresh Hilsa landings, and sunsets.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Beauty_of_meghna_in_bhola.jpg/1280px-Beauty_of_meghna_in_bhola.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Beauty_of_meghna_in_bhola.jpg/1280px-Beauty_of_meghna_in_bhola.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Meghna_River_view_from_ferry%2C_Bhola_District%2C_Bangladesh.jpg/1280px-Meghna_River_view_from_ferry%2C_Bhola_District%2C_Bangladesh.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Fishing_boat_at_Meghna_river_%282%29.jpg/1280px-Fishing_boat_at_Meghna_river_%282%29.jpg'
    ],
    location: 'Ilisha Ghat & Tulatoli, Bhola Sadar, Bhola',
    googleMapsUrl: 'https://maps.google.com/?q=Ilisha+Ghat+Bhola+Bangladesh',
    about: {
      overview: 'The eastern shoreline of Bhola district is kissed by the mighty Meghna River, one of the three principal rivers shaping the Bengal Delta. At Ilisha Ghat and Tulatoli embankment, the river expands like an inland sea with horizons stretching into the sky.',
      significance: 'This river stretch is world-famous as the heart of Bangladesh’s silver Hilsa (Ilish) fishery. Thousands of traditional wooden fishing boats with colorful sails bring fresh catches ashore daily.',
      experience: 'Watching the morning Hilsa fish auctions at riverside ghats, feeling the brisk maritime wind, and photographing sunrises over endless waters.'
    },
    howToGo: {
      fromDhaka: 'Take a launch from Sadarghat to Ilisha Ghat in Bhola (takes about 5-6 hours via daytime or overnight service).',
      fromDistrictHq: 'Ilisha Ghat is located about 12 km northeast of Bhola Sadar town, easily reached by easy-bike or CNG in 20 minutes.',
      transportOptions: ['Direct Launch from Dhaka to Ilisha', 'Easy-bike from Bhola Town', 'Local CNG'],
      localTransport: 'Rickshaws and battery three-wheelers ply continuously along the embankment.'
    },
    bestTimeToVisit: {
      season: 'September to March',
      description: 'Autumn brings prime Hilsa season while winter offers calm, sparkling waters and cool breezes.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Fresh fish can be purchased directly from fishermen at local market rates.'
    },
    travelTips: [
      'Dine at local riverside restaurants to enjoy freshly fried Hilsa with steamed rice and green chilies.',
      'Stay behind safety barriers along embankment spots where currents can be swift.'
    ],
    nearbyPlaceIds: ['monpura-island', 'jacob-tower'],
    isPopular: false
  },

  // ==================== PATUAKHALI DISTRICT ====================
  {
    id: 'fatrar-chor',
    name: 'Fatrar Chor (Mangrove Forest)',
    bengaliName: 'ফাতরার চর (ম্যানগ্রোভ বন)',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'patuakhali',
    district: 'Patuakhali',
    upazila: 'Kalapara',
    category: 'Forests & Wildlife',
    categoryId: 'forests-wildlife',
    shortDescription: 'The eastern extension of the Sundarbans mangrove forest, reachable by engine boat from Kuakata, harboring wild birds, deer, and coastal fauna.',
    coverImage: PHOTO_COMING_SOON,
    galleryImages: [PHOTO_COMING_SOON],
    location: 'West of Kuakata Beach, across the Andharmanik River estuary, Kalapara, Patuakhali',
    googleMapsUrl: 'https://maps.google.com/?q=Fatra+Forest+Kuakata+Bangladesh',
    about: {
      overview: 'Fatrar Chor, also referred to as Fatra Mangrove Forest, is a protected coastal eco-reserve situated just west of Kuakata beach across the river mouth. Formed as the easternmost enclave of the great Sundarbans ecosystem, it features towering Sundari, Keora, and Golpata trees.',
      significance: 'This lush green mangrove island is crisscrossed by tidal canals and acts as a vital protective barrier against sea cyclones while sheltering monkeys, deer, wild boars, monitor lizards, and kingfishers.',
      experience: 'A thrilling 40-minute engine boat or speedboat ride from Kuakata, trekking through wooden walking bridges into the mangrove canopy, and enjoying coconut water on the beach.'
    },
    howToGo: {
      fromDhaka: 'Take a direct AC/non-AC highway bus via Padma Bridge to Kuakata (approx. 6-7 hours). From Kuakata beach, hire an engine-driven boat or join an organized group tourist boat to Fatrar Chor.',
      fromDistrictHq: 'From Patuakhali district town, take a bus or car south along the highway to Kuakata (approx. 70 km, 1.5 hours), then proceed to the boat ghat.',
      transportOptions: ['Direct Highway Bus to Kuakata', 'Engine Trawler / Speedboat from Kuakata Beach'],
      localTransport: 'Boats drop passengers at the forest wooden jetty; exploring the forest is on foot along elevated trails.'
    },
    bestTimeToVisit: {
      season: 'October to March (Winter months)',
      description: 'The sea is calm, making boat rides safe and pleasant.'
    },
    entryFees: {
      feeInfo: 'Small Forest Department entry ticket (approx. BDT 20).',
      details: 'Round-trip engine boat rentals from Kuakata range between BDT 200 and 300 per person on shared trips.'
    },
    travelTips: [
      'Wear sturdy walking shoes or waterproof sandals for damp forest boardwalks.',
      'Always wear a life jacket during the boat crossing across the estuary.',
      'Do not litter or leave plastic inside the protected mangrove sanctuary.'
    ],
    nearbyPlaceIds: ['kuakata-sea-beach', 'jhautoil-eco-park', 'misripara-buddhist-temple'],
    isPopular: true
  },
  {
    id: 'misripara-buddhist-temple',
    name: 'Misripara Buddhist Temple & Giant Buddha',
    bengaliName: 'মিশ্রিপাড়া সীমা বৌদ্ধ বিহার ও বিশালাকার বুদ্ধমূর্তি',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'patuakhali',
    district: 'Patuakhali',
    upazila: 'Kalapara',
    category: 'Religious Places',
    categoryId: 'religious-places',
    shortDescription: 'An ancient Rakhine Buddhist monastery preserving one of the largest metal Buddha statues in South Asia, located in a historic Rakhine village.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Baudha_Temple.jpg/1280px-Baudha_Temple.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Baudha_Temple.jpg/1280px-Baudha_Temple.jpg'
    ],
    location: 'Misripara Rakhine Village, Latachapli Union, Kalapara Upazila, Patuakhali',
    googleMapsUrl: 'https://maps.google.com/?q=Misripara+Buddhist+Temple+Kuakata+Bangladesh',
    about: {
      overview: 'Misripara Seema Buddha Vihara is a historic Buddhist sanctuary located in Misripara village, about 8 km east of Kuakata beach. Established by early Rakhine settlers who migrated to the coastal belt in the late 18th century, the temple is home to a magnificent statue of Gautama Buddha.',
      significance: 'The seated Buddha statue, standing over 30 feet in height inside the inner sanctum, is venerated as one of the largest Buddha statues in Bangladesh and South Asia, showcasing distinct Burmese-style artistry.',
      experience: 'Experiencing the serene peace of the temple chamber, admiring traditional Rakhine wooden architecture on stilts, and observing traditional handloom weaving by village artisans.'
    },
    howToGo: {
      fromDhaka: 'Travel to Kuakata by direct bus. From Kuakata main beach area, hire a motorbike, battery easy-bike, or auto-rickshaw eastward to Misripara village (approx. 20-25 minutes).',
      fromDistrictHq: 'From Patuakhali town, travel to Kuakata (1.5 hours), then take a local vehicle to Misripara.',
      transportOptions: ['Motorbike from Kuakata Beach', 'Battery Easy-bike', 'Local Auto-rickshaw'],
      localTransport: 'Village pathways are easily navigable by easy-bike or on foot.'
    },
    bestTimeToVisit: {
      season: 'October to March',
      description: 'Pleasant weather and festival times such as Buddha Purnima and the Maghi Purnima celebrations.'
    },
    entryFees: {
      feeInfo: 'Free entry (voluntary temple donations appreciated).',
      details: 'Visitors should remove shoes before entering the shrine and keep shoulders covered.'
    },
    travelTips: [
      'Respect Buddhist temple etiquette: silence mobile phones and avoid turning your back directly to the Buddha while taking photos.',
      'Purchase authentic handloom scarves or lungis directly from the Rakhine women weavers in the village.',
      'Combine your visit with nearby Jhautoil Eco Park on the same route.'
    ],
    nearbyPlaceIds: ['kuakata-sea-beach', 'jhautoil-eco-park', 'kuakata-rakhine-market'],
    isPopular: true
  },
  {
    id: 'jhautoil-eco-park',
    name: 'Jhautoil & Kuakata Eco Park',
    bengaliName: 'ঝাউবন ও কুয়াকাটা ইকোপার্ক',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'patuakhali',
    district: 'Patuakhali',
    upazila: 'Kalapara',
    category: 'Forests & Wildlife',
    categoryId: 'forests-wildlife',
    shortDescription: 'A dense coastal pine (Jhau) forest and eco-park situated alongside Kuakata beach, famous for morning sunrise views and coastal serenity.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Kuakata_Eco-Park_%2812%29.jpg/1280px-Kuakata_Eco-Park_%2812%29.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Kuakata_Eco-Park_%2812%29.jpg/1280px-Kuakata_Eco-Park_%2812%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Kuakata_Eco-Park_%2813%29.jpg/1280px-Kuakata_Eco-Park_%2813%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/Kuakata_Eco-Park_%2809%29.jpg/1280px-Kuakata_Eco-Park_%2809%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/Brahminy_kite_%28Haliastur_indus%29%2C_Kuakata_Eco-Park.jpg/1280px-Brahminy_kite_%28Haliastur_indus%29%2C_Kuakata_Eco-Park.jpg'
    ],
    location: 'Eastern side of Kuakata Beach (Gongamati point), Kalapara, Patuakhali',
    googleMapsUrl: 'https://maps.google.com/?q=Kuakata+Eco+Park+Patuakhali+Bangladesh',
    about: {
      overview: 'Initiated by the Forest Department across hundreds of acres along the eastern coastline of Kuakata, the Jhautoil (Casuarina forest) and Eco Park offer a green canopy where whispering pine needles meet ocean breakers.',
      significance: 'The forest was planted to stabilize coastal sands against tidal surges. Today, it hosts diverse avian species, Brahminy kites, and monkeys, while providing shaded picnic spots and viewing points.',
      experience: 'Waking up early to watch the sunrise emerge directly from the Bay of Bengal through the silhouettes of Jhau trees, cycling along the hard sandy shoreline, and relaxing in shaded wooden benches.'
    },
    howToGo: {
      fromDhaka: 'Take a direct highway bus to Kuakata. The Jhau forest begins just a 15-minute walk or a short 5-minute motorbike ride east of the main Kuakata zero point.',
      fromDistrictHq: 'From Patuakhali town, travel to Kuakata beach, then head eastward on the beach.',
      transportOptions: ['Beach Motorbike', 'Walking along the beach', 'Battery Easy-bike'],
      localTransport: 'Rental beach motorbikes and bicycles are popular for traveling along the eastern beach corridor.'
    },
    bestTimeToVisit: {
      season: 'October to March (Early morning)',
      description: 'Early morning between 5:30 AM and 7:00 AM provides spectacular sunrise illumination through the pine canopy.'
    },
    entryFees: {
      feeInfo: 'Nominal eco-park entry ticket (BDT 20).',
      details: 'Open beach sections are completely free.'
    },
    travelTips: [
      'Visit at dawn to catch the sunrise—one of Kuakata’s most iconic experiences.',
      'Rent a local beach bicycle to pedal effortlessly on the compacted coastal sand during low tide.',
      'Sip fresh green coconut water sold by local vendors right beside the forest edge.'
    ],
    nearbyPlaceIds: ['kuakata-sea-beach', 'misripara-buddhist-temple', 'kuakata-rakhine-market'],
    isPopular: true
  },
  {
    id: 'kuakata-rakhine-market',
    name: 'Kuakata Rakhine Women Market',
    bengaliName: 'কুয়াকাটা রাখাইন মহিলা মার্কেট',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'patuakhali',
    district: 'Patuakhali',
    upazila: 'Kalapara',
    category: 'Historical Places',
    categoryId: 'historical-places',
    shortDescription: 'A lively cultural marketplace run exclusively by indigenous Rakhine women, showcasing hand-woven fabrics, Burmese pickles, and tribal crafts.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Knitting_by_Rakhines.JPG/1280px-Knitting_by_Rakhines.JPG',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Knitting_by_Rakhines.JPG/1280px-Knitting_by_Rakhines.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Rakhaine_Handloom_Weaver.jpg/1280px-Rakhaine_Handloom_Weaver.jpg'
    ],
    location: 'Near Kuakata Buddhist Vihara and Beach Road, Kalapara, Patuakhali',
    googleMapsUrl: 'https://maps.google.com/?q=Rakhine+Market+Kuakata+Bangladesh',
    about: {
      overview: 'Located just steps from the historic ancient Kuakata well and temple, the Rakhine Mahila Market is a shopping and cultural landmark managed by indigenous Rakhine women entrepreneurs.',
      significance: 'The market represents centuries of handloom traditions and coastal trading heritage, offering authentic hand-woven blankets, lungis, shawls, natural herbal cosmetics, and traditional dry foods.',
      experience: 'Browsing vibrant textile stalls, observing live handloom demonstrations, sampling spicy Burmese tamarind and mango pickles, and purchasing handcrafted souvenirs.'
    },
    howToGo: {
      fromDhaka: 'Direct bus to Kuakata. The market is within easy 5-minute walking distance from Kuakata zero point and the main hotel zone.',
      fromDistrictHq: 'From Patuakhali town, travel to Kuakata beach by bus or car (1.5 hours).',
      transportOptions: ['Walking from Kuakata hotels', 'Battery Rickshaw'],
      localTransport: 'Everything in Kuakata central hotel zone is within walking distance.'
    },
    bestTimeToVisit: {
      season: 'All year round (especially evening between 5:00 PM and 9:00 PM)',
      description: 'Evenings are vibrant with shoppers browsing under warm lights after sunset.'
    },
    entryFees: {
      feeInfo: 'Free public entry.',
      details: 'Items are priced reasonably; polite bargaining is standard practice.'
    },
    travelTips: [
      'Look for authentic handloom shawls and lungis bearing traditional Rakhine geometric motifs.',
      'Do not miss the ancient Kuakata wooden well ("Kua") located right adjacent to the market complex.',
      'Carry cash as many small artisan stalls do not accept digital cards.'
    ],
    nearbyPlaceIds: ['kuakata-sea-beach', 'misripara-buddhist-temple', 'jhautoil-eco-park'],
    isPopular: true
  },

  // ==================== PIROJPUR DISTRICT ====================
  {
    id: 'kuriana-floating-market',
    name: 'Kuriana Floating Guava & Hog Plum Market',
    bengaliName: 'কুড়িয়ানা ভাসমান পেয়ারা ও আমড়া বাজার',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'pirojpur',
    district: 'Pirojpur',
    upazila: 'Nesarabad (Swarupkathi)',
    category: 'Rivers & Waterfalls',
    categoryId: 'rivers-waterfalls',
    shortDescription: 'A world-famous floating agricultural market on canal waterways where farmers in wooden canoes trade fresh green guavas and golden hog-plums.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Guava_Bagan_at_Kuriana-Swarupkati.jpg',
    galleryImages: [
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Guava_Bagan_at_Kuriana-Swarupkati.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Floating_market_%2CBarisal.JPG/1280px-Floating_market_%2CBarisal.JPG',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Floating_markets_in_Barisal.jpg/1280px-Floating_markets_in_Barisal.jpg'
    ],
    location: 'Kuriana, Nesarabad (Swarupkathi) Upazila, Pirojpur District',
    googleMapsUrl: 'https://maps.google.com/?q=Kuriana+Floating+Market+Pirojpur+Bangladesh',
    about: {
      overview: 'Kuriana is one of the most famous water-market hubs in the southern backwaters of Bengal. Located at the intersection of lush guava and hog-plum orchards, hundreds of farmers gather at dawn in wooden canoes to sell crisp produce directly from tree to buyer.',
      significance: 'Often called the "Venice of Bengal", the intricate canal grid has sustained organic fruit cultivation for more than two centuries without road-dependent logistics.',
      experience: 'Hiring a small wooden boat to glide through arched canals between fruit trees, watching boat-to-boat barter trades, and tasting freshly plucked sweet guavas.'
    },
    howToGo: {
      fromDhaka: 'Take an overnight launch from Sadarghat to Hularhat/Swarupkathi Launch Ghat (approx. 8 hours). Alternatively, take a bus via Padma Bridge to Barishal, then a local Mahindra or bus to Kuriana (approx. 45 minutes).',
      fromDistrictHq: 'From Pirojpur district town, take an auto-rickshaw or bus to Nesarabad/Swarupkathi and continue to Kuriana (approx. 35 km, 50 minutes).',
      transportOptions: ['Overnight Launch to Swarupkathi', 'Highway Bus to Barishal then Mahindra', 'Wooden Dinghy Boat on Canal'],
      localTransport: 'Local non-motorized wooden dinghies (trawler or kosh-nouka) are the best way to navigate the canals.'
    },
    bestTimeToVisit: {
      season: 'July to September (Monsoon guava harvest)',
      description: 'Peak harvest season when thousands of boats fill the waterways with mounds of green guavas and hog-plums.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Hiring a private wooden boat with boatman costs approximately BDT 800 to 1,500 for a 2-3 hour canal tour.'
    },
    travelTips: [
      'Arrive early in the morning (between 7:00 AM and 10:30 AM) when market trading is at its liveliest.',
      'Bring rain gear and waterproof protection for cameras and phones.',
      'Sample traditional sweets and curd at Kuriana bazaar after your boat excursion.'
    ],
    nearbyPlaceIds: ['swarupkathi-boat-market', 'bhimruli-floating-market', 'rayerkati-zamindar-bari'],
    isPopular: true
  },
  {
    id: 'swarupkathi-boat-market',
    name: 'Swarupkathi Timber & Boat Market',
    bengaliName: 'স্বরূপকাঠি ভাসমান কাঠ ও নৌকা হাট',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'pirojpur',
    district: 'Pirojpur',
    upazila: 'Nesarabad (Swarupkathi)',
    category: 'Rivers & Waterfalls',
    categoryId: 'rivers-waterfalls',
    shortDescription: 'The premier center of traditional boatbuilding and floating timber trade in Bangladesh, with hundreds of handcrafted wooden vessels moored along the Sandhya River.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Riverside_Boat_Market.jpg/1280px-Riverside_Boat_Market.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/84/Riverside_Boat_Market.jpg/1280px-Riverside_Boat_Market.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Floating_markets_in_Barisal.jpg/1280px-Floating_markets_in_Barisal.jpg'
    ],
    location: 'Sandhya Riverbank, Nesarabad (Swarupkathi), Pirojpur',
    googleMapsUrl: 'https://maps.google.com/?q=Swarupkathi+Boat+Market+Pirojpur+Bangladesh',
    about: {
      overview: 'Swarupkathi is Bangladesh’s largest floating timber and wooden boat trading market. Stretching along the Sandhya River, giant logs of sundari, teak, mahogany, and garjan float tied in rafts, while artisan boatbuilders display handcrafted canoes, dinghies, and trawlers.',
      significance: 'For centuries, carpenters of Swarupkathi have supplied the river vessels that power the delta’s transport, keeping alive ancient boatbuilding techniques passed through generations.',
      experience: 'Witnessing carpenters shaping boats by hand with adzes and tar, walking on floating timber log rafts, and experiencing riverine trading culture.'
    },
    howToGo: {
      fromDhaka: 'Direct passenger launch from Sadarghat to Swarupkathi Ghat (overnight), or highway bus via Padma Bridge to Barishal, then bus to Swarupkathi.',
      fromDistrictHq: 'Located about 30 km northeast of Pirojpur town; accessible by regular buses and CNGs in 45 minutes.',
      transportOptions: ['Direct River Launch from Dhaka', 'CNG Auto-rickshaw from Pirojpur', 'Local Mahindra from Barishal'],
      localTransport: 'Walk along river ghats and hire a country boat to see the timber rafts from the water.'
    },
    bestTimeToVisit: {
      season: 'October to March (or weekly Friday/Saturday market days)',
      description: 'Market activity peaks on weekly haat days throughout the year.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Commercial trading area; boat crossing fares are nominal (BDT 10-20).'
    },
    travelTips: [
      'Visit on the weekly haat day to see the largest assembly of boats and timber.',
      'Exercise caution when walking on wet wooden log rafts floating on the river.'
    ],
    nearbyPlaceIds: ['kuriana-floating-market', 'bhimruli-floating-market'],
    isPopular: false
  },
  {
    id: 'rayerkati-zamindar-bari',
    name: 'Rayerkati Zamindar Bari',
    bengaliName: 'রায়েরকাঠি জমিদার বাড়ি ও শিব মন্দির',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'pirojpur',
    district: 'Pirojpur',
    upazila: 'Pirojpur Sadar',
    category: 'Historical Places',
    categoryId: 'historical-places',
    shortDescription: 'A historic 16th-century royal palace and temple complex established by Raja Rudra Narayan Ray, home to centuries-old Shiva shrines and intricate brickwork.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Rayerkathi_Jomidar_Bari_02.jpg/1280px-Rayerkathi_Jomidar_Bari_02.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Rayerkathi_Jomidar_Bari_02.jpg/1280px-Rayerkathi_Jomidar_Bari_02.jpg'
    ],
    location: 'Rayerkati, Pirojpur Sadar, approx. 3 km north of Pirojpur town',
    googleMapsUrl: 'https://maps.google.com/?q=Rayerkati+Zamindar+Bari+Pirojpur+Bangladesh',
    about: {
      overview: 'Rayerkati Zamindar Bari is a renowned historical estate founded in the mid-16th century by King Rudra Narayan Ray of Chandradwip kingdom. The palace complex contains antique residential palaces, colonnaded entrances, ponds, and about 200 ancient temples.',
      significance: 'The massive Shiva temple within the complex houses a revered giant stone Shiva lingam, one of the largest in Bengal, attracting pilgrims and heritage travelers.',
      experience: 'Exploring crumbling historic archways surrounded by banyan roots, admiring classical Bengal terracotta styling, and sensing the grandeur of medieval zamindar rule.'
    },
    howToGo: {
      fromDhaka: 'By Bus: AC/non-AC buses depart Gabtoli and Sayedabad directly to Pirojpur via Padma Bridge (approx. 4.5 hours). By Launch: Overnight launch from Sadarghat to Hularhat Ghat (approx. 8 hours), then auto-rickshaw to Pirojpur.',
      fromDistrictHq: 'Located just 3 km north of Pirojpur town center; easily reached by rickshaw or battery easy-bike in 10-15 minutes.',
      transportOptions: ['Highway Bus from Dhaka', 'Overnight Launch to Hularhat', 'Local Battery Easy-bike'],
      localTransport: 'Rickshaws and easy-bikes are available directly from Pirojpur bus stand.'
    },
    bestTimeToVisit: {
      season: 'October to March (Winter months)',
      description: 'Comfortable temperatures for exploring the ruins and heritage grounds.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Heritage site; please respect the active temple grounds.'
    },
    travelTips: [
      'Wear respectful attire when visiting the active Shiva temple.',
      'Do not climb weak or deteriorating walls of the old palace ruins.'
    ],
    nearbyPlaceIds: ['baleshwar-riverfront', 'momin-mosque', 'kuriana-floating-market'],
    isPopular: false
  },
  {
    id: 'baleshwar-riverfront',
    name: 'Baleshwar Riverfront',
    bengaliName: 'বলেশ্বর রিভারফ্রন্ট ও ডিসি ঘাট',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'pirojpur',
    district: 'Pirojpur',
    upazila: 'Pirojpur Sadar',
    category: 'Rivers & Waterfalls',
    categoryId: 'rivers-waterfalls',
    shortDescription: 'A peaceful riverside promenade along the historic Baleshwar River, noted for gentle sunset breezes, walking parks, and boat rides.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Baleshwar_river.jpg/1280px-Baleshwar_river.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9a/Baleshwar_river.jpg/1280px-Baleshwar_river.jpg'
    ],
    location: 'DC Park & Riverside Promenade, Pirojpur Sadar, Pirojpur',
    googleMapsUrl: 'https://maps.google.com/?q=Baleshwar+River+Pirojpur+Bangladesh',
    about: {
      overview: 'Flowing serenely past Pirojpur town, the Baleshwar River is celebrated for its wide gentle waters and scenic green banks. The town riverside promenade and DC Park provide scenic benches, walkways, and views of passenger launches and cargo boats.',
      significance: 'Baleshwar is a historical water route leading downstream toward the Sundarbans and the Bay of Bengal, intimately tied to the folklore, trade, and resilience of southern delta residents.',
      experience: 'Strolling through the landscaped DC Park on the riverbank, taking an evening wooden boat ride across the water, and watching the sunset over river tides.'
    },
    howToGo: {
      fromDhaka: 'Direct highway bus from Dhaka to Pirojpur town (approx. 4.5 hours), then take a rickshaw to DC Park / Baleshwar riverfront.',
      fromDistrictHq: 'Located adjacent to Pirojpur town center; 5 minutes by rickshaw from the town square.',
      transportOptions: ['Highway Bus from Dhaka', 'Rickshaw from Pirojpur town', 'Walking'],
      localTransport: 'Rickshaws and battery easy-bikes ply continuously.'
    },
    bestTimeToVisit: {
      season: 'October to March (Late afternoon)',
      description: 'Pleasant afternoon breezes and sunset reflections over the water.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Small fee for specific rides inside adjacent DC Park.'
    },
    travelTips: [
      'Enjoy evening tea and fresh snacks at the riverfront stalls.',
      'Combine with Rayerkati Zamindar Bari in a relaxed one-day Pirojpur tour.'
    ],
    nearbyPlaceIds: ['rayerkati-zamindar-bari', 'kuriana-floating-market'],
    isPopular: false
  },
  {
    id: 'momin-mosque',
    name: 'Momin Mosque (Kath Jame Masjid)',
    bengaliName: 'মমিন মসজিদ (কাঠের জামে মসজিদ)',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'pirojpur',
    district: 'Pirojpur',
    upazila: 'Mathbaria',
    category: 'Religious Places',
    categoryId: 'religious-places',
    shortDescription: 'An architectural masterpiece of Bangladesh, built entirely out of carved wood without a single iron nail in 1913 CE by master rural craftsmen.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Momin_Mosque_after_restoration.jpg',
    galleryImages: [
      'https://upload.wikimedia.org/wikipedia/commons/3/3e/Momin_Mosque_after_restoration.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Momin_Mosque-02.jpg/1280px-Momin_Mosque-02.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Momin_Mosque-09.jpg/1280px-Momin_Mosque-09.jpg'
    ],
    location: 'Burirchar village, Mathbaria Upazila, Pirojpur District',
    googleMapsUrl: 'https://maps.google.com/?q=Momin+Mosque+Mathbaria+Pirojpur+Bangladesh',
    about: {
      overview: 'Momin Mosque, located in Burirchar village of Mathbaria, is one of the most remarkable heritage monuments in South Asia. Completed in 1913 by local philanthropist Momin Uddin Akon, this entire mosque was assembled out of Burmese teak, ironwood, and jackfruit wood without using any metal nails.',
      significance: 'Protected by the Department of Archaeology, it is the only surviving wooden mosque in Bangladesh featuring ornate floral openwork filigree, geometric lattice screens, and Persian-Arabic calligraphy carved entirely into solid timber.',
      experience: 'Admiring the intricate hand-carved floral motifs on the wooden pillars, windows, and mihrab, observing how wooden joints hold the entire roof structure, and appreciating Bengal’s master carpentry.'
    },
    howToGo: {
      fromDhaka: 'Take a direct bus from Dhaka (Sayedabad/Gabtoli) to Mathbaria (approx. 5.5 hours via Padma Bridge). From Mathbaria town, hire a motorbike or easy-bike to Burirchar village (approx. 5 km, 15 minutes).',
      fromDistrictHq: 'From Pirojpur town, take a bus or car south to Mathbaria (approx. 45 km, 1 hour 15 minutes), then continue to Burirchar village.',
      transportOptions: ['Direct Highway Bus to Mathbaria', 'Local Auto-rickshaw / Easy-bike', 'Motorbike'],
      localTransport: 'Village roads are accessible by easy-bike and motorbike.'
    },
    bestTimeToVisit: {
      season: 'October to March (Winter months)',
      description: 'Mild weather makes the journey to rural Mathbaria smooth and enjoyable.'
    },
    entryFees: {
      feeInfo: 'Free admission.',
      details: 'Active prayer house; visitors must remove footwear and dress respectfully.'
    },
    travelTips: [
      'Do not touch or lean heavily against delicate antique wooden carvings.',
      'Take photos with natural lighting to highlight the fine wood grain and filigree work.'
    ],
    nearbyPlaceIds: ['baleshwar-riverfront', 'rayerkati-zamindar-bari'],
    isPopular: true
  },

  // ==================== JHALOKATI DISTRICT ====================
  {
    id: 'kirtipasha-zamindar-bari',
    name: 'Kirtipasha Zamindar Bari',
    bengaliName: 'কীর্তিপাশা জমিদার বাড়ি',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'jhalokati',
    district: 'Jhalokati',
    upazila: 'Jhalokati Sadar',
    category: 'Historical Places',
    categoryId: 'historical-places',
    shortDescription: 'A sprawling 19th-century zamindar estate featuring neoclassical palaces, ornate brick arches, a Natmandir, and ancient Shiva temples.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Kirtipasha_Zamindar_Bari_Entrance.jpg/1280px-Kirtipasha_Zamindar_Bari_Entrance.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c2/Kirtipasha_Zamindar_Bari_Entrance.jpg/1280px-Kirtipasha_Zamindar_Bari_Entrance.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/Kirtipasha_Zamindar_Bari_School_%282%29.jpg/1280px-Kirtipasha_Zamindar_Bari_School_%282%29.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Kirtipasha_Zamindar_Bari_Shrine.jpg/1280px-Kirtipasha_Zamindar_Bari_Shrine.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Abandoned_stair_at_Kirtipasha_Zamindar_Bari.jpg/1280px-Abandoned_stair_at_Kirtipasha_Zamindar_Bari.jpg'
    ],
    location: 'Kirtipasha village, approx. 5 km northwest of Jhalokati town',
    googleMapsUrl: 'https://maps.google.com/?q=Kirtipasha+Zamindar+Bari+Jhalokathi+Bangladesh',
    about: {
      overview: 'Founded nearly three centuries ago by Raja Ram Sen Gupta, the Kirtipasha Zamindar Bari was one of the grandest aristocratic seats of southern Bengal. Divided historically into the "Boro Taraf" and "Chhoto Taraf", the estate once commanded immense wealth and cultural influence across the district.',
      significance: 'The palace grounds feature grand multi-story residential quarters, colonial-style pillared halls, decorative ponds, and two prominent Shiva temples where traditional religious rites continue to this day.',
      experience: 'Wandering through the atmospheric red-brick ruins entangled in old banyan trees, photographing antique archways, and exploring local heritage history.'
    },
    howToGo: {
      fromDhaka: 'Take a direct highway bus to Jhalokati via Padma Bridge (approx. 4.5 hours), or an overnight launch from Sadarghat to Jhalokati Launch Ghat. From Jhalokati town, take an easy-bike or auto-rickshaw to Kirtipasha (approx. 15 minutes).',
      fromDistrictHq: 'Located only 5 km northwest of Jhalokati Sadar town along the Kirtipasha road; easily accessible by auto-rickshaw.',
      transportOptions: ['Highway Bus from Dhaka', 'Overnight Launch to Jhalokati', 'Local Battery Easy-bike'],
      localTransport: 'Easy-bikes run regularly between Jhalokati town and Kirtipasha.'
    },
    bestTimeToVisit: {
      season: 'October to March',
      description: 'Pleasant weather for walking around the outdoor ruins and temple ponds.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Heritage site; parts of the estate are maintained by a local school.'
    },
    travelTips: [
      'Combine with Bhimruli Floating Guava Market, which is located just 10 km further along the same canal road.',
      'Exercise caution around dilapidated brick stairs and roofs.'
    ],
    nearbyPlaceIds: ['bhimruli-floating-market', 'sujabad-fort', 'dhanshiri-riverfront'],
    isPopular: true
  },
  {
    id: 'sujabad-fort',
    name: 'Sujabad Fort Ruins',
    bengaliName: 'সুজাবাদ কেল্লা',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'jhalokati',
    district: 'Jhalokati',
    upazila: 'Nalchity',
    category: 'Historical Places',
    categoryId: 'historical-places',
    shortDescription: 'A 17th-century Mughal mud-and-brick fortress built in 1639 CE by Mughal Subahdar Shah Shuja to defend southern Bengal against Magh and Portuguese pirates.',
    coverImage: PHOTO_COMING_SOON,
    galleryImages: [PHOTO_COMING_SOON],
    location: 'Sujabad village, Nalchity Upazila, along the Sugandha River, Jhalokati',
    googleMapsUrl: 'https://maps.google.com/?q=Sujabad+Fort+Nalchity+Jhalokati+Bangladesh',
    about: {
      overview: 'Sujabad Fort was established in 1639 CE during the reign of Mughal Emperor Shah Jahan by prince Shah Shuja, Subahdar of Bengal. Constructed strategically at the confluence of the Sugandha and Gajalia rivers, the fort guarded the delta waterways from violent Magh and Portuguese pirate incursions.',
      significance: 'The fort originally encompassed high earthen ramparts, brick watchtowers, and moats. While much of the masonry has been worn down by river erosion and time, remnants of the moat and historical earthen fortifications remain visible.',
      experience: 'Discovering Mughal defensive frontier history, viewing the scenic Sugandha riverbank, and meeting local villagers who preserve folklore of the Mughal garrison.'
    },
    howToGo: {
      fromDhaka: 'Take a bus to Jhalokati or Barishal, then travel to Nalchity town. From Nalchity, hire an auto-rickshaw to Sujabad village (approx. 15-20 minutes).',
      fromDistrictHq: 'From Jhalokati Sadar, take an auto-rickshaw across the Sugandha River towards Nalchity and proceed to Sujabad.',
      transportOptions: ['Bus to Jhalokati', 'Local Auto-rickshaw / Easy-bike', 'Ferry across Sugandha River'],
      localTransport: 'Local easy-bikes and motorbikes connect Nalchity to Sujabad village.'
    },
    bestTimeToVisit: {
      season: 'November to February (Winter months)',
      description: 'Dry winter season makes walking around village archaeological grounds easiest.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Historical village site with open access.'
    },
    travelTips: [
      'Ask local elders in the village to point out the original moat lines and brick remains.',
      'Wear sturdy walking shoes for village pathways.'
    ],
    nearbyPlaceIds: ['kirtipasha-zamindar-bari', 'dhanshiri-riverfront'],
    isPopular: false
  },
  {
    id: 'dhanshiri-riverfront',
    name: 'Dhanshiri Riverfront',
    bengaliName: 'ধানসিঁড়ি নদী তীর',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'jhalokati',
    district: 'Jhalokati',
    upazila: 'Rajapur',
    category: 'Rivers & Waterfalls',
    categoryId: 'rivers-waterfalls',
    shortDescription: 'The legendary river immortalized in the timeless verses of poet Jibanananda Das: "Again I will return to the banks of Dhanshiri, to this Bengal".',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Dhanshiri_Rest_House%2C_Jhalokati.jpg/1280px-Dhanshiri_Rest_House%2C_Jhalokati.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Dhanshiri_Rest_House%2C_Jhalokati.jpg/1280px-Dhanshiri_Rest_House%2C_Jhalokati.jpg'
    ],
    location: 'Dhanshiri Union, Rajapur Upazila, Jhalokati District',
    googleMapsUrl: 'https://maps.google.com/?q=Dhanshiri+River+Rajapur+Jhalokathi+Bangladesh',
    about: {
      overview: 'Flowing through Rajapur in Jhalokati, the Dhanshiri River holds a sacred place in Bengali literature. Poet Jibanananda Das made this river world-famous in his iconic poem "Abar Ashibo Phire" (Again I Will Return), expressing his longing to be reborn as a kite or kingfisher over the waters of Dhanshiri.',
      significance: 'Once a deep flowing tributary of the Sugandha and Bishkhali rivers, Dhanshiri has recently undergone restoration and excavation by the government to revive its flow and commemorate its cultural heritage.',
      experience: 'Reciting Jibanananda’s verses on the tranquil riverbank, relaxing at the Dhanshiri Eco Park and rest house, and enjoying peaceful views of water lilies and swaying reeds.'
    },
    howToGo: {
      fromDhaka: 'Travel to Jhalokati or Barishal by bus or launch. From Jhalokati town, board a bus or CNG auto-rickshaw bound for Rajapur and alight at the Dhanshiri bridge (approx. 20 km, 30 minutes).',
      fromDistrictHq: 'Located about 20 km south of Jhalokati town center along the Jhalokati-Bhandaria road; accessible by CNG or local bus.',
      transportOptions: ['Bus to Jhalokati / Rajapur', 'CNG Auto-rickshaw', 'Local Easy-bike'],
      localTransport: 'Auto-rickshaws wait near the Dhanshiri bridge and rest house.'
    },
    bestTimeToVisit: {
      season: 'October to March (Late afternoon)',
      description: 'Pleasant temperatures and sunset over the tranquil river waters.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Public riverbank and rest house viewpoints.'
    },
    travelTips: [
      'Take a moment to read or listen to Jibanananda Das’s "Abar Ashibo Phire" while sitting on the riverbank.',
      'Combine with a tour of Jhalokati’s floating markets and Kirtipasha Zamindar Bari.'
    ],
    nearbyPlaceIds: ['kirtipasha-zamindar-bari', 'bhimruli-floating-market'],
    isPopular: false
  },

  // ==================== BARGUNA DISTRICT ====================
  {
    id: 'shubhosondha-sea-beach',
    name: 'Shubhosondha Sea Beach',
    bengaliName: 'শুভসন্ধ্যা সমুদ্র সৈকত',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barguna',
    district: 'Barguna',
    upazila: 'Taltali',
    category: 'Sea Beaches',
    categoryId: 'sea-beaches',
    shortDescription: 'A four-kilometer unspoiled coastal beach at the confluence of the Payra River and Bay of Bengal, famous for panoramic sunset views and red crab colonies.',
    coverImage: PHOTO_COMING_SOON,
    galleryImages: [PHOTO_COMING_SOON],
    location: 'Nishanbaria, Taltali Upazila, southern Barguna',
    googleMapsUrl: 'https://maps.google.com/?q=Shubhosondha+Sea+Beach+Taltali+Barguna+Bangladesh',
    about: {
      overview: 'Shubhosondha Sea Beach (meaning "Beautiful Evening") is one of the most serene and expansive beaches along Bangladesh’s southern coastline. Stretching over 4 kilometers where the Payra River mingles into the Bay of Bengal, the beach is lined by dense Jhau (tamarisk) plantations and green mangrove shrubs.',
      significance: 'Untouched by heavy commercialization, the beach provides an undisturbed sanctuary for sea crabs, marine birds, and migratory winter species. Its wide gentle slope allows panoramic vistas of both sunrise and sunset.',
      experience: 'Walking along quiet kilometers of silver sand, marveling at thousands of red crabs scattering across the sandbars at low tide, and watching fishing trawlers sail out into the ocean.'
    },
    howToGo: {
      fromDhaka: 'By Bus: Direct highway buses run from Dhaka (Sayedabad) via Padma Bridge to Taltali or Barguna (approx. 6-7 hours). From Taltali town, take a motorbike or battery easy-bike to Nishanbaria Shubhosondha beach (approx. 12 km, 25 minutes). By Launch: Overnight passenger launch from Sadarghat to Amtali or Barguna, then road transport to Taltali.',
      fromDistrictHq: 'From Barguna district town, travel to Taltali Upazila by bus or auto-rickshaw (approx. 40 km, 1 hour), then take an easy-bike to the beach.',
      transportOptions: ['Direct Highway Bus via Padma Bridge', 'Overnight River Launch to Amtali / Barguna', 'Local Motorbike / Easy-bike from Taltali'],
      localTransport: 'Motorbikes and battery easy-bikes are the main options from Taltali town.'
    },
    bestTimeToVisit: {
      season: 'November to February (Winter months)',
      description: 'Gentle waves, cool sea breeze, and clear skies create perfect beachcombing conditions.'
    },
    entryFees: {
      feeInfo: 'Free public beach access.',
      details: 'No commercial entry fees.'
    },
    travelTips: [
      'Visit in the late afternoon to experience the magical sunset that gives the beach its name.',
      'Carry your own refreshments and drinking water as commercial beach shops are limited.',
      'Combine with nearby Tengragiri Wildlife Sanctuary and Haringhata Forest.'
    ],
    nearbyPlaceIds: ['haringhata-mangrove-forest', 'laldia-forest-beach', 'bibichini-shahi-mosque'],
    isPopular: true
  },
  {
    id: 'haringhata-mangrove-forest',
    name: 'Haringhata Mangrove Forest',
    bengaliName: 'হরিণঘাটা সংরক্ষিত বন',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barguna',
    district: 'Barguna',
    upazila: 'Patharghata',
    category: 'Forests & Wildlife',
    categoryId: 'forests-wildlife',
    shortDescription: 'A scenic coastal eco-reserve on the Bay of Bengal shore, celebrated for deer herds, wooden footbridges over tidal creeks, and an observation tower.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Haringhata_Lake_and_forest_at_Haringhata_01.jpg/1280px-Haringhata_Lake_and_forest_at_Haringhata_01.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Haringhata_Lake_and_forest_at_Haringhata_01.jpg/1280px-Haringhata_Lake_and_forest_at_Haringhata_01.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Haringhata_Lake_and_forest_at_Haringhata_05.jpg/1280px-Haringhata_Lake_and_forest_at_Haringhata_05.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Haringhata_Lake_and_forest_at_Haringhata_17.jpg/1280px-Haringhata_Lake_and_forest_at_Haringhata_17.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/aa/Haringhata_Lake_and_forest_at_Haringhata_22.jpg/1280px-Haringhata_Lake_and_forest_at_Haringhata_22.jpg'
    ],
    location: 'Patharghata Upazila, southernmost tip of Barguna District',
    googleMapsUrl: 'https://maps.google.com/?q=Haringhata+Forest+Patharghata+Barguna+Bangladesh',
    about: {
      overview: 'Haringhata is a coastal mangrove forest located at the meeting point of the Baleshwar and Payra rivers with the Bay of Bengal. Established in 1967 as a forest reserve across thousands of acres, Haringhata is home to thriving populations of spotted deer, wild boars, rhesus macaques, and otters.',
      significance: 'A 2.5-kilometer elevated wooden walkway winds above the tidal forest floor and water canals, leading to a tall observation watchtower that affords panoramic vistas across the mangrove canopy and out into the open sea.',
      experience: 'Walking peacefully along the raised wooden footbridge over tidal creeks, spotting grazing spotted deer herds, climbing the watchtower to catch cool ocean breezes, and birdwatching.'
    },
    howToGo: {
      fromDhaka: 'Take a direct bus from Sayedabad/Gabtoli to Patharghata (approx. 6 hours via Padma Bridge). From Patharghata town, take an auto-rickshaw or motorbike to Haringhata Forest gate (approx. 7 km, 15 minutes).',
      fromDistrictHq: 'From Barguna town, take a bus or CNG to Patharghata (approx. 35 km, 50 minutes), then proceed south to Haringhata.',
      transportOptions: ['Direct Highway Bus to Patharghata', 'Local Auto-rickshaw / Easy-bike', 'Motorbike'],
      localTransport: 'Easy-bikes and rental motorbikes are available from Patharghata bus stand.'
    },
    bestTimeToVisit: {
      season: 'November to February (Winter months)',
      description: 'Pleasant weather and peak deer sightings along the walkway during early mornings and late afternoons.'
    },
    entryFees: {
      feeInfo: 'Forest Department entry fee BDT 20 per adult.',
      details: 'Walkway and watchtower access included.'
    },
    travelTips: [
      'Visit early in the morning (7:00 AM - 9:00 AM) or around 4:00 PM for the highest chance of spotting wild deer along the walkway.',
      'Do not make loud noises or try to feed wildlife.',
      'Combine with nearby Laldia Forest and Beach on the same day.'
    ],
    nearbyPlaceIds: ['laldia-forest-beach', 'shubhosondha-sea-beach'],
    isPopular: true
  },
  {
    id: 'bibichini-shahi-mosque',
    name: 'Bibichini Shahi Mosque (17th Century)',
    bengaliName: 'বিবিচিনি শাহী মসজিদ',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barguna',
    district: 'Barguna',
    upazila: 'Betagi',
    category: 'Religious Places',
    categoryId: 'religious-places',
    shortDescription: 'A historic Mughal-era single-domed mosque perched atop an elevated mound, built in 1659 CE by Persian saint Shah Niamatullah.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1280px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg/1280px-%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BF_%E0%A6%9A%E0%A6%BF%E0%A6%A8%E0%A6%BF_%E0%A6%B6%E0%A6%BE%E0%A6%B9%E0%A7%80_%E0%A6%AE%E0%A6%B8%E0%A6%9C%E0%A6%BF%E0%A6%A6.jpg'
    ],
    location: 'Bibichini village, Betagi Upazila, Barguna District',
    googleMapsUrl: 'https://maps.google.com/?q=Bibichini+Shahi+Mosque+Betagi+Barguna+Bangladesh',
    about: {
      overview: 'Perched on an unusually elevated natural hillock (dhibi) in Betagi Upazila, the Bibichini Shahi Mosque is the oldest Mughal archaeological monument in Barguna district. It was established in 1659 CE during the reign of Emperor Aurangzeb by Islamic preacher Shah Niamatullah, who traveled from Persia to preach in southern Bengal.',
      significance: 'The mosque features thick Mughal terracotta brick walls, a semicircular central dome, arched entrances, and adjacent historical tombs of Hazrat Shah Niamatullah and his daughters Bibi Chini and Bibi Sultana, from whom the village gets its name.',
      experience: 'Climbing the hillock staircase to the elevated mosque courtyard, admiring the 350-year-old Mughal brick craftsmanship, and enjoying the tranquil panoramic view of surrounding rural waterways.'
    },
    howToGo: {
      fromDhaka: 'Take a bus to Barishal or Barguna. From Barishal (Rupatali bus stand), take a local bus or tempo to Betagi Upazila (approx. 1 hour). From Betagi town, hire an easy-bike to Bibichini village (approx. 4 km, 10 minutes).',
      fromDistrictHq: 'From Barguna Sadar town, take a bus or auto-rickshaw north to Betagi (approx. 30 km, 45 minutes).',
      transportOptions: ['Highway Bus to Betagi / Barguna', 'Local Auto-rickshaw / Easy-bike', 'Rickshaw'],
      localTransport: 'Easy-bikes operate regularly between Betagi bus stand and Bibichini.'
    },
    bestTimeToVisit: {
      season: 'All year round (especially October to March)',
      description: 'Pleasant winter weather makes exploring the hillock and tombs comfortable.'
    },
    entryFees: {
      feeInfo: 'Free public entry.',
      details: 'Active prayer house; visitors should dress respectfully.'
    },
    travelTips: [
      'Take off footwear before entering the mosque prayer hall.',
      'Climb the steps to the elevated terrace for photography of the rural Betagi landscape.'
    ],
    nearbyPlaceIds: ['shubhosondha-sea-beach', 'haringhata-mangrove-forest'],
    isPopular: false
  },
  {
    id: 'laldia-forest-beach',
    name: 'Laldia Forest & Beach',
    bengaliName: 'লালদিয়া বন ও সমুদ্র সৈকত',
    divisionId: 'barishal',
    division: 'Barishal',
    districtId: 'barguna',
    district: 'Barguna',
    upazila: 'Patharghata',
    category: 'Forests & Wildlife',
    categoryId: 'forests-wildlife',
    shortDescription: 'A pristine wilderness where the Tengragiri sanctuary mangrove forest sweeps down to meet the rolling waves of the Bay of Bengal.',
    coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Front_view_of_Tengragiri_Wildlife_Sanctuary.jpg/1280px-Front_view_of_Tengragiri_Wildlife_Sanctuary.jpg',
    galleryImages: [
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Front_view_of_Tengragiri_Wildlife_Sanctuary.jpg/1280px-Front_view_of_Tengragiri_Wildlife_Sanctuary.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Boats_in_Tengragiri_Wildlife_Sanctuary_area_03.jpg/1280px-Boats_in_Tengragiri_Wildlife_Sanctuary_area_03.jpg',
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Boats_in_Tengragiri_Wildlife_Sanctuary_area_04.jpg/1280px-Boats_in_Tengragiri_Wildlife_Sanctuary_area_04.jpg'
    ],
    location: 'Tengragiri coastal fringe, Patharghata Upazila, Barguna District',
    googleMapsUrl: 'https://maps.google.com/?q=Laldia+Beach+Barguna+Bangladesh',
    about: {
      overview: 'Laldia Beach is an untouched coastal haven located at the southern tip of Patharghata, adjacent to the sprawling Tengragiri Wildlife Sanctuary. Often called the second Sundarbans of the south, the forest of Keora, Sundari, and Bain meets a golden sand shoreline facing the Bay of Bengal.',
      significance: 'Far away from urban noise, Laldia is a critical breeding habitat for sea turtles, red crabs, and rare coastal birds, providing visitors with raw ecological beauty.',
      experience: 'Hiking through coastal forest trails, stepping onto wide empty beaches, listening to waves crashing against mangrove tree roots, and spotting mudskippers and red crabs.'
    },
    howToGo: {
      fromDhaka: 'Take a direct highway bus from Dhaka to Patharghata. From Patharghata, take a motorbike or trawler south to the Laldia forest trail.',
      fromDistrictHq: 'From Barguna town, travel to Patharghata (45 minutes), then hire a local motorbike or boat to Laldia.',
      transportOptions: ['Bus to Patharghata', 'Motorbike through coastal bunds', 'Local Boat'],
      localTransport: 'Motorbikes and walking along coastal trails.'
    },
    bestTimeToVisit: {
      season: 'November to February (Winter months)',
      description: 'The dry season makes coastal trails accessible and beach hiking safe.'
    },
    entryFees: {
      feeInfo: 'Free public access.',
      details: 'Nominal Forest Department entry fee if entering through designated ecoparks.'
    },
    travelTips: [
      'Travel in groups with a local guide as the forest trails can be quiet and dense.',
      'Check tide times to avoid crossing tidal channels at high water.',
      'Carry drinking water and insect repellent.'
    ],
    nearbyPlaceIds: ['haringhata-mangrove-forest', 'shubhosondha-sea-beach'],
    isPopular: true
  }
];
