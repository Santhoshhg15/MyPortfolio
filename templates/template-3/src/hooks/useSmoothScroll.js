import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling with Lenis, driven by GSAP's ticker so ScrollTrigger animations stay in sync.
export const useSmoothScroll = () => {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // anchor links (#about, #contact…) scroll smoothly through Lenis
    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -60 });
    };
    document.addEventListener('click', onClick);

    // re-measure once images and fonts have loaded
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 800);

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('load', refresh);
      clearTimeout(t);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
};
