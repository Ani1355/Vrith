/**
 * Image utility functions for optimization and fallback handling
 */

export interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'jpg' | 'png';
  fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
}

/**
 * Optimizes Unsplash URLs for better performance and reliability
 */
export const optimizeUnsplashUrl = (
  url: string,
  options: ImageOptimizationOptions = {}
): string => {
  const {
    width = 1080,
    height = 720,
    quality = 80,
    format = 'webp',
    fit = 'cover'
  } = options;

  // Extract the base photo ID from Unsplash URL
  const photoIdMatch = url.match(/photo-([a-zA-Z0-9-]+)/);
  if (!photoIdMatch) return url;

  const photoId = photoIdMatch[1];
  
  // Build optimized URL
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&h=${height}&fit=${fit}&auto=format&q=${quality}&fm=${format}`;
};

/**
 * Creates a fallback SVG image for broken images
 */
export const createFallbackSvg = (
  text: string,
  width: number = 400,
  height: number = 300,
  backgroundColor: string = '#f3f4f6',
  textColor: string = '#6b7280'
): string => {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${backgroundColor}"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="16" fill="${textColor}">${text}</text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

/**
 * Creates a fallback avatar SVG
 */
export const createAvatarFallback = (
  initials: string,
  size: number = 48,
  backgroundColor: string = '#e5e7eb',
  textColor: string = '#6b7280'
): string => {
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="${backgroundColor}"/>
      <text x="${size/2}" y="${size/2 + 4}" text-anchor="middle" font-family="Arial, sans-serif" font-size="${size/3}" fill="${textColor}">${initials}</text>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

/**
 * Preloads images for better performance
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Checks if an image URL is valid and accessible
 */
export const checkImageAvailability = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Gets the first letter of each word for initials
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('')
    .toUpperCase()
    .slice(0, 2);
};
