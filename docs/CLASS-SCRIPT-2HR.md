# Class Script: Build Your Portfolio Website with AI (2 hours)

**How to read this script**
- **SAY:** words to speak. Adapt freely; it's written the way you'd talk.
- **DO:** what to do on screen.
- **PROMPT:** what to type into Antigravity. Improvise the wording, but keep the details in **bold**.
- **ASK:** a question for the class, with the answer you're looking for.
- ⏱ marks the target time. If you're behind, see "Timing safety valves" at the end.

Students should arrive with Node.js, Antigravity, GitHub and Vercel accounts ready, and their portrait saved as `portrait.png`.

---

## ⚠ Tomorrow's actual format: 1-hour live kickoff, not the full 2 hours

With a large class, the full build won't finish live. Tomorrow you run roughly the **first
hour only** — Opening through Block 4, plus the Checkpoint — then hand off.

- **Live, instructor-led (~1 hour):** Opening → Block 1 → Block 2 → Block 3 → Block 4 →
  Checkpoint. Use `docs/concept-visualizer.html` Scenes 1–5 for the "teach while it builds"
  moments. The Checkpoint (how to ask for a fix) matters most here — it's the one skill
  students need once they're working without you.
- **Hand-off, at the ~1 hour mark:** tell students explicitly — *"I've built half live. The
  rest — Blocks 5 through 8 below, plus going live on Vercel — you complete yourselves,
  using these exact same prompts. Deploy it, and I'll give you separate instructions for
  posting it to LinkedIn."*
- **Self-paced, student-led (Blocks 5–8 below):** everything from Block 5 (Skills and
  Projects) onward is unchanged — same prompts, same checks. Point students to
  `docs/concept-visualizer.html` Scenes 6–10 as their own companion for the remaining
  concepts (MCP, agentic AI/rules/secrets, verification, Git & CI/CD) while they finish on
  their own.
- Everything below this note still reads top-to-bottom as one script — only the *live vs.
  self-paced* split changes, not the content.

---

## ⏱ 0:00 · Opening (8 minutes)

**DO:** Open your live portfolio on the projector. Don't say anything yet. Scroll slowly through the whole site, top to bottom.

**SAY:**
> "Good morning, everyone. Take a look at this website. It has animations, a projects section, a contact form, and it works on a phone.
>
> How long do you think it would take to build something like this from scratch? A week? A month? Most freshers would say a month, if they know React well.
>
> Today, in the next two hours, every one of you is going to build your own version of this. Your name, your projects, your photo. And at the end of the class, it will be live on the internet with a link you can put on your resume and LinkedIn.
>
> And here's the interesting part: we are not going to type code. Not one line."

**ASK:** "So if we're not writing code, who is?"
→ *The AI.*

**SAY:**
> "Right. But not ChatGPT in a chat window. We're going to use an AI **agent**: an AI that can actually create files, run commands and fix its own errors on our computer. The tool is called Google Antigravity.
>
> Now, here's how today works. I'll give the agent an instruction, in plain English. The agent takes a few minutes to build. And instead of us sitting and staring at the screen, I'll use that time to teach you how this actually works: what an agent is, what prompting really means, what MCP is, what a harness is. These are the words every company is talking about right now. By the end, you won't just have a website; you'll understand the technology that built it.
>
> One rule: follow along with me, but don't race ahead. If your agent finishes before mine, read what it wrote. Reading AI output is a skill too.
>
> Everyone, open Antigravity. Create a new folder on your desktop called `my-portfolio`, and open that folder in Antigravity. Hands up when you're there."

**DO:** Wait for most hands. Help anyone stuck.

---

## ⏱ 0:08 · Block 1: Create the project (10 minutes)

**SAY:**
> "First, every website needs a foundation, like a building needs a structure before we paint the walls. We'll ask the agent to set up a React project. React is what most modern websites use, and companies hire for it. Watch how I write this."

**PROMPT:**
> Create a new **React project using Vite** in this folder. Add **Tailwind CSS version 4** using the Vite plugin, **Framer Motion** for animations, and **react-icons** for icons. Then start the development server and tell me the local link. Also **set up git and make a first commit**, and from now on **commit after every step that works**.

**SAY:**
> "Send it. Now watch the screen. Don't look away, this is the important part."

### Teach while it builds: What is an AI agent?

