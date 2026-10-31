"""Proves that merging prompts loses nothing.

For a template with a "merge" setting in template.json it checks that
  1. every original prompt appears in the merged playbook, word for word, in the original order
     (the only allowed differences are the explicit "replace" pairs in template.json);
  2. every merged prompt contains its tasks in order, each exactly once;
  3. prompts that are not merged are unchanged.

Usage (repo root):  python steps/tools/check_merge.py [template-1]
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import build_playbook as bp  # noqa: E402


def prompts_of(secs):
    return [(s['id'], it[1], it[2], it[3]) for s in secs for it in s['items'] if it[0] == 'prompt']


def check(folder):
    base = os.path.join(bp.STEPS, folder)
    cfg = bp.json.load(open(os.path.join(base, 'template.json'), encoding='utf8'))
    lines = open(os.path.join(base, 'CLASS-PLAYBOOK.md'), encoding='utf8').read().split('\n')
    original = bp.parse(lines)
    orig_prompts = prompts_of(original)

    bp.MERGE_LOG.clear()
    merged = bp.apply_merges(bp.parse(lines), (cfg.get('merge') or cfg.get('_merge_disabled')))
    merged_prompts = prompts_of(merged)
    log = list(bp.MERGE_LOG)

    problems = []
    # 1. every original prompt is present, in order, in the merged output
    cursor = 0
    haystack = [mp[2] for mp in merged_prompts]
    joined_all = '\n\u0001\n'.join(haystack)
    replaced = []
    for sid, label, code, cond in orig_prompts:
        found = joined_all.find(code, cursor)
        if found < 0:
            # allow the explicit replacements from the settings
            alt = code
            for g in (cfg.get('merge') or cfg.get('_merge_disabled')):
                for old, new in g.get('replace', []):
                    if old in alt:
                        alt = alt.replace(old, new)
            found = joined_all.find(alt, cursor)
            if found >= 0 and alt != code:
                replaced.append((sid, label))
                code = alt
        if found < 0:
            problems.append('MISSING or out of order: %s / %s (%d lines)' % (sid, label, len(code.split('\n'))))
        else:
            cursor = found + len(code)

    # 2. each merged prompt has its tasks in order, once, with header and footer
    for entry in log:
        text = entry['joined']
        pos = -1
        for k, t in enumerate(entry['tasks'], 1):
            marker = 'TASK %d of %d: ' % (k, len(entry['tasks']))
            if text.count(marker) != 1:
                problems.append('%s: marker "%s" appears %d times' % (entry['group'], marker, text.count(marker)))
            i = text.find(t['used'])
            if i < 0 or i < pos:
                problems.append('%s: task %d text missing or out of order' % (entry['group'], k))
            pos = i
        if 'WHEN ALL' not in text:
            problems.append('%s: footer missing' % entry['group'])

    # 3. counts
    n_before, n_after = len(orig_prompts), len(merged_prompts)
    print('%s: prompts %d -> %d, steps %d -> %d' % (folder, n_before, n_after, len(original), len(merged)))
    print('joined prompts: %d (%s)' % (len(log), ', '.join('%d tasks' % len(e['tasks']) for e in log)))
    if replaced:
        print('explicit wording changes (from template.json "replace"): %s' % replaced)
    if problems:
        print('FAILED:')
        for p in problems:
            print('  -', p)
        return 1
    print('PASSED: every original prompt is present word for word and in order.')
    return 0


if __name__ == '__main__':
    folders = sys.argv[1:] or ['template-1']
    sys.exit(max(check(f) for f in folders))
