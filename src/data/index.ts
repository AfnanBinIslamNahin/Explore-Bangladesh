import { categories } from './categories';
import { divisions } from './divisions';
import { districts } from './districts';
import { touristPlaces } from './places';
import { Category, District, Division, GalleryItem, TouristPlace } from '../types';

export { categories, divisions, districts, touristPlaces };

export function getDivisionById(id: string): Division | undefined {
  return divisions.find((d) => d.id === id);
}

export function getDistrictById(id: string): District | undefined {
  return districts.find((d) => d.id === id);
}

export function getDistrictsByDivision(divisionId: string): District[] {
  return districts.filter((d) => d.divisionId === divisionId);
}

export function getPlaceById(id: string): TouristPlace | undefined {
  return touristPlaces.find((p) => p.id === id);
}

export function getPlacesByDistrict(districtId: string): TouristPlace[] {
  return touristPlaces.filter((p) => p.districtId === districtId);
}

export function getPlacesByDivision(divisionId: string): TouristPlace[] {
  return touristPlaces.filter((p) => p.divisionId === divisionId);
}

export function getPlacesByCategory(categoryId: string): TouristPlace[] {
  return touristPlaces.filter((p) => p.categoryId === categoryId);
}

export function getCategoryById(categoryId: string): Category | undefined {
  return categories.find((c) => c.id === categoryId);
}

export function getPopularPlaces(): TouristPlace[] {
  return touristPlaces.filter((p) => p.isPopular);
}

export function getAllGalleryItems(): GalleryItem[] {
  const items: GalleryItem[] = [];
  touristPlaces.forEach((place) => {
    place.galleryImages.forEach((img, idx) => {
      items.push({
        id: `${place.id}-${idx}`,
        placeId: place.id,
        placeName: place.name,
        districtName: place.district,
        divisionName: place.division,
        category: place.category,
        imageUrl: img,
        caption: `${place.name} in ${place.district}, ${place.division}`,
      });
    });
  });
  return items;
}

export interface SearchResults {
  query: string;
  places: TouristPlace[];
  districts: District[];
  divisions: Division[];
}

export function searchAll(query: string): SearchResults {
  const q = query.trim().toLowerCase();
  if (!q) {
    return { query, places: [], districts: [], divisions: [] };
  }

  const matchedDivisions = divisions.filter(
    (div) =>
      div.name.toLowerCase().includes(q) ||
      (div.bengaliName && div.bengaliName.toLowerCase().includes(q)) ||
      div.description.toLowerCase().includes(q)
  );

  const matchedDistricts = districts.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      (d.bengaliName && d.bengaliName.toLowerCase().includes(q)) ||
      d.divisionName.toLowerCase().includes(q) ||
      d.intro.toLowerCase().includes(q) ||
      d.majorAttractions.some((a) => a.toLowerCase().includes(q))
  );

  const namedDivisionIds = new Set(
    divisions
      .filter((div) => div.name.toLowerCase().includes(q) || (div.bengaliName && div.bengaliName.toLowerCase().includes(q)))
      .map((div) => div.id)
  );
  const namedDistrictIds = new Set(
    districts
      .filter((d) => d.name.toLowerCase().includes(q) || (d.bengaliName && d.bengaliName.toLowerCase().includes(q)))
      .map((d) => d.id)
  );

  const matchedPlaces = touristPlaces.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      (p.bengaliName && p.bengaliName.toLowerCase().includes(q)) ||
      (p.upazila && p.upazila.toLowerCase().includes(q)) ||
      p.district.toLowerCase().includes(q) ||
      p.division.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.location.toLowerCase().includes(q) ||
      namedDistrictIds.has(p.districtId) ||
      namedDivisionIds.has(p.divisionId)
  );

  return {
    query,
    places: matchedPlaces,
    districts: matchedDistricts,
    divisions: matchedDivisions,
  };
}
