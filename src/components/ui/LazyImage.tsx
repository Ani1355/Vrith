import React, { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackText?: string;
  loading?: 'lazy' | 'eager';
  onError?: () => void;
  isAvatar?: boolean;
  threshold?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  fallbackText,
  loading = 'lazy',
  onError,
  isAvatar = false,
  threshold = 0.1,
}) => {
  const [isInView, setIsInView] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsInView(true);
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, hasIntersected]);

  return (
    <div ref={imgRef} className={className}>
      {isInView ? (
        <ImageWithFallback
          src={src}
          alt={alt}
          className={className}
          fallbackText={fallbackText}
          loading={loading}
          onError={onError}
          isAvatar={isAvatar}
        />
      ) : (
        <div className={`${className} bg-gray-100 animate-pulse`}>
          <div className="flex items-center justify-center h-full">
            <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};
