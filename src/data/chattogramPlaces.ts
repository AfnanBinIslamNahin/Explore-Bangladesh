import { TouristPlace } from '../types';
import { chattogramPlacesPart1 } from './chattogramPlacesPart1';
import { chattogramPlacesPart2 } from './chattogramPlacesPart2';
import { chattogramPlacesPart3 } from './chattogramPlacesPart3';

export const chattogramPlaces: TouristPlace[] = [
  ...chattogramPlacesPart1,
  ...chattogramPlacesPart2,
  ...chattogramPlacesPart3,
];
