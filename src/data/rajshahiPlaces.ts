import { TouristPlace } from '../types';
import { rajshahiPlacesPart1 } from './rajshahiPlacesPart1';
import { rajshahiPlacesPart2 } from './rajshahiPlacesPart2';
import { rajshahiPlacesPart3 } from './rajshahiPlacesPart3';
import { rajshahiPlacesPart4 } from './rajshahiPlacesPart4';

export const rajshahiPlaces: TouristPlace[] = [
  ...rajshahiPlacesPart1,
  ...rajshahiPlacesPart2,
  ...rajshahiPlacesPart3,
  ...rajshahiPlacesPart4,
];
