import { useEffect, useState } from 'react';
import { personalInfo, navLinks, heroContent } from '../data/portfolioData';

const formatTime = (tz) =>
  new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: tz }).format(new Date());

// Fixed top bar: brand, navigation, a live local clock and a rotating status line.
const Hud = () => {
  const [time, setTime] = useState(() => formatTime(personalInfo.timezone));
  const [statusIndex, setStatusIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const clock = setInterval(() => setTime(formatTime(personalInfo.timezone)), 1000);
    const status = setInterval(() => setStatusIndex((i) => (i + 1) % heroContent.statusLines.length), 3500);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      clearInterval(clock);
      clearInterval(status);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const initials = personalInfo.brandName.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'border-b border-bone/10 bg-ink/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="Back to top">
          <span className="grid h-8 w-8 place-items-center border border-signal font-mono text-xs font-semibold text-signal">{initials}</span>
          <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-bone sm:block">{personalInfo.brandName}</span>
        </a>

        <div className="hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-dim lg:flex" aria-live="polite">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" aria-hidden="true" />
          <span key={statusIndex} className="transition-opacity duration-500">{heroContent.statusLines[statusIndex]}</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-[0.18em] text-bone/70 transition-colors hover:text-signal">
              {l.label}
            </a>
          ))}
          <span className="font-mono text-xs tabular-nums text-dim" title={personalInfo.timezone}>{time}</span>
        </nav>

        <button
          type="button"
          className="font-mono text-xs uppercase tracking-[0.2em] text-bone md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-bone/10 px-5 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-bone/10 py-4 font-sans text-2xl font-semibold text-bone">
              {l.label}
            </a>
          ))}
          <p className="pt-4 font-mono text-xs text-dim">{personalInfo.city} · {time}</p>
        </nav>
      )}
    </header>
  );
};

export default Hud;
