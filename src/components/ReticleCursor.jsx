import React, { useEffect, useRef } from 'react';

export default function ReticleCursor() {
  const dotRef = useRef(null);
  const reticleRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    const dot = dotRef.current;
    const ret = reticleRef.current;
    if (!dot || !ret) return;

    document.body.classList.add('cursor-on');

    const R = { x: 0, y: 0, w: 26, h: 26 };
    const T = { x: 0, y: 0, w: 26, h: 26 };
    let locked = null;
    let animId;

    const lerp = (a, b, t) => a + (b - a) * t;

    const handlePointerMove = (e) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      if (!locked) {
        T.x = e.clientX;
        T.y = e.clientY;
        T.w = 26;
        T.h = 26;
      }
    };

    const handlePointerOver = (e) => {
      const hit = e.target.closest('a, button, .interactive-target, input, textarea, select');
      if (hit) {
        locked = hit;
        ret.classList.add('locked');
      }
    };

    const handlePointerOut = (e) => {
      if (locked && !e.relatedTarget?.closest?.('a, button, .interactive-target, input, textarea, select')) {
        locked = null;
        ret.classList.remove('locked');
      }
    };

    const tick = () => {
      if (locked) {
        const b = locked.getBoundingClientRect();
        T.x = b.left + b.width / 2;
        T.y = b.top + b.height / 2;
        T.w = b.width + 14;
        T.h = b.height + 14;
      }

      R.x = lerp(R.x, T.x, 0.32);
      R.y = lerp(R.y, T.y, 0.32);
      R.w = lerp(R.w, T.w, 0.26);
      R.h = lerp(R.h, T.h, 0.26);

      ret.style.width = `${R.w}px`;
      ret.style.height = `${R.h}px`;
      ret.style.transform = `translate3d(${R.x - R.w / 2}px, ${R.y - R.h / 2}px, 0)`;

      animId = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerover', handlePointerOver);
    document.addEventListener('pointerout', handlePointerOut);
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerover', handlePointerOver);
      document.removeEventListener('pointerout', handlePointerOut);
      document.body.classList.remove('cursor-on');
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="reticle" ref={reticleRef}>
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
}
