'use client';

import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const onScroll = () => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      {hasScrolled && (
        <a
          className={`scroll-to-top scroll-to-target ${hasScrolled && 'd-block'}`}
          href="#top"
        >
          <span className="fa fa-angle-up"></span>
        </a>
      )}
    </>
  );
}
