import { useRef, useState } from 'react';
import { personalInfo, socialLinks, contactContent, emailjsConfig } from '../data/portfolioData';
import ScrambleText from './ScrambleText';

const field =
  'w-full border-0 border-b border-bone/20 bg-transparent px-0 py-3 font-mono text-sm text-bone placeholder-dim/70 outline-none transition-colors focus:border-signal';

// Terminal-style contact form. Sends with EmailJS when configured; otherwise opens the visitor's email app.
const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    const form = formRef.current;
    const data = new FormData(form);
    const configured =
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!configured) {
      const body = `From: ${data.get('user_name')} (${data.get('user_email')})\n\n${data.get('message')}`;
      window.open(`mailto:${personalInfo.email}?subject=${encodeURIComponent('Portfolio contact')}&body=${encodeURIComponent(body)}`, '_blank');
      setStatus('success');
      form.reset();
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }
    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(emailjsConfig.serviceId, emailjsConfig.templateId, form, emailjsConfig.publicKey);
      setStatus('success');
      form.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  const socials = [['GitHub', socialLinks.github], ['LinkedIn', socialLinks.linkedin], ['Instagram', socialLinks.instagram]].filter(([, u]) => u);

  return (
    <section id="contact" className="hud-grid w-full px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <ScrambleText text={contactContent.label} as="p" className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-signal" />
          <h2 className="mb-8 text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em] text-bone">{contactContent.heading}</h2>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-bone/70">{contactContent.note}</p>
          <a href={`mailto:${personalInfo.email}`} className="mb-3 block break-all font-mono text-lg text-bone underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal md:text-2xl">
            {personalInfo.email}
          </a>
          {personalInfo.phone && <p className="mb-10 font-mono text-sm text-dim">{personalInfo.phone}</p>}
          <ul className="flex flex-wrap gap-6">
            {socials.map(([label, url]) => (
              <li key={label}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.2em] text-bone/70 transition-colors hover:text-signal">{label} ↗</a>
              </li>
            ))}
          </ul>
        </div>

        <form ref={formRef} onSubmit={onSubmit} className="hud-frame border border-bone/10 bg-ink/70 p-6 backdrop-blur md:p-10">
          <p className="mb-8 font-mono text-xs text-dim"><span className="text-signal">$</span> new message --to {personalInfo.brandName.split(' ')[0].toLowerCase()}</p>
          <label className="mb-6 block">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">&gt; name</span>
            <input name="user_name" required placeholder="Your full name" className={field} />
          </label>
          <label className="mb-6 block">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">&gt; email</span>
            <input name="user_email" type="email" required placeholder="you@example.com" className={field} />
          </label>
          <label className="mb-8 block">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-signal">&gt; message</span>
            <textarea name="message" required rows={5} placeholder="Tell me about the role or project…" className={`${field} resize-none`} />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="flex w-full items-center justify-between bg-signal px-6 py-4 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ink transition-colors hover:bg-bone disabled:opacity-60"
          >
            <span>{status === 'sending' ? 'Sending…' : 'Send message'}</span>
            <span aria-hidden="true">→</span>
          </button>
          <p role="status" className="mt-4 min-h-[1.25rem] font-mono text-xs">
            {status === 'success' && <span className="text-emerald-400">✓ Message sent. Talk soon.</span>}
            {status === 'error' && <span className="text-red-400">✕ Something went wrong. Please try again.</span>}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
