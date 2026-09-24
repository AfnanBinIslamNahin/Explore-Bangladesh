import { TouristPlace } from '../types';
import { dhakaPlacesPart1 } from './dhakaPlacesPart1';
import { dhakaPlacesPart2 } from './dhakaPlacesPart2';
import { dhakaPlacesPart3 } from './dhakaPlacesPart3';
import { dhakaPlacesPart4 } from './dhakaPlacesPart4';

export const dhakaPlaces: TouristPlace[] = [
  ...dhakaPlacesPart1,
  ...dhakaPlacesPart2,
  ...dhakaPlacesPart3,
  ...dhakaPlacesPart4,
];