**SAY:**
> "Look at what it's doing. It just ran a command. It's reading the output. Now it's deciding what to do next. Let's understand this.
>
> When you use ChatGPT, you ask a question and it gives you an answer. That's it. If it gives you code, *you* have to copy it, *you* have to create the file, *you* have to run it, and when there's an error, *you* go back and paste the error. ChatGPT is a brain in a box. It can only talk.
>
> An agent is a brain **with hands**. It can create files, run commands in the terminal, read the results and fix its own mistakes."

**DO:** Draw a circle on the board with four points: **Think → Act → Observe → Repeat**.

**SAY:**
> "Every agent works in this loop.
>
> **Think:** it plans the next step. 'I need to install Tailwind.'
> **Act:** it uses a tool. It runs `npm install`.
> **Observe:** it reads what happened. Success? Error?
> **Repeat:** it goes back to think. 'Install worked, now I need to configure it.'
>
> It keeps going around this loop until the task is done. That's literally all an agent is: a language model, plus tools, running in a loop."

**ASK:** "Suppose the install fails with an error. What will the agent do?"
→ *It reads the error and tries to fix it.* "Exactly. Same loop. Observe the error, think about the fix, act again. That's why it can fix its own mistakes and ChatGPT can't."

**SAY:**
> "And this is why companies are excited. A chatbot answers questions. An agent completes tasks. That difference is going to change a lot of jobs, including ours. The people who know how to direct agents will be very valuable. That's what you're learning today."

**DO:** When the agent finishes, open the local link (usually `http://localhost:5173`).

**SAY:**
> "There it is. A running React app. Everyone, open your link. Hands up if you see the starter page."

**If someone is stuck:**
- **`npm` is not recognised:** Node.js isn't installed. Pair them with a neighbour for today.
- **Agent stuck for more than 3 minutes:** stop it and type: "Run npm install, then npm run dev, and tell me the link."

---

## ⏱ 0:18 · Block 2: Theme, navbar and footer (12 minutes)

**SAY:**
> "Now we have a blank building. Before we add rooms, let's decide the paint. Every professional website has a fixed set of colours and fonts. We call it a design system. If you don't fix it at the start, the AI will pick random colours for every section, and your site will look like five different websites stitched together.
>
> Our theme: black background, white text, and one red accent colour. Watch how specific I'm going to be."

**PROMPT:**
> I'm building my personal portfolio website. Set up the theme: background **black #000000**, text **white**, accent colour **red #ff2a2a**. Use **only these colours** across the whole site. Use the **Inter** font from Google Fonts.
>
> Create these sections in this order, **each in its own component file** with its own id: **Hero, About, Skills, Projects, Experience, Contact**. For now, just a heading in each.
>
> Add a **fixed navbar**: my name on the left, links to every section in the middle, and a red **Hire Me** button on the right. On mobile, show a **hamburger menu**. Add a **footer** with my name, social icons and the copyright year. Links should **scroll smoothly** to each section.

### Teach while it builds: What makes a good prompt?

**SAY:**
> "While it's building, let's dissect what I just wrote. This is the most important skill of the day. The quality of what the AI builds depends almost entirely on the quality of your instruction."

**DO:** Put your prompt on screen. Label each part as you speak (draw a table on the board if you like).

**SAY:**
> "Look at the parts.
>
> **Goal:** 'I'm building my personal portfolio.' Now the AI knows what world we're in.
>
> **Specifics:** I didn't say 'red'. I said `#ff2a2a`. Do you know how many reds there are? Hundreds. A hex code is exactly one colour. No guessing.
>
> **Structure:** I named every section, in order. The AI doesn't have to invent a layout.
>
> **Constraints:** 'Use ONLY these colours.' 'Each section in its own file.' Constraints are the fences. Without fences, the AI wanders.
>
> **How it should behave:** 'Hamburger menu on mobile.' 'Scroll smoothly.' These are things it might otherwise forget."

**ASK:** "What if I had just typed: 'make me a nice portfolio website'? What would the AI have to guess?"
→ *Colours, sections, fonts, layout, everything.*

**SAY:**
> "Everything. And here's the thing: the AI will never say 'I don't know what you want.' It will confidently guess. And your guess and its guess will be different. Then you'll spend an hour saying 'no, not like that.'
>
> So remember this line: **the AI is not a mind reader. Every detail you leave out, it guesses.** A good prompt is just a good brief, the same thing a manager gives an employee. Goal, specifics, constraints."

