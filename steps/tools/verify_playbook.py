"""Cross-checks the built visualizer (playbook.html) against the playbook sources.

For every template it checks that
  1. every prompt in the source CLASS-PLAYBOOK.md exists in the visualizer, in the same step and order, word for word
     (placeholders such as [YOUR NAME] are compared in the form the student sees before filling in their details);
  2. the visualizer has no extra prompts that are not in the sources;
  3. every prompt card has a Copy button.

Usage (repo root):
  node <shooter>/verify_dom.mjs        # writes the visualizer's prompts to verify_dom.json (needs the local server on :8765)
  python steps/tools/verify_playbook.py <path to verify_dom.json>
"""
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import build_playbook as bp  # noqa: E402

DEF = {'name': '[YOUR NAME]', 'role': '[YOUR ROLE]', 'email': '[YOUR EMAIL]', 'repo': '<my-name>-portfolio',
       'liveurl': '<PASTE YOUR VERCEL URL HERE>', 'city': '[YOUR CITY]', 'nameuc': '[YOUR NAME IN CAPITALS]',
       'introurl': '[YOUR INTRO VIDEO LINK]', 'repourl': '[YOUR GITHUB REPO LINK]', 'tapwords': '[YOUR OWN WORDS]',
       'details': '⟨ Your details will appear here once you complete the "Your details" form ⟩'}


def visible(code):
    t = bp.pre_tok(code)
    return re.sub(bp.L + r'(\w+)' + bp.R, lambda m: DEF.get(m.group(1), '[' + m.group(1) + ']'), t)


def main(dom_path):
    dom = json.load(open(dom_path, encoding='utf8'))
    bad = 0
    total_src = total_dom = 0
    for folder in sorted(d for d in os.listdir(bp.STEPS) if os.path.exists(os.path.join(bp.STEPS, d, 'CLASS-PLAYBOOK.md')) and os.path.exists(os.path.join(bp.STEPS, d, 'template.json'))):
        cfg = json.load(open(os.path.join(bp.STEPS, folder, 'template.json'), encoding='utf8'))
        key = cfg['key']
        secs = bp.parse(open(os.path.join(bp.STEPS, folder, 'CLASS-PLAYBOOK.md'), encoding='utf8').read().split('\n'))
        problems = []
        n_src = n_dom = 0
        seen = set()
        for sec in secs:
            sid = '%s-%s' % (key, sec['id'])
            seen.add(sid)
            src = [it for it in sec['items'] if it[0] == 'prompt']
            got = dom['res'].get(sid, [])
            n_src += len(src)
            n_dom += len(got)
            if len(src) != len(got):
                problems.append('%s: %d prompts in the source but %d in the visualizer' % (sid, len(src), len(got)))
                continue
            for i, (it, g) in enumerate(zip(src, got), 1):
                want = visible(it[2])
                have = g['text']
                if sec['id'] == 'step3':
                    # the generator puts the student's details block in front and rewrites one sentence
                    have = have.split('\n\n', 1)[1] if '\n\n' in have else have
                    want = want.replace('1. Interview me first. Ask questions in small groups',
                                        '1. The block "MY DETAILS" above already answers most groups below. Interview me ONLY about '
                                        'groups or items marked "(not provided)", asking in small groups')
                if want.strip() != have.strip():
                    problems.append('%s prompt %d (%s): text differs from the source' % (sid, i, it[1]))
                if not g['hasCopy']:
                    problems.append('%s prompt %d: no Copy button' % (sid, i))
        extra = [sid for sid in dom['res'] if sid.startswith(key + '-') and sid not in seen and dom['res'][sid]
                 and sid not in (key + '-finish', key + '-profile')]
        for sid in extra:
            problems.append('%s: has prompts that are not in the source' % sid)
        total_src += n_src
        total_dom += n_dom
        print('%s: %d prompts in the source, %d in the visualizer -> %s' % (folder, n_src, n_dom, 'OK' if not problems else 'PROBLEMS'))
        for p in problems:
            print('   -', p)
        bad += len(problems)
    print('TOTAL: %d source prompts, %d visualizer prompts, %d problems' % (total_src, total_dom, bad))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1]))
