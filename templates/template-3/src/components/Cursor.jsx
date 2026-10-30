import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Crosshair cursor: a small dot that follows the pointer exactly and a ring that trails behind
// and grows over links and buttons. Only on devices with a real mouse.
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;

    document.body.classList.add('has-cursor');
    const dot = dotRef.current;
    const ring = ringRef.current;
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 1 });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const move = (e) => {
      gsap.set(dot, { x: e.clientX, y: e.clientY });
      ringX(e.clientX);
      ringY(e.clientY);
    };
    const over = (e) => {
      const hot = e.target.closest('a, button, input, textarea, [data-cursor="hot"]');
      gsap.to(ring, { scale: hot ? 1.8 : 1, borderColor: hot ? '#ff5b1f' : 'rgba(232,230,223,0.6)', duration: 0.25 });
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerover', over);
    return () => {
      document.body.classList.remove('has-cursor');
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerover', over);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[999] h-9 w-9 rounded-full border border-bone/60 opacity-0" aria-hidden="true" />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 rounded-full bg-signal opacity-0" aria-hidden="true" />
    </>
  );
};

export default Cursor;
