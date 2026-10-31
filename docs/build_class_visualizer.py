"""Builds docs/class-guide-visualizer.html (a trainer-facing presenter tool) from
docs/CLASS-RUN-SHEET-2HR.md and docs/CLASS-SCRIPT-2HR.md.

Run from the repo root after editing either document:
    python docs/build_class_visualizer.py
The output is ONE self-contained file (CSS, JS and logos are embedded), so it can be opened from a USB stick or a second screen.
"""
import base64
import html
import json
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.normpath(os.path.join(HERE, '..'))
RUN = open(os.path.join(HERE, 'CLASS-RUN-SHEET-2HR.md'), encoding='utf8').read().replace('\r\n', '\n')
SCR = open(os.path.join(HERE, 'CLASS-SCRIPT-2HR.md'), encoding='utf8').read().replace('\r\n', '\n')


def data_uri(path):
    p = os.path.join(ROOT, path)
    return 'data:image/png;base64,' + base64.b64encode(open(p, 'rb').read()).decode()


# ----------------------------------------------------------------------------- inline + block markdown
def inline(t):
    codes = []

    def keep(m):
        codes.append('<code>%s</code>' % html.escape(m.group(1), quote=False))
        return '\x00%d\x00' % (len(codes) - 1)
    t = re.sub(r'`([^`]+)`', keep, t)
    t = html.escape(t, quote=False)
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    t = re.sub(r'(?<![\*\w])\*(?!\s)(.+?)(?<!\s)\*(?![\*\w])', r'<em>\1</em>', t)
    t = re.sub(r'\[([^\]]+)\]\((https?://[^)]+)\)', r'<a href="\2" target="_blank" rel="noopener">\1</a>', t)
    return re.sub('\x00(\\d+)\x00', lambda m: codes[int(m.group(1))], t)


def plain(t):
    t = re.sub(r'`([^`]+)`', r'\1', t)
    return re.sub(r'\*\*(.+?)\*\*', r'\1', t).replace('*', '')


def table_html(rows):
    cells = [[c.strip() for c in r.strip().strip('|').split('|')] for r in rows]
    head, body = cells[0], cells[2:]
    out = '<div class="tbl"><table><thead><tr>%s</tr></thead><tbody>' % ''.join('<th>%s</th>' % inline(c) for c in head)
    for r in body:
        out += '<tr>%s</tr>' % ''.join('<td>%s</td>' % inline(c) for c in r)
    return out + '</tbody></table></div>'


def md(lines):
    out, i, n = [], 0, len(lines)
    while i < n:
        l = lines[i]
        if not l.strip() or l.strip() == '---':
            i += 1
            continue
        if l.startswith('|'):
            j = i
            while j < n and lines[j].startswith('|'):
                j += 1
            out.append(table_html(lines[i:j]))
            i = j
            continue
        if l.startswith('>'):
            paras, cur = [], []
            while i < n and lines[i].startswith('>'):
                t = lines[i][1:].strip()
                if t:
                    cur.append(t)
                else:
                    if cur:
                        paras.append(' '.join(cur))
                    cur = []
                i += 1
            if cur:
                paras.append(' '.join(cur))
            out.append('<blockquote>%s</blockquote>' % ''.join('<p>%s</p>' % inline(p) for p in paras))
            continue
        m = re.match(r'^(\s*)(?:[-*]|\d+\.)\s+(.*)', l)
        if m:
            ordered = bool(re.match(r'^\s*\d+\.', l))
            items = []
            while i < n and re.match(r'^(\s*)(?:[-*]|\d+\.)\s+(.*)', lines[i]):
                mm = re.match(r'^(\s*)(?:[-*]|\d+\.)\s+(.*)', lines[i])
                t = mm.group(2)
                t = re.sub(r'^\[( |x)\]\s*', '', t)
                items.append(t)
                i += 1
            out.append('<%s>%s</%s>' % ('ol' if ordered else 'ul', ''.join('<li>%s</li>' % inline(x) for x in items), 'ol' if ordered else 'ul'))
            continue
        para = [l.strip()]
        i += 1
        while i < n and lines[i].strip() and not re.match(r'^(\||>|\s*(?:[-*]|\d+\.)\s|---)', lines[i]):
            para.append(lines[i].strip())
            i += 1
        text = ' '.join(para)
        cls = ' class="ans"' if text.startswith('\u2192') else ''
        out.append('<p%s>%s</p>' % (cls, inline(text)))
    return '\n'.join(out)


