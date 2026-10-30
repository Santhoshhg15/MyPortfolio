# Portfolio Website — Tech Stack & Architecture Guide

A single-page, animated developer portfolio built with React and Vite. This guide explains what the project uses, how it is organised, and how the pieces fit together, so you can rebuild it step by step.

---

## 1. Tech Stack

### Core
| Layer | Technology | Version | Why it is used |
|---|---|---|---|
| UI library | **React** + **React DOM** | 19.2 | Component-based UI; each page section is a component |
| Build tool / dev server | **Vite** | 8 | Instant dev server with hot reload, fast production builds |
| React plugin for Vite | `@vitejs/plugin-react` | 6 | JSX transform and Fast Refresh |
| Language | **JavaScript (ES Modules, JSX)** | — | `"type": "module"` in package.json; no TypeScript |

### Styling
| Technology | Version | Notes |
|---|---|---|
| **Tailwind CSS** | 4.3 | Utility classes written directly in JSX. Loaded through the `@tailwindcss/vite` plugin (no `tailwind.config.js`, no PostCSS config) |
| Plain CSS (`index.css`) | — | `@import "tailwindcss"`, a `@theme` block with a custom `float` animation, smooth scrolling, and a custom AOS animation (`drop-bounce`) |
| **Google Fonts – Inter** | — | Loaded in `index.html` |

### Animation & Interaction
| Technology | Used for |
|---|---|
| **Framer Motion** 12 | Preloader enter/exit (`AnimatePresence`), scroll-linked animations (`useScroll`, `useTransform`, `useSpring`) in Services and Contact |
| **AOS** (Animate On Scroll) 2.3 | Fade/slide-in effects on scroll, initialised in `Hero.jsx`, plus the custom `drop-bounce` animation |
| **WebGL (raw)** | `SplashCursor.jsx`: a fluid-simulation cursor effect drawn on a full-screen `<canvas>` (about 1,000 lines, adapted from the open-source WebGL Fluid Simulation) |
| **requestAnimationFrame** | `useMouseTilt` hook: 3D tilt that follows the mouse |
| **CSS keyframes** | Float and drop-bounce animations |

### Services
| Technology | Used for |
|---|---|
| **EmailJS** (`@emailjs/browser` 4.4) | Sends the contact form straight from the browser with no backend. It is lazy-loaded with `await import(...)` only when the form is submitted |

### Tooling
- **ESLint 10** (flat config) with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`
- **Git** for version control
- No test framework, no router, no state library, and no backend. This is a pure static front-end.

---

## 2. Folder Structure

```
my portfolio website/
├── index.html                 # HTML shell: SEO meta tags, Open Graph, Inter font, <div id="root">
├── package.json               # Dependencies and scripts (dev / build / lint / preview)
├── vite.config.js             # Vite config: react() + tailwindcss() plugins
├── eslint.config.js           # ESLint flat config
├── public/                    # Served as-is from "/" (not processed by Vite)
│   ├── favicon.svg
│   └── *_Resume.pdf           # Downloadable resume
├── Portfolio Assets/          # Source material (resume files); not used by the app
└── src/
    ├── main.jsx               # Entry point: mounts <App /> inside <StrictMode>
    ├── App.jsx                # Page composition: lists every section in order
    ├── index.css              # Tailwind import, theme, global styles
    ├── assets/                # Images and video imported by components (Vite hashes them)
    │   ├── about/
    │   └── hero video/
    ├── components/            # One file per page section
    ├── data/
    │   └── portfolioData.js   # ALL site content in one place
    └── hooks/
        └── useMouseTilt.js    # Reusable custom hook
