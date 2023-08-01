import { useState } from "react";

interface FlashType {
  showComponent: boolean,
  componentOpacity: number,
  flash: () => void,
}

export default function useFlashComponent(): FlashType {
  const [showComponent, setShowComponent] = useState(false);
  const [componentOpacity, setComponentOpacity] = useState(0);

  const flash = () => {
    setShowComponent(true);
    setComponentOpacity(1);
  
    // Fade component out after 2 seconds, then remove it from
    // the DOM after another 0.5 seconds
    setTimeout(() => {
      setComponentOpacity(0);
  
      setTimeout(() => {
        setShowComponent(false);
      }, 2500);
  
    }, 2000);
  }
  

  return { showComponent, componentOpacity, flash };
}