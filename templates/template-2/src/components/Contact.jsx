import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo, socialLinks, contactContent, emailjsConfig } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

const headingStyle = {
  backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, #d4d4d8 50%, #52525b 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))',
};

const icons = {
  instagram: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />,
  youtube: <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" />,
  linkedin: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
  github: <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />,
};

const fieldClass =
  'w-full rounded-[10px] border border-transparent bg-[#111] px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 focus:border-white/25 focus:shadow-[0_0_0_3px_rgba(204,255,0,0.08)]';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = { trigger: sectionRef.current, start: 'top 70%', once: true };
      const tl = gsap.timeline({ scrollTrigger: trigger, defaults: { ease: 'power3.out' } });
      tl.fromTo('[data-c="heading"]', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1 })
        .fromTo('[data-c="info"]', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15 }, '-=0.5')
        .fromTo('[data-c="social"]', { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, '-=0.3')
        .fromTo('[data-c="field"]', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 }, 0.4)
        .fromTo('[data-c="submit"]', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    const isConfigured =
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    const form = formRef.current;
    const data = new FormData(form);

    if (!isConfigured) {
      // Fallback: open the visitor's email app with the message pre-filled
      const body = `From: ${data.get('user_name')}\nEmail: ${data.get('user_email')}\nPhone: ${data.get('user_phone')}\n\n${data.get('message')}`;
      window.open(`mailto:${personalInfo.email}?subject=${encodeURIComponent(data.get('subject') || 'Portfolio contact')}&body=${encodeURIComponent(body)}`, '_blank');
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser'); // loaded only when needed
      await emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, form, emailjsConfig.publicKey);
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-6 py-24 text-white md:px-16 md:py-32">
      {/* subtle green horizon glow at the bottom */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 40% 100%, rgba(120,200,40,0.18), rgba(10,60,20,0.08) 55%, transparent 75%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1280px] gap-16 md:grid-cols-[2fr_3fr] md:gap-20">
        {/* left */}
        <div>
          <h2
            data-c="heading"
            className="mb-12 text-[clamp(3rem,9vw,6.5rem)] font-black uppercase leading-[0.9] tracking-tighter text-transparent"
            style={headingStyle}
          >
            {contactContent.heading}
          </h2>

          <div className="space-y-8">
            <div data-c="info">
              <p className="mb-1 text-sm text-zinc-500">Email:</p>
              <a href={`mailto:${personalInfo.email}`} className="break-all text-lg tracking-wide text-white transition-colors hover:text-[#CCFF00] md:text-2xl">
                {personalInfo.email}
              </a>
            </div>
            {personalInfo.phone && (
              <div data-c="info">
                <p className="mb-1 text-sm text-zinc-500">Phone:</p>
                <a href={`tel:${personalInfo.phone.replace(/\s/g, '')}`} className="text-lg tracking-wide text-white transition-colors hover:text-[#CCFF00] md:text-2xl">
                  {personalInfo.phone}
                </a>
              </div>
            )}
            <div data-c="info">
              <p className="mb-4 text-sm text-zinc-500">{contactContent.followLabel}</p>
              <div className="flex gap-3">
                {Object.entries(icons).map(([key, path]) =>
                  socialLinks[key] ? (
                    <a
                      key={key}
                      data-c="social"
                      href={socialLinks[key]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]"
                    >
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">{path}</svg>
                    </a>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>

        {/* right: form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <label data-c="field" className="block">
              <span className="mb-2 block text-xs text-zinc-500">Your Name</span>
              <input name="user_name" required placeholder="Your full name" className={fieldClass} />
            </label>
            <label data-c="field" className="block">
              <span className="mb-2 block text-xs text-zinc-500">Email address</span>
              <input name="user_email" type="email" required placeholder="Your email address" className={fieldClass} />
            </label>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label data-c="field" className="block">
              <span className="mb-2 block text-xs text-zinc-500">Phone</span>
              <input name="user_phone" placeholder="Your phone number" className={fieldClass} />
            </label>
            <label data-c="field" className="block">
              <span className="mb-2 block text-xs text-zinc-500">Subject</span>
              <input name="subject" placeholder="Subject" className={fieldClass} />
            </label>
          </div>
          <label data-c="field" className="block">
            <span className="mb-2 block text-xs text-zinc-500">Message</span>
            <textarea name="message" required rows={5} placeholder="Write something...." className={`${fieldClass} resize-none`} />
          </label>

          <button
            data-c="submit"
            type="submit"
            disabled={status === 'sending'}
            className="flex w-full items-center justify-center gap-3 rounded-[9px] bg-white py-4 text-sm font-semibold text-black transition-colors duration-300 hover:bg-zinc-200 disabled:opacity-70"
          >
            {status === 'sending' && (
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
            )}
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          <p role="status" className="min-h-[1.25rem] text-sm">
            {status === 'success' && <span className="text-emerald-400/90">Message sent successfully!</span>}
            {status === 'error' && <span className="text-red-400/90">Something went wrong. Please try again.</span>}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
