import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { personalInfo, heroContent } from '../data/portfolioData';

// Optional: if src/assets/hero/hero-portrait.png exists it is used, otherwise a placeholder is shown.
const heroImages = import.meta.glob('../assets/hero/hero-portrait.*', { eager: true, import: 'default' });
const heroImage = Object.values(heroImages)[0];

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const randomChar = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

const Hero = () => {
  const [text, setText] = useState(personalInfo.brandName.toUpperCase());
  const typoRef = useRef(null);
  const imgRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const target = heroContent.finalWord;
    let scrambleTimer;
    let startTimer;
    let tl;
    let cancelled = false;

    const typoEl = typoRef.current;
    const imgEl = imgRef.current;
    const subEl = subtitleRef.current;
    const ctaEl = ctaRef.current;
    document.body.style.overflow = 'hidden';
    gsap.set(imgRef.current, { y: '100vh' });
    gsap.set([subtitleRef.current, ctaRef.current], { opacity: 0, y: 50 });

    const runIntro = () => {
      if (cancelled) return;
      let step = 0;
      scrambleTimer = setInterval(() => {
        step += 0.5; // resolves one more letter every ~100ms, letters shuffle every 50ms
        const resolved = Math.floor(step);
        setText(
          target
            .split('')
            .map((ch, i) => (i < resolved ? ch : randomChar()))
            .join('')
        );
        if (resolved >= target.length) {
          clearInterval(scrambleTimer);
          setText(target);
          startTimer = setTimeout(playTimeline, 400);
        }
      }, 50);
    };

    const playTimeline = () => {
      tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = 'auto';
        },
      });
      tl.to(typoRef.current, { top: isMobile ? '20%' : '45%', duration: 1.5, ease: 'power3.inOut' }, 0)
        .to(imgRef.current, { y: 0, duration: 1.5, ease: 'power3.out' }, 0)
        .to([subtitleRef.current, ctaRef.current], { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.2 }, 0.3);
    };

    // Preload the hero image, then wait ~1 second before starting
    const begin = () => {
      startTimer = setTimeout(runIntro, 1000);
    };
    if (heroImage) {
      const img = new Image();
      img.onload = begin;
      img.onerror = begin;
      img.src = heroImage;
    } else {
      begin();
    }

    return () => {
      cancelled = true;
      clearInterval(scrambleTimer);
      clearTimeout(startTimer);
      if (tl) tl.kill();
      gsap.killTweensOf([typoEl, imgEl, subEl, ctaEl]);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const [firstWord, ...rest] = personalInfo.role.split(' ');

  return (
    <header
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
      style={{ background: 'radial-gradient(ellipse at center, #1c1c1f 0%, #0a0a0a 55%, #000 100%)' }}
    >
      {/* dark overlay + subtle blur */}
      <div className="absolute inset-0 z-[1] bg-black/10 backdrop-blur-[2px]" aria-hidden="true" />

      {/* huge typography (behind the person) */}
      <h1
        ref={typoRef}
        className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 select-none text-center text-[16vw] font-black uppercase leading-none tracking-tighter text-transparent md:text-[10rem] 2xl:text-[14rem]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #d4d4d8 50%, #52525b 100%)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
        }}
        aria-label={`${personalInfo.brandName} — ${heroContent.finalWord}`}
      >
        <span aria-hidden="true">{text}</span>
      </h1>

      {/* person (in front of the typography) */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
        <div ref={imgRef} style={{ filter: 'drop-shadow(0 30px 40px rgba(0,0,0,0.6))' }}>
          {heroImage ? (
            <img src={heroImage} alt={`${personalInfo.name} — ${personalInfo.role}`} className="mx-auto h-auto max-h-[88vh] w-auto max-w-[72vw] object-contain md:max-w-[500px] xl:max-w-[650px]" />
          ) : (
            <div className="mx-auto flex aspect-[2/3] w-full items-end justify-center text-sm text-white/30">
              Add src/assets/hero/hero-portrait.png
            </div>
          )}
        </div>
      </div>

      {/* subtitle + contact CTA */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center gap-5 px-6 pb-10 md:flex-row md:items-end md:justify-between md:px-[8%] md:pb-[8%]">
        <p
          ref={subtitleRef}
          className="text-center text-base text-gray-100 md:text-left md:text-[2.5rem] lg:text-[3.5rem]"
          style={{ textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}
        >
          <span className="font-bold">{firstWord}</span> <span className="font-light italic">{rest.join(' ')}</span>
        </p>

        <div ref={ctaRef} className="flex items-center gap-3">
          <a
            href="#contact"
            aria-label="Go to contact section"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-black/40 px-8 py-3 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 md:text-base"
          >
            {heroContent.ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
