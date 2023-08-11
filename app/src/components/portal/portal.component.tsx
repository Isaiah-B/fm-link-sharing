import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: React.ReactNode,
}

type Ref = {
  flash: () => void,
}

export const Portal = forwardRef<Ref, PortalProps>(({ children }: PortalProps, ref) => {
  const portalRoot = document.getElementById('portal-root');
  const wrapperEl = document.createElement('div');
  wrapperEl.style.transition = 'all 2s';

  const [showComponent, setShowComponent] = useState(false);
  const [canFlash, setCanFlash] = useState(true);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    portalRoot?.appendChild(wrapperEl);
    wrapperRef.current = wrapperEl;

    return () => { portalRoot?.removeChild(wrapperEl) }
  }, [portalRoot, wrapperEl]);

  useImperativeHandle(ref, () => ({
    // Mount and display child component for 2 seconds before fading it out and unmounting it
    flash() {
      if (!canFlash) return;
      
      setCanFlash(false);
      setShowComponent(true);

      if (!wrapperRef.current) return;

      wrapperRef.current.style.opacity = '1';

      // Fade wrapper out after 2 seconds, then remove child from
      // the DOM after another 0.5 seconds
      setTimeout(() => {
        if (wrapperRef.current) {
          wrapperRef.current.style.opacity = '0';

          setTimeout(() => {
            setShowComponent(false);
            if (wrapperRef.current) {
              wrapperRef.current.style.removeProperty('opacity');
            }

            setCanFlash(true);
          }, 2500);
        }

      }, 2000);
    }
  }));

  if (showComponent) {
    return createPortal(children, wrapperEl)
  } else {
    return null;
  }
});

export default Portal;