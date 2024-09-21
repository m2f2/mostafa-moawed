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

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return { y: scrollPosition.y, max: scrollPosition.max };
}