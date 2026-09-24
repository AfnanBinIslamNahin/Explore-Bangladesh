import { TouristPlace } from '../types';
import { mymensinghPlacesPart1 } from './mymensinghPlacesPart1';
import { mymensinghPlacesPart2 } from './mymensinghPlacesPart2';

export const mymensinghPlaces: TouristPlace[] = [
  ...mymensinghPlacesPart1,
  ...mymensinghPlacesPart2,
];
