import { personalInfo, socialLinks, navLinks, footerContent, academy } from '../data/portfolioData';

const Footer = () => (
  <footer className="w-full overflow-hidden border-t border-bone/10 px-5 pb-8 pt-16 md:px-10">
    <div className="mx-auto max-w-[1440px]">
      <div className="mb-14 grid gap-10 md:grid-cols-3">
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal">Navigate</p>
          <ul className="space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="text-bone/75 transition-colors hover:text-signal">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal">Elsewhere</p>
          <ul className="space-y-2">
            {[['GitHub', socialLinks.github], ['LinkedIn', socialLinks.linkedin], ['Instagram', socialLinks.instagram]].filter(([, u]) => u).map(([label, url]) => (
              <li key={label}><a href={url} target="_blank" rel="noopener noreferrer" className="text-bone/75 transition-colors hover:text-signal">{label} ↗</a></li>
            ))}
          </ul>
        </div>
        <div className="md:text-right">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-signal">Say hello</p>
          <a href={`mailto:${personalInfo.email}`} className="break-all text-bone/75 transition-colors hover:text-signal">{personalInfo.email}</a>
          <p className="mt-2 font-mono text-xs text-dim">{personalInfo.city}</p>
        </div>
      </div>

      <p className="mb-8 select-none whitespace-nowrap text-center text-[13.5vw] font-bold uppercase leading-none tracking-[-0.05em] text-bone/[0.07]" aria-hidden="true">
        {personalInfo.brandName}
      </p>

      <div className="flex flex-col gap-3 border-t border-bone/10 pt-6 font-mono text-[11px] uppercase tracking-[0.15em] text-dim md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {personalInfo.name} · {footerContent.tagline}</p>
        <p>
          Trained at{' '}
          <a href={academy.url} target="_blank" rel="noopener" className="text-bone/80 underline underline-offset-4 transition-colors hover:text-signal">{academy.name}</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
