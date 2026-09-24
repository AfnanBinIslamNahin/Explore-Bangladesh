export interface Division {
  id: string;
  name: string;
  bengaliName: string;
  headquarters: string;
  areaKm2: number;
  districtsCount: number;
  description: string;
  image: string;
}

export interface District {
  id: string;
  name: string;
  bengaliName?: string;
  divisionId: string;
  divisionName: string;
  coverImage: string;
  intro: string;
  geography: string;
  history: string;
  majorAttractions: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  count?: number;
}

export interface TouristPlace {
  id: string;
  name: string;
  bengaliName?: string;
  divisionId: string;
  division: string;
  districtId: string;
  district: string;
  upazila: string;
  category: string;
  categoryId: string;
  shortDescription: string;
  coverImage: string;
  galleryImages: string[];
  location: string;
  googleMapsUrl: string;
  about: {
    overview: string;
    significance: string;
    experience: string;
  };
  howToGo: {
    fromDhaka: string;
    fromDistrictHq: string;
    transportOptions: string[];
    localTransport: string;
  };
  bestTimeToVisit: {
    season: string;
    description: string;
  };
  entryFees: {
    feeInfo: string;
    details?: string;
  };
  travelTips: string[];
  nearbyPlaceIds: string[];
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  placeId: string;
  placeName: string;
  districtName: string;
  divisionName: string;
  category: string;
  imageUrl: string;
  caption: string;
}
