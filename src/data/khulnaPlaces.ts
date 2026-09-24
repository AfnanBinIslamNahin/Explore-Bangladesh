import { TouristPlace } from '../types';
import { khulnaPlacesPart1 } from './khulnaPlacesPart1';
import { khulnaPlacesPart2 } from './khulnaPlacesPart2';
import { khulnaPlacesPart3 } from './khulnaPlacesPart3';
import { khulnaPlacesPart4 } from './khulnaPlacesPart4';
import { khulnaPlacesPart5 } from './khulnaPlacesPart5';

export const khulnaPlaces: TouristPlace[] = [
  ...khulnaPlacesPart1,
  ...khulnaPlacesPart2,
  ...khulnaPlacesPart3,
  ...khulnaPlacesPart4,
  ...khulnaPlacesPart5,
];
