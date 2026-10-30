import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData';

// Optional: src/assets/footer/footer-bg.png (the generated abstract green horizon). Falls back to a CSS glow.
const bgImages = import.meta.glob('../assets/footer/footer-bg.*', { eager: true, import: 'default' });
const footerBg = Object.values(bgImages)[0];

const socials = [
  ['Instagram', socialLinks.instagram],
  ['YouTube', socialLinks.youtube],
  ['LinkedIn', socialLinks.linkedin],
  ['GitHub', socialLinks.github],
].filter(([, url]) => url);

const Footer = () => (
  <footer className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black px-6 pb-6 pt-24 text-white md:px-16">
    {/* background visual, anchored to the bottom and scaled up so it crops naturally */}
    <div
      className="absolute inset-0 bg-no-repeat"
      style={
        footerBg
          ? { backgroundImage: `url("${footerBg}")`, backgroundSize: '160%', backgroundPosition: 'center bottom' }
          : { background: 'radial-gradient(ellipse 80% 45% at 40% 100%, rgba(120,220,40,0.35), rgba(10,70,25,0.18) 50%, transparent 75%)' }
      }
      aria-hidden="true"
    />
    {/* black gradient: solid at the top, fading to transparent at the bottom */}
    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" aria-hidden="true" />

    <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
      {/* top: two columns */}
      <div className="grid gap-12 md:grid-cols-2 md:gap-8">
        <div>
          <p className="mb-3 text-sm text-zinc-500">{footerContent.connectLabel}</p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="break-all text-[clamp(1.4rem,4vw,3rem)] font-semibold tracking-tight text-gray-100 transition-colors duration-300 hover:text-[#CCFF00]"
          >
            {personalInfo.email}
          </a>
          <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400" aria-label="Footer">
            {footerContent.navLinks.map((link, i) => (
              <span key={link.label} className="flex items-center gap-5">
                <a href={link.href} className="transition-colors duration-300 hover:text-white">{link.label}</a>
                {i < footerContent.navLinks.length - 1 && <span aria-hidden="true">·</span>}
              </span>
            ))}
          </nav>
        </div>

        <div className="md:text-right">
          <h2 className="mb-3 text-2xl font-bold tracking-tight md:text-4xl">{footerContent.ctaHeading}</h2>
          <p className="mb-6 text-sm text-gray-400 md:text-base">{footerContent.ctaText}</p>
          <a
            href="#contact"
            className="inline-block rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
          >
            {footerContent.ctaLabel}
          </a>
        </div>
      </div>

      {/* socials */}
      <div className="mt-16 flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-sm font-semibold text-gray-300 md:text-base">
        {socials.map(([label, url]) => (
          <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white">
            {label}
          </a>
        ))}
      </div>

      {/* huge brand */}
      <div className="flex flex-1 items-center justify-center py-10">
        <p className="w-full select-none whitespace-nowrap text-center text-[12vw] font-bold uppercase leading-none tracking-tighter text-white">
          {personalInfo.brandName}
        </p>
      </div>

      {/* bottom row */}
      <div className="flex flex-col gap-3 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.{' '}
          <span className="text-zinc-600">
            Trained at{' '}
            <a href={academy.url} target="_blank" rel="noopener" className="underline underline-offset-2 transition-colors hover:text-white">
              {academy.name}
            </a>
          </span>
        </p>
        <div className="flex gap-6">
          <a href="#home" className="transition-colors duration-300 hover:text-white">Privacy policy</a>
          <a href="#home" className="transition-colors duration-300 hover:text-white">Terms and conditions</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
