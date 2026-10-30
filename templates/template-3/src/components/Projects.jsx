import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../data/portfolioData';
import ScrambleText from './ScrambleText';

gsap.registerPlugin(ScrollTrigger);

// Optional cover images: src/assets/projects/<project id>.(png|jpg|jpeg|webp|svg)
const covers = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' });
const coverFor = (id) => Object.entries(covers).find(([p]) => p.includes(`/${id}.`))?.[1];

const ProjectCard = ({ p }) => {
  const cover = coverFor(p.id);
  return (
    <article className="group flex w-full shrink-0 flex-col border border-bone/10 bg-panel/60 md:w-[min(560px,42vw)]" data-cursor="hot">
      <div className="relative aspect-[16/10] overflow-hidden md:aspect-[16/8] border-b border-bone/10 bg-ink">
        {cover ? (
          <img src={cover} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover opacity-80 grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0" />
        ) : (
          <div className="hud-grid grid h-full w-full place-items-center font-mono text-xs text-dim">{p.id}</div>
        )}
        <span className="absolute left-4 top-4 bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-signal">{p.number} / {p.year}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="mb-3 text-2xl font-bold tracking-tight text-bone md:text-3xl">{p.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-bone/70 md:text-base">{p.description}</p>
        <ul className="mb-8 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">#{t}</li>
          ))}
        </ul>
        <div className="mt-auto flex gap-3">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-signal px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-bone">
              Live ↗
            </a>
          )}
          {p.githubUrl && (
            <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="border border-bone/30 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-signal hover:text-signal">
              Code ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

// Desktop: the section pins and the cards slide horizontally as you scroll.
// Mobile: a normal vertical list.
const Projects = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
      const track = trackRef.current;
      const distance = () => track.scrollWidth - window.innerWidth + 80;
      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => gsap.set(barRef.current, { scaleX: self.progress }),
        },
      });
      return () => tween.scrollTrigger?.kill();
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative w-full overflow-hidden py-24 md:flex md:h-screen md:flex-col md:justify-center md:pb-6 md:pt-20">
      <div className="mx-auto mb-10 flex w-full max-w-[1440px] items-end justify-between px-5 md:mb-12 md:px-10">
        <div>
          <ScrambleText text="02 / Selected work" as="p" className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-signal" />
          <h2 className="text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-none tracking-[-0.03em] text-bone">Projects</h2>
        </div>
        <p className="hidden font-mono text-xs uppercase tracking-[0.2em] text-dim md:block">{String(projects.length).padStart(2, '0')} projects · scroll →</p>
      </div>

      <div ref={trackRef} className="flex flex-col gap-6 px-5 md:w-max md:flex-row md:gap-8 md:px-10">
        {projects.map((p) => <ProjectCard key={p.id} p={p} />)}
      </div>

      <div className="mx-auto mt-10 hidden w-full max-w-[1440px] px-10 md:block">
        <div className="h-px w-full bg-bone/10"><div ref={barRef} className="h-px origin-left scale-x-0 bg-signal" /></div>
      </div>
    </section>
  );
};

export default Projects;
