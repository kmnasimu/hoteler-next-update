'use client';

import React, { useEffect, useState } from 'react';

const RootLayoutClient: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for actual page resources to load
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return loading ? <div className="preloader"></div> : <>{children}</>;
};

export default RootLayoutClient;