# ----------------------------------------------------------------------------- splitting
def split_h2(text):
    """[(heading, [lines])] for each '## ' section."""
    secs, cur = [], None
    for l in text.split('\n'):
        if l.startswith('## '):
            cur = (l[3:].strip(), [])
            secs.append(cur)
        elif cur is not None:
            cur[1].append(l)
    return secs


LABEL = re.compile(r'^\*\*([^*]+?)\*\*(.*)$')


def segments(lines):
    """Cut a block into labelled segments: SAY / DO / PROMPT / ASK / PPT / notes / 'teach' dividers."""
    segs, cur = [], None
    for l in lines:
        if l.strip() == '---':
            continue
        if l.startswith('### '):
            segs.append({'kind': 'teach', 'label': l[4:].strip(), 'head': '', 'lines': []})
            cur = None
            continue
        m = LABEL.match(l)
        if m:
            label = m.group(1).strip().rstrip(':')
            kind = 'note'
            up = label.upper()
            if up.startswith('ASK THE AGENT'):
                kind = 'agent'
            elif up.startswith('SAY'):
                kind = 'say'
            elif up.startswith('DO'):
                kind = 'do'
            elif up.startswith('PROMPT'):
                kind = 'prompt'
            elif up.startswith('ASK'):
                kind = 'ask'
            elif up.startswith('PPT'):
                kind = 'ppt'
            elif up.startswith('WHILE IT BUILDS'):
                kind = 'teachnote'
            elif up.startswith('CHECK'):
                kind = 'check'
            elif up.startswith('IF IT GOES WRONG') or up.startswith('IF SOMEONE'):
                kind = 'wrong'
            cur = {'kind': kind, 'label': label, 'head': m.group(2).strip(), 'lines': []}
            segs.append(cur)
        elif cur is not None:
            cur['lines'].append(l)
        elif l.strip():
            cur = {'kind': 'note', 'label': '', 'head': l.strip(), 'lines': []}
            segs.append(cur)
    return segs


def prompt_text(lines):
    paras, cur = [], []
    for l in lines:
        if l.startswith('>'):
            t = l[1:].strip()
            if t:
                cur.append(t)
            elif cur:
                paras.append(' '.join(cur))
                cur = []
    if cur:
        paras.append(' '.join(cur))
    return '\n\n'.join(plain(p) for p in paras)


