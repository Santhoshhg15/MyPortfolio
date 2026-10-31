# 2-Hour Class Run Sheet: Build a Portfolio with AI

**Site:** Template 1, Red Studio (your own site).
**Tools:** Google Antigravity, ChatGPT or Gemini, GitHub, Vercel.
**Format:** you prompt live in your own words. Students follow along on their machines. While the agent builds, you teach one AI concept.

Each block has four parts:
- **Ask the agent:** what your spoken prompt must include, so it works however you phrase it.
- **While it builds:** the AI concept to teach, with talking points.
- **Check:** what to verify before moving on.
- **If it goes wrong:** plan B.

---

## Tomorrow's actual format: 1-hour live, then self-paced

Large class, so the live portion only covers roughly the first hour. Everything up to and
including the Checkpoint is instructor-led; Block 5 onward is handed off for students to
complete themselves with the same prompts, then deploy and (separately) post to LinkedIn.

| Time | Build (agent working) | Teach (while waiting) | Who runs it |
|---|---|---|---|
| 0:00 to 0:08 | Show the finished site and today's goal | How today works | **Live** |
| 0:08 to 0:18 | Block 1: create the project | What is an AI agent (vs ChatGPT) | **Live** · Visualizer Scene 1 |
| 0:18 to 0:30 | Block 2: theme, navbar and footer | Prompting: anatomy of a good prompt | **Live** · Scene 2 |
| 0:30 to 0:42 | Block 3: your data file | Context and hallucination | **Live** · Scene 3 |
| 0:42 to 0:57 | Block 4: Hero and About | The harness: what's around the AI | **Live** · Scene 4 |
| 0:57 to 1:00 | Checkpoint: fix something live | Iterating: how to ask for a fix | **Live** · Scene 5 — hand off right after |
| 1:02 to 1:15 | Block 5: Skills and Projects | MCP: plugging tools into AI | *Self-paced* · Scene 6 |
| 1:15 to 1:27 | Block 6: Experience and Contact | Agentic AI, rules files, secrets | *Self-paced* · Scene 7 |
| 1:27 to 1:37 | Block 7: animations and mobile polish | Verification: never trust, always check | *Self-paced* · Scene 8 |
| 1:37 to 1:50 | Block 8: GitHub and Vercel (go live) | Git, CI/CD, how deployment works | *Self-paced* · Scene 9 |
| 1:50 to 2:00 | Wrap-up, homework, Q&A | Recap | *Self-paced* · Scene 10 |

**At the hand-off, say explicitly:** "I've built half live. The rest — same prompts, same
checks, below — you finish on your own. Deploy it on Vercel, and I'll give separate
instructions for posting it to LinkedIn."

---

## What fits in 2 hours, and what doesn't

**Build live (core site):**
- Project setup
- Red, black and white theme
- Navbar and footer
- Hero with portrait
- About
- Skills
- Projects
- Experience
- Contact form (email-app fallback)
- Basic animations
- Mobile layout
- GitHub
- Live on Vercel

**Do before class (too slow live):**
- **Each student's portrait (A1):** ChatGPT image generation takes 1 to 3 minutes per image and often needs retries. Ask students to bring it.
- **Talking video (A2, Gemini):** it can take many minutes and fail. Show yours, assign theirs as homework.
- **Accounts:** GitHub and Vercel accounts, Antigravity installed and signed in, Node.js LTS installed.

**Homework (too complex or slow for today):**
- ID badge that flips to a visiting card with QR code. Show yours as the "level up" example.
- Intro and project videos, preloader, "My Process" scroll path, WebGL splash cursor.
- EmailJS keys (contact form works today with the email-app fallback).
- Google Search Console, LinkedIn post, YouTube video. Indexing takes days anyway.

The full playbook covers every homework item step by step.

---

## Prep checklist (the night before)

- [ ] Message students: install Node.js LTS and Antigravity, create GitHub and Vercel accounts (sign in to Vercel with GitHub), make their portrait with the A1 prompt, and save it as `portrait.png`.
- [ ] Do a full dry run yourself in Antigravity with these blocks. Time it.
- [ ] Keep your finished site open in a tab (the "answer key") and your repo ready to show.
- [ ] Check classroom Wi-Fi can handle 30+ people downloading packages at once. Plan B: students pair up, two to a laptop.
- [ ] **Antigravity has usage limits.** If a student runs out, they pair with a neighbour.
- [ ] Prepare 3 sample slides or whiteboard sketches: agent loop, harness (horse-and-cart) diagram, MCP diagram (see the talks below).