```

**`public/` vs `src/assets/`:** files in `public/` are referenced by absolute URL (`/Santhosh_Resume.pdf`). Files in `src/assets/` are `import`ed in JavaScript, so Vite bundles and fingerprints them.

---

## 3. Architecture

### 3.1 Boot sequence
```
index.html  →  /src/main.jsx  →  <App />  →  sections
   (#root)      createRoot()       (composition)
```
1. `index.html` provides `<div id="root">` and loads `main.jsx` as a module.
2. `main.jsx` imports the global CSS and renders `<App />` in `StrictMode`.
3. `App.jsx` renders the sections in order, top to bottom.

### 3.2 Page composition (`App.jsx`)
```
<SplashCursor />   fixed full-screen WebGL canvas (always on top, behind nothing)
<Preloader />      intro overlay, removes itself after loading
<Navbar />         fixed top nav
<Hero />           #home      video + headline + CTAs
<About />          #about
<TechnicalSkills/> #skills
<Services />       #process   scroll-drawn "My Process" path
<Projects />       #projects
<Internships />
<Leadership />
<SoftSkills />
<Contact />        #contact   EmailJS form
<Footer />
```
There is **no React Router**. It is a single page, and the navbar uses plain anchor links (`href="#projects"`) that scroll to a section `id`. Smooth scrolling comes from `html { scroll-behavior: smooth }` in CSS.

`Certificates.jsx` and `ContentCreator.jsx` exist and are fully built but are **not rendered** in `App.jsx`. To show them, import them and add them to the list.

### 3.3 Data-driven content (the key design idea)
All text, links, skills, projects, and so on live in **`src/data/portfolioData.js`** as named exports:

`personalInfo`, `socialLinks`, `heroContent`, `aboutContent`, `skillsContent`, `technicalSkills`, `leadershipList`, `internshipsList`, `softSkillsList`, `projects`, `certificates`, `education`, `footerContent`, `emailjsConfig`

Components import what they need and render it with `.map()`:

```jsx
import { projects } from '../data/portfolioData';
{projects.map(p => <ProjectCard key={p.title} {...p} />)}
```

**Teaching point:** separating *content* from *presentation* means a student can personalise the whole portfolio by editing one file, without touching any JSX. This is why the same template can be reused for different people.

### 3.4 Component responsibilities

| Component | Main concepts demonstrated |
|---|---|
| `Preloader` | `useState` + `useEffect` timer, Framer Motion `AnimatePresence` exit animation |
| `Navbar` | `useState` for mobile menu and scrolled state, scroll event listener in `useEffect` (with cleanup), responsive Tailwind classes, anchor navigation |
| `Hero` | `useRef` on a `<video>`, play/pause state, `AOS.init()`, importing video and image assets |
| `About` | Importing a static image, rendering HTML from data |
| `TechnicalSkills` | Rendering grouped lists from data |
| `Services` | Framer Motion `useScroll` → `useSpring` → SVG `motion.path` with a mask to "draw" a line as you scroll; separate desktop and mobile SVGs |
| `Projects` | Card grid from an array, links built from data |
| `Internships` / `Leadership` / `SoftSkills` | Simple list-rendering components |
| `Contact` | Controlled form flow with a status state machine (`idle → sending → success / error`), `useRef` on the form, dynamic import of EmailJS, config validation, scroll-linked parallax |
| `Footer` | Reuses `personalInfo`, `socialLinks`, `footerContent` |
| `SplashCursor` | Advanced: `useEffect` owns a WebGL render loop, shader programs, framebuffers, and event listeners, with props for tuning (`SPLAT_FORCE`, `COLOR`, and so on) |

### 3.5 Custom hook: `useMouseTilt`
Returns `{ ref, style }`. Attach `ref` to an element and spread `style` onto it to get a 3D tilt that follows the cursor, with an idle floating animation.
- Skips touch devices.
- Uses `requestAnimationFrame` with easing (`current += (target - current) * 0.1`).
- Cleans up listeners and the animation frame on unmount.
- Note: it is currently **not used by any component** (a good exercise: apply it to the hero image).

### 3.6 Styling approach
- Utility-first Tailwind classes inline in JSX, including arbitrary values like `bg-[#ff2a2a]` and `bg-[size:80px_80px]`.
- Dark palette (`#000` / `#0a0a0a`) with a red accent (`#ff2a2a`), with a red About section and Navbar highlight.
- Tailwind v4 uses **CSS-first configuration**: customisation goes in `@theme { ... }` inside `index.css`, not in a JS config file.

### 3.7 Environment variables & secrets
EmailJS credentials are read from Vite env vars in `portfolioData.js`:

```js
serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID"
```
Create a `.env.local` file (already git-ignored via `*.local`):
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```
Only variables prefixed with `VITE_` are exposed to the browser. EmailJS public keys are designed to be public, but never put private secrets in a `VITE_` variable. If the placeholders are still present, `Contact.jsx` skips sending and shows an error state.

---

## 4. Getting Started

```bash
npm create vite@latest my-portfolio -- --template react   # or clone this repo
cd my-portfolio
npm install
npm install framer-motion aos @emailjs/browser tailwindcss @tailwindcss/vite
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # serve the production build locally
npm run lint
```

Add the Tailwind plugin in `vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({ plugins: [react(), tailwindcss()] })
```
and put `@import "tailwindcss";` at the top of `src/index.css`.

**Deployment:** the build output (`dist/`) is static, so it can be hosted on Vercel, Netlify, GitHub Pages, or Cloudflare Pages. Set the `VITE_EMAILJS_*` variables in the host's dashboard.

---

## 5. Suggested Build Order for Students

| Step | Build | Concepts |
|---|---|---|
| 1 | Vite + React scaffold, Tailwind setup, clean template files | Tooling, project structure |
| 2 | `portfolioData.js` with placeholder content | Data/UI separation |
| 3 | `Navbar`, `Footer` | Components, props, `useState`, `useEffect`, responsive design |
| 4 | `Hero`, `About` | Assets, refs, video, AOS |
| 5 | `TechnicalSkills`, `Projects`, `Internships`, `Leadership`, `SoftSkills` | `.map()` and keys, card layouts, grids |
| 6 | `Preloader` | Framer Motion basics |
| 7 | `Services` (scroll-drawn path) | `useScroll`, `useSpring`, SVG |
| 8 | `Contact` + EmailJS | Forms, async/await, env vars, error handling |
| 9 | `useMouseTilt` hook | Custom hooks, `requestAnimationFrame`, cleanup |
| 10 | `SplashCursor` (provided as a drop-in) | Canvas/WebGL overview, `useEffect` lifecycle |
| 11 | SEO tags, lint, build, deploy | Production workflow |

---

## 6. Notes for the Instructor

- **Housekeeping before sharing:** decide on `Certificates`/`ContentCreator` (use or remove); `Portfolio Assets/` and the resume PDF contain personal data, so remove anything you don't want students to inherit.
- `README.md` is a short overview that links to this guide.
- `SplashCursor.jsx` is third-party-style code. Teach it as "integrate a complex effect through props", not line by line.
- `aboutContent.bio` contains an HTML string; rendering it needs `dangerouslySetInnerHTML`, which is safe here only because the content is yours. Mention XSS to students.
- Accessibility and performance exercises: add `alt` text audits, `prefers-reduced-motion` handling for the cursor/animations, and lazy-load the hero video.
