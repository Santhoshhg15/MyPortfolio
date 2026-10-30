import { useState } from 'react';
import QRCode from 'react-qr-code';
import stackImage from '../assets/about/Hero Image.png';
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData';

// One row on the back of the visiting card (hidden when the value is empty)
const CardRow = ({ icon, href, children }) => {
  if (!children) return null;
  const content = (
    <>
      <svg className="w-4 h-4 text-red-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        {icon}
      </svg>
      <span className="truncate">{children}</span>
    </>
  );
  const cls = 'flex items-center gap-2 text-xs text-white/85';
  return href ? (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`${cls} hover:text-white transition-colors`}
    >
      {content}
    </a>
  ) : (
    <div className={cls}>{content}</div>
  );
};

const About = () => {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);
  const phoneHref = personalInfo.phone ? `tel:${personalInfo.phone.replace(/[^\d+]/g, '')}` : null;

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge that flips to a visiting card */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">

          <div data-aos="drop-bounce" className="relative flex flex-col items-center justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0 pointer-events-none"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-30 shadow-[0_2px_10px_rgba(0,0,0,0.3)] pointer-events-none"></div>

            {/* Flip card: click, tap or press Enter / Space */}
            <div
              role="button"
              tabIndex={0}
              aria-label="Flip ID card"
              aria-pressed={flipped}
              onClick={toggle}
              onKeyDown={(e) => {
                if (e.target !== e.currentTarget) return;
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggle();
                }
              }}
              className="relative z-20 w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] cursor-pointer select-none focus:outline-none focus-visible:ring-4 focus-visible:ring-black/50 rounded-2xl"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* FRONT: ID badge with portrait */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
                  {/* Cutout Hole */}
                  <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                    <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
                  </div>
                  <div className="w-full h-full overflow-hidden rounded-xl bg-gray-800">
                    <img
                      src={stackImage}
                      alt="Santhosh HG — Senior Technical Trainer & Developer"
                      className="w-full h-full object-cover object-top pointer-events-none"
                    />
                  </div>
                </div>

                {/* BACK: visiting card */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-[0_20px_40px_rgba(0,0,0,0.4)] text-left">
                  <div className="h-1.5 bg-[#ff2a2a]"></div>
                  <div className="p-5 flex flex-col h-[calc(100%-6px)]">
                    <p className="text-xl font-black text-white">
                      {personalInfo.brandName}<span className="text-[#ff2a2a]">.</span>
                    </p>
                    <p className="text-xs uppercase tracking-widest text-red-400 mt-1">{personalInfo.title}</p>
                    <div className="border-t border-white/10 my-3"></div>

                    <div className="flex flex-col gap-2">
                      <CardRow
                        href={personalInfo.emails?.primary ? `mailto:${personalInfo.emails.primary}` : null}
                        icon={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>}
                      >
                        {personalInfo.emails?.primary}
                      </CardRow>
                      <CardRow
                        href={phoneHref}
                        icon={<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />}
                      >
                        {personalInfo.phone}
                      </CardRow>
                      <CardRow icon={<><path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>}>
                        {personalInfo.location}
                      </CardRow>
                      <CardRow
                        href={socialLinks.linkedin}
                        icon={<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 11v5M8 8v.01M12 16v-5m0 2a2.5 2.5 0 015 0v3" /></>}
                      >
                        {socialLinks.linkedin ? 'LinkedIn' : ''}
                      </CardRow>
                      <CardRow
                        href={socialLinks.github}
                        icon={<path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5a3 3 0 00-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 00-6 0C6.5 2.8 5.5 3.1 5.5 3.1a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.8 5.7 5.5 6a3 3 0 00-.8 2.3V21" />}
                      >
                        {socialLinks.github ? 'GitHub' : ''}
                      </CardRow>
                    </div>

                    <div className="mt-auto flex items-center gap-3">
                      <div className="bg-white rounded-lg p-2 shrink-0">
                        <QRCode
                          value={socialLinks.linkedin || `mailto:${personalInfo.emails?.primary}`}
                          size={76}
                        />
                      </div>
                      <p className="text-[10px] text-white/60">Scan to connect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs font-bold text-black/60 mt-4">Tap the card to flip ↻</p>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
