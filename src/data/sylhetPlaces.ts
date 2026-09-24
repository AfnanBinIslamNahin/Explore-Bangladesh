import { TouristPlace } from '../types';
import { sylhetPlacesPart1 } from './sylhetPlacesPart1';
import { sylhetPlacesPart2 } from './sylhetPlacesPart2';
import { sylhetPlacesPart3 } from './sylhetPlacesPart3';

export const sylhetPlaces: TouristPlace[] = [
  ...sylhetPlacesPart1,
  ...sylhetPlacesPart2,
  ...sylhetPlacesPart3,
];
