# AI-Driven Class Playbook — Build Your Portfolio Website with Google Antigravity

**How this class works:** nobody types code. For every step you (1) say a few words to the class, (2) copy the prompt, (3) paste it into the **Antigravity agent chat**, (4) check the result in the browser. Installation, libraries, files, Git and deployment are all done *by the AI agent* from the prompts below.

Before you begin, the class needs these free websites open in browser tabs:

| Tool | Used for | Link |
|---|---|---|
| **Google Antigravity** (the IDE) | Pasting prompts; the agent writes code and runs terminal commands | https://antigravity.google/ |
| **ChatGPT** (or Gemini) | Turning your photo into the illustrated portrait | https://chatgpt.com/ |
| **Google Gemini** | Turning that portrait into a short talking video | https://gemini.google.com/ |
| **GitHub** | Storing the code (public repository) | https://github.com/ |
| **Vercel** | Publishing the live website | https://vercel.com/ |
| EmailJS *(Step 9)* | Making the contact form send email | https://www.emailjs.com/ |

> Sign in to all of them with a Google or GitHub account **before class**. A few steps (logins, downloading a generated image/video) are done by clicking in the browser — the playbook tells you exactly when.

## Quick map

| Part | Step | What happens |
|---|---|---|
| A. Create assets | A1 | ChatGPT makes your illustrated portrait |
| | A2 | Gemini makes your talking video (script provided) |
| | A3 | You record your self-introduction video (script provided) |
| | A4 | Project explanation videos (optional) |
| B. Build | 1 | Create the project folder and open Antigravity |
| | 2 | AI installs everything and sets up the project |
| | 3 | AI interviews you and builds your data file |
| | 4 | AI places your image, video and resume |
| | 5 | Navbar + Footer |
| | 6 | Hero + About + visiting card + intro video |
| | 7 | Skills, Projects, Experience, Leadership, Soft Skills |
| | 8 | Preloader + "My Process" |
| | 9 | Contact form (EmailJS) |
| | 10 | Fluid cursor effect |
| | 11 | Check, fix and polish |
| | 12 | Browser tab, share preview and README |
| C. Publish | 13 | Push to GitHub |
| | 14 | Deploy live on Vercel |
| | 15 | Final link update |
| D. Get discovered | 16 | Google Search Console (get indexed) |
| | 17 | LinkedIn launch post |
| | 18 | YouTube video upload |
| | — | Troubleshooting prompts |

---

# PART A — Create Your Assets

## A1 · Your illustrated portrait (ChatGPT or Gemini)

**Say to the class:** "Every portfolio in this class uses the same signature look: you, painted in an illustrated style, sitting at a desk against a red background. We give the AI two pictures: your photo for your face, and our reference image for everything else."

**Where:** open https://chatgpt.com/ (or https://gemini.google.com/) → new chat → attach **two images, in this order**:
1. **Your photo:** clear, front-facing, good light, face fully visible, no sunglasses, no filters.
2. **The reference image:** [reference-portrait.png](starter-kit/reference-portrait.png) (download it from this link, or the instructor shares the file).

Then paste the prompt and send.

**Prompt (paste with both images attached):**

````text
I have attached two images.

IMAGE 1 = a photo of me. Use it ONLY for my identity: face shape, eyes, eyebrows, nose, lips, skin tone, age, hairstyle and hair length, beard or moustache (only if I have one), and glasses (only if I wear them in IMAGE 1).

IMAGE 2 = the reference. Copy EVERYTHING else from it exactly: art style, pose, outfit, props, desk, background, colours, lighting and framing.

Create ONE new image of ME, recreated inside the exact scene of IMAGE 2, as if IMAGE 2 had been painted of me instead of that man.

