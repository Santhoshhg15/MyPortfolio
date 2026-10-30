import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experience } from '../data/portfolioData';
import ScrambleText from './ScrambleText';

gsap.registerPlugin(ScrollTrigger);

// Vertical timeline: the line fills as you scroll and each node lights up when the fill reaches it.
const Journey = () => {
  const ref = useRef(null);
  const fillRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(fillRef.current, { scaleY: 0 }, {
        scaleY: 1, ease: 'none',
        scrollTrigger: { trigger: '[data-journey="list"]', start: 'top 70%', end: 'bottom 60%', scrub: true },
      });
      gsap.utils.toArray('[data-journey="item"]').forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: 'top 65%',
          onEnter: () => item.classList.add('is-on'),
          onLeaveBack: () => item.classList.remove('is-on'),
        });
        gsap.fromTo(item, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: item, start: 'top 85%', once: true } });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" ref={ref} className="w-full px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ScrambleText text="03 / Journey" as="p" className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-signal" />
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-bone">Where I've been learning and building.</h2>
        </div>

        <ol data-journey="list" className="relative pl-10">
          <span className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-bone/15" aria-hidden="true" />
          <span ref={fillRef} className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px origin-top bg-signal" aria-hidden="true" />
          {experience.map((e) => (
            <li key={e.role + e.period} data-journey="item" className="group relative mb-14 last:mb-0 [&.is-on_.node]:scale-100 [&.is-on_.node]:bg-signal">
              <span className="node absolute -left-10 top-1.5 h-[15px] w-[15px] scale-75 border border-signal bg-ink transition-all duration-500" aria-hidden="true" />
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-dim">{e.period}</p>
              <h3 className="text-2xl font-bold tracking-tight text-bone md:text-3xl">{e.role}</h3>
              <p className="mb-3 font-mono text-sm text-signal">{e.org}</p>
              <p className="max-w-xl leading-relaxed text-bone/70">{e.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Journey;