---

## 0:00 to 0:08 · Kickoff

**Do:**
1. Open your live site and scroll through it slowly.
2. Say: "By the end of these two hours, each of you will have your own version of this, live on the internet, with a link you can put on your resume. And none of us will type code."
3. Explain the rhythm: "I'll give the AI an instruction. While it works, I'll teach you one thing about how AI actually works. Then we check the result together."

**Rule for students:** follow along, but don't race ahead. If your agent finishes before mine, read what it wrote.

---

## Block 1 (0:08 to 0:18) · Create the project

**Ask the agent:**
- Create a new React project with **Vite** in this folder.
- Add **Tailwind CSS version 4** (with the Vite plugin), **Framer Motion** and **react-icons**.
- Run it and tell me the local link.
- Set up **git** and make a first commit, then commit again after every working step from now on.

**While it builds, teach: what is an AI agent?**
- **ChatGPT vs an agent:**
  - ChatGPT is a brain in a chat box: it can only talk.
  - An agent is a brain with hands: it can read files, write files, run commands and look at results.
- **The agent loop:** draw it on the board as a circle of four steps.
  1. **Think:** plan the next step.
  2. **Act:** use a tool (create a file, run `npm install`).
  3. **Observe:** read the result or the error.
  4. **Repeat** until done.
- Point at the screen: "Watch, it just ran a command, saw the output, and decided the next step. That's the loop."
- Ask the class: "If it hits an error, what do you think it'll do?" (It reads the error and tries to fix it, same loop.)

**Check:** the local link (`http://localhost:5173`) opens and shows the starter page.

**If it goes wrong:**
- **`npm` not found:** Node.js isn't installed. That student pairs with a neighbour for now.
- **Agent stuck for 3+ minutes:** stop it and re-ask with just "run npm install, then npm run dev".

---

## Block 2 (0:18 to 0:30) · Theme, navbar and footer

**Ask the agent:**
- Colours: background black `#000`, text white, accent red `#ff2a2a`. Use **only these** across the whole site.
- Font: **Inter** from Google Fonts.
- Sections in this order, each with its own id: **Hero, About, Skills, Projects, Experience, Contact**.
- A fixed navbar: my name on the left, links to each section, a red "Hire Me" button, and a hamburger menu on mobile.
- A footer with my name, social icons and "© year".
- Each section in **its own component file**, and smooth scrolling between them.

**While it builds, teach: what makes a good prompt.**
Read your own prompt back to the class and label its parts:

| Part | In your prompt |
|---|---|
| **Role and goal** | "Building a portfolio website" |
| **Context** | "It's React with Tailwind" |
| **Specifics** | exact colours (hex codes), exact section order |
| **Constraints** | "use ONLY these colours", "each section in its own file" |
| **Output check** | "tell me when it runs" |

- Show a bad version: "make a nice portfolio". Ask: "What would the AI have to guess?" (colours, sections, style, everything).
- **Key line:** "The AI isn't a mind reader. Every detail you leave out, it guesses, and guesses differ."
- **Hex codes matter:** "red" can be 50 different reds; `#ff2a2a` is exactly one.

**Check:** black page, red accents, navbar links scroll to (empty) sections, and the hamburger menu works on a narrow window.

**If it goes wrong:** "The colours are off" → give the exact hex again and say "replace every other colour".

---

## Block 3 (0:30 to 0:42) · Your data file

**Ask the agent:**
- Create **one file**, `src/data/portfolioData.js`, that holds **all** the text on the site: name, role, about, skills, projects, experience, contact details and social links.
- **Every component must read from this file.** No text typed directly into components.
- **Interview me** for my details, a few questions at a time, and don't invent anything.

Answer the agent's questions live with your own details. Students answer with theirs. This is the most personal and engaging part.

**While it asks and writes, teach: context and hallucination.**
- **Context window:** the AI's short-term memory. It only "knows" what's in the conversation and the files it reads.
- **Why one data file:**
  - The AI (and you) always know where the truth lives.
  - Changing your phone number later means editing one line, not hunting through 10 files.
- **Hallucination:** if you don't give the AI your real facts, it makes up believable ones: fake companies, fake projects. That's why we said "don't invent anything" and let it interview us.
- Ask: "Would you put a fake internship on your resume? Then don't let the AI put one on your website."

**Check:** open `portfolioData.js`. Everything is real, with no "John Doe" and no invented projects.

