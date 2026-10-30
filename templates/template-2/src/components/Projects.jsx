import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsContent } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

// Optional cover images: src/assets/projects/<project id>.png|jpg|webp|svg  (e.g. project-1.png)
const coverImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' });
const coverFor = (id) => Object.entries(coverImages).find(([path]) => path.includes(`/${id}.`))?.[1];

const headingStyle = {
  backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #9ca3af 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
};

const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

// "INSTAGRAM *ai*" -> INSTAGRAM + light italic serif gray "ai"
const TitleLine = ({ line }) => (
  <span className="block">
    {line.split(/(\*[^*]+\*)/g).map((part, i) =>
      part.startsWith('*') ? (
        <span key={i} className="font-[family-name:var(--font-serif-accent)] font-normal lowercase italic text-gray-400">{part.slice(1, -1)}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    )}
  </span>
);

const Project = ({ project, index, onCtaClick }) => {
  const rowRef = useRef(null);
  const imageFirst = index % 2 === 0;
  const cover = coverFor(project.id);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const q = (sel) => rowRef.current.querySelectorAll(sel);
      const tl = gsap.timeline({ scrollTrigger: { trigger: rowRef.current, start: 'top 80%', once: true } });
      tl.fromTo(q('[data-reveal="image"]'), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 0)
        .fromTo(q('[data-reveal="text"]'), { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.12 }, 0.1);
    }, rowRef);
    return () => ctx.revert();
  }, []);

  // Desktop: image on one side (alternating), text on the other. Mobile order: number -> title -> image -> description -> buttons
  const textCol = imageFirst ? 'md:col-start-2' : 'md:col-start-1';
  const imageCol = imageFirst ? 'md:col-start-1' : 'md:col-start-2';

  return (
    <article ref={rowRef} className="group grid gap-x-16 gap-y-8 md:grid-cols-2 md:grid-rows-[1fr_auto_1fr] md:gap-y-0">
      <div className={`md:row-start-2 ${textCol}`}>
        <p data-reveal="text" className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#CCFF00]">{project.number}</p>
        <h3
          data-reveal="text"
          className="text-[clamp(1.9rem,6vw,4rem)] font-extrabold uppercase leading-[1.05] tracking-tighter text-white md:mb-6"
        >
          {project.title.map((line, i) => (
            <TitleLine key={i} line={line} />
          ))}
        </h3>
      </div>

      <div data-reveal="image" className={`md:row-span-3 md:row-start-1 md:self-center ${imageCol}`}>
        <div className="aspect-[16/10] overflow-hidden rounded-[3px] bg-zinc-900">
          {cover ? (
            <img
              src={cover}
              alt={`${project.title.join(' ').replace(/\*/g, '')} project preview`}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-900 to-black text-xs text-white/30 transition-transform duration-700 group-hover:scale-105">
              {project.id}
            </div>
          )}
        </div>
      </div>

      <div className={`md:row-start-3 md:pt-6 ${textCol}`}>
        <p data-reveal="text" className="mb-8 max-w-[500px] text-sm font-light leading-[1.7] text-[#9CA3AF] md:text-base">
          {project.description}
        </p>
        <div data-reveal="text" className="flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onCtaClick?.('live', project)}
            className="inline-flex items-center gap-2 rounded-full border border-[#CCFF00] bg-[#CCFF00] px-6 py-2.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#b8e600]"
          >
            Live Demo <span aria-hidden="true">↗</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => onCtaClick?.('github', project)}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            GitHub <GitHubIcon />
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ onCtaClick }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.15, scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true } }
      );
    });
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    return () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="w-full overflow-hidden bg-[#050505] px-6 pb-24 pt-20 text-white md:px-16 md:pb-24">
      <div className="mx-auto max-w-[1400px]">
        <div ref={headerRef} className="mb-20 grid items-end gap-8 md:mb-32 md:grid-cols-2">
          <h2 className="text-[clamp(2.25rem,8vw,6rem)] font-black leading-none tracking-tighter">
            <span className="uppercase text-transparent" style={headingStyle}>{projectsContent.headingMain}</span>{' '}
            <span className="font-[family-name:var(--font-serif-accent)] font-normal lowercase italic text-gray-300">{projectsContent.headingAccent}</span>
          </h2>
          <div className="md:justify-self-end">
            <p className="mb-6 max-w-[400px] text-sm font-light leading-relaxed text-gray-400 md:text-base">{projectsContent.description}</p>
            <a
              href={projectsContent.readMore.href}
              className="inline-flex items-center gap-2 rounded-full border border-[#CCFF00] bg-[#CCFF00] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-black transition-colors duration-300 hover:bg-[#b8e600]"
            >
              {projectsContent.readMore.label} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-24 md:gap-40">
          {projectsContent.items.map((project, i) => (
            <Project key={project.id} project={project} index={i} onCtaClick={onCtaClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
