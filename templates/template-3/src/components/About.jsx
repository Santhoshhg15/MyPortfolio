import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, aboutContent, skillGroups } from '../data/portfolioData';
import ScrambleText from './ScrambleText';

gsap.registerPlugin(ScrollTrigger);

// Optional portrait: src/assets/about/about-portrait.(png|jpg|webp)
const portraits = import.meta.glob('../assets/about/about-portrait.*', { eager: true, import: 'default' });
const portrait = Object.values(portraits)[0];

const About = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('[data-about="reveal"]', { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      });
      // count-up numbers
      ref.current.querySelectorAll('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end, duration: 1.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => { el.textContent = Math.round(obj.v); },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="relative w-full px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1440px]">
        <ScrambleText text={aboutContent.label} as="p" className="mb-10 font-mono text-xs uppercase tracking-[0.3em] text-signal" />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* portrait */}
          <div data-about="reveal" className="hud-frame relative aspect-[4/5] w-full max-w-[420px] overflow-hidden border border-bone/10 bg-panel">
            {portrait ? (
              <>
                <img src={portrait} alt={`${personalInfo.name} — ${personalInfo.role}`} className="h-full w-full object-cover grayscale contrast-125" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 bg-signal mix-blend-multiply opacity-25" aria-hidden="true" />
              </>
            ) : (
              <div className="grid h-full w-full place-items-center font-mono text-xs text-dim">about-portrait.png</div>
            )}
            <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.25em] text-bone/70">ID · {personalInfo.brandName}</span>
          </div>

          {/* text */}
          <div>
            <h2 data-about="reveal" className="mb-8 text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-bone">
              {aboutContent.heading}
            </h2>
            <p data-about="reveal" className="mb-12 max-w-2xl text-lg leading-relaxed text-bone/75 md:text-xl">{aboutContent.paragraph}</p>

            <dl className="mb-14 grid grid-cols-3 gap-4 border-y border-bone/10 py-8">
              {aboutContent.stats.map((s) => (
                <div key={s.label} data-about="reveal">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-sans text-4xl font-bold tracking-tight text-bone md:text-6xl">
                    <span data-count={s.value}>0</span><span className="text-signal">{s.suffix}</span>
                  </dd>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-dim md:text-xs">{s.label}</p>
                </div>
              ))}
            </dl>

            {/* skills modules */}
            <div className="grid gap-px border border-bone/10 bg-bone/10 sm:grid-cols-2">
              {skillGroups.map((g, i) => (
                <div key={g.title} data-about="reveal" className="bg-ink p-6 transition-colors hover:bg-panel">
                  <p className="mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-signal">
                    <span>{g.title}</span><span className="text-dim">0{i + 1}</span>
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <li key={it} className="border border-bone/15 px-2.5 py-1 font-mono text-xs text-bone/85">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