**If it goes wrong:** a student wants to skip the questions? Tell the agent "use placeholder text marked TODO for anything I skip".

---

## Block 4 (0:42 to 0:57) · Hero and About

**Before prompting:** students copy `portrait.png` into `src/assets/`.

**Ask the agent:**
- **Hero:** full screen, greeting "Hi, I'm (name)", role in red, a 2-line intro, two buttons ("View My Work", "Contact Me"), and my portrait from `src/assets/portrait.png` on the right.
- The whole hero must **fit in one screen on laptop and phone**. Text first on mobile, image below.
- **About:** my photo or portrait in a card on one side, the about text and 3 quick stats on the other.
- Read all text from `portfolioData.js`.

**While it builds, teach: the harness.**
- **Model vs harness:** a harness is literally a set of straps connecting raw pulling power to the thing it operates.
  - The **model** (Gemini, Claude, GPT) is the horse: same raw power every time, no matter which app it's strapped into.
  - The **harness** is everything strapped onto the cart around it.
  - Antigravity is a harness.
- **What the harness gives the model:**
  - **Tools:** the kit strapped on — read and write files, the terminal, a browser.
  - **Context:** the lantern — lighting up only what it's allowed to see.
  - **Permissions:** the reins — someone's always holding them, ready to pull back.
- **Same horse, different cart:** the same model in a different harness (Cursor, Claude Code, Copilot) behaves differently because it's strapped to a different cart — different tools and instructions.
- Ask: "Why does Antigravity ask permission before running some commands?" (Safety, because the harness keeps a human in control.)

**Check:**
- The hero fits the screen with the portrait visible.
- On phone width (browser dev view or a narrow window), nothing overlaps.
- The About section shows the real text.

---

## 0:57 to 1:02 · Checkpoint: fix something live