**DO:** When done, open the site and click each navbar link. Narrow the browser window to show the hamburger menu.

**SAY:**
> "Black background, red accents, the menu scrolls to each section, and look: on a narrow screen, the hamburger appears. Everyone check yours."

**If colours come out wrong:** "Use only #000000, #ffffff and #ff2a2a. Replace every other colour in the project."

---

## ⏱ 0:30 · Block 3: Your data file (12 minutes)

**SAY:**
> "Now, the most important block of the day. Our site is empty. It needs *your* details: your name, your projects, your skills.
>
> We could tell the AI to write your name into the Hero, then your skills into Skills, then your projects into Projects. But then your details are scattered across ten files. Next month, when you change your phone number, you'll be hunting through all of them.
>
> So instead, we'll put **all** your information in **one** file. Every section reads from that file. Change it once, and the whole site updates. Professionals call this a 'single source of truth'.
>
> And instead of typing everything, we'll make the AI interview us."

**PROMPT:**
> Create one file, **`src/data/portfolioData.js`**, that holds **all the text** on my site: my name, role, a short intro, about me, skills grouped by category, projects (title, description, tech stack, live link, GitHub link), experience (role, company, dates, two points each), email, phone, city and social links.
>
> **Every component must read from this file.** No text typed directly into components.
>
> **Interview me** to fill it in. Ask me a few questions at a time. **Do not invent anything.** If I skip something, leave a TODO.

**SAY:**
> "Now it's going to ask you questions. Answer with your real details. Your real projects, even college projects. Your real internship, if you have one. If you don't have experience yet, that's fine: tell it your training here or your degree."

**DO:** Answer the agent's questions live with your own details. This is engaging; read questions out loud.

### Teach while students answer: Context and hallucination

**SAY** (once most students are answering):
> "Two ideas while you type.
>
> **First: context.** The AI only knows what's in front of it: the conversation and the files it has read. Think of it as the AI's short-term memory, called the **context window**. It does not know you. It does not know your projects. It doesn't remember yesterday's chat. If it's not in the context, it doesn't exist for the AI.
>
> **Second: hallucination.** What happens when the AI needs something it doesn't know, like your projects? It invents them. And they sound real. 'Built an e-commerce platform serving 10,000 users.' That's called **hallucination**: confident, believable, and false."

**ASK:** "Would you put a fake internship on your resume?"
→ *No.*

**SAY:**
> "Then don't let the AI put one on your website. An interviewer will ask you about every project on your portfolio. That's why we said 'do not invent anything' and let it interview us. We gave it the context, so it doesn't need to guess."

**DO:** When done, open `portfolioData.js` on screen and scroll through it.

**SAY:**
> "Open your `portfolioData.js`. Read it. Is everything true? No 'John Doe', no made-up projects? If something's wrong, just tell the agent: 'change my role to Java Full Stack Developer'. One line."

---

## ⏱ 0:42 · Block 4: Hero and About (15 minutes)

**SAY:**
> "Now the first thing anyone sees on your site: the Hero section. A recruiter spends about six seconds on a portfolio before deciding to scroll or leave. The hero has to say who you are, what you do, and look good while doing it.
>
> Copy your `portrait.png` into the `src/assets` folder now. Tell me when it's there."

**PROMPT:**
> Build the **Hero** section: full screen, a greeting "Hi, I'm (name)", my **role in red**, a two-line intro, and two buttons, **"View My Work"** (scrolls to Projects) and **"Contact Me"** (scrolls to Contact). Show my portrait from **`src/assets/portrait.png`** on the right.
>
> The hero must **fit in one screen on laptop and on phone**. On mobile, text first and the image below it.
>
> Then build the **About** section: my portrait in a card on one side, my about text and **three quick stats** on the other (like projects built, technologies, years of learning).
>
> Read all text from **portfolioData.js**.

### Teach while it builds: The harness

**SAY:**
> "Here's a question. Antigravity, Cursor, GitHub Copilot, Claude Code: they all use AI models. Some even use the *same* model. So why do they behave so differently?
>
> The answer is the **harness**."

**DO:** Draw a car. Label the engine **Model** and the rest of the car **Harness**.

