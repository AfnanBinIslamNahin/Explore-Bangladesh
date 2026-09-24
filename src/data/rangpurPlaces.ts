import { TouristPlace } from '../types';
import { rangpurPlacesPart1 } from './rangpurPlacesPart1';
import { rangpurPlacesPart2 } from './rangpurPlacesPart2';
import { rangpurPlacesPart3 } from './rangpurPlacesPart3';
import { rangpurPlacesPart4 } from './rangpurPlacesPart4';

export const rangpurPlaces: TouristPlace[] = [
  ...rangpurPlacesPart1,
  ...rangpurPlacesPart2,
  ...rangpurPlacesPart3,
  ...rangpurPlacesPart4,
];
