'use client';

import React, { useEffect, useState } from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';

const RootLayoutClient: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for actual page load instead of artificial timer
    const handleLoad = () => {
      setLoading(false);
    };

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        setLoading(false);
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, []);

  return (
    <ErrorBoundary>
      {loading ? <div className="preloader"></div> : <>{children}</>}
    </ErrorBoundary>
  );
};

export default RootLayoutClient;
