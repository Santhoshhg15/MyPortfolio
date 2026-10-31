<<<INTRO>>>
# AI-Driven Class Playbook — Template 2: Cinematic Dark Portfolio (GSAP)

**How this works:** nobody types code. For every step you (1) read the short intro, (2) copy the prompt, (3) paste it into the **Antigravity agent chat**, (4) check the result in the browser. Installation, libraries, files, Git and deployment are all done *by the AI agent* from the prompts below.

**What you are building:** a cinematic, editorial developer portfolio. A huge metallic "PORTFOLIO" headline that scrambles in letter by letter, your full-body portrait rising from the bottom of the screen, a word-by-word scroll-reveal intro, a scrolling skills ticker, a full-width electric-lime services accordion, large editorial project stories, a premium contact form and a cinematic footer. Black, white and gray, with a single electric-lime (#CCFF00) accent.

Before you begin, open these free websites in browser tabs:

| Tool | Used for | Link |
|---|---|---|
| **Google Antigravity** (the IDE) | Pasting prompts; the agent writes code and runs terminal commands | https://antigravity.google/ |
| **ChatGPT** (or Gemini) | Creating your portraits and the footer background image | https://chatgpt.com/ |
| **GitHub** | Storing the code (public repository) | https://github.com/ |
| **Vercel** | Publishing the live website | https://vercel.com/ |
| EmailJS *(Step 9)* | Making the contact form send email | https://www.emailjs.com/ |

> Sign in to all of them with a Google or GitHub account **before you start**. A few steps (logins, downloading a generated image) are done by clicking in the browser — the playbook tells you exactly when.

<<<QUICKMAP>>>
## Quick map

| Part | Step | What happens |
|---|---|---|
| A. Create assets | A1 | Your full-body hero portrait (ChatGPT / Gemini) |
| | A2 | Your chest-up studio portrait |
| | A3 | The glowing footer background |
| | A4 | Your self-introduction video (optional) |
| | A5 | Project cover images (optional) |
| | A6 | Project explanation videos (optional) |
| B. Build | 1 | Create the project folder and open Antigravity |
| | 2 | AI installs everything (GSAP, Tailwind, EmailJS) and sets up the project |
| | 3 | AI builds your data file from your details |
| | 4 | AI places your images and removes their black background |
| | 5 | Hero: scrambling headline + rising portrait |
| | 6 | Intro, word-by-word reveal, skills ticker (+ intro video) |
| | 7 | Services: the full-width lime accordion |
| | 8 | Projects: editorial stories (+ project videos) |
| | 9 | Contact form (EmailJS) |
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
## A1 · Hero image: full-body portrait (ChatGPT or Gemini)

**Say to the class:** "The hero of this template is you, standing in front of a giant 'PORTFOLIO' headline. We need a full-body fashion-style photo of you on a pure black background. Your own photo gives the AI your face; the prompt gives it the outfit and the pose."

**Where:** open https://chatgpt.com/ (or https://gemini.google.com/) → new chat → attach **one clear photo of yourself**: front-facing, good light, face fully visible, no sunglasses, no filters (a half-body photo is fine) → paste the prompt → send.

**Prompt (paste with your photo attached):**

````text
Create a high-end photorealistic full-body fashion portrait of the person in the attached reference photo.

IDENTITY (copy ONLY from the attached photo): preserve exactly my facial identity, facial structure, skin tone, age, hairstyle (length, texture, curls or straight), facial hair (only if I have any) and glasses (only if I wear them). Do not change my face or hair in any way.

POSE: standing in a relaxed, confident fashion pose, facing mostly toward the camera with the body slightly angled. Both hands naturally placed inside the front pockets of the trousers. Shoulders relaxed, posture upright, head tilted very slightly and naturally, calm and confident expression.

OUTFIT: a premium oversized white / off-white textured linen or cotton button-up shirt, slightly loose and relaxed fit, with the top two buttons open, natural collar, subtle fabric texture and realistic wrinkles. Sleeves rolled up to just below the elbows for a casual sophisticated look. High-quality beige / taupe tailored trousers, relaxed straight-leg fit, with realistic fabric texture, belt loops, waistband and natural folds. (If I am a woman, use the same outfit styled naturally for women.)

COMPOSITION: full-body, from the top of the hair all the way down to the shoes, with the ENTIRE person visible. Centre the subject vertically and horizontally with enough empty space around the body. Realistic human proportions. Portrait orientation, aspect ratio 2:3 (for example 1024 x 1536).

BACKGROUND: pure solid black (#000000), completely clean and seamless. No furniture, no environment, no props, no shadows on the background, no text, no logo.

LIGHTING: professional luxury fashion photography lighting: soft directional studio light from the front and slightly from the side, subtle highlights on the hair, realistic skin highlights, soft natural shadows across the clothing, excellent separation between the subject and the black background.

QUALITY: extremely realistic skin texture, individual hair strands, fabric weave, shirt wrinkles, trouser folds and stitching. Premium editorial fashion campaign aesthetic, sophisticated minimalist styling, realistic photography, sharp facial detail, natural proportions, high dynamic range, ultra-detailed, 4K quality. The final image must look like a professionally photographed fashion campaign portrait isolated against a pure black background.

Do NOT: change my identity, add accessories, add text or logos, crop any part of the body, or add extra people.
````

**If the result is not right**, reply in the same chat with one fix at a time:
- Face not like you: `The face is not mine. Redraw the same image but copy my face exactly from the attached photo. Change nothing else.`
- Body cropped: `Show the full body from head to shoes with space around, portrait 2:3. Change nothing else.`
- Background not pure black: `Make the background pure solid #000000 with no gradient or floor shadow. Change nothing else.`

When it looks right, **download the image** (it goes to **Downloads**). Don't rename it.

**Check:** a full-body, 2:3 portrait of you on a pure black background is in Downloads.

---

<<<A2>>>
## A2 · About image: studio portrait (ChatGPT or Gemini)

**Say to the class:** "The second picture is a formal head-and-shoulders portrait for the 'Intro' section. Same method: your photo plus the prompt."

**Where:** the same chat as A1 or a new one → attach your photo again → paste the prompt → send.

**Prompt (paste with your photo attached):**

````text
Create a professional studio portrait of the person in the attached reference photo.

IDENTITY (copy ONLY from the attached photo): preserve exactly my facial identity, facial proportions, skin tone, age, hairstyle (length, texture, curls or straight), facial hair (only if I have any) and glasses (only if I wear them). Do not change my face or hair.

POSE AND FRAMING: shown from the waist / chest up, facing directly toward the camera, straight posture, shoulders squared, calm and confident neutral expression with a very subtle smile. Front-facing symmetrical composition, subject positioned exactly in the centre of the frame. Head and shoulders clearly visible, with the suit extending toward the bottom of the image. Realistic body proportions. Portrait orientation, aspect ratio 3:4 (for example 1024 x 1365).

OUTFIT: a premium formal black three-piece business suit: black suit jacket, black waistcoat / vest, crisp white formal dress shirt and a black textured tie. The suit must look perfectly tailored, elegant, clean and professional. (If I am a woman, use a black tailored three-piece suit with a white blouse, styled naturally for women, without a tie.)

LIGHTING: professional studio lighting, soft frontal illumination, subtle highlights on the face and hair, realistic skin texture, natural shadows, high facial detail, sharp focus, polished corporate photography quality.

BACKGROUND: pure solid black (#000000) with no objects, no scenery, no gradients, no text, no decorations.

QUALITY: high-resolution photorealistic professional corporate headshot, clean isolated cutout, sharp edges, realistic fabric texture, realistic hair strands, natural skin, cinematic but subtle lighting, premium executive portrait, centred composition, 4K quality.

Do NOT change my identity or facial features. Do NOT add accessories. Do NOT alter my hairstyle or glasses.
````

Fix prompts are the same as in A1 (face / background). **Download the image** to **Downloads**.

**Check:** a 3:4, chest-up portrait of you in a black three-piece suit on pure black is in Downloads.

---

<<<A3>>>
## A3 · Footer background image (ChatGPT or Gemini)

**Say to the class:** "The footer has a glowing green horizon rising from the darkness. It's an abstract image: no photo of you is needed."

**Where:** open https://chatgpt.com/ (or https://gemini.google.com/) → new chat → paste the prompt → send. **No photo** this time.

**Prompt:**

````text
Create a minimalist cinematic abstract background for a premium dark developer portfolio website.

FORMAT: 16:9 widescreen composition (1920 x 1080) with a completely dark, almost pure-black background. The upper 65–70% of the image must stay extremely dark and empty, creating large negative space.

SUBJECT: in the lower third, a smooth abstract landscape-like glowing form: a subtle neon-green luminous wave / curved horizon emerging from the darkness. The green glow is concentrated around the bottom-centre / lower-middle area, with the brightest point slightly left of centre. A smooth flowing curved line rises gently toward the centre and then sweeps downward toward the right edge.

LAYERED GLOW around the curve: deep dark green on the outer glow; rich emerald green in the middle; bright neon lime green near the central highlight; a very subtle white-green highlight along the brightest part of the curve. The transition from green glow to black must be extremely smooth and atmospheric, with no hard edges. The curve resembles a futuristic horizon, abstract terrain or flowing energy wave, but stays completely abstract. A subtle secondary green glow extends toward the left.

NOTHING ELSE: no objects, no people, no text, no logos, no UI, no stars, no particles.

STYLE: premium cinematic technology aesthetic, futuristic, elegant, minimal, atmospheric, high-end creative agency website background, soft volumetric lighting, realistic light diffusion, smooth gradients, deep blacks, subtle neon-green illumination, ultra-clean composition. The green illumination must feel subtle and sophisticated rather than a bright neon effect. Keep the upper portion almost completely black so the text placed over it stays readable.

Output one image, aspect ratio 16:9, ultra-high resolution, seamless dark background, cinematic lighting.
````

**Download the image** to **Downloads**.

**Check:** a wide, mostly black image with a soft green glowing curve at the bottom is in Downloads.

---

<<<A4>>>
## A4 · Your self-introduction video (optional)

> **Optional step.** If you do not have a self-introduction video, click **Next step** to skip it. Your website will then simply have no video section, and the video prompt in Step 6 is hidden automatically.

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
- **Look:** plain wall behind you, smart-casual clothes, smile at the start and the end.
- **Delivery:** look into the camera lens, not the screen. Record 2–3 takes and keep the best.

**Then upload it to YouTube:** open https://studio.youtube.com/ → **Create** → **Upload videos** → title `[YOUR NAME] — Self Introduction | [YOUR ROLE] | TAP Academy Placement Training` → description: your script's first two sentences and the line `Trained at TAP Academy: https://thetapacademy.com/` → **No, it's not made for kids** → visibility **Public** (or **Unlisted**) → **Publish** → **copy the video link**.

[[input:introurl|Your self-introduction video link|https://youtu.be/xxxxxxxxxxx|Paste the YouTube link here. It is added to your website in Step 6.]]

**Check:** your self-introduction is on YouTube and the link is pasted above.

---

<<<A5>>>
## A5 · Project cover images (optional)

> **Optional step.** Each project block shows a large cover image. If you skip this step, your projects get a clean dark placeholder, and you can add real screenshots later.

**Say to the class:** "Every project in this template is a big editorial story with a cover image. A real screenshot of your project is best. If you don't have one, the AI can create a cinematic cover."

**Option 1 (best): use real screenshots.** Take a screenshot of your running project (Windows: **Win + Shift + S**; Mac: **Cmd + Shift + 4**). Save it to **Downloads**.

**Option 2: generate a cover.** Open https://chatgpt.com/ → paste the prompt once per project (fill the bracket) → download the image.

**Prompt:**

````text
Create a premium cinematic cover image for a software project called "[PROJECT NAME]" — [one sentence: what the project does]. 

FORMAT: landscape 16:10 aspect ratio (1600 x 1000).
STYLE: dark, minimal, high-end creative-agency look. A realistic laptop or phone screen (whichever suits the project) showing a clean modern dark user interface of the app, with a subtle electric-lime (#CCFF00) accent glow. Deep black background, soft volumetric light, shallow depth of field, premium product photography feel.
RULES: no real brand logos, no readable small text, no people, no watermarks. Keep the composition simple with generous empty space.
````

**Check:** you have one image per project (screenshots or generated) in Downloads. Skipping is fine.

---

<<<A6>>>
## A6 · Project explanation videos (optional)

> **Optional step.** Only add the links of the project videos you really have. Projects without a video link stay as normal project blocks, and the video prompt in Step 8 is hidden if you add none.

**Say to the class:** "A 2-minute video where you demo your project and explain how you built it is the strongest proof of skill a recruiter can see. On your site, a project with a video gets a play button on its cover image; clicking it opens a big player."

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

**Recording tips:** on Windows use **Clipchamp** (*Record → Screen and camera*) or the **Snipping Tool** recorder; on Mac press **Cmd + Shift + 5**. Close other tabs and notifications, zoom the browser to 110–125%, use sample data, speak slightly slower than normal. **Keep the original recording file**: the AI can turn it into a short silent hover preview.

**Then upload each video to YouTube:** https://studio.youtube.com/ → **Create** → **Upload videos** → title `<Project name> — Demo & Explanation | [YOUR NAME] | TAP Academy Placement Training` → description: 2 sentences about the project + `Source code: <GitHub link>` + `Trained at TAP Academy: https://thetapacademy.com/` → **Public** → **Publish** → copy the link into the matching box below.

[[input:project1video|Project 1 video link|https://youtu.be/xxxxxxxxxxx|Optional. Leave empty if you have no video for this project.]]

[[input:project2video|Project 2 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

[[input:project3video|Project 3 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

[[input:project4video|Project 4 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

**Check:** each project you recorded is on YouTube and its link is pasted above (empty boxes are fine).

---

<<<STEP2>>>
## Step 2 · AI installs everything and sets up the project

**Say to the class:** "The agent will check your computer, install what's missing (Node.js, Git), create a React + Vite project and install every library: Tailwind CSS for styling, GSAP for the animations, EmailJS for the contact form."

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
6. Install these libraries with npm: `gsap tailwindcss @tailwindcss/vite @emailjs/browser`. (GSAP includes the ScrollTrigger plugin. Do NOT install framer-motion or aos.)
7. Configure Tailwind CSS 4 with the Vite plugin: in vite.config.js use the plugins `react()` and `tailwindcss()` (import tailwindcss from '@tailwindcss/vite'). Do NOT create tailwind.config.js or postcss.config.js.
8. Delete the Vite demo content: src/App.css, src/assets/react.svg, public/vite.svg, and all demo markup in src/App.jsx. App.jsx must simply return an empty fragment for now. Keep eslint.config.js.
9. Replace src/index.css with exactly this content:
   - `@import "tailwindcss";`
   - an `@theme` block defining `--font-sans: 'Inter', system-ui, -apple-system, sans-serif;`, `--font-serif-accent: 'Playfair Display', Georgia, serif;` and `--color-lime: #CCFF00;`
   - `html { scroll-behavior: smooth; }`
   - `body { margin: 0; background: #050505; color: #fff; font-family: var(--font-sans); overflow-x: hidden; }`
   - two keyframes for a seamless skills ticker: `@keyframes marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }` and `@keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }`, plus the classes `.marquee-left { animation: marquee-left 40s linear infinite; }` and `.marquee-right { animation: marquee-right 40s linear infinite; }`
   - `@media (prefers-reduced-motion: reduce) { .marquee-left, .marquee-right { animation: none; } }`
10. Replace index.html with a clean page: lang="en", UTF-8 charset, viewport meta, a favicon link to `/favicon.svg`, a title "My Portfolio", meta theme-color #050505, preconnect links and ONE Google Fonts link that loads Inter (weights 300–900) and Playfair Display (italic 400), a `<div id="root"></div>` and the module script `/src/main.jsx`. Create public/favicon.svg as a simple near-black rounded square with a lime (#CCFF00) circle in the middle.
11. Make sure src/main.jsx renders `<App />` inside `<StrictMode>` and imports './index.css'.
12. Add a .gitignore if missing (node_modules, dist, *.local, .env*), and run `git init` and make the first commit "Initial project setup" (if git user name/email are not set, set them to <My Name> and ask me for my email).

PART 3 — Project rules file
13. Create a file named AGENTS.md in the project root (and an identical copy at .agent/rules/project-context.md) with exactly the following content, so you remember it in every later step:

---
# Project context
React 19 + Vite + Tailwind CSS 4 single-page developer portfolio, "cinematic dark editorial" style. Plain JavaScript (JSX), no TypeScript, no router. Libraries: gsap (with ScrollTrigger), @emailjs/browser. Style: Tailwind utility classes only (no extra CSS files except src/index.css). Colours: near-black #050505 backgrounds, white and gray text (#9CA3AF secondary), ONE accent colour: electric lime #CCFF00. Fonts: Inter for everything; Playfair Display light italic only for small accent words. Headings: huge, extra-bold, uppercase, very tight letter spacing, white-to-gray vertical gradient (transparent text with background-clip).

# Architecture rules
- ALL content (text, links, lists) lives in src/data/portfolioData.js and is imported by components. Never hard-code personal content in components.
- One component per section in src/components/, composed in order in src/App.jsx: Hero, About, (IntroVideo), Services, Projects, Contact, Footer. There is no navbar. Navigation is anchor links (#home, #about, #services, #projects, #contact) with CSS smooth scrolling. No router.
- Assets: src/assets/hero/hero-portrait.png, src/assets/about/about-portrait.png, src/assets/footer/footer-bg.(png|jpg|webp), src/assets/projects/project-1.(png|jpg|webp) etc. Components load them with import.meta.glob and show a graceful placeholder when a file is missing.
- Animation rules (GSAP): register ScrollTrigger once (gsap.registerPlugin(ScrollTrigger)); create animations inside useEffect with gsap.context() and always clean up (ctx.revert(), clear timers/intervals, restore document.body.style.overflow). Entrance animations use `once: true` or play-and-stay: NO element may ever become invisible again after it has appeared, even if the visitor scrolls away and back. Call ScrollTrigger.refresh() on window 'load' because images and fonts change the layout. Respect prefers-reduced-motion where simple.
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

**Check:** the agent reports Node ≥ 20, lists the installed libraries (gsap, tailwindcss, @emailjs/browser) and the browser (http://localhost:5173) shows a blank near-black page. If a command fails, use *Troubleshooting prompt T1* at the end.

---

<<<STEP3>>>
## Step 3 · The AI interviews you and builds your data file

**Say to the class:** "The website shows only what is in one data file, and it must be about YOU. If you filled in the 'Your details' form, the agent already knows most of it and only asks about what is missing."

**Prompt:**

````text
Now create src/data/portfolioData.js with MY real information. Do not invent personal facts. Follow this process:

PROCESS
1. Interview me first. Ask questions in small groups (maximum 4 questions at a time), wait for my answers, then ask the next group. If I answer "suggest", propose 2–3 options based on what I told you and let me pick. If I answer "skip" for an optional item, leave a clean empty value or remove that item.
   Group 1 — Identity: full name (shown as the brand name, in capitals in the big typography), current role/title (2–4 words, for example "Java Full Stack Developer"; the first word is shown in bold and the rest in light italic), city and country, phone number (optional), primary email.
   Group 2 — Links: GitHub, LinkedIn, Instagram and YouTube URLs (any may be empty; empty ones are not shown).
   Group 3 — Intro: a 2–3 sentence "about me" paragraph, and 3–6 technologies from it to highlight in brighter white.
   Group 4 — Skills ticker: up to 4 rows (for example Frontend, Backend, AI, Tools) with 6–9 skills each.
   Group 5 — Services: 4–6 services I offer; each has a short UPPERCASE title, a one-sentence description and 4–6 capabilities. Offer to draft them from my skills. Only the FIRST service gets the "VIEW PROJECTS" button (link #projects).
   Group 6 — Projects: up to 4 projects: a title (1–2 lines; optionally one word to show in light italic serif gray, written between asterisks like *ai*), a 2–3 sentence description, a live link and a GitHub link, plus the project video link only if I have one.
2. After the interview, show me a short summary and ask "Is everything correct?" Fix anything I point out.
3. Then write src/data/portfolioData.js. It MUST keep exactly the export names, nesting and field names shown in the structure below (the components I will build in later steps depend on them). Fill every value from my answers and replace all sample text. Keep `academy` exactly as it is. Put my name in `personalInfo.name` and `personalInfo.brandName`. `heroContent.finalWord` stays "PORTFOLIO". In `aboutContent.paragraph` mention naturally and only once that I am training (or trained) in the placement training program at TAP Academy — for example "...sharpening my skills through the placement training program at TAP Academy." Do not repeat that phrase anywhere else in the data file. Leave the emailjsConfig export exactly as is. Project videos are OPTIONAL: add a `video: "<YouTube link>"` field ONLY to a project whose video link is given in MY DETAILS; for projects without a link do not add any `video` field. The self-introduction video is OPTIONAL: ONLY if MY DETAILS contains a self-introduction video link, add right after aboutContent the export `introVideo = { badge: "Meet Me", heading: "Watch My Introduction", description: "<one short sentence inviting the visitor to watch>", youtubeUrl: "<that link>" }`; if no link is given, do not create introVideo at all. Use the project video links from MY DETAILS only if present.
4. Run `npm run lint`, then summarise what you wrote in 5 bullet points.

STRUCTURE TO FOLLOW (the sample values are placeholders to be replaced with my answers):

@@SCHEMA@@
````

**Check:** the agent asked only about missing items and created `src/data/portfolioData.js` with your details. Open the file and glance through it.

---

<<<STEP4>>>
## Step 4 · AI places your images (and removes their black background)

**Say to the class:** "The hero portrait must stand IN FRONT of the giant headline, so it needs a transparent background. The agent finds your three images in Downloads, removes the black background from the two portraits and puts everything where the website expects it."

**Do:** make sure the three images from A1, A2 and A3 are in your **Downloads** folder.

**Prompt:**

````text
Place my images in the project. Look in my Downloads folder (detect it for my operating system) for the 3 most recent image files I downloaded and identify them by shape:
- the TALL full-body portrait (portrait orientation, about 2:3) = my HERO image
- the chest-up studio portrait (portrait orientation, about 3:4) = my ABOUT image
- the WIDE dark abstract image with a green glow (landscape 16:9) = my FOOTER background
Show me which file you picked for each and ask me to confirm before continuing if anything is unclear.

Then:
1. Create the folders src/assets/hero, src/assets/about and src/assets/footer if missing.
2. REMOVE THE BACKGROUND of the HERO and ABOUT portraits so they become transparent PNG cut-outs. Use the open-source tool rembg: install it with `pip install "rembg[cpu,cli]"` (use pip3/python3 if needed; if Python is not installed, install it first with `winget install Python.Python.3.12` or `brew install python`), then run `rembg i <input> <output>.png` for each image. Check the result: the person must be fully intact (hair, glasses, hands, shoes) with a clean edge and no black halo. If rembg fails or the cut-out is bad, tell me to use https://www.remove.bg/ on the file instead and then continue with the file I save.
3. Save the results as src/assets/hero/hero-portrait.png and src/assets/about/about-portrait.png. Resize the hero image so its height is at most 1600 px and keep each file under 2.5 MB.
4. Copy the FOOTER image to src/assets/footer/footer-bg.png (convert to .jpg or .webp if it is larger than 700 KB, keeping 1920 px width).
5. List the final paths and file sizes. Do not edit any other file.
````

**Check:** the agent lists `hero-portrait.png`, `about-portrait.png` and `footer-bg.*` with sizes, and the portraits have transparent backgrounds (open one: you see a checkerboard behind you).

---

<<<STEP5>>>
## Step 5 · Hero: the scrambling headline and the rising portrait

**Say to the class:** "This is the signature moment of the template. Your name scrambles into PORTFOLIO letter by letter, then the headline slides up and your portrait rises from the bottom. We use a GSAP timeline to coordinate everything, and scrolling is locked until the intro finishes."

**Prompt:**

````text
Create src/components/Hero.jsx (default export) and render it as the first element in src/App.jsx. Build it with React + Tailwind CSS + GSAP. Read all text from src/data/portfolioData.js (personalInfo, heroContent).

OVERALL STYLE
- <header id="home">, full viewport: min-h-screen, w-full, relative, overflow-hidden.
- Pure black / dark charcoal background with a subtle radial gradient: dark gray (#1c1c1f) in the centre fading into pure black toward the edges.
- Above it a very subtle black overlay (bg-black/10) with about 2px backdrop blur (backdrop-blur-[2px]).
- Minimal, luxury, editorial aesthetic. No navbar, no other UI. Spacious and cinematic.

MAIN TYPOGRAPHY (centred, BEHIND the person)
- An <h1> positioned absolutely: left 50%, top 50% (animated later), translate -50% -50%, full width, text-center, z-10.
- Initial text: personalInfo.brandName in UPPERCASE. It scrambles into heroContent.finalWord ("PORTFOLIO").
- Responsive size: about 16vw on mobile; about 10rem on tablet/desktop (md); about 14rem on large screens (2xl). font-black, uppercase, leading-none, tracking-tighter, select-none.
- Metallic look: transparent text with a vertical gradient (white at the top #ffffff, light gray #d4d4d8 in the middle, dark gray #52525b at the bottom) using background-clip: text, plus a large subtle drop shadow (filter: drop-shadow(0 20px 40px rgba(0,0,0,0.6))).
- Give the <h1> an aria-label with the brand name and "PORTFOLIO", and render the changing letters in an aria-hidden span.

PERSON / HERO IMAGE
- Use src/assets/hero/hero-portrait.png (the transparent full-body cut-out). Load it with import.meta.glob('../assets/hero/hero-portrait.*', { eager: true, import: 'default' }); if the file does not exist, show a small placeholder text instead of crashing.
- Place it at the bottom centre: absolute, bottom-0, left 50%, -translate-x-1/2, z-20, pointer-events-none. The image keeps its aspect ratio: h-auto w-auto, max-h-[88vh], max-w-[72vw] on mobile, md:max-w-[500px], xl:max-w-[650px], object-contain, so the full body stays visible on desktop and the face and upper body stay visible on mobile. Add a very subtle dark drop shadow around the person.
- The person must clearly overlap the typography, so the huge text feels like a background graphic.

SUBTITLE AND CONTACT CONTROLS (z-30, in front of everything)
- A wrapper: absolute, inset-x-0, bottom-0, flex; on mobile flex-col, centred, gap-5, px-6, pb-10; on desktop (md) flex-row, items-end, justify-between, px-[8%], pb-[8%].
- Subtitle (left on desktop, below the typography on mobile): split personalInfo.role at the first space: the first word in font-bold, the rest in font-light italic. White/light gray, about 1rem on mobile and 2.5rem–3.5rem on desktop, subtle text shadow.
- Contact controls (right on desktop, under the subtitle on mobile): (a) a circular icon button (h-12 w-12, rounded-full, thin translucent gray border border-white/20, bg-black/30, backdrop-blur-md) with a diagonal arrow icon (an inline SVG "M7 17L17 7M9 7h8v8") that rotates about 45deg on hover; (b) next to it a pill-shaped button with the text heroContent.ctaLabel ("Contact"): rounded-full, backdrop-blur-md, translucent black background (bg-black/40), thin gray translucent border, px-8 py-3, brighter background and border on hover, smooth 300ms transitions. Both link to #contact.

LAYERING (z-index order): background gradient → dark overlay → huge typography → person → subtitle and contact controls.

ANIMATION (a clean GSAP timeline inside one useEffect)
Initial state: lock page scrolling (document.body.style.overflow = 'hidden'); the typography is centred vertically (top 50%); the person is completely below the viewport (gsap.set y: '100vh'); the subtitle and contact controls start invisible (opacity 0, y 50).
Sequence:
1. Preload the hero image (new Image(), onload) before starting.
2. Wait about 1 second after load.
3. Scramble the text from the brand name to "PORTFOLIO" with a letter-by-letter progressive replacement: update every 50 ms with useState; unresolved positions show random capital letters; one more correct letter locks in about every 100 ms from the left.
4. When it reads PORTFOLIO, pause briefly (about 0.4 s).
5. Then ONE gsap.timeline: (a) move the typography container's `top` from 50% to 45% on desktop and to 20% on mobile (window.innerWidth < 768), duration 1.5 s, ease power3.inOut; (b) at the same time animate the person from y '100vh' to 0, duration 1.5 s, ease power3.out; (c) while they move, reveal the subtitle and the contact controls from {opacity 0, y 50} to {opacity 1, y 0}, duration 1.2 s, ease power3.out, stagger 0.2.
6. When the timeline completes, restore document.body.style.overflow = 'auto'.
Cleanup on unmount: clear the interval and the timeouts, kill the timeline and the tweens, and set overflow back to 'auto'.

TECHNICAL
- useState for the animated text; useEffect for the lifecycle; useRef for the typography, image wrapper, subtitle and button elements. Copy ref.current values into local variables inside the effect before using them in the cleanup.
- Only React, Tailwind and GSAP — no other libraries. Use semantic HTML. Keep the component clean and reusable. No horizontal scrolling on mobile.
Run npm run lint and fix problems, then show the result at desktop and phone width.
````

**Check:** reload: your name scrambles into PORTFOLIO, the headline slides up, your portrait rises from the bottom *in front of* the headline, the subtitle and Contact button fade in, and only then can you scroll.

---

<<<STEP6>>>
## Step 6 · Intro section, scrolling skills ticker (and optional intro video)

**Say to the class:** "Two scroll effects: the paragraph that lights up word by word as you scroll, and four rows of skills that never stop moving. We use GSAP ScrollTrigger for the first and a pure CSS loop for the second."

**Prompt A: About / Intro section**

````text
Create src/components/About.jsx (default export) and render it right after <Hero /> in src/App.jsx. Build it with React + Tailwind CSS + GSAP + GSAP ScrollTrigger. Read content from src/data/portfolioData.js (personalInfo, aboutContent, skillRows). Register ScrollTrigger correctly (gsap.registerPlugin(ScrollTrigger)) and clean up everything on unmount with gsap.context().

OVERALL SECTION
- <section id="about">, min-height 100vh for the intro part, background #050505, white text, content max-width about 1280px centred (max-w-[1280px] mx-auto), generous horizontal padding (px-6 md:px-12), overflow hidden, no horizontal overflow. Minimal, premium: black, white, gray, spacious, typography-focused. Avoid colourful gradients, neon effects and excessive cards.

"INTRO" HEADING
- Show aboutContent.heading ("Intro") as a huge editorial heading: font-black, uppercase, leading-[0.85], tracking-tighter, transparent text with a vertical gradient (white #ffffff top, light gray #d4d4d8 middle, dark gray #52525b bottom, background-clip: text) and a subtle drop shadow.
- Desktop: about 8rem (lg: 11rem), placed ABOVE the description card on the RIGHT column. Mobile: centred above the content, about 18vw (tablet 8rem). Use two separate heading elements (one for mobile, one for desktop) shown/hidden with Tailwind responsive classes, each with its own useRef.
- Animation (ScrollTrigger): from {opacity 0, y 100} to {opacity 1, y 0}, duration 1 s, ease power3.out, trigger when the heading reaches about 85% of the viewport (start 'top 85%'), toggleActions 'play none none reverse'.

LAYOUT
- Desktop: two columns. LEFT: the portrait src/assets/about/about-portrait.png (load with import.meta.glob('../assets/about/about-portrait.*', { eager: true, import: 'default' }); show a small bordered placeholder if missing), aligned to the left, width about 190px on mobile, 220px on tablet, 250–260px on desktop, with a subtle large drop shadow (filter: drop-shadow(0 30px 50px rgba(0,0,0,0.7))), alt text "<name> — portrait". RIGHT: the Intro heading, with the glass description card underneath.
- Mobile: everything stacks: Intro heading centred, then the portrait centred, then the card at full width.

GLASS ABOUT CARD
- Contains the greeting aboutContent.greeting (for example "Hey, I'm Alex.") in semibold white, followed by the paragraph aboutContent.paragraph.
- Card styling: background rgba(255,255,255,0.05) (bg-white/5), backdrop-blur-xl, border border-white/10, rounded-[28px], soft black shadow, padding 24px on mobile and 40px on desktop, slightly lighter background on hover (transition 500ms).
- Text: light gray, font-light, about 20px on desktop and 16px on mobile, comfortable line height (leading-relaxed), centred on mobile and left-aligned on desktop. Words listed in aboutContent.highlights are brighter white and semibold.

WORD-BY-WORD SCROLL REVEAL (GSAP ScrollTrigger)
- Split the paragraph into word <span data-word> elements (keep a data-highlight attribute on highlighted words).
- Initial state of every word: color #52525b and opacity 0.2.
- gsap.fromTo(words, { color: '#52525b', opacity: 0.2 }, { color: (i, el) => el.dataset.highlight ? '#ffffff' : '#d4d4d8', opacity: 1, stagger: 0.1, ease: 'none', scrollTrigger: { trigger: <the card>, start: 'top 85%', end: 'bottom 50%', scrub: true } }). This creates a reading / progressive-highlight effect.
- ScrollTrigger.refresh() on window 'load' and once more after about 600 ms, because fonts and images change the layout.

BOTTOM SKILLS MARQUEE (full width, inside the same section)
- A full-width block under the intro: background #030303, border-t border-white/5. It shows ONE row for each item of skillRows (up to 4; each has { label, items[] }), like a continuously moving technical ticker.
- Each row: the label (for example FRONTEND) pinned on the left (absolute, white, uppercase, tracking-[0.3em], small, with a gradient background fading to transparent so scrolling skills slide under it), then the skills separated by a small "·" — gray text (text-zinc-500), medium weight, wide letter spacing, about 18px on desktop and 14px on mobile.
- Direction: rows 1 and 3 move continuously LEFT → RIGHT; rows 2 and 4 move RIGHT → LEFT. Use the CSS classes .marquee-right and .marquee-left from src/index.css. Animation: infinite, linear, seamless (no visible jump), constant speed.
- Build each row's track as the same content duplicated twice (two identical halves, aria-hidden on the copy) with each half repeating the items 3 times, so there is always content across the whole viewport; the track is `flex w-max` and the keyframes translate by 50%.
Run npm run lint and show the result at desktop and phone width. Scroll slowly down and back up: nothing may disappear and the paragraph must light up word by word.
````

**Prompt B: Self-introduction video section** {if:introurl} *(only because you added an intro video link)*:

````text
Create src/components/IntroVideo.jsx (default export) and render it in src/App.jsx right after <About />. Use GSAP + ScrollTrigger and { introVideo } from '../data/portfolioData'.
- If introVideo.youtubeUrl is empty, render nothing.
- Get the YouTube video id from any link format: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/shorts/ID, youtube.com/embed/ID (ignore extra parameters). For /shorts/ links use a vertical 9:16 frame (max-w-sm mx-auto); otherwise 16:9 (max-w-5xl mx-auto).
- Section: id="intro", bg-[#050505], pt-24 pb-28 px-6 md:px-12, relative overflow-hidden, white text.
- Header (centred): a small uppercase tracking-[0.3em] label in lime #CCFF00 with introVideo.badge, an h2 with introVideo.heading in the same huge editorial style as the other headings (font-black, uppercase, tight tracking, white-to-gray gradient text, around 4rem–7rem), and introVideo.description in text-gray-400 font-light.
- Video frame: rounded-[3px] overflow-hidden, border border-white/15, shadow-[0_30px_80px_rgba(0,0,0,0.7)], bg-black. It animates in once when scrolled into view with ScrollTrigger (from opacity 0, y 60 to opacity 1, y 0, duration 1, ease power3.out, start 'top 80%', once: true).
- Lightweight player: first show the thumbnail https://i.ytimg.com/vi/<id>/hqdefault.jpg (object-cover, alt "<my name> self-introduction video", loading="lazy") with a dark overlay and a large centred circular lime (#CCFF00) play button (w-20 h-20, black triangle, hover:scale-110, aria-label "Play introduction video"). On click replace it with an <iframe> of https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1 (title "Self-introduction video", allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen, w-full h-full).
- Under the frame a small gray link "Watch on YouTube ↗" to the original link (target _blank rel noopener noreferrer).
Run npm run lint and check the section at desktop and phone width.
````

**Check:** scrolling past the hero shows the huge INTRO heading sliding in, your studio portrait on the left, the glass card whose words light up as you scroll, and four rows of skills moving in alternating directions without a visible jump.

{if:introurl} **Check:** below the skills ticker, your self-introduction video appears with a lime play button and plays when clicked.

---

<<<STEP7>>>
## Step 7 · Services: the full-width lime accordion

**Say to the class:** "This is the most memorable interaction of the template: each service is a thin-bordered row that turns into a full-width electric-lime bar when you hover, and expands on click. On mobile we do not rely on hover."

**Prompt:**

````text
Create src/components/Services.jsx (default export) and render it right after <About /> (and <IntroVideo /> if it exists) in src/App.jsx. Build it with React + Tailwind CSS + GSAP ScrollTrigger. Read content from servicesContent in src/data/portfolioData.js. Use useState, useEffect and useRef. Detect mobile with window.innerWidth < 768 (and a resize listener).

OVERALL DESIGN
- <section id="services">, full width, background #050505, white text, accent electric lime #CCFF00, px-6 md:px-12, py-24 md:py-32, overflow hidden (no horizontal scrolling).
- Minimal layout with large typography, thin white borders between rows (border-white/20), no unnecessary cards or decorative elements. Strong editorial / Swiss typography feeling.

HEADER (top-right)
- A giant heading from servicesContent.headingLines (two lines, for example "WHAT I" / "CAN DO"), right-aligned (text-right, ml-auto), extra-bold/black, uppercase, tight tracking, transparent text with a vertical gradient (white → light gray → dark gray, background-clip: text), a large drop shadow. Desktop about 7rem–8rem; mobile about 2rem–4rem.
- GSAP ScrollTrigger entrance: from {y: -100, opacity: 0} to {y: 0, opacity: 1}, duration 1.2 s, ease power3.out, triggered when the heading reaches about 85% of the viewport (start 'top 85%', once: true). Use gsap.context() and revert on unmount.

ACCORDION (full width, under the heading)
- A list of servicesContent.items. Each service is a horizontal row separated by thin white borders (a border-t on the list and a border-b on every row), with generous vertical spacing. Each row has: the service number on the left (01, 02, … with a fixed width so titles line up), the large uppercase service title (light weight, tracking-tight; about 3rem on desktop, about 1.1rem on mobile where it stays on ONE line with an ellipsis if needed), and an outlined arrow icon on the right.
- Row states: Normal = black background, white text, LIME arrow. Hover (desktop only, md: and up) = the ENTIRE row turns lime #CCFF00 with black text and a black arrow, smooth 300ms transition. The hovered/open row should feel like a bright lime horizontal highlight bar across the whole screen width.
- Click interaction: clicking a row expands it; only ONE row is open at a time; clicking the same row again collapses it. The row header is a <button> with aria-expanded. Expanding uses a smooth height + opacity transition of about 500 ms (use a CSS grid-rows transition: grid-rows-[0fr] → grid-rows-[1fr] with an inner overflow-hidden wrapper). The open row stays lime with black text.
- Arrow: a minimalist outlined arrow (SVG path "M2 12h42M34 3l10 9-10 9"), lime by default and rotated about 45deg; when the row is open it rotates to about -45deg; on a lime row it becomes black; rotation animates over 300 ms. About 40px on desktop and 24px on mobile.
- Expanded content, desktop = two columns: LEFT = the capability list; RIGHT = the description (max-w-xl, light weight) and, only if the service has a `cta`, a button. Mobile = a single column: capabilities then description.
- Capability list: each item has a small square lime bullet (■ shape: a 8px square; it turns black on a lime row), light font weight, comfortable line height, small-to-medium size.
- CTA button (only the first service has one): text from cta.label ("VIEW PROJECTS"), black background, lime text, uppercase, bold, small text (text-xs tracking-widest), generous horizontal padding (px-10 py-3), links to cta.href (#projects), with four tiny corner marks around it (small absolutely positioned L-shaped borders) for a technical editorial look.
- Mobile: clicking is the primary interaction; do NOT rely on hover for any functionality (apply the hover classes only on md: and up).
Run npm run lint and check at desktop and phone width: hover turns the whole row lime, click expands/collapses smoothly.
````

**Check:** hovering a service turns the whole row electric lime; clicking opens it with the bullet list on the left and the description on the right (on a phone it stacks); clicking again closes it.

---

<<<STEP8>>>
## Step 8 · Projects: editorial case-study stories

**Say to the class:** "Projects are not cards here. Each one is a large editorial story with a cover image, an oversized title, a short description and two buttons. They alternate left and right."

**Prompt A: Projects section**

````text
Create src/components/Projects.jsx (default export) and render it right after <Services /> in src/App.jsx. Build it with React + Tailwind CSS + GSAP ScrollTrigger. Read content from projectsContent in src/data/portfolioData.js and map over the items array (no duplicated markup). Keep CTA handlers reusable through an `onCtaClick(type, project)` prop. Use useState/useEffect/useRef where needed and clean up with gsap.context().

OVERALL SECTION
- <section id="projects">, full-width dark: background #050505, text white, secondary text gray #9CA3AF, accent electric lime #CCFF00, horizontal padding 24px on mobile and 64px on desktop, top padding about 80px, bottom padding about 96px, overflow hidden, content spacious (max-w-[1400px] mx-auto). Borders rgba(255,255,255,0.2).

HEADER (two columns on desktop, stacked on mobile)
- LEFT, giant title: projectsContent.headingMain ("Selected") in extra-bold uppercase with a white-to-gray gradient (transparent text, background-clip), extremely tight tracking, about 60–96px on desktop and 36–48px on mobile; followed by projectsContent.headingAccent ("work") in lowercase, italic, light-weight SERIF (font-[family-name:var(--font-serif-accent)]), light gray.
- RIGHT: the short description projectsContent.description (light gray, thin/light font, 14–16px, relaxed line height, max-width about 400px), and under it a lime pill button "Read More ↗" (background #CCFF00, black text, rounded-full, thin lime border, small uppercase medium text, hover: slightly darker lime), linking to projectsContent.readMore.href.

PROJECT LIST — large alternating editorial layout (NOT traditional cards)
- Large vertical gaps between projects: about 160px on desktop (gap-40) and 96px on mobile (gap-24). There must be NO card background, NO card border and NO box shadow around a project: only the image, the typography, the description and the buttons.
- Desktop: two columns. Project 1: image on the LEFT, text on the RIGHT; project 2: text on the LEFT, image on the RIGHT; project 3: image left; project 4: text left (alternate). Vertically centre the text block against the image.
- Mobile: never alternate. Always this order: number → title → image → description → buttons. (Implement it with a CSS grid: three blocks — "head" (number + title), "image", "body" (description + buttons); on md use explicit grid columns/rows so the image spans the full height of one column.)
- Project number above the title: electric lime #CCFF00, bold, small (text-sm), uppercase, wide letter spacing (tracking-[0.3em]).
- Project title: large editorial typography, extra-bold, uppercase, tight tracking, line-height 1.05; 48–64px on desktop (clamp(1.9rem, 6vw, 4rem)) and 30–40px on mobile; mostly white; `title` is an array of lines, each rendered on its own line. A word wrapped in *asterisks* (for example "INSTAGRAM *ai*") is rendered in lowercase light italic serif gray (#9CA3AF) without the asterisks.
- Project image: src/assets/projects/<project id>.(png|jpg|jpeg|webp|svg) (for example project-1.png). Load all with import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp,svg}', { eager: true, import: 'default' }) and match by file name; if a project has no image show a dark gradient placeholder with the project id. Aspect ratio 16:10, object-fit cover filling the container completely, subtle dark background (bg-zinc-900), slightly rounded corners (about 3px), starts at about 90% opacity. HOVER (the whole project row is a `group`): the image scales to 1.05 and goes to opacity 1 over 700 ms with a smooth ease-out. Add alt text and loading="lazy".
- Description: gray #9CA3AF, light weight, 14–16px, line-height about 1.7 on desktop, max-width about 500px, generous margin below.
- Buttons (two per project, both pill-shaped, px-6 py-2.5, gap-3, small/medium text): "Live Demo ↗" = lime background, black text, thin lime border, smooth hover to a slightly darker lime; "GitHub" + a GitHub icon = transparent background, white text, semi-transparent white border (border-white/30), on hover white background with black text. Both open in a new tab (target _blank, rel noopener noreferrer) and call onCtaClick.

ANIMATION (GSAP + ScrollTrigger)
- As each project enters the viewport (start 'top 80%', once: true): the image fades in and moves up, then the number, title, description and buttons follow with a short stagger. From {opacity: 0, y: 60} to {opacity: 1, y: 0}, duration 1 s, ease power3.out. Run ScrollTrigger.refresh() on window 'load'.

Run npm run lint and check at desktop and phone width.
````

**Prompt B: Project cover images** *(only if you made cover images in A5)*:

````text
Check my Downloads folder for the images I made as project covers (screenshots or generated 16:10 images). Ask me which image belongs to which project (project-1 … project-4 in portfolioData.js, in order), then copy each one to src/assets/projects/<project id>.png (keep the original extension if it is jpg/webp), compressing any file over 500 KB. Do not change any other file. Then run npm run build and tell me the covers show on the project blocks.
````

**Prompt C: Project videos** {if:project1video|project2video|project3video|project4video} *(only because you added a project video link)*:

````text
Add explanation videos to the project blocks. Only projects whose `video` field in src/data/portfolioData.js is a non-empty YouTube link get a video; all other projects stay exactly as they are.

1. Create src/components/VideoModal.jsx (default export, props: url, title, onClose). It renders with a fixed full-screen overlay (inset-0, z-[200], bg-black/85, backdrop-blur-sm) that fades in with GSAP, and a centred player that scales in from 0.92 (w-full max-w-5xl, aspect-video, rounded-lg overflow-hidden, border border-white/10, shadow-2xl). For /shorts/ links use a vertical 9:16 frame (max-w-sm). The player is an <iframe> of https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1 (title = the project title, allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen). Extract the id from youtu.be/ID, watch?v=ID, shorts/ID or embed/ID links. Close it with a round ✕ button (top-right, aria-label "Close video"), the Escape key, or a click on the dark overlay (not on the player). While open, lock page scrolling (document.body.style.overflow = 'hidden') and restore it on close; move keyboard focus to the ✕ button when it opens.
2. Optional silent hover previews: ask me whether I still have the original screen recordings on this computer. If yes, ask me which file belongs to which project (or list recent .mp4/.mov files in my Videos and Downloads folders for me to choose). For each chosen file make an 8-second silent preview with ffmpeg (install it if missing; Windows: winget install Gyan.FFmpeg, macOS: brew install ffmpeg): ffmpeg -ss 15 -t 8 -i "<recording>" -an -vf "scale=640:-2" -c:v libx264 -crf 30 -preset veryfast -movflags +faststart "src/assets/projects/<project id>-preview.mp4". Each preview must be under 1.5 MB (raise -crf if it is larger). If I have no recordings, skip previews.
3. In src/components/Projects.jsx load previews with import.meta.glob('../assets/projects/*-preview.mp4', { eager: true, import: 'default' }) and match them to projects by `<project id>-preview.mp4`.
4. For a project with a video, add on top of its cover image (inside the image container, which must be `relative`): a small circular lime (#CCFF00) play button with a black triangle in the bottom-left corner and the label "Watch explanation" (text-xs font-bold uppercase tracking-wider, white, on a dark gradient strip at the bottom). If a preview clip exists, show it as a muted, looping, playsInline <video> (preload="none", object-cover, opacity-0) over the cover that fades to opacity-100 and plays on mouseenter and pauses/resets on mouseleave; only on devices with a mouse (window.matchMedia('(hover: hover)').matches). Clicking anywhere on the image opens <VideoModal> for that project (the image container becomes a <button type="button"> with aria-label "Play <project title> explanation video").
5. Run npm run lint and test: hover previews play silently on desktop, clicking opens the big player with sound, ✕ / Esc / outside click close it, page scroll is locked while it is open, and projects without a video look unchanged.
````

**Check:** four large alternating project stories with oversized titles, lime numbers, a cover image that zooms slightly on hover, and Live Demo / GitHub pills. On a phone each project reads number → title → image → description → buttons.

{if:project1video|project2video|project3video|project4video} **Check:** projects with a video show a play button on the cover; clicking opens a big player and ✕, Esc or clicking outside close it.

---

<<<STEP9>>>
## Step 9 · Contact: premium minimal form (EmailJS)

**Say to the class:** "A static website cannot send email by itself. EmailJS sends it from the browser. Even without keys the form still works by opening your email app."

**Do on the website (about 2 minutes):**
1. Open https://www.emailjs.com/ → sign up (free).
2. **Email Services → Add New Service → Gmail** → connect → copy the **Service ID**.
3. **Email Templates → Create New Template**: Subject `Portfolio message: {{subject}}`; Content: `From: {{user_name}} ({{user_email}}, {{user_phone}})` and `{{message}}`; set *To email* to your own email → Save → copy the **Template ID**.
4. **Account → General → Public Key** → copy it.

**Prompt A: Contact section**

````text
Create src/components/Contact.jsx (default export) and render it right after <Projects /> in src/App.jsx. Build it with React + Tailwind CSS + GSAP ScrollTrigger. Read content from personalInfo, socialLinks, contactContent and emailjsConfig in src/data/portfolioData.js.

OVERALL STYLE
- <section id="contact">: a premium minimalist full-screen contact section (min-h-screen), almost pure black #050505, cinematic and atmospheric, minimal UI with strong typography, high-contrast white/gray text, very generous spacing, px-6 md:px-16, py-24 md:py-32, overflow hidden. It must feel like a continuation of the Hero → Intro → Services → Projects portfolio: sophisticated, editorial, futuristic. Avoid a generic Bootstrap form, bright colours and crowded UI.
- Background: keep it almost completely black with a very subtle, soft, diffused neon-green glow toward the lower/central part, like a futuristic horizon (an absolutely positioned div at the bottom with a radial-gradient of rgba(120,200,40,0.18) fading to transparent). The glow must stay subtle and never overpower the content.

LAYOUT: desktop two columns (left about 40%, right about 60%, grid md:grid-cols-[2fr_3fr], large gap); tablet reduces spacing and keeps two columns if possible; mobile stacks vertically: heading, contact details, social icons, then the form (inputs full width, comfortable padding).

LEFT COLUMN
- Heading contactContent.heading ("Get in touch"): very large, extra-bold, uppercase, tight tracking, white-to-gray gradient text with subtle depth, same treatment as the Intro and Selected work headings (about clamp(3rem, 9vw, 6.5rem)).
- Under it, with generous vertical spacing: a small muted-gray label "Email:" and the email (personalInfo.email) in larger white text with slight letter spacing (mailto link, hover turns lime); a label "Phone:" and the phone as a tel: link (only if personalInfo.phone is not empty).
- A small muted-gray label contactContent.followLabel ("Follow us") and below it a row of circular social buttons for Instagram, YouTube, LinkedIn and GitHub (skip any whose URL in socialLinks is empty): each 40–48px, rounded-full, semi-transparent dark/glass background (bg-white/5, backdrop-blur), very subtle white border (border-white/10), a minimal white inline-SVG icon, soft hover glow (shadow) and a smooth scale/opacity transition. Links open in a new tab (rel noopener noreferrer, aria-label).

RIGHT COLUMN: the form
- Fields: Row 1: Your Name (name="user_name", required) + Email address (name="user_email", type email, required). Row 2: Phone (name="user_phone") + Subject (name="subject"). Full width: Message (name="message", required, textarea about 5 lines tall, no resize). Placeholders: "Your full name", "Your email address", "Your phone number", "Subject", "Write something....".
- Each field: a small muted-gray label above it, dark #111 background, rounded corners about 10px, minimal/invisible border, white input text, muted placeholder (zinc-600), generous padding (px-4 py-3.5), no gradients, and a subtle focus border/glow (border-white/25 and a faint lime-tinted ring).
- Submit button: full width, white background, black text, semibold, rounded 9px, subtle hover to light gray. Text "Send Message".
- Behaviour with a `status` state ('idle' | 'sending' | 'success' | 'error'): while sending show a minimal spinner and the text "Sending..." and disable the button; on success show a subtle green message "Message sent successfully!" and reset the form; on error show a subtle red error message. Messages disappear after about 4 seconds. Put them in a <p role="status">.
- Sending logic: isConfigured = serviceId, templateId and publicKey are all NOT equal to the placeholders 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', 'YOUR_EMAILJS_PUBLIC_KEY'. If NOT configured: open window.open(`mailto:${personalInfo.email}?subject=...&body=...`) with the form values (From, Email, Phone and the message, URL-encoded) in a new tab, show the success message and reset the form. If configured: `const emailjs = await import('@emailjs/browser'); await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);` in a try/catch (console.error on failure).

ANIMATION (subtle GSAP, ease power3.out, once)
- On scroll into view (ScrollTrigger on the section, start 'top 70%', once: true), a timeline: the heading slides up and fades in; the contact info items reveal one after another; the social icons scale/fade in with a stagger; the form fields slide up with a stagger; the submit button fades in last. Use gsap.fromTo and gsap.context() with revert() on unmount. Avoid excessive animation.
Run npm run lint and check at desktop and phone width.
````

**Prompt B: Connect your keys safely**

````text
Create a file named .env.local in the project root (it must be git-ignored; confirm .gitignore covers *.local). Ask me, one at a time, for my EmailJS Service ID, Template ID and Public Key, and write them as:
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
(If I say I don't have keys yet, create the file with empty values and tell me the form will use the email-app fallback.) Then restart the dev server so the new variables load, make sure <Contact /> is rendered in src/App.jsx between Projects and Footer, and run npm run lint. Never print my keys in your summary.
````

**Check:** fill and send the form: you see "Message sent successfully!" and receive an email. Without keys, your email app opens with the message pre-filled.

---

<<<STEP10>>>
## Step 10 · Footer: huge name and the glowing horizon

**Say to the class:** "The footer is a full-screen finale: your email in big type, your links, your name as a giant signature and the glowing green horizon you generated rising behind it."

**Prompt:**

````text
Create src/components/Footer.jsx (default export) and render it as the LAST element in src/App.jsx (after <Contact />). Build it with React + Tailwind CSS only (no extra dependencies). Read content from personalInfo, socialLinks, footerContent and academy in src/data/portfolioData.js.

OVERALL DESIGN
- A premium, modern, cinematic footer: semantic <footer>, min-h-screen (100vh), full width, pure black background, desktop-first but fully responsive. Clean editorial layout, generous spacing, typography modern, bold and minimal (Inter).
- Background: the image src/assets/footer/footer-bg.(png|jpg|webp), loaded with import.meta.glob('../assets/footer/footer-bg.*', { eager: true, import: 'default' }). If it does not exist, fall back to a CSS radial-gradient green glow (rgba(120,220,40,0.35) → transparent) at the bottom. Apply it through CSS (style backgroundImage: url("...") — keep the quotes around the URL), covering the whole section, positioned toward the BOTTOM (background-position: center bottom), scaled significantly (background-size: 160%) so parts are naturally cropped, no-repeat. Keep the upper portion mostly black.
- On top of the image a black gradient overlay (absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent): solid black at the top, semi-transparent black in the middle, transparent at the bottom. The background must stay subtle so text is highly readable.

TOP CONTENT (two columns on desktop: grid md:grid-cols-2; stacked and left-aligned on mobile)
- LEFT: a small muted label footerContent.connectLabel ("Connect with me"); below it the email personalInfo.email as a prominent mailto link in large responsive typography (clamp(1.4rem, 4vw, 3rem), semibold, white/light gray, hover turns lime #CCFF00); below it the navigation links from footerContent.navLinks ("Home · About · Services · Projects"): small/medium, light gray, horizontal on desktop with a "·" between them, wrapping naturally, smooth hover to white.
- RIGHT (right-aligned on desktop, left on mobile): the heading footerContent.ctaHeading ("Let's build something"), the text footerContent.ctaText, and a pill button footerContent.ctaLabel ("Get in touch"): white background, black text, rounded-full, medium padding, subtle hover animation (slight scale and light gray), linking to #contact.

SOCIAL LINKS ROW
- Under the top section, a horizontal row with a thin low-opacity white border above it (border-t border-white/10). Links: Instagram, YouTube, LinkedIn, GitHub (skip empty URLs) evenly distributed across the width (justify-between, wrapping on mobile), medium/bold, white/light gray, smooth hover, open in a new tab with target="_blank" rel="noopener noreferrer".

HUGE BRAND TYPOGRAPHY
- personalInfo.brandName in UPPERCASE, centred, extremely large responsive typography (about 12vw), bold, very tight letter spacing, single line on desktop (whitespace-nowrap), white, minimal styling (no gradient). It is the main visual focal point of the footer, like a premium creative-agency signature. On smaller screens reduce the size while keeping it dominant.

BOTTOM ROW (minimal)
- Left: "© {current year via new Date().getFullYear()} {personalInfo.name}. All Rights Reserved." followed by a small muted "Trained at" + an underlined link to academy.url with the text academy.name (target="_blank" rel="noopener"). Right: "Privacy policy" and "Terms and conditions" links (point them to #home). Very small, muted gray, minimal, subtle hover transitions.

VISUAL STYLE: Premium · Minimal · Cinematic · Editorial · Modern · High-end creative agency. Avoid generic SaaS footers, excessive cards, bright colours, text gradients, unnecessary icons, excessive borders and clutter. Accessible links, no horizontal overflow, clean reusable component structure.
Run npm run lint and check at desktop and phone width.
````

**Check:** the footer fills the screen: email and CTA at the top, a row of social links, your name as a giant signature with the green glow rising behind it, and the credit line at the bottom.

---

<<<STEP11>>>
## Step 11 · Put it together, check, fix and polish

**Say to the class:** "Before we publish, we assemble the page in the right order and ask the agent to test its own work like a reviewer."

**Prompt:**

````text
Act as a careful code reviewer and QA tester for this project.
1. Make src/App.jsx render these sections in exactly this order, inside one fragment: Hero, About, IntroVideo (only if src/components/IntroVideo.jsx exists), Services, Projects, Contact, Footer. There is no navbar. Only import components that exist.
2. Run `npm run lint` and `npm run build` and fix every error or warning in my code.
3. Open the site in the browser at desktop width and at phone width (about 390 px) and check the HERO INTRO: the page scroll is locked at first; my name scrambles into PORTFOLIO; the headline moves up; my transparent full-body portrait rises in FRONT of the headline (the headline stays behind it); the subtitle and Contact button fade in; then scrolling is unlocked. The whole body (or at least face and upper body on mobile) is visible, nothing is cropped or zoomed, and there is no horizontal scrolling.
4. SCROLL TEST: scroll slowly from the top to the bottom of the page, then back up to the top, then down again. Every element must stay visible after it has appeared — nothing may disappear or stay invisible. The Intro paragraph must light up word by word while scrolling and return to dim when scrolling back up. If something hides or never reappears, fix its animation (ScrollTrigger with once: true, or toggleActions) and re-test. Also check the skills ticker loops without a visible jump in both directions.
5. SERVICES TEST: on desktop hovering a row turns the whole row lime; clicking opens it and closes the previous one; clicking again closes it. On phone width the accordion works by tapping only.
6. PROJECTS TEST: the order on desktop alternates (image left, right, left, right); on mobile it is number → title → image → description → buttons; hovering a cover zooms it slightly.
7. VIDEO TEST (only for videos that exist in portfolioData.js; if there are none, skip this test and do not create any video component): for every project that has a `video` field, hovering the cover plays the silent preview (if one exists) and clicking opens the big player; ✕, Esc and clicking outside close it. If `introVideo` exists, its section plays when the play button is clicked.
8. Confirm there is exactly ONE <h1> on the page (the hero headline); any other huge heading must be an <h2> or a <div> keeping the styling. Make sure every <img> has meaningful alt text and every icon-only link has an aria-label.
9. Confirm no personal secrets are tracked by git (.env.local must be ignored) and that no sample text such as "Alex Rivera" or "YOUR_" remains anywhere except the emailjsConfig fallbacks.
10. Make a git commit "Complete portfolio sections".
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
   - meta description: ONE natural sentence of 140–155 characters written for humans, containing my name, my role, my city and the phrase "TAP Academy placement training" exactly once (for example: "<My Name>, <My Role> from <my city>. Projects in Java and React built during TAP Academy placement training. View my work and contact me.")
   - meta keywords: my name, my role, my top 4 skills, my city, "portfolio", "TAP Academy", "TAP Academy student portfolio", "TAP Academy placement training", "augmented reality" (each phrase only once)
   - meta author (my name), meta robots "index, follow", meta theme-color #050505
   - Open Graph tags (og:title = the same text as <title>, og:description = the meta description, og:type=website, og:site_name = "<My Name> Portfolio") and Twitter card tags (summary_large_image). Use my studio portrait as the preview image: copy src/assets/about/about-portrait.png to public/og-image.png and reference it as /og-image.png.
   - A JSON-LD <script type="application/ld+json"> block, schema.org "Person": name, jobTitle, description (the meta description), address (addressLocality = my city), knowsAbout (my top skills as an array), image ("/og-image.png"), sameAs [my GitHub, my LinkedIn, my Instagram and YouTube if provided], and the alumniOf entry exactly as defined in AGENTS.md ("Credit conventions").
   - Image alt texts: the About portrait alt must be "<My Name> — <My Role>, TAP Academy student". Do not add the phrase to any other alt text.
2. Create public/robots.txt (allow all) and public/sitemap.xml with a placeholder home URL "https://YOUR-SITE-URL/"; I will replace it after deployment.
3. Replace README.md with a professional README: title "<My Name> — Portfolio", one-line description, a "Live site" line with the placeholder https://YOUR-SITE-URL/, a Tech stack list (React 19, Vite, Tailwind CSS 4, GSAP + ScrollTrigger, EmailJS), "Run locally" commands (npm install, npm run dev, npm run build), an "Environment variables" section naming the three VITE_EMAILJS_* variables without values, and the credit sentence from AGENTS.md ("Built during the placement training program at TAP Academy" with the link).
4. Run npm run lint and npm run build, then commit with the message "Add metadata and README".
````

**Check:** the browser tab shows your name and role. The README is professional.

---

<<<T4>>>
**T4 · Image does not appear / the hero person has a black box around it**

````text
My images are not showing correctly. Verify that src/assets/hero/hero-portrait.png, src/assets/about/about-portrait.png and src/assets/footer/footer-bg.* exist and that the file names match exactly (case-sensitive). The two portraits must be transparent PNGs: if either still has a black rectangle around it, remove the background again with rembg (`rembg i <input> <output>.png`) or tell me to use https://www.remove.bg/. Then check that the components load them with import.meta.glob, that the footer background-image URL is wrapped in quotes (url("...")), and fix any problem.
````

<<<T7>>>
**T7 · The hero is not working as described (fix an already-built hero)**

````text
My Hero section does not behave as designed. Fix ONLY src/components/Hero.jsx, without changing anything else. Required behaviour: (1) the huge text starts as my name in capitals, centred vertically, and scrambles letter by letter (update every 50 ms) into "PORTFOLIO"; (2) then ONE GSAP timeline moves the text container's top from 50% to 45% on desktop (20% on mobile, window.innerWidth < 768) over 1.5 s with power3.inOut, while my transparent hero-portrait.png moves from translateY(100vh) to 0 over 1.5 s with power3.out and the subtitle and contact controls fade/slide in (opacity 0→1, y 50→0, 1.2 s, stagger 0.2); (3) the person is IN FRONT of the typography (z-index: typography z-10, person z-20, subtitle/controls z-30); (4) the page is scroll-locked (document.body.style.overflow = 'hidden') during the intro and restored to 'auto' when the timeline completes and on unmount; (5) the person image keeps its aspect ratio and is never cropped: h-auto w-auto max-h-[88vh] max-w-[72vw] md:max-w-[500px] xl:max-w-[650px] object-contain; (6) the hero image is preloaded before the animation starts; (7) all timers, intervals and tweens are cleaned up on unmount. Run npm run lint and show the result at desktop and phone width.
````

<<<DONE>>>
**Done.** Each student now has a live cinematic portfolio built from their own portraits, a public GitHub repository, and their site registered with Google and shared on LinkedIn.

<<<END>>>
