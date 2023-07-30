import { useRef, useEffect } from 'react';

export default function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLElement | HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
        callback();
      }
    }
    
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [ref, callback]);

  return ref;
}