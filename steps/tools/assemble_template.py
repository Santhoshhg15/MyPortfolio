"""Assemble steps/<template>/CLASS-PLAYBOOK.md for templates written as `_content.md` sections.

Template-specific sections come from steps/<template>/_content.md (split by <<<ID>>> markers):
  INTRO, QUICKMAP, A1..An, STEP2..STEP12, T4, T7, DONE
Shared sections (project folder, publish, discovery, troubleshooting T1-T3/T5/T6) are sliced from
steps/template-1/CLASS-PLAYBOOK.md so every template stays in sync with Template 1.
The Step 3 data structure (@@SCHEMA@@) is read from the template's reference build
(template.json -> "reference", e.g. templates/template-2).

Usage (repo root):  python steps/tools/assemble_template.py [template-2 template-3 ...]
                    python steps/tools/build_playbook.py
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
STEPS = os.path.normpath(os.path.join(HERE, '..'))
ROOT = os.path.normpath(os.path.join(STEPS, '..'))
T1 = open(os.path.join(STEPS, 'template-1', 'CLASS-PLAYBOOK.md'), encoding='utf8').read()


def slice_t1(start, end):
    a = T1.index(start)
    b = T1.index(end, a) if end else len(T1)
    return T1[a:b].rstrip() + '\n'


def assemble(folder):
    base = os.path.join(STEPS, folder)
    content = open(os.path.join(base, '_content.md'), encoding='utf8').read()
    cfg = json.load(open(os.path.join(base, 'template.json'), encoding='utf8'))
    parts = dict(re.findall(r'<<<([A-Z0-9]+)>>>\n(.*?)(?=<<<[A-Z0-9]+>>>)', content, re.S))
    parts = {k: v.strip() + '\n' for k, v in parts.items()}
    schema = open(os.path.join(ROOT, cfg['reference'], 'src', 'data', 'portfolioData.js'), encoding='utf8').read().strip()

    out = [parts['INTRO'], parts['QUICKMAP'], '# PART A — Create Your Assets\n']
    out += [parts[k] for k in sorted((k for k in parts if re.fullmatch(r'A\d+', k)), key=lambda k: int(k[1:]))]
    # Part B header + "rule for every prompt" + Step 1 are shared
    out.append(slice_t1('# PART B — Build the Website with the AI Agent', '## Step 2 ·'))
    out += [parts['STEP%d' % n].replace('@@SCHEMA@@', schema) for n in range(2, 13)]

    # Part C (publish) + Steps 16-17 are shared; Template 1's talking-video upload (Step 18) is not used
    cd = slice_t1('# PART C — Publish', '## Step 18 ·')
    cd = cd.replace(
        'using React, Vite, Tailwind CSS and Framer Motion, with an AI-generated portrait and a talking intro video, deployed on Vercel',
        cfg.get('linkedinBuilt', 'using React, Vite and Tailwind CSS, with an AI-generated portrait, deployed on Vercel'))
    cd = cd.replace('attach your talking video (A2) or your portrait (A1)', cfg.get('linkedinAttach', 'attach your portrait (A1)'))
    out.append(cd.rstrip() + '\n\n' + parts['DONE'] + '\n---\n')

    tr = slice_t1('# Troubleshooting Prompts', '**T7 ·')
    tr = tr.replace('(first_name, last_name, user_email, message)', cfg.get('emailFields', '(user_name, user_email, message)'))
    tr = tr[:tr.index('**T4 ·')] + parts['T4'] + '\n' + tr[tr.index('**T5 ·'):]
    out.append(tr.rstrip() + '\n')
    out.append(parts['T7'])

    text = re.sub(r'\n{4,}', '\n\n\n', '\n'.join(out))
    open(os.path.join(base, 'CLASS-PLAYBOOK.md'), 'w', encoding='utf8').write(text)
    print('%s/CLASS-PLAYBOOK.md written: %d lines' % (folder, len(text.splitlines())))


if __name__ == '__main__':
    folders = sys.argv[1:] or sorted(d for d in os.listdir(STEPS) if os.path.exists(os.path.join(STEPS, d, '_content.md')))
    for f in folders:
        assemble(f)
