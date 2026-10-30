# Template 2 — Cinematic Lime (reference build)

The answer key for the Template 2 playbook (`steps/template-2/`). React 19 + Vite + Tailwind CSS 4 + GSAP (ScrollTrigger) + EmailJS.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
```

- All content lives in `src/data/portfolioData.js`.
- Images are optional: `src/assets/hero/hero-portrait.*`, `src/assets/about/about-portrait.*`, `src/assets/footer/footer-bg.*`, `src/assets/projects/project-N.*`. The files here are simple SVG placeholders; students replace them with their own generated images.
- Contact form: set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY` in `.env.local` (without keys it falls back to the visitor's email app).

Built during training at [TAP Academy](https://thetapacademy.com/).