def render_segment(s, cue_ix):
    k, label, head, lines = s['kind'], s['label'], s['head'], s['lines']
    body = md(lines)
    if k == 'teach':
        return '<div class="teach cue" data-cue>%s</div>' % inline(label)
    if k == 'prompt':
        pt = prompt_text(lines) or plain(head)
        note = head.strip(' :')
        hint = ('<p class="hint">%s</p>' % inline(note)) if note and prompt_text(lines) else ''
        return ('<section class="seg prompt cue" data-cue><div class="lab"><span>Type this into Antigravity</span>'
                '<button class="copy" type="button" data-copy="%s">Copy</button></div>%s%s</section>') % (html.escape(pt, quote=True), hint, body)
    if k == 'ask':
        q = inline(head)
        answer = body
        return ('<section class="seg ask cue" data-cue><div class="lab"><span>Ask the class</span></div>'
                '<p class="q">%s</p><button class="reveal" type="button">Show the answer</button><div class="answer" hidden>%s</div></section>') % (q, answer)
    if k == 'ppt':
        rows, head_cells = [], []
        tl = [x for x in lines if x.startswith('|')]
        if len(tl) >= 3:
            cells = [[c.strip() for c in r.strip().strip('|').split('|')] for r in tl]
            head_cells, rows = cells[0], cells[2:]
        intro = md([x for x in lines if not x.startswith('|')])
        out = '<section class="seg ppt"><div class="lab"><span>Deck: %s</span></div>%s' % (inline(re.sub(r'^PPT:\s*', '', label)), ('<p class="hint">%s</p>' % inline(head.strip(' \u2014-'))) if head.strip(' \u2014-') else '')
        out += intro + '<ol class="clicks">'
        for r in rows:
            out += ('<li class="click cue" data-cue><span class="n">%s</span><div><div class="app">%s</div><div class="say">%s</div></div></li>'
                    % (inline(r[0]), inline(r[1]) if len(r) > 1 else '', inline(r[2]) if len(r) > 2 else ''))
        return out + '</ol></section>'
    names = {'say': 'Say', 'do': 'Do', 'agent': 'Ask the agent', 'teachnote': 'While it builds', 'check': 'Check', 'wrong': 'If it goes wrong'}
    lab = names.get(k) or label
    first = ('<p>%s</p>' % inline(head)) if head else ''
    if k == 'teachnote' and ':' in label:
        first = '<p class="topic">%s</p>%s' % (inline(label.split(':', 1)[1].strip()), first)
    return '<section class="seg %s cue" data-cue><div class="lab"><span>%s</span></div>%s%s</section>' % (k, inline(lab), first, body)


# ----------------------------------------------------------------------------- blocks
def start_of(heading):
    m = re.search(r'(\d):(\d\d)', heading)
    return int(m.group(1)) * 60 + int(m.group(2)) if m else None


run_secs = split_h2(RUN)
scr_secs = split_h2(SCR)
run_blocks = {start_of(h): (h, l) for h, l in run_secs if re.match(r'^(Block \d+ \(|\d:\d\d to )', h)}
blocks = []
who = []
# who runs it (live / self-paced) from the run sheet's format table
for h, l in run_secs:
    if h.startswith("Tomorrow's actual format"):
        for ln in l:
            if ln.startswith('|') and re.match(r'^\|\s*\d:\d\d', ln):
                c = [x.strip() for x in ln.strip().strip('|').split('|')]
                who.append(c[3] if len(c) > 3 else '')
format_lines = next((l for h, l in run_secs if h.startswith("Tomorrow's actual format")), [])

for h, l in scr_secs:
    m = re.match(r'^\u23f1\s*(\d):(\d\d)\s*\u00b7\s*(.+?)(?:\s*\((\d+) minutes\))?$', h)
    if not m:
        continue
    start = int(m.group(1)) * 60 + int(m.group(2))
    title = m.group(3).strip()
    dur = int(m.group(4)) if m.group(4) else 10
    blocks.append({'start': start, 'title': title, 'dur': dur, 'script': l})
for i, b in enumerate(blocks):
    run = run_blocks.get(b['start'])
    b['run'] = run[1] if run else []
    w = who[i] if i < len(who) else ''
    b['live'] = 'self' if 'Self-paced' in w else 'live'
    b['who'] = re.sub(r'[*]', '', w)

# topic for each block (the "Teach while it builds" heading)
for b in blocks:
    t = next((x[4:].strip() for x in b['script'] if x.startswith('### ')), '')
    b['topic'] = re.sub(r'^Teach while (it builds|students answer|it pushes):\s*', '', t)


