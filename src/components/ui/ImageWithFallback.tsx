import React, { useState, useEffect } from 'react';
import { createFallbackSvg, createAvatarFallback, getInitials } from '@/lib/imageUtils';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  fallbackIcon?: string;
  loading?: 'lazy' | 'eager';
  onError?: () => void;
  isAvatar?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  fallbackIcon,
  loading = 'lazy',
  onError,
  isAvatar = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fallbackSrc, setFallbackSrc] = useState<string>('');

  useEffect(() => {
    if (hasError) {
      if (isAvatar) {
        const initials = fallbackText || getInitials(alt);
        setFallbackSrc(createAvatarFallback(initials));
      } else {
        const text = fallbackText || alt;
        setFallbackSrc(createFallbackSvg(text));
      }
    }
  }, [hasError, fallbackText, alt, isAvatar]);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError && fallbackSrc) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        loading={loading}
      />
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
      />
    </div>
  );
};