Pick something imperfect on your screen (there's always something), or deliberately ask for a change.

**Demonstrate:**
- **Bad fix request:** "it looks wrong, fix it".
- **Good fix request:** "In the Hero, on mobile, the portrait overlaps the buttons. Put the portrait below the buttons and limit it to 70% of the screen width. Don't change anything else."
- **Even better:** paste or attach a screenshot of the problem.

**Teach:**
1. Say **where** the problem is.
2. Say **what's wrong**.
3. Say **what you want instead**.
4. Say **"don't change anything else"**.

Students: fix one thing on their own site using that formula.

---

## Block 5 (1:02 to 1:15) · Skills and Projects

**Ask the agent:**
- **Skills:** grouped cards (for example Frontend, Backend, Tools), each skill with its icon from react-icons, red hover effect.
- **Projects:** a card for each project with title, short description, tech-stack tags, and "Live" and "Code" buttons that open in a new tab. Grid on laptop, one column on phone.
- Read everything from `portfolioData.js`.

**While it builds, teach: MCP (Model Context Protocol).**
- **Problem:** every AI tool needs its own custom connection to GitHub, Figma, databases, Slack and so on. That's a mess.
- **MCP is the USB-C port for AI:** one standard plug, so any AI app can connect to any tool that supports MCP.
- **Examples:**
  - A GitHub MCP lets the agent create repos and pull requests.
  - A Figma MCP lets it read a design.
  - A database MCP lets it query data.
- **Draw it:** AI app ⟷ MCP ⟷ (GitHub, Figma, Drive, database).
- **Connect it to today:** "Later we'll push to GitHub. With a GitHub MCP, the agent could even create the repo for you."
- **Optional live demo:** show the MCP settings in Antigravity, or mention that tools like Claude and Cursor use MCP the same way.

**Check:** skills show icons, project buttons open the right links, and the layout is one column on phone.

---

## Block 6 (1:15 to 1:27) · Experience and Contact

**Ask the agent:**
- **Experience:** a vertical timeline (job or internship, company, dates, 2 bullet points), with a red line and dots.
- **Contact:** a form with name, email and message.
  - Set it up for **EmailJS**, with the keys read from a `.env.local` file (variables start with `VITE_`).
  - **If the keys are missing, the form opens the visitor's email app instead**, so it works today.
- Add `.env.local` to `.gitignore`.

**While it builds, teach: agentic AI, rules and secrets.**
- **Agentic AI:** the step from "answers questions" to "completes tasks on its own". Today you're the manager and the agent is the employee: you set the goal, it does the work, you review it.
- **Rules files:** you can give an agent permanent instructions in a file (Antigravity rules, `AGENTS.md`, `CLAUDE.md` in Claude Code), for example "always use our brand colours" or "never delete files without asking". It's like a company handbook for the agent.
- **Secrets:**
  - API keys are passwords. They go in `.env.local`, which never gets uploaded to GitHub.
  - Never paste a real key into a chat or commit it. Bots scan GitHub for leaked keys within minutes.
- Ask: "Why did we put `.env.local` in `.gitignore`?"

**Check:** the timeline shows your experience, and submitting the form opens your email app with the message filled in.

---

## Block 7 (1:27 to 1:37) · Animations and mobile polish

**Ask the agent:**
- Add gentle fade-in and slide-up animations as each section scrolls into view (Framer Motion). Subtle, not distracting, and disabled for users who turn off motion.
- Then check every section at phone width (375px) and fix anything that overlaps, overflows or is too small to tap.
- Run `npm run lint` and `npm run build` and fix any errors.

**While it builds, teach: verification.**
- **The AI can be confidently wrong.** It may say "Done! Everything works" when something doesn't.
- **Your job is to check:**
  - Open the site.
  - Click every button.
  - Test on your phone.
  - Read the error messages.
- `lint` checks code quality; `build` checks it will actually work when published. If `build` fails, Vercel will fail.
- **Pro habit:** ask the agent to "test your own work and list anything you couldn't verify".
- **Git checkpoints:** "We've been committing after every step. If the agent breaks something, we can go back in one command. That's your undo button."

**Check:** `npm run build` succeeds, and the site looks right on a phone (open it on your actual phone if on the same Wi-Fi, or use the browser's phone view).

---

## Block 8 (1:37 to 1:50) · Go live: GitHub and Vercel

**Ask the agent:**
- Create a `README.md` with the project title, live-link placeholder and tech stack.
- Commit everything. Then help me push to a **new GitHub repository** named `(my-name)-portfolio`, walking me through any login steps.

**Then, by hand (2 minutes):**
1. Go to vercel.com → **Add New → Project** → import the repo.
2. Keep the defaults (Vercel detects Vite) → **Deploy**.
3. Open the live link.

**While it pushes and deploys, teach: Git and CI/CD.**
- **Git** is the save history of your code; **GitHub** is the cloud copy of it.
- **Vercel CI/CD:** every time you push to GitHub, Vercel automatically rebuilds and republishes your site. You change one line, push, and the site updates in about a minute.
- Show it: change one word in `portfolioData.js`, commit, push, and watch Vercel redeploy.

**Check:** every student opens their own live link on their phone. That's the moment of the class; give it a minute.

**If it goes wrong:**
- **GitHub login prompts:** expected the first time. Follow the browser popup.
- **Vercel build fails:** open the build log, copy the error, and paste it to the agent with "the Vercel build failed with this error, fix it".

---

## 1:50 to 2:00 · Wrap-up

**Recap (one line each):**
- An agent is an AI with tools that works in a loop.
- A good prompt means specific details plus constraints.
- Context means giving real facts, or the AI makes them up.
- The harness is everything strapped around the model, like a cart around a horse.
- MCP is the standard plug that connects tools to AI.
- Verify everything, and commit often.

**Homework (point them to the playbook):**
1. Add the flip ID badge with QR code (Template 1, Step 6).
2. Make the talking video (A2) and add it to the hero.
3. Set up EmailJS so the form sends real emails (Step 9).
4. Add the preloader, "My Process" path and splash cursor (Steps 8 and 10).
5. Google Search Console, LinkedIn post and YouTube video (Steps 16 to 18).

**Q&A** for the remaining time.

---

## Keeping the room engaged

- **Predict, then reveal:** before you send a prompt, ask "what do you think it'll build?" Then compare.
- **Planned mistakes:** once or twice, send a vague prompt on purpose, show the weak result, then fix it with a specific one. Students learn more from the contrast.
- **Rotate helpers:** the first 3 students who finish each block help their neighbours.
- **Name the concept on screen:** when the agent reads a file or runs a command, say "that's the loop: act, observe".
- **Keep a parking lot:** write off-topic questions on the board and answer them in the Q&A.

## Timing safety valves

If you're running behind, cut in this order:
1. Block 7 animations (keep only the mobile check and `build`).
2. Experience timeline (merge into About as a short list).
3. Skills icons (plain text tags are fine).

**Never cut:** the data file (Block 3), the live fix (checkpoint) and going live (Block 8). Those are the parts students remember.
