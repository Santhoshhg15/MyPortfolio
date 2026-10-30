import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { servicesContent } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const headingStyle = {
  backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #d4d4d8 50%, #52525b 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
};

const Arrow = ({ open }) => (
  <svg
    viewBox="0 0 48 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 shrink-0 transition-transform duration-300 md:h-10 md:w-10"
    style={{ transform: `rotate(${open ? -45 : 45}deg)` }}
    aria-hidden="true"
  >
    <path d="M2 12h42M34 3l10 9-10 9" />
  </svg>
);

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 85%', once: true } }
      );
    });
    return () => {
      window.removeEventListener('resize', check);
      ctx.revert();
    };
  }, []);

  return (
    <section id="services" className="w-full overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <h2
          ref={headingRef}
          className="mb-16 ml-auto text-right text-[min(14vw,4rem)] font-black uppercase leading-[0.9] tracking-tighter text-transparent md:mb-24 md:text-[7rem] 2xl:text-[8rem]"
          style={headingStyle}
        >
          {servicesContent.headingLines.map((line) => (
            <span key={line} className="block">{line}</span>
          ))}
        </h2>

        <div className="border-t border-white/20">
          {servicesContent.items.map((item, i) => {
            const open = openIndex === i;
            const hoverClasses = isMobile ? '' : 'md:hover:bg-[#CCFF00] md:hover:text-black';
            return (
              <div key={item.title} className={`group border-b border-white/20 transition-colors duration-300 ${open ? 'bg-[#CCFF00] text-black' : 'bg-transparent text-white'} ${hoverClasses}`}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-2 py-6 text-left md:px-6 md:py-9"
                >
                  <span className="flex min-w-0 items-baseline gap-4 md:gap-10">
                    <span className="w-6 shrink-0 text-xs font-medium tracking-widest md:w-12 md:text-xl">{String(i + 1).padStart(2, '0')}</span>
                    <span className="truncate text-lg font-light uppercase tracking-tight md:text-5xl">{item.title}</span>
                  </span>
                  <span className={`transition-colors duration-300 ${open ? 'text-black' : 'text-[#CCFF00]'} md:group-hover:text-black`}>
                    <Arrow open={open} />
                  </span>
                </button>

                {/* expanding content: height/opacity transition ~500ms */}
                <div className={`grid transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="grid gap-8 px-2 pb-10 pt-2 md:grid-cols-2 md:gap-16 md:px-6 md:pb-14">
                      <ul className="space-y-3">
                        {item.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3 text-sm font-light leading-relaxed md:text-lg">
                            <span className={`mt-[0.55em] h-2 w-2 shrink-0 ${open ? 'bg-black' : 'bg-[#CCFF00]'}`} aria-hidden="true" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                      <div>
                        <p className="max-w-xl text-sm font-light leading-relaxed md:text-lg">{item.description}</p>
                        {item.cta && (
                          <a
                            href={item.cta.href}
                            className="relative mt-8 inline-block bg-black px-10 py-3 text-xs font-bold uppercase tracking-widest text-[#CCFF00] transition-colors duration-300 hover:bg-zinc-900"
                          >
                            <span className="absolute -left-1 -top-1 h-2 w-2 border-l border-t border-black" aria-hidden="true" />
                            <span className="absolute -right-1 -top-1 h-2 w-2 border-r border-t border-black" aria-hidden="true" />
                            <span className="absolute -bottom-1 -left-1 h-2 w-2 border-b border-l border-black" aria-hidden="true" />
                            <span className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-black" aria-hidden="true" />
                            {item.cta.label}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
