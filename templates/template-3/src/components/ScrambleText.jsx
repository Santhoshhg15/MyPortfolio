import { useEffect, useRef, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/';

// Text that "decodes" from random characters into the real text, left to right.
// The real text stays the accessible name; the animated layer is aria-hidden.
// trigger: 'mount' (play once on load) or 'view' (play once when scrolled into view).
const ScrambleText = ({ text, as: Tag = 'span', className = '', delay = 0, speed = 30, trigger = 'view' }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    let interval;
    let timeout;
    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      timeout = setTimeout(() => {
        let frame = 0;
        const total = text.length;
        interval = setInterval(() => {
          frame += 1;
          const locked = Math.floor(frame / 2); // one more character locks every 2 frames
          setDisplay(
            text
              .split('')
              .map((ch, i) => (ch === ' ' || i < locked ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
              .join('')
          );
          if (locked >= total) {
            clearInterval(interval);
            setDisplay(text);
          }
        }, speed);
      }, delay);
    };

    let observer;
    if (trigger === 'mount') {
      play();
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            play();
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      observer.observe(el);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [text, delay, speed, trigger]);

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
};

export default ScrambleText;
