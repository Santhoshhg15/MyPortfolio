<<<INTRO>>>
# AI-Driven Class Playbook — Template 3: Signal HUD (GSAP + three.js)

**How this class works:** nobody types code. For every step you (1) say a few words to the class, (2) copy the prompt, (3) paste it into the **Antigravity agent chat**, (4) check the result in the browser. Installation, libraries, files, Git and deployment are all done *by the AI agent* from the prompts below.

**What you are building:** a dark, technical, motion-led developer portfolio with a "heads-up display" feel. A fixed HUD bar with a live local clock and rotating status line, a huge name that decodes from random characters, a live 3D wireframe "signal core" you can drag to rotate, buttery smooth scrolling, count-up stats, a pinned horizontal project gallery, a timeline that fills as you scroll, a terminal-style contact form and a custom crosshair cursor. Near-black, warm off-white and one signal-orange (#FF5B1F) accent; Space Grotesk + JetBrains Mono.

Before you begin, the class needs these free websites open in browser tabs:

| Tool | Used for | Link |
|---|---|---|
| **Google Antigravity** (the IDE) | Pasting prompts; the agent writes code and runs terminal commands | https://antigravity.google/ |
| **ChatGPT** (or Gemini) | Creating your portrait (and optional project covers) | https://chatgpt.com/ |
| **GitHub** | Storing the code (public repository) | https://github.com/ |
| **Vercel** | Publishing the live website | https://vercel.com/ |
| EmailJS *(Step 9)* | Making the contact form send email | https://www.emailjs.com/ |

> Sign in to all of them with a Google or GitHub account **before class**. A few steps (logins, downloading a generated image) are done by clicking in the browser — the playbook tells you exactly when.

<<<QUICKMAP>>>
## Quick map

| Part | Step | What happens |
|---|---|---|
| A. Create assets | A1 | Your monochrome studio portrait (ChatGPT / Gemini) |
| | A2 | Your self-introduction video (optional) |
| | A3 | Project cover images (optional) |
| | A4 | Project explanation videos (optional) |
| B. Build | 1 | Create the project folder and open Antigravity |
| | 2 | AI installs everything (GSAP, Lenis, three.js, Tailwind, EmailJS) |
| | 3 | AI builds your data file from your details |
| | 4 | AI places your images |
| | 5 | Foundations: smooth scroll, crosshair cursor, text decode, HUD bar |
| | 6 | Hero: decoding name + live 3D signal core |
| | 7 | About: stats + skill modules (+ intro video) |
| | 8 | Projects gallery + Journey timeline (+ project videos) |
| | 9 | Contact: terminal form (EmailJS) |
| | 10 | Footer |
| | 11 | Assemble, check, fix and polish |
| | 12 | Browser tab, share preview and README |
| C. Publish | 13 | Push to GitHub |
| | 14 | Deploy live on Vercel |
| | 15 | Final link update |
| D. Get discovered | 16 | Google Search Console (get indexed) |
| | 17 | LinkedIn launch post |
| | — | Troubleshooting prompts |

---

<<<A1>>>
## A1 · Your monochrome studio portrait (ChatGPT or Gemini)

**Say to the class:** "This template uses one strong portrait in the About section, shown in black and white with an orange tint, inside a technical frame. Your photo gives the AI your face; the prompt gives it the studio look."

**Where:** open https://chatgpt.com/ (or https://gemini.google.com/) → new chat → attach **one clear photo of yourself** (front-facing, good light, face fully visible, no sunglasses, no filters) → paste the prompt → send.

**Prompt (paste with your photo attached):**

````text
Create a high-end black-and-white studio portrait of the person in the attached photo.

IDENTITY (copy ONLY from the attached photo): keep exactly my face, facial structure, skin texture, age, hairstyle, facial hair (only if I have any) and glasses (only if I wear them). Do not change my face or hair.

FRAMING: head and shoulders, from mid-chest up, the face slightly off-centre, looking directly into the camera with a calm, confident, focused expression. Portrait orientation, aspect ratio 4:5 (for example 1080 x 1350).

OUTFIT: a plain dark crew-neck t-shirt or a dark minimal overshirt, no logos, no text.

LIGHTING AND STYLE: dramatic monochrome studio photography: a single soft key light from the left, deep shadows on the right side of the face, a subtle rim light on the hair and shoulder, rich blacks, fine film grain, sharp focus on the eyes. Background: plain very dark charcoal (#0b0b0d), no texture, no objects, no text.

QUALITY: photorealistic, editorial magazine quality, high detail, natural skin texture, 4K.
Do NOT: add colour, text, logos, accessories or extra people; change my identity.
````

**If the result is not right**, reply in the same chat with one fix at a time:
- Face not like you: `The face is not mine. Redraw the same image but copy my face exactly from the attached photo. Change nothing else.`
- Too bright / colourful: `Make it pure black and white with deep shadows and a very dark background. Change nothing else.`

When it looks right, **download the image** (it goes to **Downloads**). Don't rename it.

**Check:** a 4:5 black-and-white portrait of you on a very dark background is in Downloads.

---

<<<A2>>>
## A2 · Your self-introduction video (optional)

> **Optional step.** If you do not have a self-introduction video, click **Next step** to skip it. Your website will then simply have no video section, and the video prompt in Step 7 is hidden automatically.

**Say to the class:** "Recruiters love hearing you speak. You'll record a real 60–90 second self-introduction on your phone. Your website will play it in its own section, and YouTube helps people find you."

**Where:** open https://chatgpt.com/ → paste the prompt → practise the script 3 times → record.

**Prompt (paste in ChatGPT):**

````text
Write a 60–90 second self-introduction script that I will speak to the camera for my portfolio website. Simple, confident, natural spoken English, short sentences, no jargon, about 150–200 words.

My details:
- Name: [YOUR NAME]
- Role I am aiming for: [YOUR ROLE]
- City: [YOUR CITY]
- I am doing the placement training program at TAP Academy.
- My skills, projects and goals are below (use the 2–3 strongest points; do not invent anything):
<paste 3–5 lines about your skills, best project and career goal>

Structure:
1. Greeting + name + role (1 sentence)
2. Education and TAP Academy placement training (1–2 sentences)
3. Top skills (1–2 sentences)
4. Best project: the problem, what I built, the result (2–3 sentences)
5. What I'm looking for + a warm closing that invites them to explore my portfolio (1–2 sentences)

Mark natural pauses with " / ". Then give me a 30-second short version as well.
````

**Recording tips:**
- **Camera:** phone held horizontally (landscape), at eye level, on a stand or a stack of books.
- **Light:** face a window or a lamp; never sit with a window behind you.
- **Sound:** quiet room; record within 1 metre of the phone, or use earphones with a mic.
- **Delivery:** look into the camera lens, not the screen. Record 2–3 takes and keep the best.

**Then upload it to YouTube:** open https://studio.youtube.com/ → **Create** → **Upload videos** → title `[YOUR NAME] — Self Introduction | [YOUR ROLE] | TAP Academy Placement Training` → description: your script's first two sentences and the line `Trained at TAP Academy: https://thetapacademy.com/` → **No, it's not made for kids** → visibility **Public** (or **Unlisted**) → **Publish** → **copy the video link**.

[[input:introurl|Your self-introduction video link|https://youtu.be/xxxxxxxxxxx|Paste the YouTube link here. It is added to your website in Step 7.]]

**Check:** your self-introduction is on YouTube and the link is pasted above.

---

<<<A3>>>
## A3 · Project cover images (optional)

> **Optional step.** Each project card shows a cover image (in grayscale that turns to colour on hover). If you skip this step, your cards get a clean technical placeholder, and you can add screenshots later.

**Say to the class:** "A real screenshot of your project is best. If you don't have one, the AI can create a clean cover."

**Option 1 (best): real screenshots.** Screenshot your running project (Windows: **Win + Shift + S**; Mac: **Cmd + Shift + 4**) and save it to **Downloads**.

**Option 2: generate a cover.** Open https://chatgpt.com/ → paste the prompt once per project (fill the brackets) → download the image.

**Prompt:**

````text
Create a premium cover image for a software project called "[PROJECT NAME]" — [one sentence: what the project does].
FORMAT: landscape 16:10 (1600 x 1000).
STYLE: dark, minimal, technical. A realistic laptop or phone screen (whichever suits the project) showing a clean modern dark user interface of the app, with a subtle signal-orange (#FF5B1F) accent. Near-black background, soft studio light, shallow depth of field.
RULES: no real brand logos, no readable small text, no people, no watermarks, generous empty space.
````

**Check:** one image per project in Downloads (skipping is fine).

---

<<<A4>>>
## A4 · Project explanation videos (optional)

> **Optional step.** Only add the links of the project videos you really have. Projects without a video link stay as normal cards, and the video prompt in Step 8 is hidden if you add none.

**Say to the class:** "A 2-minute demo where you explain how you built your project is the strongest proof of skill a recruiter can see. On your site, a project with a video gets a play button; clicking it opens a big player."

**Where:** open https://chatgpt.com/ → paste the prompt once per project → practise → record your screen.

**Prompt (paste in ChatGPT, once per project):**

````text
Write a 2–3 minute project explanation script that I will speak while screen-recording a demo of my project. Simple, confident spoken English, short sentences, about 300–380 words. Add [SHOW: ...] notes telling me what to show on screen at each moment.

About me: [YOUR NAME], [YOUR ROLE], doing the placement training program at TAP Academy.
About the project (do not invent features — use only what I describe):
<project name, what problem it solves, who uses it, main features, technologies, one challenge I faced and how I solved it>

Structure:
1. Hook: the problem in one sentence (10 s)
2. What I built and who it is for (15 s)
3. Live demo of the 2–3 main features, in the order I should click them (60–90 s)
4. How it works: tech stack and architecture in plain words (30 s)
5. One challenge and how I solved it (20 s)
6. What I learned + what I would add next + invite them to see the code on GitHub (15 s)
````

**Recording tips:** on Windows use **Clipchamp** (*Record → Screen and camera*) or the **Snipping Tool** recorder; on Mac press **Cmd + Shift + 5**. Close other tabs, zoom the browser to 110–125%, use sample data, speak slightly slower than normal.

**Then upload each video to YouTube:** https://studio.youtube.com/ → **Create** → **Upload videos** → title `<Project name> — Demo & Explanation | [YOUR NAME] | TAP Academy Placement Training` → description: 2 sentences about the project + `Source code: <GitHub link>` + `Trained at TAP Academy: https://thetapacademy.com/` → **Public** → **Publish** → copy the link into the matching box below.

[[input:project1video|Project 1 video link|https://youtu.be/xxxxxxxxxxx|Optional. Leave empty if you have no video for this project.]]

[[input:project2video|Project 2 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

[[input:project3video|Project 3 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

[[input:project4video|Project 4 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

**Check:** each project you recorded is on YouTube and its link is pasted above (empty boxes are fine).

---

<<<STEP2>>>
## Step 2 · AI installs everything and sets up the project

**Say to the class:** "The agent checks your computer, installs what's missing, creates a React + Vite project and installs: Tailwind CSS for styling, GSAP for animation, Lenis for smooth scrolling, three.js for the 3D centrepiece and EmailJS for the contact form."

**Prompt:**

````text
You are my pair-programmer. I am a student building a React portfolio website in this empty folder. I will not type any code or commands myself — you do everything, and you explain each step in one short sentence before you do it.

PART 1 — Check my computer
1. Detect my operating system. Run `node -v`, `npm -v` and `git --version`.
2. If Node.js is missing or older than version 20, install the current Node.js LTS (on Windows use `winget install OpenJS.NodeJS.LTS`; on macOS use `brew install node`; on Linux use the NodeSource or nvm method). If Git is missing, install it the same way (`winget install Git.Git` / `brew install git`). If a restart of the terminal is needed, tell me clearly what to do and then continue.
3. Confirm all three versions work before continuing.

PART 2 — Create the project in THIS folder
4. Create a Vite + React (JavaScript, not TypeScript) project in the current folder using the non-interactive form, for example `npm create vite@latest . -- --template react` (if it asks questions, choose: React, JavaScript; if it asks about a non-empty folder, choose to continue/ignore existing files).
5. Run `npm install`.
6. Install these libraries with npm: `gsap lenis three tailwindcss @tailwindcss/vite @emailjs/browser`.
7. Configure Tailwind CSS 4 with the Vite plugin: in vite.config.js use the plugins `react()` and `tailwindcss()` (import tailwindcss from '@tailwindcss/vite'). Do NOT create tailwind.config.js or postcss.config.js.
8. Delete the Vite demo content: src/App.css, src/assets/react.svg, public/vite.svg, and all demo markup in src/App.jsx. App.jsx must simply return an empty fragment for now. Keep eslint.config.js.
9. Replace src/index.css with exactly this content:
   - `@import "tailwindcss";`
   - an `@theme` block defining: `--font-sans: 'Space Grotesk', system-ui, sans-serif;` `--font-mono: 'JetBrains Mono', ui-monospace, monospace;` `--color-ink: #08090c;` `--color-panel: #0f1116;` `--color-bone: #e8e6df;` `--color-dim: #8a8f98;` `--color-signal: #ff5b1f;` (this creates Tailwind classes such as bg-ink, text-bone, text-dim, bg-signal, border-signal, font-mono)
   - `html { background: #08090c; }`, `html.lenis, html.lenis body { height: auto; }`, `.lenis.lenis-smooth { scroll-behavior: auto !important; }`
   - `body { margin: 0; background: #08090c; color: #e8e6df; font-family: var(--font-sans); overflow-x: hidden; -webkit-font-smoothing: antialiased; }`
   - a `.hud-grid` class: a faint technical grid background made of two 1px linear-gradients in rgba(232,230,223,0.04), background-size 64px 64px
   - a `.hud-frame` class (position: relative) whose ::before and ::after draw small 14px signal-orange corner brackets (2px borders) at the top-left and bottom-right corners, pointer-events: none
   - `@media (pointer: fine) { body.has-cursor, body.has-cursor a, body.has-cursor button { cursor: none; } }`
10. Replace index.html with a clean page: lang="en", UTF-8 charset, viewport meta, a favicon link to `/favicon.svg`, a title "My Portfolio", meta theme-color #08090c, preconnect links and ONE Google Fonts link that loads Space Grotesk (400, 500, 600, 700) and JetBrains Mono (400, 500, 600), a `<div id="root"></div>` and the module script `/src/main.jsx`. Create public/favicon.svg: a near-black rounded square with a signal-orange "pulse line" (a polyline like M14 32h12l6-14 6 28 6-14h6).
11. Make sure src/main.jsx renders `<App />` inside `<StrictMode>` and imports './index.css'.
12. Add a .gitignore if missing (node_modules, dist, *.local, .env*), and run `git init` and make the first commit "Initial project setup" (if git user name/email are not set, set them to <My Name> and ask me for my email).

PART 3 — Project rules file
13. Create a file named AGENTS.md in the project root (and an identical copy at .agent/rules/project-context.md) with exactly the following content, so you remember it in every later step:

---
# Project context
React 19 + Vite + Tailwind CSS 4 single-page developer portfolio, "Signal HUD" style: dark, technical, motion-led, like a heads-up display. Plain JavaScript (JSX), no TypeScript, no router. Libraries: gsap (with ScrollTrigger), lenis (smooth scroll), three (3D centrepiece), @emailjs/browser. Style: Tailwind utility classes only (no extra CSS files except src/index.css). Colours (Tailwind theme names): ink #08090c (background), panel #0f1116 (cards), bone #e8e6df (main text), dim #8a8f98 (secondary text), signal #ff5b1f (the ONE accent colour). Fonts: Space Grotesk (font-sans) for headings and text, JetBrains Mono (font-mono) for small uppercase HUD labels with wide letter spacing. Sharp corners (no rounded cards), thin 1px borders in bone/10, corner brackets (.hud-frame), faint grid (.hud-grid).

# Architecture rules
- ALL content (text, links, lists) lives in src/data/portfolioData.js and is imported by components. Never hard-code personal content in components.
- One component per section in src/components/, composed in order in src/App.jsx: Cursor, Hud, then <main> with Hero, About, (IntroVideo), Projects, Journey, Contact, then Footer. Navigation is anchor links (#home, #about, #projects, #journey, #contact) scrolled smoothly by Lenis. No router.
- Assets: src/assets/about/about-portrait.(png|jpg|webp) and src/assets/projects/project-1.(png|jpg|webp) etc. Components load them with import.meta.glob and show a placeholder when a file is missing.
- Animation rules: Lenis is driven by gsap.ticker and calls ScrollTrigger.update on scroll (one shared loop). Register ScrollTrigger once. Create animations inside useEffect with gsap.context() or gsap.matchMedia() and always clean up. Entrance animations use `once: true`: NO element may ever become invisible again after it has appeared. Call ScrollTrigger.refresh() after load. Respect prefers-reduced-motion (skip smooth scroll, the cursor, the decode effect and heavy motion). three.js: dispose geometries, materials and the renderer on unmount and pause rendering when off-screen.
- Keep code clean and lightly commented in a beginner-friendly way. After every task run `npm run lint` and fix problems.

# Credit conventions (apply automatically wherever relevant)
- This portfolio was built during training at TAP Academy (https://thetapacademy.com/). Keep a small visible footer credit "Trained at TAP Academy" linking to that URL, using the `academy` export in portfolioData.js ({ name: "TAP Academy", url: "https://thetapacademy.com/" }).
- In index.html structured data (JSON-LD, schema.org Person) include `"alumniOf": { "@type": "EducationalOrganization", "name": "TAP Academy", "url": "https://thetapacademy.com/" }`, and include these meta keywords: TAP Academy, TAP Academy student, TAP Academy placement training, augmented reality.
- In README.md include one sentence: "Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training)."
- When creating or describing the GitHub repository, add the topics `tap-academy`, `tap-academy-student`, `placement-training` and `augmented-reality`, and mention TAP Academy placement training in the description.
---

PART 4 — Verify
14. Start the dev server in the background (`npm run dev`), open the shown local URL in the browser, and confirm the page is blank near-black with no console errors. Then run `npm run lint` and `npm run build` to confirm both succeed.
15. Finish with a short summary: versions installed, libraries installed, and the local URL.
````

**Check:** the agent reports Node ≥ 20, lists gsap, lenis, three, tailwindcss and @emailjs/browser, and http://localhost:5173 shows a blank near-black page. If a command fails, use *Troubleshooting prompt T1* at the end.

---

<<<STEP3>>>
## Step 3 · The AI interviews you and builds your data file

**Say to the class:** "The website shows only what is in one data file, and it must be about YOU. If you filled in the 'Your details' form, the agent already knows most of it and only asks about what is missing."

**Prompt:**

````text
Now create src/data/portfolioData.js with MY real information. Do not invent personal facts. Follow this process:

PROCESS
1. Interview me first. Ask questions in small groups (maximum 4 questions at a time), wait for my answers, then ask the next group. If I answer "suggest", propose 2–3 options based on what I told you and let me pick. If I answer "skip" for an optional item, leave a clean empty value or remove that item.
   Group 1 — Identity: full name, role/title (2–4 words), city and country, my IANA timezone (for example Asia/Kolkata — work it out from my city), email, phone (optional), and a one-line availability status (for example "Open to internships & full-time roles").
   Group 2 — Links: GitHub, LinkedIn and Instagram URLs (any may be empty; empty ones are not shown).
   Group 3 — Hero: a one-sentence intro of what I build, and 3 short "status" lines for the HUD bar (what I'm building / learning / doing now, max 5 words each).
   Group 4 — About: a short bold heading (max 7 words), a 2–4 sentence paragraph, and 3 numeric stats (value + optional suffix like "+", + label; for example 12+ Projects shipped). Do not invent numbers: ask me.
   Group 5 — Skills: up to 4 groups (for example Frontend, Backend, Data, Tools) with 4–6 skills each.
   Group 6 — Projects: up to 4 projects: title, one-sentence description, 3 tags, year, live link and GitHub link, plus the project video link only if I have one.
   Group 7 — Journey: 2–4 timeline entries (period, role/degree, organisation, one-sentence description). Include my TAP Academy placement training as the most recent entry.
2. After the interview, show me a short summary and ask "Is everything correct?" Fix anything I point out.
3. Then write src/data/portfolioData.js. It MUST keep exactly the export names, nesting and field names shown in the structure below (the components I will build in later steps depend on them). Fill every value from my answers and replace all sample text. Keep `academy` exactly as it is. Keep the navLinks as they are. In `aboutContent.paragraph` mention naturally and only once that I am training (or trained) in the placement training program at TAP Academy. Do not repeat that phrase anywhere else in the data file. Leave the emailjsConfig export exactly as is. Project videos are OPTIONAL: add a `video: "<YouTube link>"` field ONLY to a project whose video link is given in MY DETAILS; for projects without a link do not add any `video` field. The self-introduction video is OPTIONAL: ONLY if MY DETAILS contains a self-introduction video link, add right after aboutContent the export `introVideo = { label: "Intro", heading: "Hear it from me", description: "<one short sentence inviting the visitor to watch>", youtubeUrl: "<that link>" }`; if no link is given, do not create introVideo at all. Use the project video links from MY DETAILS only if present.
4. Run `npm run lint`, then summarise what you wrote in 5 bullet points.

STRUCTURE TO FOLLOW (the sample values are placeholders to be replaced with my answers):

@@SCHEMA@@
````

**Check:** the agent asked only about missing items and created `src/data/portfolioData.js` with your details. Open the file and glance through it.

---

<<<STEP4>>>
## Step 4 · AI places your images

**Say to the class:** "The agent finds your portrait (and any project covers) in Downloads and puts them exactly where the website expects them."

**Do:** make sure the portrait from A1 (and any project covers from A3) are in your **Downloads** folder.

**Prompt:**

````text
Place my images in the project. Look in my Downloads folder (detect it for my operating system).
1. Find the most recent black-and-white portrait (portrait orientation, about 4:5). Show me the file name and ask me to confirm. Copy it to src/assets/about/about-portrait.png (convert to PNG or keep JPG/WEBP if smaller), resized to at most 1200 px wide and under 800 KB.
2. Ask me whether I made project cover images or screenshots. If yes, ask me which image belongs to which project (project-1 … project-4 in portfolioData.js, in order) and copy each to src/assets/projects/<project id>.(png|jpg|webp), compressing anything over 500 KB. If no, skip this.
3. Create the folders if missing. List the final paths and file sizes. Do not edit any other file.
````

**Check:** the agent lists `about-portrait.*` (and any project covers) with sizes.

---

<<<STEP5>>>
## Step 5 · Foundations: smooth scroll, crosshair cursor, text decode and the HUD bar

**Say to the class:** "Four building blocks used everywhere on this site: Lenis smooth scrolling synced with GSAP, a custom crosshair cursor, a text 'decode' effect, and the fixed HUD bar with a live clock."

**Prompt A: Smooth scroll + cursor + decode effect**

````text
Create these three reusable pieces. Use gsap, gsap/ScrollTrigger and lenis.

1. src/hooks/useSmoothScroll.js — export `useSmoothScroll()`:
   - In a useEffect: if prefers-reduced-motion is set, do nothing. Otherwise create `new Lenis({ duration: 1.1, smoothWheel: true })`, call `lenis.on('scroll', ScrollTrigger.update)`, drive it from GSAP's ticker (`const tick = (time) => lenis.raf(time * 1000); gsap.ticker.add(tick); gsap.ticker.lagSmoothing(0);`) so smooth scrolling and every ScrollTrigger share ONE animation loop.
   - Make in-page anchor links smooth: listen for clicks on `a[href^="#"]`, find the target element and call `lenis.scrollTo(target, { offset: -60 })` (preventDefault).
   - Call ScrollTrigger.refresh() on window 'load' and once more after about 800 ms.
   - Clean up everything on unmount (remove listeners, gsap.ticker.remove(tick), lenis.destroy()).
   Call `useSmoothScroll()` at the top of App.

2. src/components/Cursor.jsx — a crosshair cursor, rendered first in App:
   - Two fixed, pointer-events-none elements at z-[999]: a small 6px signal-orange dot and a 36px ring with a thin bone/60 border (rounded-full), both starting with opacity 0.
   - Only on devices with a real mouse (matchMedia '(pointer: fine)') and without reduced motion: add the class `has-cursor` to <body> (this hides the native cursor via index.css), set both to opacity 1 and centred (xPercent/yPercent -50). On pointermove the dot follows exactly (gsap.set) and the ring follows with a delay using gsap.quickTo (duration 0.35, ease power3.out).
   - On pointerover: if the target is inside an a, button, input, textarea or [data-cursor="hot"], scale the ring to 1.8 and make its border signal orange; otherwise scale 1 and border bone/60.
   - Clean up listeners and remove the body class on unmount.

3. src/components/ScrambleText.jsx — a reusable "decode" text effect (props: text, as = 'span', className, delay = 0, speed = 30, trigger = 'view' | 'mount'):
   - Renders `<Tag aria-label={text}><span aria-hidden="true">{display}</span></Tag>` so screen readers always get the real text.
   - When it plays (on mount, or once when 40% of it enters the viewport via IntersectionObserver), every `speed` ms the characters show random glyphs from "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+=<>/" and lock into the real text from left to right (one more character every 2 frames; spaces stay spaces). It plays only once. With prefers-reduced-motion it just shows the text.
   - Clean up the interval, timeout and observer on unmount.
Run npm run lint.
````

**Prompt B: HUD bar (top navigation)**

````text
Create src/components/Hud.jsx (default export) and render it right after <Cursor /> in src/App.jsx. Read personalInfo, navLinks and heroContent from src/data/portfolioData.js.
- A fixed header (inset-x-0 top-0 z-50, height 64px, content max-w-[1440px] mx-auto px-5 md:px-10, flex justify-between). Transparent at the top of the page; after scrolling more than 40px (or when the mobile menu is open) it gets bg-ink/80, backdrop-blur-md and a bottom border border-bone/10, with a colour transition.
- Left: a link to #home with a 32px square badge (border border-signal, mono text-xs font-semibold text-signal) showing the initials of personalInfo.brandName, and next to it (from sm up) the brand name in font-mono text-xs uppercase tracking-[0.2em].
- Centre (lg and up only): a pulsing 6px signal dot and the current status line from heroContent.statusLines in font-mono text-[11px] uppercase tracking-[0.18em] text-dim; it changes to the next line every 3.5 s (aria-live="polite").
- Right (md and up): the navLinks as font-mono text-xs uppercase tracking-[0.18em] links (text-bone/70, hover:text-signal), then a LIVE CLOCK showing the current time in personalInfo.timezone in 24-hour HH:MM:SS (use Intl.DateTimeFormat with timeZone, update every second, tabular-nums, text-dim, title = the timezone).
- Mobile (below md): a "Menu"/"Close" text button (font-mono uppercase) toggling a dropdown panel under the bar with the links as large text (text-2xl font-semibold, border-b border-bone/10, py-4; clicking a link closes the menu), followed by the city and the clock in mono. Use aria-expanded and aria-controls.
- Clean up both intervals and the scroll listener on unmount.
Run npm run lint and show the bar at desktop and phone width.
````

**Check:** the page scrolls smoothly; on a laptop the native cursor is replaced by an orange dot with a trailing ring that grows over links; the top bar shows your initials, rotating status lines, the links and a ticking clock.

---

<<<STEP6>>>
## Step 6 · Hero: decoding name and the live 3D signal core

**Say to the class:** "The hero has two halves: on the left your name decodes from random characters; on the right a real-time 3D wireframe made with three.js that tilts toward your mouse and can be dragged to rotate."

**Prompt A: The 3D scene**

````text
Create src/components/HeroScene.jsx (default export) using three.js (import * as THREE from 'three'). It renders a live 3D "signal core" inside its parent div (the div fills its parent: h-full w-full, cursor-grab active:cursor-grabbing, role="img", aria-label "Interactive 3D shape — drag to rotate", data-cursor="hot").
In ONE useEffect:
- Create a WebGLRenderer({ antialias: true, alpha: true }) with pixel ratio min(devicePixelRatio, 2), sized to the parent div, appended to it. A PerspectiveCamera(40, aspect, 0.1, 100) at z = 7.
- A THREE.Group containing: (1) the outer shell: EdgesGeometry of an IcosahedronGeometry(1.9, 1) drawn as LineSegments in signal orange 0xff5b1f (transparent, opacity 0.9); (2) the inner core: Points of an IcosahedronGeometry(1.15, 4) with PointsMaterial color 0xe8e6df, size 0.025, opacity 0.8; (3) an orbit ring: a LineLoop through 128 points of an EllipseCurve radius 2.7, color 0xe8e6df opacity 0.18, tilted (rotation.x = PI / 2.4).
- Interaction: on window pointermove the group tilts toward the mouse (target rotation y = normalisedX * 0.4, x = normalisedY * 0.25); pointerdown on the canvas starts dragging and moving the pointer while dragging adds extra spin (0.01 per pixel); pointerup ends dragging.
- Animation loop with requestAnimationFrame: a slow auto-spin (+0.0025 per frame on y), the inner points rotate the other way (-time * 0.15), the group eases toward the target rotation (factor 0.06). On load it "materialises": scale grows from 0.6 to 1 with an ease-out curve and the edge opacity fades in over about 1 second.
- Pause rendering while off-screen (IntersectionObserver on the div). Resize the renderer and camera on window resize. With prefers-reduced-motion: no auto-spin and no intro.
- Cleanup on unmount: cancelAnimationFrame, disconnect the observer, remove all listeners, dispose every geometry and material, renderer.dispose(), renderer.forceContextLoss(), and remove the canvas from the div.
````

**Prompt B: The Hero section**

````text
Create src/components/Hero.jsx (default export) and render it as the first child of <main> in src/App.jsx (after <Cursor /> and <Hud />). Read personalInfo and heroContent. Load HeroScene lazily so three.js arrives in its own chunk: `const HeroScene = lazy(() => import('./HeroScene'))` and wrap it in <Suspense fallback={null}>.
LAYOUT
- <section id="home"> with the .hud-grid background, min-h-screen, flex flex-col, overflow-hidden, px-5 md:px-10, pt-24 pb-10. Inner grid max-w-[1440px] mx-auto, two columns on large screens (lg:grid-cols-[1.1fr_0.9fr]), items-center, gap-10.
- LEFT column: (1) heroContent.eyebrow in font-mono text-xs uppercase tracking-[0.3em] text-signal; (2) an <h1> with the name split into two lines: the FIRST word as solid bone text and the REST as outlined text (text-transparent with [-webkit-text-stroke:1.5px_#e8e6df]); both lines use <ScrambleText trigger="mount"> (delays 200 and 500 ms); h1 style: text-[clamp(3.2rem,11vw,9.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.04em]; (3) a thin divider line (h-px max-w-xl bg-bone/25) that draws from the left; (4) personalInfo.role in font-mono text-xs uppercase tracking-[0.25em] text-dim and heroContent.intro as text-lg md:text-xl text-bone/85; (5) two square-cornered buttons: primary = bg-signal text-ink (hover bg-bone) with an arrow that nudges right on hover; secondary = border border-bone/30 (hover border/text signal); both font-mono text-xs font-semibold uppercase tracking-[0.2em] px-6 py-3.5, linking to heroContent.ctaPrimary/ctaSecondary.
- RIGHT column: a .hud-frame box (border border-bone/10 bg-panel/40, h-[48vh] min-h-[320px], lg:h-[70vh]) holding the lazy HeroScene, with two tiny mono labels in the corners: "core.view — drag to rotate" (top-left) and personalInfo.city (bottom-right), text-[10px] uppercase tracking-[0.25em] text-dim, pointer-events-none.
- A bottom strip (max-w-[1440px], mt-10, border-t border-bone/10, pt-5, font-mono text-[11px] uppercase tracking-[0.2em] text-dim): a signal dot + personalInfo.availability on the left and "Scroll ↓" on the right (from sm).
ANIMATION: with gsap.context() in a useEffect: elements marked data-hero="fade" go from { opacity 0, y 30 } to { opacity 1, y 0 } (duration 1, ease power3.out, stagger 0.12, delay 0.3); the divider scales from scaleX 0 to 1 (origin-left, duration 1.2, power3.inOut). Revert on unmount.
Run npm run lint and show the result at desktop and phone width.
````

**Check:** your first name decodes into place in solid letters and your last name in outlined letters; the orange wireframe core fades in, slowly spins, tilts toward your mouse and rotates when dragged.

---

<<<STEP7>>>
## Step 7 · About: stats and skill modules (and optional intro video)

**Say to the class:** "The About section frames your portrait like an ID card in the HUD, counts up your stats when they scroll into view, and shows your skills as technical modules."

**Prompt A: About section**

````text
Create src/components/About.jsx (default export) and render it right after <Hero /> in src/App.jsx. Use gsap + ScrollTrigger and read personalInfo, aboutContent and skillGroups.
- <section id="about">: w-full px-5 md:px-10 py-28 md:py-40, content max-w-[1440px] mx-auto.
- A section label: <ScrambleText text={aboutContent.label}> (for example "01 / About") in font-mono text-xs uppercase tracking-[0.3em] text-signal, mb-10.
- Two columns on large screens (lg:grid-cols-[0.8fr_1.2fr], gap-12 lg:gap-20):
  LEFT: the portrait in a .hud-frame box (aspect-[4/5], max-w-[420px], border border-bone/10, bg-panel, overflow-hidden). Load src/assets/about/about-portrait.* with import.meta.glob (placeholder text if missing). Show it grayscale with extra contrast (grayscale contrast-125, object-cover) and an orange tint layer on top (absolute inset-0 bg-signal mix-blend-multiply opacity-25). A tiny mono label at the bottom-left: "ID · {brandName}". Alt text: "<name> — <role>".
  RIGHT: (1) <h2> aboutContent.heading: text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em]; (2) aboutContent.paragraph: text-lg md:text-xl leading-relaxed text-bone/75, max-w-2xl; (3) the stats as a <dl> in a 3-column grid between two thin lines (border-y border-bone/10, py-8): each value in text-4xl md:text-6xl font-bold with its suffix in signal orange, and its label in font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-dim; the numbers COUNT UP from 0 to their value (duration 1.6 s, ease power2.out) when they scroll into view (once); (4) the skill modules: a grid (sm:grid-cols-2) with 1px gaps that show as lines (gap-px, bg-bone/10, border border-bone/10); each module is bg-ink p-6 (hover bg-panel) with a header row (group title in mono text-[11px] uppercase tracking-[0.25em] text-signal on the left, "01", "02"… in text-dim on the right) and the skills as small square-cornered tags (border border-bone/15 px-2.5 py-1 font-mono text-xs).
- Reveal animation: every element marked data-about="reveal" goes from { opacity 0, y 40 } to { opacity 1, y 0 } (duration 0.9, power3.out, stagger 0.12) when the section reaches top 75% — once: true. Use gsap.context() and revert on unmount.
Run npm run lint and check at desktop and phone width.
````

**Prompt B: Self-introduction video section** {if:introurl} *(only because you added an intro video link)*:

````text
Create src/components/IntroVideo.jsx (default export) and render it in src/App.jsx right after <About />. Use { introVideo } from '../data/portfolioData' and ScrambleText.
- If introVideo.youtubeUrl is empty, render nothing.
- Get the YouTube id from youtu.be/ID, youtube.com/watch?v=ID, youtube.com/shorts/ID or youtube.com/embed/ID links. /shorts/ links use a vertical 9:16 frame (max-w-sm mx-auto); otherwise 16:9 (max-w-5xl).
- Section id="intro", px-5 md:px-10 py-24, max-w-[1440px] mx-auto. Header: a ScrambleText label "02 / {introVideo.label}" in font-mono text-xs uppercase tracking-[0.3em] text-signal, an h2 introVideo.heading (text-[clamp(2.2rem,5vw,4.5rem)] font-bold tracking-[-0.03em]) and introVideo.description in text-bone/70.
- The player sits in a .hud-frame box (border border-bone/10 bg-panel, sharp corners) that fades and slides up once when scrolled into view (GSAP ScrollTrigger, once: true). First show the thumbnail https://i.ytimg.com/vi/<id>/hqdefault.jpg in grayscale (loading="lazy", alt "<my name> self-introduction video") with a centred square signal-orange play button (w-20 h-20, dark triangle, aria-label "Play introduction video"). On click replace it with an <iframe> of https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1 (title "Self-introduction video", allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen).
- Under it a mono link "Watch on YouTube ↗" (target _blank rel noopener noreferrer). Also renumber the later section labels if needed so they stay in order.
Run npm run lint.
````

**Check:** the About section shows your tinted portrait in a framed box, the stats count up as you scroll to them, and the skills appear as bordered modules.

{if:introurl} **Check:** below About, your introduction video appears with an orange play button and plays when clicked.

---

<<<STEP8>>>
## Step 8 · Projects gallery and Journey timeline

**Say to the class:** "Two scroll-driven sections. On a laptop the Projects section pins in place and your project cards slide sideways as you scroll down. Then the Journey timeline fills with orange as you scroll and lights up each milestone."

**Prompt A: Projects (pinned horizontal gallery)**

````text
Create src/components/Projects.jsx (default export) and render it after <About /> (and <IntroVideo /> if it exists) in src/App.jsx. Use gsap + ScrollTrigger and read `projects` from src/data/portfolioData.js.
CARD (ProjectCard, one per project): an <article> with border border-bone/10 bg-panel/60, sharp corners, data-cursor="hot", full width on mobile and md:w-[min(560px,42vw)] on desktop, shrink-0. Top: a cover area (aspect-[16/10], md:aspect-[16/8], border-b border-bone/10, bg-ink, overflow-hidden) — load src/assets/projects/<project id>.(png|jpg|jpeg|webp|svg) with import.meta.glob; show it grayscale at 80% opacity, and on hover (the card is a `group`) it turns to full colour, full opacity and scales to 1.04 over 700 ms; if no cover exists show the .hud-grid background with the project id in mono. A small badge at the top-left of the cover: "<number> / <year>" (bg-ink/80, mono text-[10px] uppercase tracking-[0.25em] text-signal). Body (p-6 md:p-8, flex column): title (text-2xl md:text-3xl font-bold tracking-tight), description (text-sm md:text-base text-bone/70), tags as "#TAG" in mono text-[11px] uppercase tracking-[0.15em] text-dim, and at the bottom two square buttons: "Live ↗" (bg-signal text-ink, hover bg-bone) and "Code ↗" (border border-bone/30, hover signal) — mono text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2.5, target _blank rel noopener noreferrer, each only if its URL exists.
SECTION: <section id="projects">, w-full overflow-hidden py-24; on md+: h-screen, flex column centred, pt-20 pb-6. Header row (max-w-[1440px], px-5 md:px-10): a ScrambleText label "02 / Selected work" in mono text-xs uppercase tracking-[0.3em] text-signal, an h2 "Projects" (text-[clamp(2.4rem,6vw,5.5rem)] font-bold leading-none tracking-[-0.03em]) and, on the right (md+), "<count> projects · scroll →" in mono text-xs text-dim. Then the TRACK: a flex column with gap-6 on mobile; on md+ a single row (md:flex-row md:w-max md:gap-8) with px-5 md:px-10. Under it (md+) a thin progress line: bg-bone/10 with a signal-orange inner line that scales from 0 to 1 (origin-left).
HORIZONTAL SCROLL (desktop only): use gsap.matchMedia() with '(min-width: 768px) and (prefers-reduced-motion: no-preference)': animate the track's x to -(track.scrollWidth - window.innerWidth + 80) with ease 'none' and a ScrollTrigger { trigger: section, start: 'top top', end: () => '+=' + that distance, scrub: 1, pin: true, invalidateOnRefresh: true, onUpdate: progress line scaleX = self.progress }. Revert the matchMedia on unmount. On mobile the cards are simply stacked vertically.
Run npm run lint and check at desktop (scroll down: the section pins and the cards slide left) and at phone width (normal vertical list).
````

**Prompt B: Journey timeline**

````text
Create src/components/Journey.jsx (default export) and render it right after <Projects /> in src/App.jsx. Use gsap + ScrollTrigger and read `experience` from src/data/portfolioData.js.
- <section id="journey">: px-5 md:px-10 py-28 md:py-40; grid max-w-[1440px] mx-auto, lg:grid-cols-[0.8fr_1.2fr], gap-12 lg:gap-20.
- LEFT (sticky on large screens: lg:sticky lg:top-28 lg:self-start): a ScrambleText label "03 / Journey" (mono, signal) and an h2 "Where I've been learning and building." (text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em]).
- RIGHT: an ordered list (relative, pl-10) with a vertical 1px base line (bg-bone/15) at the left and a second signal-orange line on top of it (origin-top) that FILLS with scroll: gsap.fromTo(fill, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: the list, start: 'top 70%', end: 'bottom 60%', scrub: true } }).
- Each entry: a 15px square node on the line (border border-signal bg-ink, scale 0.75) that becomes solid signal orange and full size when the fill reaches it (ScrollTrigger.create on the item, start 'top 65%', onEnter adds the class is-on, onLeaveBack removes it; style the node with Tailwind arbitrary variants like [&.is-on_.node]:bg-signal [&.is-on_.node]:scale-100). Content: the period in mono text-xs uppercase tracking-[0.25em] text-dim, the role as text-2xl md:text-3xl font-bold, the organisation in mono text-sm text-signal, the description in text-bone/70. Each item also fades in from x 30 once when it enters (top 85%, once: true).
- Use gsap.context() and revert on unmount.
Run npm run lint.
````

**Prompt C: Project videos** {if:project1video|project2video|project3video|project4video} *(only because you added a project video link)*:

````text
Add explanation videos to the project cards. Only projects whose `video` field in src/data/portfolioData.js is a non-empty YouTube link get a video; all other cards stay exactly as they are.
1. Create src/components/VideoModal.jsx (default export, props: url, title, onClose): a fixed full-screen overlay (inset-0, z-[200], bg-ink/90, backdrop-blur-sm) that fades in, with a centred player (w-full max-w-5xl, aspect-video, border border-bone/15, sharp corners; vertical 9:16 max-w-sm for /shorts/ links). The player is an <iframe> of https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1 (title = project title, allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen). Extract the id from youtu.be/ID, watch?v=ID, shorts/ID or embed/ID links. Close with a square ✕ button (top-right, aria-label "Close video"), the Escape key, or a click on the overlay outside the player. While open, stop Lenis from scrolling the page (lock document.body.style.overflow = 'hidden' and add data-lenis-prevent to the overlay) and restore it on close; focus the ✕ button when it opens.
2. In ProjectCard, for a project with a video: put a square signal-orange play button with a dark triangle at the bottom-left of the cover plus a mono label "▶ Watch demo" on a dark strip; the whole cover becomes a <button type="button"> (aria-label "Play <project title> demo video") that opens <VideoModal> for that project.
3. Run npm run lint and test: clicking opens the big player with sound, ✕ / Esc / outside click close it, the page doesn't scroll behind it, and projects without a video look unchanged.
````

**Check:** on a laptop, scrolling into Projects pins the section and the cards slide sideways while an orange line shows progress; on a phone they are a normal list. The Journey line fills with orange and lights each milestone.

{if:project1video|project2video|project3video|project4video} **Check:** projects with a video show an orange play button; clicking opens a big player and ✕, Esc or clicking outside close it.

---

<<<STEP9>>>
## Step 9 · Contact: the terminal form (EmailJS)

**Say to the class:** "A static website cannot send email by itself. EmailJS sends it from the browser. Even without keys the form still works by opening your email app."

**Do on the website (2 minutes, with the instructor):**
1. Open https://www.emailjs.com/ → sign up (free).
2. **Email Services → Add New Service → Gmail** → connect → copy the **Service ID**.
3. **Email Templates → Create New Template**: Subject `Portfolio message from {{user_name}}`; Content: `From: {{user_name}} ({{user_email}})` and `{{message}}`; set *To email* to your own email → Save → copy the **Template ID**.
4. **Account → General → Public Key** → copy it.

**Prompt A: Contact section**

````text
Create src/components/Contact.jsx (default export) and render it after <Journey /> in src/App.jsx (it is the last section inside <main>). Read personalInfo, socialLinks, contactContent and emailjsConfig.
LAYOUT: <section id="contact"> with the .hud-grid background, px-5 md:px-10 py-28 md:py-40; grid max-w-[1440px] mx-auto, lg:grid-cols-2, gap-14 lg:gap-20.
LEFT: a ScrambleText label contactContent.label ("04 / Contact") in mono signal; an h2 contactContent.heading (text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[0.95] tracking-[-0.04em]); contactContent.note (text-lg text-bone/70, max-w-md); the email as a mailto link in mono text-lg md:text-2xl with a thick signal-orange underline (decoration-signal decoration-2 underline-offset-8), hover signal; the phone in mono text-sm text-dim (only if set); then the social links (GitHub, LinkedIn, Instagram — skip empty) as mono text-xs uppercase "LABEL ↗" links, target _blank rel noopener noreferrer.
RIGHT — a terminal-style form in a .hud-frame box (border border-bone/10 bg-ink/70 backdrop-blur p-6 md:p-10):
- A first line in mono text-xs text-dim: an orange "$" then " new message --to <my first name in lowercase>".
- Three fields, each with a label like "> name", "> email", "> message" in mono text-[11px] uppercase tracking-[0.25em] text-signal: <input name="user_name" required placeholder="Your full name">, <input name="user_email" type="email" required placeholder="you@example.com">, <textarea name="message" required rows=5 placeholder="Tell me about the role or project…"> (resize-none). Field style: transparent background, only a bottom border (border-bone/20, focus border-signal), mono text-sm, no rounded corners, no outline.
- A full-width square submit button: bg-signal text-ink, mono text-xs font-semibold uppercase tracking-[0.25em] px-6 py-4, text on the left ("Send message" / "Sending…") and an arrow on the right, hover bg-bone, disabled while sending.
- Status line (<p role="status">, mono text-xs): success "✓ Message sent. Talk soon." (emerald) / error "✕ Something went wrong. Please try again." (red); clears after about 4 s.
SENDING: isConfigured = serviceId, templateId and publicKey are all NOT equal to 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', 'YOUR_EMAILJS_PUBLIC_KEY'. If NOT configured: open a mailto: link to personalInfo.email (subject "Portfolio contact", body with the name, email and message, URL-encoded) in a new tab, show success and reset the form. If configured: `const emailjs = await import('@emailjs/browser'); await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);` inside try/catch (console.error on failure).
Run npm run lint and check at desktop and phone width.
````

**Prompt B: Connect your keys safely**

````text
Create a file named .env.local in the project root (it must be git-ignored; confirm .gitignore covers *.local). Ask me, one at a time, for my EmailJS Service ID, Template ID and Public Key, and write them as:
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
(If I say I don't have keys yet, create the file with empty values and tell me the form will use the email-app fallback.) Then restart the dev server so the new variables load and run npm run lint. Never print my keys in your summary.
````

**Check:** fill and send the form: you see "✓ Message sent." and receive an email. Without keys, your email app opens with the message pre-filled.

---

<<<STEP10>>>
## Step 10 · Footer

**Say to the class:** "A calm, technical footer: three columns of links, your name as a huge faint watermark and the credit line."

**Prompt:**

````text
Create src/components/Footer.jsx (default export) and render it AFTER </main> in src/App.jsx. Read personalInfo, socialLinks, navLinks, footerContent and academy. React + Tailwind only.
- <footer>: w-full overflow-hidden border-t border-bone/10 px-5 md:px-10 pt-16 pb-8, content max-w-[1440px] mx-auto.
- Three columns on md+ (stacked on mobile), mb-14: "Navigate" (the navLinks), "Elsewhere" (GitHub, LinkedIn, Instagram with ↗, external links target _blank rel noopener noreferrer, skip empty), and "Say hello" (right-aligned on md+: the email as a mailto link and the city in mono text-xs text-dim). Each column title is mono text-[11px] uppercase tracking-[0.25em] text-signal; links are text-bone/75 with hover:text-signal.
- A huge watermark of personalInfo.brandName: centred, uppercase, whitespace-nowrap, text-[13.5vw], font-bold, leading-none, tracking-[-0.05em], very faint (text-bone/[0.07]), select-none, aria-hidden.
- Bottom row (border-t border-bone/10 pt-6, mono text-[11px] uppercase tracking-[0.15em] text-dim, row on md+): left "© {new Date().getFullYear()} {name} · {footerContent.tagline}"; right "Trained at" + an underlined link to academy.url with academy.name (target _blank rel noopener, hover signal).
Run npm run lint.
````

**Check:** the footer shows the three link columns, your name as a giant faint watermark and the "Trained at TAP Academy" credit.

---

<<<STEP11>>>
## Step 11 · Put it together, check, fix and polish

**Say to the class:** "Before we publish, we assemble the page in the right order and ask the agent to test its own work like a reviewer."

**Prompt:**

````text
Act as a careful code reviewer and QA tester for this project.
1. Make src/App.jsx call useSmoothScroll() and render, in this order: <Cursor />, <Hud />, then <main> containing Hero, About, IntroVideo (only if src/components/IntroVideo.jsx exists), Projects, Journey, Contact, and then <Footer /> after </main>. Only import components that exist.
2. Run `npm run lint` and `npm run build` and fix every error or warning in my code. (A warning about a large chunk is fine if HeroScene is lazy-loaded.)
3. Open the site at desktop width and at phone width (about 390 px). Check: the HUD bar clock ticks and the status line rotates; the name decodes; the 3D core renders, spins, tilts and can be dragged; smooth scrolling works and the nav links scroll to the right sections; there is no horizontal scrolling on mobile; the custom cursor appears only on a laptop and never on a phone.
4. SCROLL TEST: scroll slowly from the top to the bottom, then back to the top, then down again. Every element must stay visible after it has appeared — nothing may disappear. The stats count up once. On desktop the Projects section pins and the cards slide sideways until the last card is fully visible, then normal scrolling continues with no jump and no empty gap; on mobile the cards are a normal list. The Journey line fills and the nodes light up, and un-light when scrolling back up. If anything is wrong, fix it (ScrollTrigger.refresh() after load, once: true on entrance animations, invalidateOnRefresh on the pin) and re-test.
5. VIDEO TEST (only for videos that exist in portfolioData.js; if there are none, skip this test and do not create any video component): projects with a `video` field open the big player and ✕, Esc and clicking outside close it; if `introVideo` exists, it plays when its play button is clicked.
6. Confirm there is exactly ONE <h1> (the hero name); every <img> has meaningful alt text; icon-only links have aria-labels; with "reduce motion" turned on in the operating system the site still works without smooth scroll, the cursor or the decode effect.
7. Confirm no personal secrets are tracked by git (.env.local must be ignored) and that no sample text such as "Alex Rivera" or "YOUR_" remains anywhere except the emailjsConfig fallbacks.
8. Make a git commit "Complete portfolio sections".
Report what you fixed in a short list.
````

**Check:** the agent reports a clean lint and build and lists the fixes.

---

<<<STEP12>>>
## Step 12 · Browser tab, share preview and README

**Say to the class:** "When someone shares your link on LinkedIn or WhatsApp, or Googles your name, this is what they see. We also write the README, which is the front page of your GitHub repository."

**Prompt:**

````text
Finish the "front door" of the project using my details from src/data/portfolioData.js.
1. index.html <head>:
   - <title>: "<My Name> — <My Role> | TAP Academy Student Portfolio" (keep it under 65 characters; if it is longer, shorten the role, never remove my name or "TAP Academy")
   - meta description: ONE natural sentence of 140–155 characters written for humans, containing my name, my role, my city and the phrase "TAP Academy placement training" exactly once
   - meta keywords: my name, my role, my top 4 skills, my city, "portfolio", "TAP Academy", "TAP Academy student portfolio", "TAP Academy placement training", "augmented reality" (each phrase only once)
   - meta author (my name), meta robots "index, follow", meta theme-color #08090c
   - Open Graph tags (og:title = the same text as <title>, og:description = the meta description, og:type=website, og:site_name = "<My Name> Portfolio") and Twitter card tags (summary_large_image). Use my portrait as the preview image: copy src/assets/about/about-portrait.* to public/og-image.(same extension) and reference it.
   - A JSON-LD <script type="application/ld+json"> block, schema.org "Person": name, jobTitle, description (the meta description), address (addressLocality = my city), knowsAbout (my top skills as an array), image (the og image), sameAs [my GitHub, my LinkedIn, my Instagram if provided], and the alumniOf entry exactly as defined in AGENTS.md ("Credit conventions").
   - Image alt texts: the About portrait alt must be "<My Name> — <My Role>, TAP Academy student". Do not add the phrase to any other alt text.
2. Create public/robots.txt (allow all) and public/sitemap.xml with a placeholder home URL "https://YOUR-SITE-URL/"; I will replace it after deployment.
3. Replace README.md with a professional README: title "<My Name> — Portfolio", one-line description, a "Live site" line with the placeholder https://YOUR-SITE-URL/, a Tech stack list (React 19, Vite, Tailwind CSS 4, GSAP + ScrollTrigger, Lenis, three.js, EmailJS), "Run locally" commands (npm install, npm run dev, npm run build), an "Environment variables" section naming the three VITE_EMAILJS_* variables without values, and the credit sentence from AGENTS.md ("Built during the placement training program at TAP Academy" with the link).
4. Run npm run lint and npm run build, then commit with the message "Add metadata and README".
````

**Check:** the browser tab shows your name and role. The README is professional.

---

<<<T4>>>
**T4 · Image or 3D scene does not appear**

````text
Something visual is missing. Check: (1) src/assets/about/about-portrait.* and any src/assets/projects/project-N.* files exist with exact, case-sensitive names and the components load them with import.meta.glob; (2) the 3D scene: HeroScene is lazy-loaded inside <Suspense>, its parent box has a real height (h-[48vh] / lg:h-[70vh]), the renderer is sized to the parent, there are no WebGL errors in the console (if WebGL is disabled, show a static fallback instead of crashing); (3) in production, three.js loads as a separate chunk. Fix the problem and show me the result.
````

<<<T7>>>
**T7 · Scrolling feels broken (jumps, pin gaps, nothing animates)**

````text
Scrolling on my site is not working as designed. Fix it without changing the design: (1) Lenis must be driven by gsap.ticker (lenis.raf(time * 1000)) with lenis.on('scroll', ScrollTrigger.update) and gsap.ticker.lagSmoothing(0) — one shared loop, created once and destroyed on unmount; (2) call ScrollTrigger.refresh() after window load and again after ~800 ms; (3) the Projects pin uses gsap.matchMedia for min-width 768px, end: () => '+=' + distance, invalidateOnRefresh: true and is reverted on unmount; (4) entrance animations use once: true so nothing disappears; (5) the video modal and mobile menu don't fight Lenis (data-lenis-prevent / overflow lock). Test by scrolling top → bottom → top → bottom at desktop and phone width and report what you fixed.
````

<<<DONE>>>
**Done.** Each student now has a live, motion-led portfolio with a live 3D centrepiece, a public GitHub repository, and their site registered with Google and shared on LinkedIn.

<<<END>>>
