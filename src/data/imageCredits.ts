import creditsData from './imageCredits.json';

export interface ImageCredit {
  destinationId: string;
  file: string;
  path: string;
  title: string;
  artist: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
}

export const imageCredits: ImageCredit[] = creditsData as ImageCredit[];

export function getCreditForImage(imagePath: string): ImageCredit | undefined {
  return imageCredits.find(c => c.path === imagePath);
}

export function getCreditsForDestination(destinationId: string): ImageCredit[] {
  return imageCredits.filter(c => c.destinationId === destinationId);
}