**SAY:**
> "The **model** is the engine: Gemini, Claude, GPT. It's the brain that understands language and writes code. But an engine alone can't drive anywhere.
>
> The **harness** is the rest of the car: the steering, the wheels, the dashboard, the brakes. In AI, the harness is everything built around the model:
>
> - **Tools:** creating files, running the terminal, opening a browser. Those are the wheels.
> - **Context:** deciding which files and information the model gets to see. That's the dashboard.
> - **Permissions:** asking you before doing anything risky. Those are the brakes.
> - **Instructions:** the hidden rules telling the model how to behave in this app.
>
> Antigravity is a harness. Cursor is a harness. Same engine, different car, different driving experience."

**ASK:** "Why do you think Antigravity sometimes stops and asks your permission before running a command?"
→ *Safety. So it doesn't delete things or run something dangerous without a human approving.*

**SAY:**
> "Exactly. The harness keeps a human in control. A good engineer doesn't just pick the best model; they pick the right harness and set it up well. That's a real job now, sometimes called 'AI engineering'."

**DO:** When done, show the hero. Then narrow the browser to phone width (or open the browser's phone view with your on-screen device toggle).

**SAY:**
> "Look at that. Your name, your role in red, your portrait. Check it at phone width too. Does everything fit? Nothing overlapping?"

---

## ⏱ 0:57 · Checkpoint: Fix something live (5 minutes)

**SAY:**
> "Real talk: the AI is never perfect on the first try. Something on your screen probably looks a bit off. Mine too. So let's learn the most useful skill of all: how to ask for a fix."

**DO:** Pick something imperfect on your screen. If everything looks fine, ask for a deliberate change (for example, a bigger portrait on mobile).

**SAY:**
> "Here's how most people ask: 'it looks wrong, fix it.' What does the AI do with that? It guesses what's wrong, and it might change ten things you liked.
>
> Here's how a professional asks."

**PROMPT** (adapt to your real issue):
> In the **Hero section, on mobile**, the portrait **overlaps the buttons**. Move the portrait **below the buttons** and limit its width to **70% of the screen**. **Don't change anything else.**

**SAY:**
> "Four parts. **Where:** Hero, on mobile. **What's wrong:** overlaps the buttons. **What I want:** below the buttons, 70% width. **The fence:** don't change anything else.
>
> And even better than words: take a screenshot and paste it into the chat. A picture removes all guessing.
>
> Your turn. Find one thing on your site you'd improve, and fix it using these four parts. Two minutes."

---

## ⏱ 1:02 · Block 5: Skills and Projects (13 minutes)

**SAY:**
> "Next, the two sections recruiters actually read: your skills and your projects. Projects especially. This is your proof of work."

**PROMPT:**
> Build the **Skills** section: group skills into cards by category (like Frontend, Backend, Tools). Show each skill with its **icon from react-icons** and a **red hover effect**.
>
> Build the **Projects** section: one card per project with the title, short description, tech stack as small tags, and **"Live"** and **"Code"** buttons that open in a **new tab**. Use a **grid on laptop** and **one column on phone**.
>
> Read everything from **portfolioData.js**.

### Teach while it builds: MCP (Model Context Protocol)

**SAY:**
> "Let me ask you something. How many different chargers did you have five years ago? Phone, laptop, earphones, all different. Now? Mostly one: USB-C. One standard plug for everything.
>
> AI had the same problem. Every AI app wanted to connect to tools: GitHub, Google Drive, Figma, databases, Slack. And every connection had to be built separately, by hand. Ten AI apps times a hundred tools is a thousand custom connections. A mess.
>
> So in late 2024, Anthropic, the company behind Claude, released a standard called **MCP: Model Context Protocol**. It's now used by OpenAI, Google, Microsoft and most AI tools. Think of it as **USB-C for AI**."

**DO:** Draw on the board: AI app in the middle, MCP plug, and around it GitHub, Figma, Google Drive, a database.

**SAY:**
> "If a tool supports MCP, any AI app that supports MCP can plug into it. Some examples:
>
> - A **GitHub MCP**: the agent can create repositories and review code for you.
> - A **Figma MCP**: a designer makes a design, and the agent reads it directly and builds it.
> - A **database MCP**: you ask in English, 'how many users signed up this week?', and the agent queries the database.
>
> In about fifteen minutes, we'll push our code to GitHub. With a GitHub MCP connected, the agent could even create the repository for you."

**ASK:** "If you were building a tool for a company, why would you want it to support MCP?"
→ *So every AI app can use it without custom work.*

**SAY:**
> "Exactly. Build it once, works everywhere. That's why it spread so fast."

**DO:** When done, click a project's buttons and show the one-column layout on phone width.

---

## ⏱ 1:15 · Block 6: Experience and Contact (12 minutes)

**SAY:**
> "Two more sections. Your experience, and a way for recruiters to contact you, which is the whole point of a portfolio."

**PROMPT:**
> Build the **Experience** section as a **vertical timeline**: role, company, dates and two points each, with a **red line and dots**.
>
> Build the **Contact** section: a form with **name, email and message**. Set it up for **EmailJS**, reading the keys from a **`.env.local`** file with variables that start with **`VITE_`**. **If the keys are missing, the form should open the visitor's email app instead** with the message filled in. Add **`.env.local` to `.gitignore`**.

### Teach while it builds: Agentic AI, rules files and secrets

**SAY:**
> "Three quick ideas.
>
> **One: agentic AI.** You've been doing it for an hour. Agentic AI means AI that doesn't just answer, but **completes tasks on its own**. Notice your role today. You're not the coder; you're the **manager**. You set the goal, the agent does the work, and you review it. That's where the industry is heading. Engineers will spend less time typing code and more time directing, reviewing and verifying.
>
> **Two: rules files.** We've repeated 'use only our colours' and 'read from portfolioData.js' many times. You can save instructions like that permanently in a rules file: Antigravity has rules, Claude Code uses `CLAUDE.md`, many tools read `AGENTS.md`. The agent reads it at the start of every task. Think of it as the company handbook you give a new employee on day one.
>
> **Three: secrets.** The contact form needs keys from EmailJS. A key is like a password for a service. We put keys in a file called `.env.local`, and we told git to ignore that file, so it never goes to GitHub."

**ASK:** "Why does it matter if a key ends up on GitHub?"
→ *Anyone can see it and use your account.*

**SAY:**
> "Right. There are bots that scan GitHub for leaked keys, and they find them within minutes. People have woken up to huge cloud bills. So the rule: **never paste a real key into a chat, and never commit it.**"

**DO:** When done, show the timeline, then submit the contact form to show the email app opening.

**SAY:**
> "Today your form opens the email app. That works. Setting up EmailJS so it sends directly is part of your homework; the playbook walks you through it."

---

## ⏱ 1:27 · Block 7: Animations and mobile polish (10 minutes)

**SAY:**
> "Our site works. Now let's make it feel alive, and make sure it's solid. Most recruiters will open your link on their phone, not a laptop."

**PROMPT:**
> Add gentle **fade-in and slide-up animations** as each section scrolls into view, using Framer Motion. Keep them **subtle**, and **turn them off for users who prefer reduced motion**.
>
> Then check **every section at phone width (375px)** and fix anything that **overlaps, overflows, or is too small to tap**.
>
> Finally, run **`npm run lint`** and **`npm run build`** and fix every error.

### Teach while it builds: Verification

**SAY:**
> "Here's something nobody tells you about AI. It can be **confidently wrong**. It will say 'Done! Everything works perfectly!' when a button is broken. It's not lying; it just can't always check everything.
>
> So who checks? You do. That's your job now. Open the site. Click every button. Open it on your phone. Read the error messages. Don't just trust 'done'.
>
> Two commands help us here. **`lint`** checks code quality, like a grammar checker for code. **`build`** prepares the site for publishing. If `build` fails on your laptop, it will fail on the internet too. So we always run it before going live.
>
> A pro tip: ask the agent to 'test your own work and tell me anything you couldn't verify.' A good agent will be honest about what it didn't check.
>
> And remember the git commits we've been making after every step? That's your **undo button**. If the agent ever breaks something badly, one command takes you back to the last working version. That's why we committed from the very first step."

**DO:** Scroll your site to show the animations. Show `npm run build` succeeding in the terminal.

---

## ⏱ 1:37 · Block 8: Go live (13 minutes)

**SAY:**
> "This is the moment. Right now, your website only exists on your laptop. Let's put it on the internet. Two steps: GitHub stores your code, and Vercel publishes it."

**PROMPT:**
> Create a **README.md** with the project title, a placeholder for the live link, and the tech stack. **Commit everything.** Then help me **push this to a new GitHub repository** named **(my-name)-portfolio**, and walk me through any login steps.

**SAY:**
> "If a GitHub login window pops up, that's normal the first time. Sign in."

### Teach while it pushes: Git and CI/CD

**SAY:**
> "**Git** is the save history of your code: every commit is a save point. **GitHub** is the cloud copy of that history, so your code is safe even if your laptop dies, and recruiters can see it.
>
> Now, Vercel. Watch this."

**DO:** On screen:
1. Go to **vercel.com → Add New → Project**.
2. Import the GitHub repo.
3. Leave the defaults; Vercel detects Vite automatically.
4. Click **Deploy**.

**SAY** (while it deploys):
> "Vercel is doing something called **CI/CD: continuous integration and continuous deployment**. Every time you push new code to GitHub, Vercel automatically rebuilds your site and publishes the new version. Nobody uploads files by hand. That's how real companies ship software, sometimes hundreds of times a day."

**DO:** Open the live link. Then open it on your phone and hold it up.

**SAY:**
> "It's live. Everyone, deploy yours. When it's done, **open your link on your own phone**."

**DO:** Give them a full minute. This is the high point of the class. Let them enjoy it.

**DO** (if time allows, a 1-minute demo): Change one word in `portfolioData.js`, commit and push, and show Vercel redeploying automatically.

**If a build fails:** open the Vercel build log, copy the error, and give it to the agent: "The Vercel build failed with this error: (paste). Fix it."

---

## ⏱ 1:50 · Wrap-up (10 minutes)

**SAY:**
> "Two hours ago, you had an empty folder. Now you have a live portfolio website, on the internet, with your name on it. And none of you typed code.
>
> But more important than the website: let's recap what you learned."

**ASK** each one as a question and let students answer before you confirm:

| Ask | Answer |
|---|---|
| "What is an agent?" | An AI with tools, working in a loop: think, act, observe, repeat. |
| "What makes a good prompt?" | Goal, specifics, constraints. The AI isn't a mind reader. |
| "What's a context window? What's hallucination?" | The AI's short-term memory. When it lacks facts, it invents them. |
| "What's a harness?" | Everything around the model: tools, context, permissions. The model is the engine; the harness is the car. |
| "What's MCP?" | USB-C for AI: one standard way to connect AI to tools. |
| "Who checks the AI's work?" | We do. Verify everything, commit often. |

**SAY:**
> "Your homework, to take this from good to great. It's all in the playbook, step by step:
>
> 1. Add the **ID badge that flips into a visiting card** with a QR code, like on my site.
> 2. Make your **talking intro video** and put it in the hero.
> 3. Set up **EmailJS** so your contact form sends real emails.
> 4. Add the **preloader**, the **'My Process'** section and the **fluid cursor effect**.
> 5. Submit your site to **Google Search Console**, write your **LinkedIn post**, and upload your **YouTube video**.
>
> Put your live link on your resume and your LinkedIn today. Send me your link; I want to see every one of them.
>
> Any questions?"

**DO:** Take questions, including anything you parked on the board during class.

---

## Backup plans

| Problem | What to do |
|---|---|
| A student's agent fails or freezes | Stop it, re-send a smaller instruction. If still stuck, pair with a neighbour. |
| Antigravity usage limit hit | Pair with a neighbour; continue at home. |
| Wi-Fi too slow for installs | Pair students (two per laptop) for Block 1. |
| Site breaks after a change | "Go back to the last commit" is one instruction to the agent. |
| You're running behind | See the safety valves below. |
| A student finishes early | Ask them to help neighbours, or start homework item 1. |

## Timing safety valves

If you're behind, cut in this order:
1. **Block 7 animations:** keep only the phone check and `npm run build`.
2. **Experience timeline:** fold it into About as a short list.
3. **Skill icons:** plain text tags are fine.

**Never cut:** the data file (Block 3), the live fix (checkpoint), and going live (Block 8). Those are what students remember.

## Engagement reminders

- **Before each prompt:** ask "what do you think it'll build?" Then compare.
- **Once in the class:** send a vague prompt on purpose, show the weak result, then fix it with a specific one.
- **When the agent runs a command:** point and say "act, observe: that's the loop".
- **First three students done in each block:** they help their neighbours.
- **Off-topic questions:** write them on the board and answer them during Q&A.
