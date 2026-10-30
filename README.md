# Santhosh HG — Portfolio

An animated single-page developer portfolio for Santhosh HG, Senior Technical Trainer and Developer.

**Live site:** https://santhoshportfolio-eosin.vercel.app/

## Tech stack

- React 19
- Vite
- Tailwind CSS 4
- Framer Motion
- AOS (animate on scroll)
- EmailJS (contact form)
- WebGL fluid cursor (SplashCursor)

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run lint
```

## Customise

All content (name, links, skills, projects, videos) lives in `src/data/portfolioData.js`. Components only read from that file.

- `introVideo.youtubeUrl`: YouTube link for the "Meet Me in Person" section (below About). Leave it empty to hide the section.
- `videoUrl` on a project: YouTube link shown inside that project's card.

## Environment variables

The contact form sends mail through EmailJS. Create a `.env.local` file (it is git-ignored) with:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Without these, the form opens the visitor's email app with the message filled in.

## Learn more

See [docs/PROJECT_GUIDE.md](docs/PROJECT_GUIDE.md) for the full tech stack, architecture and a step-by-step build order.

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
