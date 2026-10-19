import React, { useEffect, useState } from 'react';

export default function ScrollRail() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = window.scrollY / scrollHeight;
        setProgress(Math.min(1, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-rail" aria-hidden="true">
      <i style={{ width: `${progress * 100}%` }} />
    </div>
  );
}
