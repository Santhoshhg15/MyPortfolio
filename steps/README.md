# Portfolio Playbooks — Class Material

Open **[playbook.html](playbook.html)** in a browser. It is ONE visualizer: the first screen lets students preview every template (finished-site screenshots) and choose one; the same page then walks them through that template's playbook, one step at a time, with every prompt personalised from their details. (`index.html` just redirects to it.)

| Template | Look | Playbook source |
|---|---|---|
| Template 1 — Red Studio | Red + black, ID badge that flips to a visiting card, talking hero video (React, Tailwind, Framer Motion, AOS) | [template-1/CLASS-PLAYBOOK.md](template-1/CLASS-PLAYBOOK.md) |
| Template 2 — Cinematic Lime | Dark editorial, scrambling headline, lime services accordion (React, Tailwind, GSAP) | [template-2/CLASS-PLAYBOOK.md](template-2/CLASS-PLAYBOOK.md) |
| Template 3 — Signal HUD | Dark technical HUD, live three.js wireframe core, text decode, pinned sideways project gallery (React, Tailwind, GSAP, Lenis, three.js) | [template-3/CLASS-PLAYBOOK.md](template-3/CLASS-PLAYBOOK.md) |

## Folder layout

```
steps/
├── playbook.html              THE visualizer (template chooser + both playbooks), generated
├── templates.json             card data for the chooser (names, palettes, features, preview screenshots)
├── previews/                  screenshots shown in the chooser
├── starter-kit/               files students download from a playbook (e.g. reference-portrait.png)
├── template-1/  CLASS-PLAYBOOK.md  template.json
├── template-2/  CLASS-PLAYBOOK.md  template.json  _content.md
├── template-3/  CLASS-PLAYBOOK.md  template.json  _content.md
├── tools/
│   ├── build_playbook.py      every template's CLASS-PLAYBOOK.md + templates.json  ->  steps/playbook.html
│   ├── assemble_template.py   <template>/_content.md + shared Template 1 sections -> <template>/CLASS-PLAYBOOK.md
│   ├── unified.head.html / unified.tail.html   page shell (glass design, chooser, form flow, progress, copy buttons)
│   └── profiles/              the "Your details" form + prompt personalisation for each template
```

## Rebuild after editing (run from the repo root)

```bash
python steps/tools/assemble_template.py    # after editing any _content.md or Template 1's shared steps
python steps/tools/build_playbook.py       # rebuilds steps/playbook.html and the deploy folder steps/site/
```

## Publishing the playbook for students (password protected)

`steps/site/` is the folder to put online. It contains the playbook (`index.html`), previews, logo, and `middleware.js`, the password gate.

1. **Create the project:** create a new Vercel project from the `steps/site` folder (for example, push it to its own private GitHub repo and import it). Framework preset: **Other**. No build command.
2. **Set the password:** in Vercel open **Settings → Environment Variables** and add `PLAYBOOK_PASSWORD` with the class password. Then redeploy.
3. **Share it:** give students the link and the password. They sign in once and stay signed in for 30 days. "Sign out" is in the Steps menu.
4. **Change the password for a new batch:** edit `PLAYBOOK_PASSWORD` and redeploy. Everyone who used the old password is signed out at once.

The password is checked on Vercel's servers, so nothing (prompts, previews) is sent before the correct password. If `PLAYBOOK_PASSWORD` is missing, the site stays locked.

**Copy protection inside the page is a deterrent only.** The page blocks:
- right-click
- F12, Ctrl+Shift+I/J/C/K (and Cmd+Option+I/J/C on a Mac)
- view source, save page and print (Ctrl+U, Ctrl+S, Ctrl+P)
- text selection and image dragging outside the form

A web page **cannot** stop someone opening developer tools from the browser's own menu, or from changing browser settings.

**To switch developer tools off completely on TAP Academy lab computers,** use Chrome's organisation policy `DeveloperToolsAvailability = 2`:
- **Windows:** run once as administrator:
  `reg add HKLM\Software\Policies\Google\Chrome /v DeveloperToolsAvailability /t REG_DWORD /d 2 /f`
  Then restart Chrome and check `chrome://policy`.
- **Google Workspace / Chrome Enterprise managed browsers:** set "Developer tools" to "Never allow" in the Admin console.
- **Microsoft Edge:** the equivalent policy is under `HKLM\Software\Policies\Microsoft\Edge`, same value name.

This only works on computers the academy manages. Students' personal laptops can't be controlled this way.

## Rules that apply to every template
- The theme and colours follow each template's own design; the **steps and prompt style are standardised** (Antigravity setup → "Your details" form → assets → sections → contact → QA → GitHub → Vercel → discoverability).
- The self-introduction video and project videos are **optional**: their prompts appear only when the student pastes a link (`{if:...}` markers in the Markdown).
- TAP Academy credit stays visible (footer, structured data, README, repo topics).
- A student's details are shared by all templates (saved in the browser); progress is kept per template.

## Reference projects (answer keys)
- Template 1: the project in the repository root (`src/`).
- Template 2: [templates/template-2/](../templates/template-2/) (uses placeholder portraits; run `npm install && npm run dev`).
- Template 3: [templates/template-3/](../templates/template-3/) (an original design; placeholder portrait).

Built during training at [TAP Academy](https://thetapacademy.com/).
