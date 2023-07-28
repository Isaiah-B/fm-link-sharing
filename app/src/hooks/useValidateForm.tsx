import { useEffect, useRef } from 'react';

export default function useValidateForm() {
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const submitBtn = document.querySelector('button[name=submitBtn]');

    const handleSubmit = () => {
      if (ref.current) {
        ref.current.className = 'submitted';
      }
    }

    if (submitBtn) {
      submitBtn.addEventListener('click', handleSubmit);
    }

    return () => submitBtn?.removeEventListener('click', handleSubmit);
  }, [ref]);

  return ref;
}