def fmt(m):
    return '%d:%02d' % (m // 60, m % 60)


blocks_html = []
nav = []
for i, b in enumerate(blocks):
    segs = segments(b['script'])
    script_html = ''.join(render_segment(s, 0) for s in segs)
    run_html = ''.join(render_segment(s, 0) for s in segments(b['run']))
    blocks_html.append(
        '<article class="block" id="b%d" data-i="%d" data-start="%d" data-dur="%d" hidden>'
        '<header class="bh"><div class="bt"><span class="when">%s to %s</span><h2>%s</h2>%s</div>'
        '<div class="tabs" role="tablist"><button class="tab on" data-tab="script" type="button">Script</button>'
        '<button class="tab" data-tab="run" type="button">Run sheet</button><button class="tab" data-tab="both" type="button">Both</button></div></header>'
        '<div class="pane" data-pane="script">%s</div><div class="pane" data-pane="run" hidden>%s</div></article>'
        % (i, i, b['start'], b['dur'], fmt(b['start']), fmt(b['start'] + b['dur']), inline(b['title']),
           ('<p class="topic">Teaching topic: %s</p>' % inline(b['topic'])) if b['topic'] else '',
           script_html or '<p class="empty">No script for this block.</p>',
           run_html or '<p class="empty">No run sheet notes for this block.</p>'))
    nav.append('<button class="nv" data-i="%d" type="button"><span class="tm">%s</span><span class="nm">%s</span><span class="tg %s">%s</span><i class="bar"><b></b></i></button>'
               % (i, fmt(b['start']), inline(b['title']), b['live'], 'Live' if b['live'] == 'live' else 'Self-paced'))

# ----------------------------------------------------------------------------- overview
def sec(name, secs):
    return next((l for h, l in secs if h.startswith(name)), [])


def checklist(lines, key):
    items = [re.sub(r'^- \[ \]\s*', '', x) for x in lines if x.startswith('- [ ]')]
    return '<ul class="check">%s</ul>' % ''.join(
        '<li><label><input type="checkbox" data-ck="%s-%d"><span>%s</span></label></li>' % (key, i, inline(t)) for i, t in enumerate(items))


fits = sec('What fits in 2 hours', run_secs)
backup_tbl = [x for x in sec('Backup plans', scr_secs) if x.startswith('|')]
overview = (
    '<section class="ov"><h2>The plan for the class</h2>%s</section>' % md([x for x in format_lines if not x.startswith('|')][:0] + [x for x in format_lines if x.strip() and not x.startswith('|')])
    + '<section class="ov"><h2>What fits, and what doesn\'t</h2>%s</section>' % md(fits)
    + '<section class="ov"><h2>The night before</h2>%s</section>' % checklist(sec('Prep checklist', run_secs), 'prep')
    + '<section class="ov"><h2>If something goes wrong</h2>%s</section>' % (table_html(backup_tbl) if backup_tbl else '')
    + '<section class="ov"><h2>If you are behind</h2>%s</section>' % md(sec('Timing safety valves', scr_secs))
    + '<section class="ov"><h2>Keeping the room engaged</h2>%s</section>' % md(sec('Engagement reminders', scr_secs))
    + '<section class="ov"><h2>The deck</h2>%s</section>' % md(sec('The deck', scr_secs)))

deck_note = ''
page_title = re.sub(r'^#\s*', '', RUN.split('\n')[0]).strip()

timeline = [{'i': i, 'start': b['start'], 'dur': b['dur'], 'title': plain(b['title']), 'live': b['live']} for i, b in enumerate(blocks)]

TEMPLATE = open(os.path.join(HERE, 'class-guide-template.html'), encoding='utf8').read()
page = (TEMPLATE
        .replace('@@LOGO@@', data_uri('steps/brand/tap-academy-logo.png'))
        .replace('@@LOGODARK@@', data_uri('steps/brand/tap-academy-logo-dark.png'))
        .replace('@@FAVICON@@', data_uri('steps/brand/favicon-32.png'))
        .replace('@@NAV@@', ''.join(nav))
        .replace('@@BLOCKS@@', '\n'.join(blocks_html))
        .replace('@@OVERVIEW@@', overview)
        .replace('@@TIMELINE@@', json.dumps(timeline))
        .replace('@@TITLE@@', html.escape(page_title)))
out = os.path.join(HERE, 'class-guide-visualizer.html')
open(out, 'w', encoding='utf8').write(page)
print('Built %s: %d blocks, %d KB' % (os.path.normpath(out), len(blocks), len(page) // 1024))