Copy exactly from IMAGE 2:
- ART STYLE: semi-realistic digital illustration with fine dark ink outlines and smooth painted shading (graphic-novel portrait style), crisp edges, detailed face, hair and fabric. Not a photograph, not a cartoon, not a 3D/Pixar render.
- BACKGROUND: flat, vivid red (#ff2a2a) wall with a very subtle paper texture. Nothing else in the background.
- DESK: a glossy red desk across the bottom of the frame that reflects the hands, watch, sleeves and laptop.
- POSE: seated behind the desk, facing the camera, shoulders square, both forearms resting on the desk, hands loosely clasped in the centre, looking straight into the camera with a calm, confident, slight smile.
- OUTFIT: black tailored suit jacket, crisp white open-collar shirt (no tie), white pocket square in the breast pocket.
- PROPS: large white over-ear headphones worn on the head over both ears; a dark wooden-bead bracelet on one wrist and a black analog wristwatch on the other wrist; an open dark-grey laptop on the right side of the desk, seen from the back, with NO logo.
- FRAMING: landscape 16:9 (1920x1080). Person centred horizontally, head in the upper third, desk edge at about 85% of the height, laptop filling the right third, plenty of empty red space on the left.
- LIGHTING: soft, even front light, warm natural skin tones, gentle shadows, no harsh highlights.

Do NOT: change my face, age, skin tone, hairstyle or body type; copy the face of the man in IMAGE 2; add text, logos, watermarks or extra people; change the background colour; distort the hands or add extra fingers.
Output one image only, 16:9 landscape.
````

**If you are a woman, add this line before sending:** `OUTFIT for me: black tailored blazer over a crisp white blouse, white pocket square; keep my own hairstyle (and my head covering exactly as in IMAGE 1, if I wear one).`

**Then, if needed, reply in the same chat with only one fix at a time:**
- Face doesn't look like you: `The face is not mine. Redraw the same image but copy my face from IMAGE 1 exactly — same eyes, nose, lips, face shape, skin tone and hairstyle. Change nothing else.`
- Style or background drifted: `Keep my face, but match IMAGE 2 exactly: the same ink-outline illustration style, the flat red #ff2a2a background, the glossy red desk and the same framing.`
- Hands look wrong: `Keep everything the same, only fix the hands: two natural hands, five fingers each, loosely clasped on the desk.`
- Wrong shape: `Same image, but in 16:9 landscape (1920x1080) with the laptop on the right.`

When it looks right, **download the image** (it goes to **Downloads**). Don't rename it; the AI finds it in Step 4.

**Check:** you have a 16:9 image of yourself in the reference style (red background, desk, headphones, laptop on the right) in Downloads.

---

## A2 · Your talking video (Gemini)

**Say to the class:** "Now we bring the portrait to life. Gemini animates your image and you say one short sentence with real lip movement. The secret to a clean video is: a short script, a camera that doesn't move, and hands that stay still."

**Where:** open https://gemini.google.com/ → choose **Video** (*Create video with Veo* in the tools menu; needs a Google AI plan with video) → **upload the image from A1** → paste the prompt.

**Your script (about 14 words is right for an 8-second clip; longer scripts get cut off or rushed):**

> "Hi, I'm **[YOUR NAME]**, a **[YOUR ROLE]** trained at TAP Academy. Welcome to my portfolio!"

**Prompt (paste in Gemini with the A1 image attached):**

````text
Animate the attached image into an 8-second video. The attached image is the exact first frame: keep the person, face, outfit, headphones, laptop, desk, red background, art style and colours identical to it for the whole video.

CAMERA: static locked-off shot on a tripod. No zoom, no pan, no camera movement. Landscape 16:9.

ACTION: the person looks directly into the camera and speaks one sentence with accurate, natural lip-sync — the lips, jaw and cheeks move clearly with every word. Natural blinking, small natural head movement, a friendly smile on the last word. The hands stay clasped on the desk and do not move. The body, headphones, laptop and background stay completely still.

DIALOGUE: the person says, in a clear, warm, confident voice with a natural Indian-English accent, at a calm normal speed:
"Hi, I'm [YOUR NAME], a [YOUR ROLE] trained at TAP Academy. Welcome to my portfolio!"
After the sentence, the person stays smiling at the camera, silent, until the end.

AUDIO: only the person's voice, clean studio quality. No music, no background noise, no sound effects.

AVOID: subtitles, captions or any on-screen text; changing or morphing the face; flickering; warping; extra fingers; moving or waving hands; camera shake; cuts or scene changes; extra people.
````

**Tips for a clean result:**
- **Generate 2–3 times and keep the best take.** Every generation is different.
- **Wrong voice for you?** Change `the person` to `the woman` or `the man`, and describe your voice in two words (for example `soft, calm`).
- **Name mispronounced?** Write it the way it sounds inside the dialogue, for example `San-toash`.
- **Lips not moving or out of sync?** Shorten the script: `Hi, I'm [YOUR NAME]. Welcome to my portfolio!`
- **Face changes during the video?** Add at the top: `The face must stay exactly the same as the first frame in every frame.`

**Then:** **download as MP4** (it goes to **Downloads**).

**Check:** an 8-second 16:9 MP4 where you say your sentence with matching lip movement and nothing glitches.

---

## A3 · Your self-introduction video (optional)

> **Optional step.** If you do not have a self-introduction video, click **Next step** to skip it. Your website will then simply have no video section, and the video prompts in Steps 3 and 6 are hidden automatically.

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
- **Delivery:** look into the camera lens, not the screen. Short pauses are fine; record 2–3 takes and keep the best.

**Then upload it to YouTube:** open https://studio.youtube.com/ → **Create** → **Upload videos** → title `[YOUR NAME] — Self Introduction | [YOUR ROLE] | TAP Academy Placement Training` → description: your script's first two sentences and the line `Trained at TAP Academy: https://thetapacademy.com/` → **No, it's not made for kids** → visibility **Public** (or **Unlisted** if you prefer it to be seen only through your website) → **Publish** → **copy the video link**.

[[input:introurl|Your self-introduction video link|https://youtu.be/xxxxxxxxxxx|Paste the YouTube link here. It is added to your website in Step 6.]]

**Check:** your self-introduction is on YouTube and the link is pasted above.

---

## A4 · Project explanation videos (optional)

> **Optional step.** Only add the links of the project videos you really have. Projects without a video link stay as normal cards, and the video prompt in Step 7 is hidden if you add none.

**Say to the class:** "A 2-minute video where you demo your project and explain how you built it is the strongest proof of skill a recruiter can see. On your site, each project card gets a small video window; clicking it opens a big player. This step is optional: skip it now and add videos later."

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

**Recording tips:**
- **Tool:** on Windows use **Clipchamp** (built in: *Record → Screen and camera*) or the **Snipping Tool** screen recorder; on Mac press **Cmd + Shift + 5**. Turn on the webcam bubble if possible; recruiters like seeing your face.
- **Screen:** close other tabs and notifications, zoom the browser to 110–125% so text is readable, use a clean demo account with sample data.
- **Sound:** quiet room, earphone mic, speak slightly slower than normal.
- **Keep the original recording file** on your computer (in Videos or Downloads). The AI uses it in Step 7 to make a short silent preview clip.

**Then upload each video to YouTube:** https://studio.youtube.com/ → **Create** → **Upload videos** → title `<Project name> — Demo & Explanation | [YOUR NAME] | TAP Academy Placement Training` → description: 2 sentences about the project + `Source code: <GitHub link>` + `Trained at TAP Academy: https://thetapacademy.com/` → **Not made for kids** → **Public** → **Publish** → copy the link into the matching box below.

[[input:project1video|Project 1 video link (your flagship project)|https://youtu.be/xxxxxxxxxxx|Optional. Leave empty if you have no video for this project.]]

[[input:project2video|Project 2 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

[[input:project3video|Project 3 video link|https://youtu.be/xxxxxxxxxxx|Optional.]]

**Check:** each project you recorded is on YouTube and its link is pasted above (empty boxes are fine).

---

# PART B — Build the Website with the AI Agent

> **Rule for every prompt:** paste it into the **Antigravity Agent panel** (agent chat), let the agent run, and click **Allow / Accept** when it asks permission to run a terminal command or create a file. Wait until it says it has finished before moving on.

## Step 1 · Create the project folder and open Antigravity

**Say to the class:** "Everything will live in one folder. Antigravity is a code editor with an AI agent built in — it can create files and run terminal commands for us."

**Do (the only manual part):**
1. Install and open Antigravity from https://antigravity.google/ and sign in with your Google account.
2. Create a new empty folder on your computer named `my-portfolio` (for example on the Desktop).
3. In Antigravity: **File → Open Folder** → choose `my-portfolio`.
4. Open the **Agent panel** (the chat/agent side panel).

**Check:** Antigravity shows the empty `my-portfolio` folder and the agent chat is ready.

---

## Step 2 · AI installs everything and sets up the project

**Say to the class:** "The agent will check your computer, install what's missing (Node.js, Git), create a React + Vite project and install every library we need: Tailwind CSS for styling, Framer Motion and AOS for animation, EmailJS for the contact form."

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
6. Install these libraries with npm: `tailwindcss @tailwindcss/vite framer-motion aos @emailjs/browser`.
7. Configure Tailwind CSS 4 with the Vite plugin: in vite.config.js use the plugins `react()` and `tailwindcss()` (import tailwindcss from '@tailwindcss/vite'). Do NOT create tailwind.config.js or postcss.config.js.
8. Delete the Vite demo content: src/App.css, src/assets/react.svg, public/vite.svg, and all demo markup in src/App.jsx. App.jsx must simply return an empty fragment for now. Keep eslint.config.js.
9. Replace src/index.css with exactly this content:
   - `@import "tailwindcss";`
   - an `@theme` block that defines `--animate-float: float 6s ease-in-out infinite;` and the `@keyframes float` (0% and 100%: translateY(0); 50%: translateY(-20px))
   - `html { scroll-behavior: smooth; }`
   - `body { margin: 0; padding: 0; background-color: #000; color: #fff; font-family: 'Inter', system-ui, -apple-system, sans-serif; }`
10. Replace index.html with a clean page: lang="en", UTF-8 charset, viewport meta, a favicon link to `/favicon.svg`, a title "My Portfolio", preconnect links and a Google Fonts link for Inter (weights 300–900) and Caveat (400, 600), a `<div id="root"></div>` and the module script `/src/main.jsx`. Create public/favicon.svg as a simple red (#ff2a2a) circle with a white letter "P".
11. Make sure src/main.jsx renders `<App />` inside `<StrictMode>` and imports './index.css'.
12. Add a .gitignore if missing (node_modules, dist, *.local, .env*), and run `git init` and make the first commit "Initial project setup" (if git user name/email are not set, ask me for them and set them).

PART 3 — Project rules file
13. Create a file named AGENTS.md in the project root (and an identical copy at .agent/rules/project-context.md) with exactly the following content, so you remember it in every later step:

---
# Project context
React 19 + Vite + Tailwind CSS 4 single-page developer portfolio. Plain JavaScript (JSX), no TypeScript, no router. Libraries: framer-motion, aos, @emailjs/browser. Style: Tailwind utility classes only (no extra CSS files except src/index.css). Colours: pure black / #0a0a0a dark sections, white sections for contrast, accent red #ff2a2a. Font: Inter.

# Architecture rules
- ALL content (text, links, lists) lives in src/data/portfolioData.js and is imported by components. Never hard-code personal content in components.
- One component per section in src/components/, composed in order in src/App.jsx.
- Navigation is anchor links (#home, #about, #skills, #process, #projects, #contact) with CSS smooth scrolling. No router.
- Assets: src/assets/about/profile.png (illustrated portrait), src/assets/hero/hero.mp4 (hero video). Public files in /public.
- Keep code clean and lightly commented in a beginner-friendly way. After every task run `npm run lint` and fix problems.

# Credit conventions (apply automatically wherever relevant)
- This portfolio was built during training at TAP Academy (https://thetapacademy.com/). Keep a small visible footer credit "Trained at TAP Academy" linking to that URL, using the `academy` export in portfolioData.js ({ name: "TAP Academy", url: "https://thetapacademy.com/" }).
- In index.html structured data (JSON-LD, schema.org Person) include `"alumniOf": { "@type": "EducationalOrganization", "name": "TAP Academy", "url": "https://thetapacademy.com/" }`, and include these meta keywords: TAP Academy, TAP Academy student, TAP Academy placement training, augmented reality.
- In README.md include one sentence: "Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training)."
- When creating or describing the GitHub repository, add the topics `tap-academy`, `tap-academy-student`, `placement-training` and `augmented-reality`, and mention TAP Academy placement training in the description.
---

PART 4 — Verify
14. Start the dev server in the background (`npm run dev`), open the shown local URL in the browser, and confirm the page is blank black with no console errors. Then run `npm run lint` and `npm run build` to confirm both succeed.
15. Finish with a short summary: versions installed, libraries installed, and the local URL.
````

**Check:** the agent reports Node ≥ 20, lists the installed libraries, and the browser (http://localhost:5173) shows a blank black page. If a command fails, use *Troubleshooting prompt T1* at the end.

---

## Step 3 · The AI interviews you and builds your data file

**Say to the class:** "This is the most important step. The website shows only what is in one data file — and it must be about YOU. The agent will ask you questions; answer honestly. You can say *'suggest'* if you're stuck."

**Prompt:**

````text
Now create src/data/portfolioData.js with MY real information. Do not invent personal facts. Follow this process:

PROCESS
1. Interview me first. Ask questions in small groups (maximum 4 questions at a time), wait for my answers, then ask the next group. If I answer "suggest", propose 2–3 options based on what I told you and let me pick. If I answer "skip" for an optional item, leave a clean empty value or remove that card.
   Group 1 — Identity: full name (shown as the brand name), current role/title, city and country, phone number (optional), primary email.
   Group 2 — Links: GitHub profile URL, LinkedIn URL, Instagram URL (optional), resume file name (I will provide the file later).
   Group 3 — Story: one-sentence summary of me; hero headline role (2–3 words, e.g. "Java Full Stack Developer"); a 20-word hero subtitle; a 2–3 sentence "about me" bio.
   Group 4 — Skills: 4 skill categories (e.g. Programming, Web Development, Databases, Tools) with 3–5 skills each.
   Group 5 — Process: how I work in 4 steps (Research, Design, Develop, Deploy) with one sentence each. Offer to write them for me from my background.
   Group 6 — Projects: 2–3 projects (title, 1–2 sentence description, technologies, GitHub link, live demo link or "none"). Mark the first as the flagship. Use project video links from MY DETAILS only if present.
   Group 7 — Experience / internships (company, role, duration, skills gained, technologies) — optional.
   Group 8 — Activities / leadership (event or club, my role, 1–2 sentence description, a short badge word) — optional.
   Group 9 — Soft skills: pick 4 (suggest from: Team Collaboration, Problem Solving, Analytical Thinking, Communication, Leadership, Adaptability, Time Management, Creativity) with a short example sentence for each.
   Group 10 — Education: degree, institution, years; and 3 short footer taglines.
2. After the interview, show me a short summary and ask "Is everything correct?" Fix anything I point out.
3. Then write src/data/portfolioData.js. It MUST keep exactly the export names, nesting and field names shown in the structure below (the components I will build in later steps depend on them). Fill every value from my answers; replace all placeholder text. Keep `academy` exactly as it is in the structure. Put the same name in `name`, `firstName` and `brandName`. In `heroContent.ctaSecondary.href` build a mailto link with my email. Set `resumeUrl` and `heroContent.ctaResume.href` to "/" + my resume file name. In `footerContent.copyright` use my name. In `aboutContent.bio`, mention naturally and only once that I am training (or trained) in the placement training program at TAP Academy — for example "...sharpening my skills through the placement training program at TAP Academy." Do not repeat the phrase anywhere else in the data file. Leave the emailjsConfig export exactly as is. Project videos are OPTIONAL: add a `video: "<YouTube link>"` field ONLY to a project whose video link is given in MY DETAILS (project 1 = the first/flagship project, project 2 = the second, project 3 = the third); for projects without a link do not add any `video` field. The self-introduction video is OPTIONAL: ONLY if MY DETAILS contains a self-introduction video link, add right after aboutContent the export `introVideo = { badge: "Meet Me", heading: "Watch My Introduction", description: "<one short sentence inviting the visitor to watch>", youtubeUrl: "<that link>" }`; if no link is given, do not create introVideo at all.
4. Run `npm run lint`, then summarise what you wrote in 5 bullet points.

STRUCTURE TO FOLLOW (placeholders to be replaced with my answers):

// ============================================================
// portfolioData.js — TEMPLATE (placeholder content)
// Replace every "YOUR_..." / "Your ..." value with your own details.
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Your Name",
  firstName: "Your Name",
  brandName: "Your Name", // shown in the preloader, navbar and footer
  title: "Your Job Title",
  location: "Your City, Country",
  phone: "+00 0000000000",
  emails: {
    primary: "you@example.com",
    secondary: "",
  },
  summary: "One or two sentences about who you are and what you do.",
  resumeUrl: "/Your_Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/YOUR_GITHUB_USERNAME",
  linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_ID",
  instagram: "https://www.instagram.com/YOUR_INSTAGRAM_ID",
};

export const heroContent = {
  greeting: "Hi, I'm Your Name",
  titleHighlight: "Your Role",
  subtitle: "A short line about what you build and the kind of work you want to do.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:you@example.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Your_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Your Name</span>, a ... based in ... . Write 2-3 sentences about your skills and goals.`,
  techStack: ["Java", "Python", "React", "AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A one-line description of how you approach building software.",
  cards: [
    { number: "01", title: "Research", text: "Describe your first step." },
    { number: "02", title: "Design", text: "Describe your second step." },
    { number: "03", title: "Develop", text: "Describe your third step." },
    { number: "04", title: "Deploy", text: "Describe your fourth step." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML & CSS" }, { name: "React" }, { name: "Tailwind CSS" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git & GitHub" }, { name: "VS Code" }, { name: "Postman" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Event / Club / Community name",
    description: "What you did, in 1-2 sentences.",
    role: "Your role",
    badge: "Badge text",
  },
];

export const internshipsList = [
  {
    organization: "Company name",
    role: "Your role",
    duration: "Month Year - Month Year",
    skills: ["Skill gained 1", "Skill gained 2"],
    tech: ["Tech 1", "Tech 2"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "A short example of how you work with others." },
  { name: "Problem Solving", icon: "🧩", desc: "A short example of how you break down problems." },
  { name: "Analytical Thinking", icon: "📈", desc: "A short example of how you analyse data or issues." },
  { name: "Communication", icon: "💬", desc: "A short example of how you explain your ideas." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "Project One",
    description: "What the project does and the problem it solves.",
    techTags: ["React", "Tailwind CSS", "Vite"],
    links: { github: "https://github.com/YOUR_GITHUB_USERNAME/project-one", demo: "" }, // demo "" shows "Demo Coming Soon"
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Project Two",
    description: "What the project does and the problem it solves.",
    techTags: ["Java", "Spring Boot", "MySQL"],
    links: { github: "https://github.com/YOUR_GITHUB_USERNAME/project-two", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Certificate name", issuer: "Issuer", icon: "🏅" },
  ],
  viewAllUrl: "https://linkedin.com/in/YOUR_LINKEDIN_ID",
};

export const education = {
  degree: "Your Degree",
  institution: "Your College",
  cgpa: "2020 - 2024",
  graduation: "2024",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Your Job Title", "Skill · Skill · Skill", "What you offer"],
  credential: "Your Degree",
  copyright: `© ${new Date().getFullYear()} Your Name | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
````

**Check:** the agent asked you questions group by group and created `src/data/portfolioData.js` with your details. Open the file and glance through it.

---

## Step 4 · AI places your image, video and resume

**Say to the class:** "Remember the image and video we generated? The agent will find them in Downloads and put them exactly where the website expects them."

**Do:** make sure the portrait image (A1) and the MP4 (A2) are in your **Downloads** folder. If you have a resume PDF, put it in Downloads too.

**Prompt:**

````text
Place my media files in the project. Look in my Downloads folder (detect it for my operating system).
1. Find the most recent image file I downloaded (png/jpg/webp) — this is my illustrated portrait. Copy it (do not move it) to src/assets/about/profile.png (convert to PNG if needed). Show me the file name you picked and ask me to confirm before copying if more than one recent image exists.
2. Find the most recent .mp4 video — this is my hero video. Copy it to src/assets/hero/hero.mp4. If it is larger than 15 MB, tell me and (if ffmpeg is available or you can install it) compress it to under 15 MB at 720p.
3. Look for a resume PDF (name contains "resume" or "cv"). If you find one, copy it to public/ using the file name I gave in portfolioData.js (resumeUrl). If none exists, tell me, and set heroContent.ctaResume in portfolioData.js to null so that button is skipped later.
4. Create the folders if missing. List the final paths and file sizes. Do not edit any other file.
````

**Check:** the agent lists `src/assets/about/profile.png` and `src/assets/hero/hero.mp4` with sizes.

---

## Step 5 · Navbar and Footer

**Say to the class:** "Every website has a header and a footer. The navbar becomes a hamburger menu on phones, and it listens to scrolling."

**Prompt A — Navbar:**

````text
Create src/components/Navbar.jsx (default export) and render it in App.jsx.
- Import personalInfo from '../data/portfolioData'.
- State: isOpen (mobile menu) and isScrolled (true when window.scrollY > 50, set in a useEffect scroll listener that is removed on cleanup).
- navLinks = ['Home','About','Skills','Projects','Contact']; each links to `#${link.toLowerCase()}`.
- hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Hiring Inquiry – Portfolio&body=Hello ${personalInfo.name},%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`
- <nav> is fixed top-0, full width, z-50, transition-all duration-300. Background: bg-[#ff2a2a] py-4 when the mobile menu is open, otherwise transparent with py-4 when scrolled and py-6 when not.
- Inner wrapper: max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center.
- Left: logo link href="#" showing {personalInfo.brandName} followed by a red "." span; white, text-2xl, font-black.
- Centre (hidden on mobile, md:flex, space-x-8): the links in text-white/80 hover:text-white font-medium with an animated underline: an absolutely positioned span (-bottom-1 left-0 h-0.5 bg-red-500) that goes from w-0 to w-full on group-hover (use `group` on the link).
- Right (hidden md:block): "Hire Me" pill button linking to hireMeMailto: px-6 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-md, hover bg-white/20 with a soft white glow shadow.
- Mobile (md:hidden): a hamburger button toggling isOpen, an inline SVG that shows 3 lines when closed and an X when open.
- Mobile dropdown: absolute top-full full-width panel that animates max-height/opacity (max-h-0 opacity-0 closed, max-h-96 opacity-100 open, bg-[#ff2a2a], shadow-2xl, overflow-hidden, transition-all duration-300). It lists the links (white, font-bold, text-lg, bottom border, hover:text-black, closes the menu on click) and a full-width white "Hire Me" button with red text.
````

**Prompt B — Footer** *(paste after A has finished)*:

````text
Create src/components/Footer.jsx (default export) and render it at the bottom of App.jsx.
Import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData'.
<footer>: bg-[#111111] text-[#d4d4d4], py-16 px-6 md:px-12, font-mono, text-[10px] md:text-xs tracking-widest, flex flex-col justify-between min-h-[50vh].
- Top row (grid-cols-1 md:grid-cols-3 gap-12): column 1 maps footerContent.taglines into <p>; column 2 (md:items-center) shows footerContent.credential and an underlined link "View Work" to #projects; column 3 (md:items-end) shows "Available for opportunities" and the current year.
- Middle: a huge centred h2 with {personalInfo.brandName.toLowerCase()} — text-[18vw] md:text-[16vw], leading-none, font-sans font-bold tracking-tighter lowercase select-none, colour #f4f4f4, inside a py-20 md:py-24 overflow-hidden wrapper.
- Bottom row (grid 3 columns, items-end): column 1 has an underlined "Contact" link to #contact and footerContent.copyright (text-white/60, tiny), plus a second tiny line "Trained at" followed by an underlined link to {academy.url} with text {academy.name} (target="_blank" rel="noopener"); column 2 has the primary email as an underlined mailto link and a row of GitHub, LinkedIn and Instagram inline-SVG icons linking to socialLinks (target _blank, rel noopener noreferrer, aria-label on each); column 3 (md:items-end) has an underlined "Explore My GitHub" link.
````

**Check:** in the browser you see the navbar with your name, and a footer with your name huge and lowercase and "Trained at TAP Academy". Shrink the window to see the hamburger menu.

---

## Step 6 · Hero, About, visiting card and intro video

**Say to the class:** "The hero is the first thing recruiters see: your video, your headline and buttons. The About section uses your illustrated portrait on a hanging ID badge, and when someone clicks it, the badge flips to show your visiting card."

**Prompt A — Hero:**

````text
Create src/components/Hero.jsx (default export), render it after <Navbar /> in App.jsx.
Imports: useRef/useEffect/useState from react; AOS from 'aos' and 'aos/dist/aos.css'; heroVideo from '../assets/hero/hero.mp4'; heroPoster from '../assets/about/profile.png'; { heroContent, socialLinks } from '../data/portfolioData'.
Behaviour:
- useEffect once: AOS.init({ duration: 1000, once: true, easing: 'ease-out' }). In the same effect also call AOS.refresh when the window 'load' event fires (remove the listener in the cleanup), because large images shift the layout. Always use once: true — no animation may hide an element again after it has appeared.
- videoRef + isPlaying state. The video does NOT autoplay. toggleVideo(e) calls e.stopPropagation(), then plays/pauses the video and updates isPlaying. onEnded sets isPlaying false.
Layout:
- <section id="home" className="relative w-full h-screen overflow-hidden bg-[#ff2a2a]"> (the same red as the background of my portrait and video, so the video blends into the section)
- Background <video> that must FIT and never zoom-crop: className="absolute inset-0 w-full h-full object-contain object-top md:object-right z-0", playsInline, poster=heroPoster, <source type="video/mp4">. Use object-contain, NOT object-cover, because the generated video can be portrait, square or widescreen: on desktop it sits against the right edge so my whole face is visible, on mobile it sits at the top. Directly after the video add a readability overlay: <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />.
- Left floating social bar (hidden lg:flex, fixed left-6 top-1/2 -translate-y-1/2 z-50, mix-blend-difference): GitHub, LinkedIn, Instagram inline SVG icons (w-5 h-5, text-white/60 hover:text-white, hover:scale-125) linking to socialLinks, target _blank rel noopener noreferrer, aria-labels.
- Content container: absolute inset-0 z-20, max-w-7xl mx-auto, px-6 md:px-12, pb-20 md:pb-[8%], flex flex-col md:flex-row, justify-end md:justify-between, items-start md:items-end.
  - Left block (max-w-2xl): on small screens (lg:hidden) the same three social icons inline above the title; an h1 (text-white text-3xl md:text-5xl font-bold) with `{heroContent.greeting}, <br />` and a span for heroContent.titleHighlight styled solid black (text-black) so it stands out on the red background; a subtitle p (text-white text-sm md:text-lg font-semibold max-w-md); then three pill buttons in a flex-wrap row: primary (white bg, black text, hover scale-105) = ctaPrimary; secondary (bg-black/40, white border, backdrop-blur) = ctaSecondary; resume (transparent, border-white/50, has a download-document icon, `download` attribute) = ctaResume.
  - Right block: a clickable "Play Reel" control calling toggleVideo: a circle (w-12 h-12 md:w-20 md:h-20, rounded-full, border-white/30, bg-black/20, backdrop-blur, hover:scale-110 and hover:bg-[#ff2a2a] with a red glow) containing a play triangle when not playing or a pause icon when playing, with a small uppercase tracking-widest label below ("Play Reel" / "Pause").
- Give each block data-aos="fade-up" with increasing data-aos-delay (100, none, 200, 400) and data-aos="zoom-in" delay 600 for the play control.
- A bottom-centre bouncing down-arrow scroll indicator (hidden md:block, animate-bounce, pointer-events-none); the arrow icon must be white (text-white) because the background is dark.
If heroContent.ctaResume is null or empty, do not render the resume download button.
````

**Prompt B — About** *(after A)*:

````text
Create src/components/About.jsx (default export) and render it after <Hero /> in App.jsx. Import stackImage from '../assets/about/profile.png' and { aboutContent } from '../data/portfolioData'.
- <section id="about"> with bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden.
- Inner: max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start.
- Left (md:w-[350px] shrink-0): an "ID badge on a lanyard" animated with Framer Motion (import { motion } from 'framer-motion'): make this wrapper a <motion.div initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}> so the badge drops in with a bounce ONCE and then stays visible forever, even when I scroll away and back (do NOT use AOS or any CSS class that toggles opacity for this badge). It contains: a black lanyard string (absolute -top-32 left-1/2 w-3 h-40 bg-black), a grey clip rectangle, and a dark card (bg-gray-900, max-w-[280px], rounded-2xl, p-3, deep shadow, -rotate-3 hover:rotate-0 transition-transform duration-500) with a small cutout slot at the top and the photo inside (aspect-[3/4], rounded-xl, object-cover object-top, alt text with the person's name).
- Right (data-aos="fade-left"): h2 {aboutContent.heading} (text-4xl md:text-5xl font-black text-black) and a p with className "text-lg font-bold leading-relaxed text-red-50" that renders aboutContent.bio via dangerouslySetInnerHTML.
- A white torn-paper SVG divider along the bottom: absolute bottom-0, viewBox "0 0 1200 120", preserveAspectRatio="none", fill-white, using this path: M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z
- Two decorative 4-point-star SVGs (path "M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z") in black at opacity-30 with animate-pulse, one top-right and one bottom-left (second one with animationDelay 1s).
````

**Prompt C — Visiting card on the back of the ID badge** *(after B)*:

````text
Turn the ID badge in src/components/About.jsx into a flip card that shows my visiting card on the back. Do not change the drop-in animation of the outer motion.div, the lanyard, the clip, or the right-hand text.
1. Install react-qr-code with npm.
2. Inside the existing motion.div, replace the badge card with this structure:
   - A wrapper <button type="button"> (aria-label "Flip ID card", class "relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none") that toggles a `flipped` state on click (works on mobile tap and keyboard Enter/Space).
   - Inside it, a div with "relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]" and style transform rotateY(180deg) when flipped, rotateY(0deg) when not.
   - FRONT face (absolute inset-0, [backface-visibility:hidden]): the existing dark badge card with the cutout slot and my portrait (keep it exactly as it looks now, filling the face).
   - BACK face (absolute inset-0, [backface-visibility:hidden] [transform:rotateY(180deg)]): a visiting card, same size and rounded-2xl corners as the front, background bg-gradient-to-br from-[#141414] to-[#1f1f1f], a 6px red (#ff2a2a) bar across the top, p-5, white text, left-aligned. Contents from portfolioData.js (hide any row whose value is empty):
       • brand name (personalInfo.brandName) in text-xl font-black with a red "."
       • title (personalInfo.title) in text-xs uppercase tracking-widest text-red-400
       • a thin divider (border-white/10)
       • rows with small inline SVG icons (w-4 h-4, text-red-400) and text-xs text-white/85: email (mailto link), phone (tel link), location, LinkedIn and GitHub (short labels "LinkedIn" / "GitHub", target _blank rel noopener noreferrer)
       • at the bottom: a white rounded-lg p-2 box with <QRCode value={socialLinks.linkedin || ('mailto:' + personalInfo.emails.primary)} size={76} /> next to the caption "Scan to connect" (text-[10px] text-white/60)
     Clicks on the back's links must open the link and must not flip the card (stopPropagation).
3. Under the card add a small hint (text-xs font-bold text-black/60 mt-4): "Tap the card to flip ↻".
4. Run npm run lint and check at desktop and phone width: the card flips smoothly both ways, the back is not mirrored, and nothing disappears when scrolling.
````

**Prompt D — Self-introduction video section** {if:introurl} *(after C; only because you added an intro video link)*:

````text
Create src/components/IntroVideo.jsx (default export) and render it in src/App.jsx right after <About />. Use framer-motion and { introVideo } from '../data/portfolioData'.
- If introVideo.youtubeUrl is empty, render nothing.
- Get the YouTube video id from any link format: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/shorts/ID, youtube.com/embed/ID (ignore extra parameters). If the link is a /shorts/ link, use a vertical 9:16 frame (max-w-sm mx-auto); otherwise 16:9 (max-w-4xl mx-auto).
- Section: id="intro", bg-white (it sits between the red About section and the dark Skills section) with a faint grid background (#80808008 lines, 60px), pt-24 pb-28 px-6 md:px-12, relative overflow-hidden.
- Header (centred): a pill with introVideo.badge, an h2 introVideo.heading (text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tight), and introVideo.description in text-gray-500.
- Video frame: a motion.div that animates in once when scrolled into view (initial opacity 0, y 60, scale 0.95 → opacity 1, y 0, scale 1; viewport once: true, amount 0.3; duration 0.8), rounded-3xl overflow-hidden, border-4 border-[#ff2a2a], shadow-[0_30px_80px_rgba(255,42,42,0.25)], bg-black, aspect ratio as above.
- Lightweight player: first show the thumbnail image https://i.ytimg.com/vi/<id>/hqdefault.jpg (object-cover, alt "<my name> self-introduction video", loading="lazy") with a dark overlay and a big centred red circular play button (w-20 h-20 bg-[#ff2a2a] with a white triangle, hover:scale-110, aria-label "Play introduction video"). On click, replace it with an <iframe> of https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1 (title "Self-introduction video", allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen, w-full h-full).
- Under the frame a small link "Watch on YouTube ↗" to the original link (target _blank rel noopener noreferrer).
- Also add 'Intro' to the navbar links array in src/components/Navbar.jsx, between 'About' and 'Skills' (it links to #intro).
Run npm run lint and check the section at desktop and phone width.
````

**Check:** full-screen hero, the **Play Reel** circle plays your talking video, and scrolling reveals a red About section where your badge drops in and bounces. Click the badge: it flips to your visiting card (with a QR code) and back.

{if:introurl} **Check:** below About, your self-introduction video appears with a play button and plays when clicked.

---

## Step 7 · Skills, Projects, Experience, Leadership, Soft Skills

**Say to the class:** "Now the content sections. Each one is data → cards. Change the data file, and the page changes. Paste the prompts one after the other, waiting for each to finish."

**Prompt A — Technical Skills:**

````text
Create src/components/TechnicalSkills.jsx using { technicalSkills } (technicalSkills.categories = [{ title, skills: [{ name }] }]).
- Two small components in the same file: SkillBadge ({ name }) — inline-flex rounded-full pill, px-4 py-2, bg-white/5 border border-white/10 text-white text-sm font-medium, hover:bg-red-600/20; and SkillCard ({ category, index }) — data-aos="fade-up" with data-aos-delay={index*100}, bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6, hover:scale-[1.02] hover:border-red-500/30 and a red glow shadow, an uppercase font-black h3 with a bottom border, and a flex-wrap gap-3 list of badges.
- Section: id="skills", bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden, two blurred red circles in the background (absolute w-96 h-96 bg-red-600/10 rounded-full blur-[120px], pointer-events-none).
- Header (data-aos="fade-up", centred): a pill label "Technical Stack", h2 "My Skillset" (text-4xl md:text-5xl font-black text-white uppercase), and a one-line description in text-white/50.
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8, one SkillCard per category (key = category.title).
````

**Prompt B — Projects:**

````text
Create src/components/Projects.jsx using { projects, socialLinks }. Each project: { id, number, badge, title, description, techTags[], links: { github, demo }, isFlagship }.
- Define small icon components GitHubIcon and ExternalLinkIcon (inline SVG).
- ProjectCard({ project, aosDelay }): outer div data-aos="fade-up" with a 1px gradient border (p-[1px] rounded-2xl) — red gradient (from-red-500/50 via-white/10 to-red-500/30, brighter on hover) when project.isFlagship, otherwise bg-white/10. Inner panel rounded-2xl p-6 md:p-8 backdrop-blur-md dark (#0f0f0f or #111111 at 90% opacity). Inside: optional badge pill (only when project.badge, red text on red/10, uppercase tracking-widest text-xs); big faint serif-italic number (text-5xl font-black text-white/10) next to the title (text-2xl md:text-3xl font-black text-white); description (text-white/60); tech tag pills (rounded-full, text-xs font-bold, hover turns red); action buttons: "GitHub" (only if links.github is truthy) and a demo button — if links.demo is a non-empty string show a red "Live Demo" button opening in a new tab, otherwise show a disabled-looking grey "Demo Coming Soon" button (href "#", cursor-not-allowed).
- Projects section: id="projects", bg-[#0a0a0a] with a faint grid background (bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]), pt-24 pb-32 px-6 md:px-12. Header: pill "Featured Projects", h2 "Work that speaks for itself" (text-4xl md:text-5xl lg:text-6xl font-black), short description. Cards in flex-col gap-6 md:gap-8 with aosDelay (index+1)*100. Below: centred pill button "Explore All My Repositories" with GitHub icon + arrow linking to socialLinks.github.
````

**Prompt B2 — Project videos** {if:project1video|project2video|project3video} *(only because you added a project video link)*:

````text
Add explanation videos to the project cards. Only projects whose `video` field in src/data/portfolioData.js is a non-empty YouTube link get a video; all other cards stay exactly as they are.

1. Create src/components/VideoModal.jsx (default export, props: url, title, onClose). It renders with framer-motion AnimatePresence: a fixed full-screen overlay (inset-0, z-[200], bg-black/85, backdrop-blur-sm) that fades in, and a centred player that scales in from 0.92 (w-full max-w-5xl, aspect-video, rounded-2xl overflow-hidden, border border-white/10, shadow-2xl). For /shorts/ links use a vertical 9:16 frame (max-w-sm). The player is an <iframe> of https://www.youtube-nocookie.com/embed/<id>?autoplay=1&rel=0&modestbranding=1 (title = the project title, allow "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen). Extract the video id from youtu.be/ID, watch?v=ID, shorts/ID or embed/ID links. Close it with a round ✕ button (top-right, aria-label "Close video"), the Escape key, or a click on the dark overlay (not on the player). While open, lock page scrolling (document.body.style.overflow = 'hidden') and restore it on close; move keyboard focus to the ✕ button when it opens.

2. Optional silent hover previews: ask me whether I still have the original screen recordings on this computer. If yes, ask me which file belongs to which project (or list recent .mp4/.mov files in my Videos and Downloads folders for me to choose). For each chosen file make an 8-second silent preview with ffmpeg (install it if missing; Windows: winget install Gyan.FFmpeg, macOS: brew install ffmpeg):
   ffmpeg -ss 15 -t 8 -i "<recording>" -an -vf "scale=640:-2" -c:v libx264 -crf 30 -preset veryfast -movflags +faststart "src/assets/projects/<project id>-preview.mp4"
   Each preview must be under 1.5 MB (raise -crf if it is larger). If I have no recordings, skip previews.

3. In src/components/Projects.jsx load previews with import.meta.glob('../assets/projects/*-preview.mp4', { eager: true, import: 'default' }) and match them to projects by `<project id>-preview.mp4`.

4. In ProjectCard, when the project has a video, change the inner layout to two columns on md+ (text on the left, md:w-[58%]; video window on the right, md:w-[42%]; on mobile the video window goes below the description). The video window is a <button type="button"> with aria-label "Play <project title> explanation video": aspect-video, rounded-xl overflow-hidden, border border-white/15, relative, group, cursor-pointer, hover:border-red-500/50 transition. Inside:
   - the YouTube thumbnail https://i.ytimg.com/vi/<id>/hqdefault.jpg (object-cover, loading="lazy", alt "<project title> demo video thumbnail");
   - if a preview clip exists: a <video> with the clip on top of the thumbnail (muted, loop, playsInline, preload="none", object-cover, opacity-0 by default). On mouseenter play it and fade it to opacity-100; on mouseleave pause, reset to 0 s and fade out. Do this only on devices with a mouse (window.matchMedia('(hover: hover)').matches); touch devices just show the thumbnail;
   - a dark gradient overlay at the bottom with a small red circular play icon and the label "Watch explanation" (text-xs font-bold uppercase tracking-wider);
   - clicking anywhere on the window opens <VideoModal> for that project.
5. Run npm run lint and test: hover previews play silently on desktop, clicking opens the big player with sound, ✕ / Esc / outside click close it, page scroll is locked while it is open, and cards without a video look unchanged.
````

**Prompt C — Experience:**

````text
Create src/components/Internships.jsx using { internshipsList } (items: { organization, role, duration, skills[], tech[] }).
- Section: bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden. At the top edge a torn-paper SVG divider (rotate-180, -translate-y-[1px], h-12 md:h-20, fill-[#0a0a0a]) so the previous dark section flows into the red one. A decorative pulsing black star bottom-left at 20% opacity.
- Header (centred): h2 "Work Experience" (uppercase font-black text-black) and a text-red-100 description.
- Grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 of InternshipCard({ intern, index }): data-aos="fade-up" delay index*150; bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02]. Top row: duration (mono, text-white/40, uppercase) and an "Internship" mini badge. Then role (text-2xl font-black text-white), organization (uppercase text-red-200), a "Skills Gained:" bulleted list, and at the bottom (border-t) a "Technologies:" row of mono pills.
````

**Prompt D — Leadership timeline:**

````text
Create src/components/Leadership.jsx using { leadershipList } (items: { title, description, role, badge }).
- Section: bg-[#0a0a0a] with the same faint grid background as Projects; torn-paper divider at the top (rotate-180, fill-[#ff2a2a]).
- Header centred: pill "Activities", h2 "Leadership & Engagement" (uppercase font-black text-white), description.
- A vertical timeline: a 2px gradient line (from-[#ff2a2a] via-red-500/50 to-white/10) at left-4 on mobile and the centre on md+. For each item a LeadershipItem({ item, index }): a red glowing dot on the line; a card (bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6) that sits on the LEFT for even indexes (md:text-right, data-aos="fade-right") and on the RIGHT for odd indexes (md:text-left, data-aos="fade-left"), 45% width on md+ with an empty spacer on the other side. Card content: red badge pill, title (hover turns red), role (mono uppercase text-red-400), description (text-white/60).
````

**Prompt E — Soft Skills:**

````text
Create src/components/SoftSkills.jsx using { softSkillsList } (items: { name, icon, desc }).
- White section (bg-white pt-24 pb-32) with a very faint grid background (#80808006 lines, bg-[size:60px_60px]) and a torn-paper divider at the top (rotate-180, fill-[#0a0a0a]).
- Header centred: pill "Core Competencies" (light theme), h2 "Professional Soft Skills" (uppercase font-black text-gray-900), description in text-gray-500.
- Grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 of SoftSkillCard({ skill, index }): data-aos="fade-up" delay index*100; bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] centred text; emoji icon in a rounded square that tints red and scales on group-hover; uppercase name; text-gray-500 description; hover:scale-[1.03] with a soft red shadow.
````

**Prompt F — Put everything on the page (App.jsx):**

````text
Update src/App.jsx so the page shows all sections in exactly this order, with everything inside one fragment: Preloader (if the file exists), Navbar, Hero, About, IntroVideo (if the file exists), TechnicalSkills, Services (if the file exists), Projects, Internships, Leadership, SoftSkills, Contact (if the file exists), Footer. Only import components that exist right now; I will add the rest in later steps. If the Internships or Leadership data arrays in portfolioData.js are empty, skip those two components. Then run npm run lint and tell me what the page shows.
````

**Check:** scroll down — dark skills grid, dark project cards (flagship has a glowing red border), red experience cards, a timeline, and white soft-skill cards.

{if:project1video|project2video|project3video} **Check:** projects with a video show a small video window that previews on hover and opens a big player on click.

---

## Step 8 · Preloader and "My Process"

**Say to the class:** "Two Framer Motion animations: the red shutter intro that fills your name like water, and a dashed line that draws itself as you scroll, turning each card red."

**Prompt A — Preloader:**

````text
Create src/components/Preloader.jsx (default export) and render it above <Navbar /> in App.jsx. Use framer-motion (motion, AnimatePresence) and { personalInfo }.
- isLoading state starts true; a useEffect sets a 2200 ms timeout that sets it false (clear it on cleanup).
- Wrap everything in <AnimatePresence> and render {isLoading && (...)}.
- Outer motion.div key="preloader": fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex items-center justify-center. initial {y:0}, exit {y:"-100%"}, transition { duration: 1.2, ease: [0.76, 0, 0.24, 1] } — the red "shutter" slides up.
- Inside, a motion.div (relative, text-5xl md:text-7xl font-black tracking-tighter) with exit {opacity:0, scale:0.95, y:-20} and duration 0.4.
- "Water fill" effect: a background copy of {personalInfo.brandName} + "." in text-red-900/30, and on top an absolutely positioned copy in white (the "." in black) whose clipPath animates from 'inset(100% 0 0 0)' to 'inset(0% 0 0 0)' over 1.6 s, easeInOut, delay 0.2.
````

**Prompt B — My Process:**

````text
Create src/components/Services.jsx (default export) and render it after <TechnicalSkills /> in App.jsx. Use { useRef, useState } from react, { motion, useScroll, useSpring, useMotionValueEvent } from framer-motion, and { skillsContent } (badge, heading, description, cards[{number,title,text}], endText).

Section: id="process", ref=containerRef, bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden with a faint grid background (#8080800a lines, 80px). Inner wrapper: max-w-6xl mx-auto relative md:h-[1350px].

Scroll progress:
- const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
- const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

Header block (data-aos="fade-up", md:absolute top-10 left-0 md:w-[450px] z-20): a pill showing skillsContent.badge, an h2 with skillsContent.heading (text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]) with a small hand-drawn arrow SVG (path "M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10") positioned at its bottom right, and skillsContent.description.

Desktop SVG (hidden md:block, absolute top-0 left-0 w-full h-[1350px], pointer-events-none, z-0, viewBox "0 0 1000 1350", preserveAspectRatio="none"). Use this path for all three layers: "M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200".
  1. a faint guide path: stroke #cbd5e1, width 2, strokeDasharray "8 10";
  2. <mask id="path-mask"> containing a <motion.path> with stroke white, strokeWidth 20 and style={{ pathLength }};
  3. the real dashed path: stroke black, width 2, strokeDasharray "8 10", mask="url(#path-mask)".
Mobile SVG (md:hidden): the same three-layer idea with a straight vertical path "M 2,0 L 2,100", viewBox "0 0 4 100", centred (left-[50%] -translate-x-1/2, w-4 h-[100%]), vectorEffect="non-scaling-stroke", mask id "path-mask-mobile", strokeDasharray "4 6".

Cards: a container (flex flex-col gap-8 md:gap-12 items-center md:block relative z-10). Map skillsContent.cards to <TagCard> with these desktop positions (md:absolute) and tilts:
  - 0: md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6, aos fade-left, delay 100
  - 1: md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6, fade-right, 200
  - 2: md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3, fade-left, 300
  - 3: md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3, fade-right, 400
Also a hand-written end note {skillsContent.endText} (hidden md:block, absolute top-[1250px] left-[60%], font-['Caveat',cursive] text-3xl text-gray-600 rotate-6).

TagCard({ number, title, text, className, aosDelay, aosType, pathLength, containerRef }): a "hanging tag" card, w-72 sm:w-80, rounded-[2rem] p-2, with a small punched hole circle at the top and an inner rounded-[1.5rem] panel (mt-8 p-8 min-h-[220px]) containing the number (serif italic), title (text-2xl font-black) and text (text-sm). It has an isActive state: useMotionValueEvent(pathLength, "change", latest => { compare latest * containerHeight with the card's top relative to the container + 50px; setIsActive(true) when the line tip has passed, false when it goes back }). When active the card turns red (bg-[#ff2a2a], red glow shadow, inner bg-red-700/50, white text) with transition-colors duration-700; otherwise white with a soft shadow and a #f4f4f4 inner panel with grey text.

Also add the Caveat handwriting font to the Google Fonts <link> in index.html.
````

**Prompt C — Add them to App.jsx:**

````text
Make sure src/App.jsx renders <Preloader /> before <Navbar />, and <Services /> right after <TechnicalSkills />. Run npm run lint and fix any problems.
````

**Check:** reload — the red shutter fills with your name and slides up. Scrolling to "My Process" draws the line, and cards turn red as it reaches them.

---

## Step 9 · Contact form (EmailJS)

**Say to the class:** "A static website cannot send email by itself. EmailJS sends it from the browser. Even without keys the form still works by opening your email app."

**Do on the website (2 minutes, with the instructor):**
1. Open https://www.emailjs.com/ → sign up (free).
2. **Email Services → Add New Service → Gmail** → connect → copy the **Service ID**.
3. **Email Templates → Create New Template**: Subject `Portfolio message from {{first_name}} {{last_name}}`; Content: `From: {{first_name}} {{last_name}} ({{user_email}})` and `{{message}}`; set *To email* to your own email → Save → copy the **Template ID**.
4. **Account → General → Public Key** → copy it.

**Prompt A — Contact form:**

````text
Create src/components/Contact.jsx (default export) and render it after <SoftSkills /> and before <Footer /> in App.jsx. Imports: { useRef, useState } from react; { motion, useScroll, useTransform } from framer-motion; { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'.

Logic:
- ref (section), formRef (form), status state: 'idle' | 'sending' | 'success' | 'error'.
- Parallax: const { scrollYProgress } = useScroll({ target: ref, offset: ["start end","end start"] }); const y = useTransform(scrollYProgress, [0,1], ["-20%","30%"]).
- handleSubmit(e): preventDefault; ignore if status is 'sending'; set 'sending'; read #firstName, #lastName, #email, #message values from formRef; if firstName, email or message is empty → set 'error' and back to 'idle' after 3 s and return.
- isConfigured = serviceId, templateId and publicKey all truthy AND not equal to the placeholders 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', 'YOUR_EMAILJS_PUBLIC_KEY'.
- If NOT configured: open window.open(`mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`, '_blank'), set 'success', reset the form, return to 'idle' after 3 s.
- If configured: try { const emailjs = await import('@emailjs/browser'); await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey); set 'success'; reset form } catch { console.error; set 'error' }; return to 'idle' after 4 s.

Layout:
- <section ref={ref} id="contact"> bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900.
- Behind: a motion.div (style={{ y }}, absolute, pointer-events-none, z-0) holding a giant "Contact" word in a <div> (not an <h1>; the Hero owns the only h1) — text-[25vw], leading-[0.75], font-black, uppercase, tracking-tighter, select-none, scale-y-[1.6], origin-top, fontFamily "'Impact','Arial Black',sans-serif".
- In front: a red card (bg-[#ff2a2a], w-full md:w-[85%] lg:w-[75%], p-8 md:p-16, aligned to the right of the page, data-aos="fade-up") with a header row: small uppercase tracking-[0.2em] label "Reach Me" and a "DM on Instagram" pill linking to socialLinks.instagram.
- Form (flex-col gap-12): two columns on md+. Left: inputs with underline-only styling (bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white focus:border-white): id firstName name="first_name" (required), id lastName name="last_name", id email name="user_email" type email (required). Right: textarea id message name="message" (required, resize-none, min-h-[120px]). The name attributes must match the EmailJS template variables.
- Bottom: a permission checkbox with label, a note "Your message will be sent directly to my inbox. I typically respond within 24-48 hours.", the urgent-email mailto link, and the submit button — a rounded-full bordered pill that is: greyed with a spinner and "Sending..." when sending; green with "Sent Successfully ✓" on success; dark red "Failed — Try Again" on error; otherwise "Send Message" with an arrow icon that slides right on hover and turns white with red text.
````

**Prompt B — Connect your keys safely:**

````text
Create a file named .env.local in the project root (it must be git-ignored; confirm .gitignore covers *.local). Ask me, one at a time, for my EmailJS Service ID, Template ID and Public Key, and write them as:
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
(If I say I don't have keys yet, create the file with empty values and tell me the form will use the email-app fallback.) Then restart the dev server so the new variables load, make sure <Contact /> is rendered in src/App.jsx between SoftSkills and Footer, and run npm run lint. Never print my keys in your summary.
````

**Check:** fill and send the form — you should see the green *Sent Successfully ✓* and receive an email. Without keys, your email app opens with the message pre-filled.

---

## Step 10 · Fluid cursor effect

**Say to the class:** "This is a WebGL fluid simulation — about a thousand lines. We don't write it, we *integrate* it. The agent downloads the ready-made component and wires it in."

> The component comes from **React Bits**, a free open-source library (reactbits.dev). The agent downloads it from the official React Bits repository on GitHub.

**Prompt:**

````text
Add a fluid "splash cursor" effect to the website.
1. Download the official React Bits SplashCursor component from
   https://raw.githubusercontent.com/DavidHDev/react-bits/main/src/content/Animations/SplashCursor/SplashCursor.jsx
   and save it as src/components/SplashCursor.jsx (use curl, or PowerShell Invoke-WebRequest on Windows). Do not modify its internals, with one exception: change the touchmove listener from
   window.addEventListener('touchmove', handleTouchMove, false);
   to
   window.addEventListener('touchmove', handleTouchMove, { passive: true });
   so scrolling stays smooth on phones. Keep the file's default export.
2. If the download fails, tell me, and as a fallback write a lighter component src/components/SplashCursor.jsx that draws a fading glowing trail behind the mouse on a fixed full-screen <canvas> (position fixed, inset 0, pointer-events none, z-index 50), does nothing on touch devices, and cleans up its listeners on unmount.
3. Render it as the FIRST element inside the fragment in src/App.jsx, like this:
   <SplashCursor VELOCITY_DISSIPATION={3} SPLAT_FORCE={3500} COLOR_UPDATE_SPEED={18} COLOR="#ffffff" RAINBOW_MODE={false} />
4. Confirm that links and buttons are still clickable (the canvas wrapper must have pointer-events: none). Run npm run lint and fix issues.
````

**Check:** moving the mouse leaves soft white fluid trails; buttons and links still work.

---

## Step 11 · Check, fix and polish

**Say to the class:** "Before we publish, we ask the agent to test its own work like a reviewer."

**Prompt:**

````text
Act as a careful code reviewer and QA tester for this project.
1. Run `npm run lint` and `npm run build` and fix every error or warning in my code.
2. Open the site in the browser at desktop width and at phone width (about 390 px). For every section (Hero, About, Skills, Process, Projects, Experience, Leadership, Soft Skills, Contact, Footer) check: no text overlapping, no horizontal scrolling, images and video load, all anchor links in the navbar scroll to the right section (#home, #about, #skills, #projects, #contact), all buttons have hover states.
2a. SCROLL TEST: scroll slowly from the top to the bottom of the page, then back up to the top, then down again. Every element must stay visible after it has appeared — nothing may disappear or stay invisible (check especially the ID badge in the About section); also click the ID badge to confirm it flips to the visiting card and back. If something hides or never reappears, fix its animation (use Framer Motion `whileInView` with `viewport={{ once: true }}`, or AOS with once: true) and re-test.
2c. VIDEO TEST (only for videos that exist in portfolioData.js; if there are none, skip this test and do not create any video component): for every project that has a `video` field, hovering the small window plays the silent preview (if one exists) and clicking opens the big player; ✕, Esc and clicking outside close it. If `introVideo` exists, its section plays when the play button is clicked.
2b. HERO FIT TEST: at 1440x800, 1920x1080 and 390x844 the hero video/poster must show my whole face without being zoomed or cropped, the headline, subtitle and buttons must be readable (not lost against the picture), and the video must blend into the section background. If not, fix Hero.jsx (object-contain, red section background, light left-to-right shade overlay).
3. Confirm there is exactly ONE <h1> on the page (in the Hero); change any other <h1> to a <div> or <h2> keeping the styling. Make sure every <img> has meaningful alt text and every icon-only link has an aria-label.
4. Confirm no personal secrets are tracked by git (.env.local must be ignored) and that no placeholder text such as "Your Name" or "YOUR_" remains anywhere except the emailjsConfig fallbacks.
5. Make a git commit "Complete portfolio sections".
Report what you fixed in a short list.
````

**Check:** the agent reports a clean lint and build and lists the fixes.

---

## Step 12 · Browser tab, share preview and README

**Say to the class:** "When someone shares your link on LinkedIn or WhatsApp, or Googles your name, this is what they see. We also write the README, which is the front page of your GitHub repository."

**Prompt:**

````text
Finish the "front door" of the project using my details from src/data/portfolioData.js.
1. index.html <head>:
   - <title>: "<My Name> — <My Role> | TAP Academy Student Portfolio" (keep it under 65 characters; if it is longer, shorten the role, never remove my name or "TAP Academy")
   - meta description: ONE natural sentence of 140–155 characters written for humans, containing my name, my role, my city and the phrase "TAP Academy placement training" exactly once (for example: "<My Name>, <My Role> from <my city>. Projects in Java and React built during TAP Academy placement training. View my work and resume.")
   - meta keywords: my name, my role, my top 4 skills, my city, "portfolio", "TAP Academy", "TAP Academy student portfolio", "TAP Academy placement training", "augmented reality" (each phrase only once)
   - meta author (my name), meta robots "index, follow", meta theme-color #ff2a2a
   - Open Graph tags (og:title = the same text as <title>, og:description = the meta description, og:type=website, og:site_name = "<My Name> Portfolio") and Twitter card tags (summary_large_image). Use my portrait as the preview image: copy src/assets/about/profile.png to public/og-image.png and reference it as /og-image.png.
   - A JSON-LD <script type="application/ld+json"> block, schema.org "Person": name, jobTitle, description (the meta description), address (addressLocality = my city), knowsAbout (my top skills as an array), image ("/og-image.png"), sameAs [my GitHub, my LinkedIn, my Instagram if provided], and the alumniOf entry exactly as defined in AGENTS.md ("Credit conventions").
   - Image alt texts: the About portrait alt must be "<My Name> — <My Role>, TAP Academy student". Do not add the phrase to any other alt text.
2. Create public/robots.txt (allow all) and public/sitemap.xml with a placeholder home URL "https://YOUR-SITE-URL/"; I will replace it after deployment.
3. Replace README.md with a professional README: title "<My Name> — Portfolio", one-line description, a "Live site" line with the placeholder https://YOUR-SITE-URL/, a Tech stack list (React 19, Vite, Tailwind CSS 4, Framer Motion, AOS, EmailJS, WebGL), "Run locally" commands (npm install, npm run dev, npm run build), an "Environment variables" section naming the three VITE_EMAILJS_* variables without values, and the credit sentence from AGENTS.md ("Built during the placement training program at TAP Academy" with the link).
4. Run npm run lint and npm run build, then commit with the message "Add metadata and README".
````

**Check:** the browser tab shows your name and role. The README is professional.

---

# PART C — Publish

## Step 13 · Push to GitHub

**Say to the class:** "Your code needs a public home. A public repository is also your proof of work for recruiters."

**Do (once):** sign in at https://github.com/. The agent may open a browser window for login — approve it.

**Prompt:**

````text
Publish this project to GitHub as a PUBLIC repository.
1. Check whether the GitHub CLI (`gh`) is installed; if not, install it (Windows: `winget install GitHub.cli`; macOS: `brew install gh`). Then run `gh auth login` and guide me through the browser login (choose GitHub.com, HTTPS, login with browser).
2. Name the repository `<my-name>-portfolio` in lowercase with hyphens (for example `rahul-kumar-portfolio`). Confirm the name with me before creating.
3. Before pushing, double-check that `.env.local` and node_modules are NOT tracked.
4. Create it and push the `main` branch: `gh repo create <name> --public --source=. --remote=origin --push` (rename the branch to main first if needed).
5. Set the repository description to "Personal portfolio website built with React, Vite and Tailwind CSS during TAP Academy placement training" and add the topics: tap-academy, tap-academy-student, placement-training, augmented-reality, portfolio, portfolio-website, react, vite, tailwindcss, framer-motion, developer-portfolio (use `gh repo edit --add-topic ...`).
6. Print the repository URL.
````

**Check:** the agent prints your GitHub URL; open it and see the code, description and topics.

---

## Step 14 · Deploy live on Vercel

**Say to the class:** "Now the website goes live on the internet. Vercel builds it and gives you a public link."

**Prompt:**

````text
Deploy this project to Vercel and give me the live URL.
1. Run `npm run build` to confirm it works locally.
2. Install the Vercel CLI if needed (`npm install -g vercel`) and run `vercel login`; guide me through the browser login (use "Continue with GitHub").
3. Link and deploy the project: `vercel` for setup (framework: Vite, build command `npm run build`, output directory `dist`), then `vercel --prod`.
4. Add my three environment variables from .env.local (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) to the Vercel project for Production using `vercel env add` (read the values from .env.local; never print them), then redeploy with `vercel --prod`.
5. Print the final production URL and open it in the browser. Check that the preloader, hero video, all sections and the contact form work on the live site.
````

**Check:** a `https://….vercel.app` link opens your portfolio. **Send it to the instructor.**

---

## Step 15 · Final link update

**Say to the class:** "Last step: tell every place about your real website address."

[[input:liveurl|Your live website link|https://your-name-portfolio.vercel.app|Paste the link Vercel gave you. It fills the prompt below.]]

**Prompt:**

````text
My live website URL is <PASTE YOUR VERCEL URL HERE>. Update everything that still has the placeholder https://YOUR-SITE-URL/ : README.md ("Live site" line), index.html (canonical link, og:url, JSON-LD "url" property), public/sitemap.xml and public/robots.txt (Sitemap line). Then run npm run build, commit "Add live URL", and push to GitHub. Finally set the repository's website field to the live URL with `gh repo edit --homepage <url>`. Show me the repository URL and the live URL one more time.
````

**Check:** the GitHub repository shows your live link in the *About* box.


---

# PART D — Get Discovered

## Step 16 · Google Search Console (get indexed fast)

**Say to the class:** "A new website is invisible until Google visits it. Search Console tells Google your site exists, so it shows up in search within days instead of weeks."

**Do on the website (with the instructor):**
1. Open https://search.google.com/search-console and sign in with your Google account.
2. **Add property** → choose **URL prefix** → paste your live link (for example `https://your-name-portfolio.vercel.app/`) → **Continue**.
3. Under **Other verification methods**, open **HTML tag** and **copy the whole `<meta name="google-site-verification" ...>` tag**. Keep this tab open.

**Prompt A — add the verification tag** *(paste in Antigravity, then paste your tag at the end)*:

````text
Add my Google Search Console verification tag to the <head> of index.html, right after the viewport meta tag, exactly as I paste it below. Do not change anything else. Make sure public/sitemap.xml lists my live URL with today's date as <lastmod>, and that public/robots.txt allows all crawlers and ends with "Sitemap: <my live URL>sitemap.xml". Then run npm run build, commit with the message "Add Search Console verification", push to GitHub and redeploy with `vercel --prod`. Tell me when the live site is updated.

My verification tag:
<PASTE THE META TAG HERE>
````

**Then, back in Search Console:**
1. Click **Verify**. You should see *Ownership verified*.
2. Left menu → **Sitemaps** → type `sitemap.xml` → **Submit**.
3. Top search bar → paste your live link → **Request indexing**.

**Check:** Search Console shows *Ownership verified* and the sitemap status *Success*. After a few days, searching `site:your-site.vercel.app` on Google shows your page.

---

## Step 17 · LinkedIn launch post

**Say to the class:** "Recruiters search LinkedIn every day, and Google shows LinkedIn posts in its results. Your launch post is how people find your new website."

**Where:** open https://chatgpt.com/ → paste the prompt → copy the version you like → open https://www.linkedin.com/ → **Start a post** → paste → attach your talking video (A2) or your portrait (A1) → where the text says @TAP Academy, retype `@TAP Academy` and pick the official page from the list so it gets tagged → **Post**.

**Prompt (paste in ChatGPT):**

````text
Write a LinkedIn post announcing my new portfolio website. Write it in my own natural voice, in simple professional English, 90–130 words, first person, no exaggerated claims, at most 2 emojis.

Facts to use:
- My name: [YOUR NAME]
- My role: [YOUR ROLE]
- My city: [YOUR CITY]
- What I built: a personal portfolio website using React, Vite, Tailwind CSS and Framer Motion, with an AI-generated portrait and a talking intro video, deployed on Vercel
- Where: during the placement training program at TAP Academy (write "@TAP Academy" exactly once in the text so I can tag the page)
- Live website: <PASTE YOUR VERCEL URL HERE>
- Source code: [YOUR GITHUB REPO LINK]

Structure: a 1-line hook, 2–3 short sentences about what I built and learned, the two links on separate lines, one line inviting recruiters to connect, then these hashtags on the last line: #TAPAcademy #PlacementTraining #PortfolioWebsite #ReactJS #WebDevelopment #OpenToWork
Give me 2 different versions so I can choose.
````

**Check:** your post is live, the TAP Academy page is tagged (shown as a blue name) and both links are clickable.

---

## Step 18 · YouTube video upload

**Say to the class:** "YouTube is the second-biggest search engine, and Google shows YouTube videos in its results. Uploading your talking intro gives your portfolio one more place to be found."

**Where:** open https://studio.youtube.com/ → **Create** → **Upload videos** → select your MP4 from A2 → copy the three fields below into the upload form → set **No, it's not made for kids** → visibility **Public** → **Publish**.

**Title:**

````text
[YOUR NAME] — [YOUR ROLE] Portfolio | TAP Academy Placement Training
````

**Description:**

````text
Hi, I'm [YOUR NAME], a [YOUR ROLE] from [YOUR CITY]. This is the intro to my portfolio website, which I built during the placement training program at TAP Academy using React, Vite, Tailwind CSS and Framer Motion. The portrait and this talking video were created with AI.

Live portfolio: <PASTE YOUR VERCEL URL HERE>
Source code: [YOUR GITHUB REPO LINK]
TAP Academy: https://thetapacademy.com/

#TAPAcademy #PlacementTraining #Portfolio
````

**Tags** *(in the upload form: Show more → Tags)*:

````text
[YOUR NAME], [YOUR ROLE], TAP Academy, TAP Academy student portfolio, TAP Academy placement training, portfolio website, React portfolio, augmented reality, web developer portfolio
````

**Check:** the video is public, the links in the description are clickable, and the title shows your name and TAP Academy.

**Done.** Each student now has a live portfolio with their own illustrated portrait and talking video, a public GitHub repository, and their site registered with Google, shared on LinkedIn and uploaded to YouTube.

---

# Troubleshooting Prompts (paste only when needed)

**T1 · Something failed in a terminal command**

````text
The last step failed. Read the full error message, explain the cause in one sentence a beginner can understand, fix it yourself (install missing tools, correct file names/paths, re-run the command), and then re-run the failed step until it succeeds. Do not skip anything and do not ask me to type commands.
````

**T2 · The page is blank or shows an error**

````text
The browser shows a blank page or an error. Check the browser console and the dev-server terminal, find the cause (import path, wrong data field name, syntax error, missing file), fix it, and confirm the page renders. Explain what was wrong in one sentence.
````

**T3 · The design does not match what the step describes**

````text
The result in the browser does not match the description of this step: <say what looks wrong, e.g. "the navbar overlaps the hero" or "cards are not coloured red">. Compare the current component with the requirements in the prompt I gave you, fix the differences, and show me the result at desktop and phone width.
````

**T4 · Video or image does not appear**

````text
My hero video / profile image is not showing. Verify that src/assets/hero/hero.mp4 and src/assets/about/profile.png exist, that the import paths and file names in Hero.jsx and About.jsx match them exactly (case-sensitive), that the video codec is browser-compatible (H.264 MP4 — convert with ffmpeg if not), and fix the problem.
````

**T5 · Contact form does not send**

````text
The contact form does not send the email. Check that .env.local has the three VITE_EMAILJS_* variables, that the dev server was restarted after creating it, that the input name attributes (first_name, last_name, user_email, message) match my EmailJS template variables, and look at the browser console for the EmailJS error. Fix what you can and tell me exactly what I must change on the EmailJS website if the problem is there.
````

**T6 · Production build fails on Vercel**

````text
The Vercel build failed. Run `npm run build` locally, read the error, and fix it. Pay special attention to file-name capitalisation (Linux is case-sensitive), missing files that were not committed, and files that are too large. Commit, push and redeploy with `vercel --prod`.
````

**T7 · Hero video is cropped / ID badge disappears (fix an already-built site)**

````text
Fix two problems in my existing site without changing anything else.
1. Hero: the video/poster is zoomed and cropped and does not blend with the section. In src/components/Hero.jsx make the section background bg-[#ff2a2a] (same red as the portrait); change the <video> classes to "absolute inset-0 w-full h-full object-contain object-top md:object-right z-0" (object-contain, not object-cover); add right after the video <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black/45 via-black/10 to-transparent" />; make the headline highlight text solid black (text-black) and the bottom scroll arrow white.
2. About: the ID badge drops in once, then disappears when I keep scrolling and never comes back. In src/components/About.jsx replace the data-aos="drop-bounce" wrapper with a Framer Motion <motion.div initial={{ y: -300, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}> (keep the same classes), and delete the custom [data-aos="drop-bounce"] CSS and the dropBounce keyframes from src/index.css. In Hero.jsx also make sure AOS.init uses once: true and add a window 'load' listener that calls AOS.refresh (removed in the cleanup).
Then run npm run lint, scroll the whole page down and back up to confirm nothing disappears, and show me the result at desktop and phone width.
````
