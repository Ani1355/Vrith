import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
}

export const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      if (!window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      
      // Get Core Web Vitals if available
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              loadTime,
              firstContentfulPaint,
              largestContentfulPaint: entry.startTime,
              cumulativeLayoutShift: 0, // Would need CLS observer
              firstInputDelay: 0, // Would need FID observer
              totalBlockingTime: 0, // Would need TBT calculation
            }));
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // Fallback metrics
      setTimeout(() => {
        setMetrics({
          loadTime,
          firstContentfulPaint,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          totalBlockingTime: 0,
        });
      }, 2000);

      return () => observer.disconnect();
    };

    const cleanup = measurePerformance();
    return cleanup;
  }, []);

  if (!metrics || process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold">Performance</span>
        <button 
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-400 hover:text-white"
        >
          {isVisible ? '−' : '+'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-1">
          <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
          <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
          <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
          <div className="text-green-400">
            {metrics.firstContentfulPaint < 1800 ? '✅ Good' : '⚠️ Needs improvement'}
          </div>
        </div>
      )}
    </div>
  );
};
