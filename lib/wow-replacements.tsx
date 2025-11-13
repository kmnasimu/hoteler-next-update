'use client';

import { FadeInUp, FadeInLeft, FadeInRight, FadeIn } from './animations';

interface WOWReplacementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeIn';
}

/**
 * Replaces WOW.js classes with framer-motion animations
 * Usage: Replace className="wow fadeInUp" with <WOWReplacement animation="fadeInUp">
 */
export const WOWReplacement: React.FC<WOWReplacementProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fadeInUp',
}) => {
  // Remove wow classes from className
  const cleanClassName = className
    .replace(/\bwow\b/g, '')
    .replace(/\bfadeInUp\b/g, '')
    .replace(/\bfadeInLeft\b/g, '')
    .replace(/\bfadeInRight\b/g, '')
    .replace(/\bfadeIn\b/g, '')
    .trim();

  const delayInSeconds = delay / 1000; // Convert ms to seconds

  switch (animation) {
    case 'fadeInLeft':
      return <FadeInLeft delay={delayInSeconds} className={cleanClassName}>{children}</FadeInLeft>;
    case 'fadeInRight':
      return <FadeInRight delay={delayInSeconds} className={cleanClassName}>{children}</FadeInRight>;
    case 'fadeIn':
      return <FadeIn delay={delayInSeconds} className={cleanClassName}>{children}</FadeIn>;
    case 'fadeInUp':
    default:
      return <FadeInUp delay={delayInSeconds} className={cleanClassName}>{children}</FadeInUp>;
  }
};

