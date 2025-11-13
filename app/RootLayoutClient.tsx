'use client';

import React, { useEffect, useState } from 'react';

const RootLayoutClient: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <div className="preloader"></div> : <>{children}</>;
};

export default RootLayoutClient;
