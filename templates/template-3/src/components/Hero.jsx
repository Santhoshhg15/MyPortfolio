import { lazy, Suspense, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { personalInfo, heroContent } from '../data/portfolioData';
import ScrambleText from './ScrambleText';
// three.js is large, so the 3D scene is loaded in its own chunk after the page appears
const HeroScene = lazy(() => import('./HeroScene'));

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-hero="fade"]', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.3 });
      gsap.fromTo('[data-hero="line"]', { scaleX: 0 }, { scaleX: 1, duration: 1.2, ease: 'power3.inOut', delay: 0.2 });
    }, ref);
    return () => ctx.revert();
  }, []);

  const [first, ...rest] = personalInfo.name.split(' ');

  return (
    <section id="home" ref={ref} className="hud-grid relative flex min-h-screen w-full flex-col overflow-hidden px-5 pb-10 pt-24 md:px-10">
      <div className="mx-auto grid w-full max-w-[1440px] flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* left: text */}
        <div className="relative z-10">
          <p data-hero="fade" className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-signal">{heroContent.eyebrow}</p>
          <h1 className="font-sans text-[clamp(3.2rem,11vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em] text-bone">
            <ScrambleText text={first} as="span" className="block" trigger="mount" delay={200} />
            <ScrambleText text={rest.join(' ') || ' '} as="span" className="block text-transparent [-webkit-text-stroke:1.5px_#e8e6df]" trigger="mount" delay={500} />
          </h1>
          <div data-hero="line" className="my-8 h-px w-full max-w-xl origin-left bg-bone/25" />
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-10">
            <div data-hero="fade" className="max-w-md">
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-dim">{personalInfo.role}</p>
              <p className="text-lg leading-relaxed text-bone/85 md:text-xl">{heroContent.intro}</p>
            </div>
          </div>
          <div data-hero="fade" className="mt-8 flex flex-wrap gap-3">
            <a href={heroContent.ctaPrimary.href} className="group inline-flex items-center gap-3 bg-signal px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bone">
              {heroContent.ctaPrimary.label}
              <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a href={heroContent.ctaSecondary.href} className="inline-flex items-center gap-3 border border-bone/30 px-6 py-3.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-signal hover:text-signal">
              {heroContent.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* right: 3D scene inside a HUD frame */}
        <div data-hero="fade" className="hud-frame relative h-[48vh] min-h-[320px] w-full border border-bone/10 bg-panel/40 lg:h-[70vh]">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
          <span className="pointer-events-none absolute left-4 top-3 font-mono text-[10px] uppercase tracking-[0.25em] text-dim">core.view — drag to rotate</span>
          <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-dim">{personalInfo.city}</span>
        </div>
      </div>

      {/* bottom strip */}
      <div className="mx-auto mt-10 flex w-full max-w-[1440px] items-center justify-between border-t border-bone/10 pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-dim">
        <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />{personalInfo.availability}</span>
        <span className="hidden sm:block">Scroll ↓</span>
      </div>
    </section>
  );
};

export default Hero;
