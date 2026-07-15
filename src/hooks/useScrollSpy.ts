import { useEffect, useState } from 'react';

export function useScrollSpy(ids: string[], offset = 120) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handler = () => {
      const scrollPos = window.scrollY + offset;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(ids[i]);
          return;
        }
      }
      setActiveId(ids[0] ?? '');
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [ids, offset]);

  return activeId;
}
