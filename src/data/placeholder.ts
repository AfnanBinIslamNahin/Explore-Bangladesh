/**
 * Clean SVG fallback for Explore Bangladesh destinations
 * Does NOT display "Photo Coming Soon" - provides a clean, elegant branded scenery fallback.
 */
export const DEFAULT_FALLBACK_IMAGE = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="%23022c22"/><stop offset="50%" stop-color="%23064e3b"/><stop offset="100%" stop-color="%23022c22"/></linearGradient></defs><rect width="800" height="500" fill="url(%23g)"/><path d="M120 380 L280 230 L400 330 L540 200 L720 380 Z" fill="%23047857" opacity="0.6"/><path d="M220 380 L360 260 L480 350 L620 220 L760 380 Z" fill="%23059669" opacity="0.8"/><circle cx="580" cy="170" r="36" fill="%2334d399" opacity="0.85"/><text x="400" y="420" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif" font-size="18" font-weight="700" fill="%23f0fdf4" text-anchor="middle" letter-spacing="2">EXPLORE BANGLADESH</text></svg>`;

export const PHOTO_COMING_SOON = DEFAULT_FALLBACK_IMAGE;

export function handleImageFallback(e: React.SyntheticEvent<HTMLImageElement>) {
  const target = e.currentTarget;
  if (target.src !== DEFAULT_FALLBACK_IMAGE) {
    target.src = DEFAULT_FALLBACK_IMAGE;
  }
}

