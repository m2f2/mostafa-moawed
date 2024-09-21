import { useEffect, useState } from 'react';

export default function useScrollPosition(): { y: number; max: number } {
  const [scrollPosition, setScrollPosition] = useState({ y: 0, max: 0 });

  const handleScroll = () => {
    const scrollingElement = document.documentElement; 
    const { scrollTop, scrollHeight, clientHeight } = scrollingElement;
    setScrollPosition({ y: scrollTop, max: scrollHeight - clientHeight });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Call handler initially to set position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty array means this runs once on mount and cleanup on unmount

  return { y: scrollPosition.y, max: scrollPosition.max };
}