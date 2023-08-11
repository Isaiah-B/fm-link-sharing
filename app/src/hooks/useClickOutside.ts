import { useRef, useEffect } from 'react';

export default function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
        callback();
      }
    }
    
    document.addEventListener('mouseup', handleClickOutside);

    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, [ref, callback]);

  return ref;
}