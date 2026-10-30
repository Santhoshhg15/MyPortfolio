import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, aboutContent, skillRows } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

// Optional: src/assets/about/about-portrait.png (otherwise a placeholder box is shown)
const aboutImages = import.meta.glob('../assets/about/about-portrait.*', { eager: true, import: 'default' });
const aboutImage = Object.values(aboutImages)[0];

const headingStyle = {
  backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #d4d4d8 50%, #52525b 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
};

const GradientHeading = ({ headingRef, className }) => (
  <h2
    ref={headingRef}
    className={`font-black uppercase leading-[0.85] tracking-tighter text-transparent ${className}`}
    style={headingStyle}
  >
    {aboutContent.heading}
  </h2>
);

const MarqueeRow = ({ label, items, reverse }) => {
  // The track holds the same content twice, so translating -50% loops without a visible jump
  const content = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden whitespace-nowrap py-3 md:py-4">
      <span className="absolute inset-y-0 left-0 z-10 flex items-center bg-gradient-to-r from-[#030303] via-[#030303] to-transparent pl-6 pr-12 text-xs font-semibold uppercase tracking-[0.3em] text-white md:pl-12 md:text-sm">
        {label}
      </span>
      <div className={`flex w-max ${reverse ? 'marquee-right' : 'marquee-left'}`}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {content.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center text-sm font-medium tracking-[0.15em] text-zinc-500 md:text-lg">
                <span className="mx-4 text-zinc-700 md:mx-6">·</span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const mobileHeadingRef = useRef(null);
  const desktopHeadingRef = useRef(null);
  const cardRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      [mobileHeadingRef.current, desktopHeadingRef.current].forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' } }
        );
      });

      const words = paragraphRef.current.querySelectorAll('[data-word]');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: (i, el) => (el.dataset.highlight ? '#ffffff' : '#d4d4d8'),
          opacity: 1,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', end: 'bottom 50%', scrub: true },
        }
      );
    }, sectionRef);

    // fonts and images change the layout after load — measure again
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 600);
    return () => {
      window.removeEventListener('load', refresh);
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  const highlightSet = new Set(aboutContent.highlights.map((h) => h.toLowerCase()));
  const words = aboutContent.paragraph.split(' ');

  return (
    <section id="about" ref={sectionRef} className="relative w-full overflow-hidden bg-[#050505] text-white">
      <div className="mx-auto min-h-screen max-w-[1280px] px-6 py-24 md:px-12">
        {/* mobile heading */}
        <div className="mb-10 text-center md:hidden">
          <GradientHeading headingRef={mobileHeadingRef} className="text-[18vw]" />
        </div>

        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
          {/* left: portrait */}
          <div className="w-[190px] shrink-0 sm:w-[220px] md:w-[250px] lg:w-[260px] md:self-start md:pt-12">
            {aboutImage ? (
              <img src={aboutImage} alt={`${personalInfo.name} — portrait`} className="w-full" style={{ filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.7))' }} />
            ) : (
              <div className="flex aspect-[3/4] w-full items-center justify-center rounded-2xl border border-white/10 text-center text-xs text-white/30">
                Add src/assets/about/about-portrait.png
              </div>
            )}
          </div>

          {/* right: heading + glass card */}
          <div className="w-full flex-1">
            <div className="mb-6 hidden md:block">
              <GradientHeading headingRef={desktopHeadingRef} className="text-[8rem] lg:text-[11rem]" />
            </div>

            <div
              ref={cardRef}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-colors duration-500 hover:bg-white/[0.07] md:p-10"
            >
              <div ref={paragraphRef} className="text-center text-base font-light leading-relaxed md:text-left md:text-xl">
                <p className="mb-5 text-xl font-semibold text-white md:text-2xl">{aboutContent.greeting}</p>
                <p>
                  {words.map((word, i) => {
                    const clean = word.replace(/[.,]/g, '').toLowerCase();
                    const isHighlight = highlightSet.has(clean);
                    return (
                      <span
                        key={i}
                        data-word
                        data-highlight={isHighlight ? 'true' : undefined}
                        className={isHighlight ? 'font-semibold' : ''}
                        style={{ color: '#52525b', opacity: 0.2 }}
                      >
                        {word}{' '}
                      </span>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* skills marquee */}
      <div className="border-t border-white/5 bg-[#030303] py-6 md:py-10">
        {skillRows.map((row, i) => (
          <MarqueeRow key={row.label} label={row.label} items={row.items} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default About;
