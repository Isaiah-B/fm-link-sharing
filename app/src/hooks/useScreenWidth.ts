import { useEffect, useState } from "react";

export default function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const resizeWindow = () => {
      setScreenWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', resizeWindow);
  
    return () => window.removeEventListener('resize', resizeWindow);
  }, []);

  return screenWidth;
}