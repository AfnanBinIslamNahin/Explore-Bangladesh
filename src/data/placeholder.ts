/**
 * Clean SVG placeholder containing "Photo Coming Soon"
 * Adheres strictly to the requirement:
 * "If an authentic photograph cannot be found, display a clean placeholder image containing: 'Photo Coming Soon'. Do not display an unrelated image."
 */
export const PHOTO_COMING_SOON = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect width="800" height="500" fill="%23064e3b"/><g fill="%23a7f3d0" opacity="0.85"><path d="M360 190h80l12 18h24c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H324c-8.8 0-16-7.2-16-16v-64c0-8.8 7.2-16 16-16h24l12-18z" fill="%23047857"/><circle cx="400" cy="242" r="24" fill="%23022c22"/><circle cx="400" cy="242" r="16" fill="%2334d399"/><circle cx="452" cy="214" r="5" fill="%23a7f3d0"/></g><text x="400" y="340" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="24" font-weight="700" fill="%23f0fdf4" text-anchor="middle" letter-spacing="0.5">Photo Coming Soon</text><text x="400" y="372" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="14" font-weight="500" fill="%236ee7b7" text-anchor="middle">Authentic destination photograph being updated</text></svg>`;

export function handleImageFallback(e: React.SyntheticEvent<HTMLImageElement>) {
  const target = e.currentTarget;
  if (target.src !== PHOTO_COMING_SOON) {
    target.src = PHOTO_COMING_SOON;
  }
}
