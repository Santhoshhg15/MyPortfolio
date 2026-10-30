"""Build the unified visualizer steps/playbook.html (template chooser + one playbook per template).

Usage (from the repo root):  python steps/tools/build_playbook.py

- Each "## A1 · ..." / "## Step N · ..." heading becomes one form-style screen.
- ````text fenced blocks become prompt cards with a Copy button.
- [YOUR NAME], [YOUR ROLE], [YOUR CITY], [YOUR GITHUB REPO LINK], [YOUR INTRO VIDEO LINK],
  <PASTE YOUR VERCEL URL HERE>, <My Name>, <My Role> become live tokens filled from the
  student's "Your details" form in the browser.
- A line like  [[input:introurl|Label|placeholder|hint]]  renders an inline input bound to that token.
"""
import html, json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
STEPS = os.path.normpath(os.path.join(HERE, '..'))
TPL = os.path.join(HERE, 'playbook.template.html')
PFX = ''  # section/field id prefix of the template being built (e.g. 't1')

L, R = '⟦', '⟧'


def tk(name):
    return L + name + R


def pre_tok(t):
    pairs = [
        ('[YOUR ROLE, e.g. Java Full Stack Developer]', '[YOUR ROLE]'),
        ('[YOUR NAME]', tk('name')), ('[YOUR ROLE]', tk('role')),
        ('[YOUR CITY]', tk('city')), ('[YOUR GITHUB REPO LINK]', tk('repourl')),
        ('[YOUR INTRO VIDEO LINK]', tk('introurl')),
        ('<My Name>', tk('name')), ('<My Role>', tk('role')),
        ('<my-name>-portfolio', tk('repo')), ('gh repo create <name>', 'gh repo create ' + tk('repo')),
        ('<MY NAME IN CAPITALS>', tk('nameuc')), ('<PASTE YOUR VERCEL URL HERE>', tk('liveurl')), ('--homepage <url>', '--homepage ' + tk('liveurl')),
        ('(if git user name/email are not set, ask me for them and set them)',
         '(if git user name/email are not set, set them to %s and %s)' % (tk('name'), tk('email'))),
    ]
    for a, b in pairs:
        t = t.replace(a, b)
    return t


def post_tok(h):
    return re.sub(L + r'(\w+)' + R, lambda m: '<span class="tk" data-k="%s"></span>' % m.group(1), h)


def inline(t):
    t = html.escape(pre_tok(t), quote=False)
    t = re.sub(r"`([^`]+)`", r"<code>\1</code>", t)
    t = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", t)
    t = re.sub(r"(?<![\*\w])\*(?!\s)(.+?)(?<!\s)\*(?!\*)", r"<em>\1</em>", t)
    t = re.sub(r"\[([^\]]+)\]\((starter-kit/[^)]+)\)", r'<a href="\2" download>\1</a>', t)
    t = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\2" target="_blank" rel="noopener">\1</a>', t)
    t = re.sub(r'(?<!["=>])(https?://[^\s<)]+[^\s<).,:])', r'<a href="\1" target="_blank" rel="noopener">\1</a>', t)
    return post_tok(t)


def input_card(spec):
    key, label, ph, hint = (spec.split('|') + ['', '', ''])[:4]
    return ('<div class="q"><label class="ql" for="f-%s-%s">%s</label><div class="hint">%s</div>'
            '<input class="in" id="f-%s-%s" data-bind="%s" type="url" placeholder="%s"></div>') % (
        PFX, key, html.escape(label), html.escape(hint), PFX, key, key, html.escape(ph))


COND = re.compile(r"^\{(if|ifnot):([\w|]+)\}\s*")
CALLOUT = re.compile(r"\*\*(Say to the class|Check|Do[^*:]*?|Where|Then):?\*\*:?\s*(.*)")


def md(lines):
    out, i = [], 0
    while i < len(lines):
        l = lines[i]
        if not l.strip() or l.strip() == '---':
            i += 1; continue
        m = re.match(r"\[\[input:(.+)\]\]$", l.strip())
        if m:
            out.append(input_card(m.group(1))); i += 1; continue
        if l.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                rows.append([c.strip() for c in lines[i].strip().strip('|').split('|')]); i += 1
            rows = [r for r in rows if not all(re.fullmatch(r":?-+:?", c) for c in r)]
            h = '<div class="tbl"><table><thead><tr>' + ''.join('<th>%s</th>' % inline(c) for c in rows[0]) + '</tr></thead><tbody>'
            for r in rows[1:]:
                h += '<tr>' + ''.join('<td>%s</td>' % inline(c) for c in r) + '</tr>'
            out.append(h + '</tbody></table></div>'); continue
        if re.match(r"\d+\. ", l):
            items = []
            while i < len(lines) and re.match(r"\d+\. ", lines[i]):
                items.append(inline(re.sub(r"^\d+\. ", "", lines[i]))); i += 1
            out.append('<ol>' + ''.join('<li>%s</li>' % x for x in items) + '</ol>'); continue
        if l.startswith('- '):
            items = []
            while i < len(lines) and lines[i].startswith('- '):
                items.append(inline(lines[i][2:])); i += 1
            out.append('<ul>' + ''.join('<li>%s</li>' % x for x in items) + '</ul>'); continue
        if l.startswith('>'):
            q = []
            while i < len(lines) and lines[i].startswith('>'):
                q.append(lines[i].lstrip('> ')); i += 1
            out.append('<div class="note">' + inline(' '.join(q)) + '</div>'); continue
        p = []
        while (i < len(lines) and lines[i].strip() and lines[i].strip() != '---'
               and not lines[i].startswith(('|', '- ', '>', '[[input:')) and not re.match(r"\d+\. ", lines[i])):
            p.append(lines[i]); i += 1
        txt = ' '.join(p)
        cm = COND.match(txt)
        cond = ''
        if cm:
            cond = ('' if cm.group(1) == 'if' else '!') + cm.group(2)
            txt = txt[cm.end():]
        m = CALLOUT.match(txt)
        if m:
            k = m.group(1)
            kind = {'Say to the class': 'say', 'Check': 'check', 'Where': 'where', 'Then': 'then'}.get(k, 'do')
            out.append('<div class="co %s"%s><span class="cl">%s</span><div>%s</div></div>' % (
                kind, ' data-showif="%s"' % cond if cond else '',
                html.escape(k.replace('Do (the only manual part)', 'Do (manual)')), inline(m.group(2))))
        else:
            out.append('<p%s>%s</p>' % (' data-showif="%s"' % cond if cond else '', inline(txt)))
    return '\n'.join(out)


def parse(lines):
    secs, cur, part, buf = [], None, 'Welcome', []
    state = {'label': None}

    def new(id_, title, part_, tag):
        sec = {'id': id_, 'title': title, 'part': part_, 'tag': tag, 'items': []}
        secs.append(sec)
        return sec

    def flush():
        if cur is not None and any(b.strip() for b in buf):
            cur['items'].append(('text', md(buf)))
        buf.clear()

    cur = new('start', 'Welcome', 'Welcome', 'Go')
    skip, i = False, 0
    while i < len(lines):
        l = lines[i]
        if l.startswith('# AI-Driven'):
            i += 1; continue
        if l.startswith('## Quick map'):
            flush(); skip = True; i += 1; continue
        if l.startswith('# PART'):
            skip = False; flush(); part = l[2:]; cur = {'items': []}; i += 1; continue
        if l.startswith('# Troubleshooting'):
            skip = False; flush(); part = 'Help'; cur = new('help', 'Troubleshooting prompts', 'Help', '?'); i += 1; continue
        m = re.match(r"## (A\d|Step \d+) · (.+)", l)
        if m:
            skip = False; flush()
            pending = cur['items'] if 'id' not in cur else []
            cur = new(m.group(1).lower().replace(' ', ''), m.group(2), part, m.group(1).replace('Step ', ''))
            cur['items'].extend(pending); i += 1; continue
        if skip:
            i += 1; continue
        if l.startswith('````text'):
            flush(); j, code = i + 1, []
            while not lines[j].startswith('````'):
                code.append(lines[j]); j += 1
            cur['items'].append(('prompt', state['label'] or 'Prompt', '\n'.join(code), state.get('cond', '')))
            state['label'] = None; state['cond'] = ''; i = j + 1; continue
        m = re.match(r"\*\*(T\d+) · (.+?)\*\*$", l)
        if m:
            state['label'] = m.group(1) + ' · ' + m.group(2); i += 1; continue
        if l.startswith('**Prompt (paste'):
            state['label'] = ('Prompt for ChatGPT' if 'ChatGPT' in l or cur['id'] == 'a1'
                              else 'Prompt for Gemini' if 'Gemini' in l or cur['id'] == 'a2' else 'Prompt')
            i += 1; continue
        m = re.match(r"\*\*(Prompt[^*]*?)\*\*(?:\s*\{(if|ifnot):([\w|]+)\})?", l)
        if m:
            state['label'] = re.sub(r"[:\s]+$", "", m.group(1))
            state['cond'] = (('' if m.group(2) == 'if' else '!') + m.group(3)) if m.group(2) else ''
            i += 1; continue
        m = re.match(r"\*\*(Title|Description|Tags)[^*]*\*\*", l)
        if m and any(x.startswith('````') for x in lines[i + 1:i + 3]):
            state['label'] = 'YouTube ' + m.group(1).lower(); i += 1; continue
        buf.append(l); i += 1
    flush()
    return secs


def render_prompt(lab, code, cond=''):
    n = len(code.split('\n'))
    long_ = n > 16
    copy = 'Copy text' if lab.startswith('YouTube') else 'Copy prompt'
    card = ('<div class="prompt%s"><div class="ph"><span class="pl"><i></i>%s</span><span class="pm">%s</span>'
            '<button class="cp" type="button">%s</button></div><pre><code>%s</code></pre>%s</div>') % (
        ' long' if long_ else '', html.escape(lab), '1 line' if n == 1 else '%d lines' % n, copy,
        post_tok(html.escape(pre_tok(code), quote=False)),
        '<button class="more" type="button">Show full prompt</button>' if long_ else '')
    if not cond:
        return card
    neg = cond.startswith('!')
    key = cond.lstrip('!')
    note = ('<div class="skipnote" data-showif="!%s">%s: skipped, because you did not add the optional video link(s) '
            'above. Nothing to paste here.</div>') % (key, html.escape(lab.split(' — ')[0] + (' — ' + lab.split(' — ')[1] if ' — ' in lab else '')))
    return '<div data-showif="%s">%s</div>%s' % (cond, card, note if not neg else '')


def nice(part):
    """'PART A — Create Your Assets' -> 'Part A: Create your assets' (sidebar and step labels)."""
    m = re.match(r'PART ([A-Z])\s*—\s*(.*)', part)
    if not m:
        return part
    words = m.group(2).split(' ')
    rest = ' '.join([words[0]] + [w if (w.isupper() or w in ('Vercel', 'GitHub', 'Google', 'Antigravity')) else w.lower() for w in words[1:]])
    return 'Part %s: %s' % (m.group(1), rest)


def build(tpl_id):
    """Return the HTML/JS fragments of one template (ids are prefixed with the template key)."""
    global PFX
    base = os.path.join(STEPS, tpl_id)
    cfg = json.load(open(os.path.join(base, 'template.json'), encoding='utf8'))
    key = cfg['key']
    PFX = key
    prof = os.path.join(HERE, 'profiles', cfg['profile'])
    secs = parse(open(os.path.join(base, 'CLASS-PLAYBOOK.md'), encoding='utf8').read().split('\n'))
    # Step 3: prefill the data prompt with the student's form answers
    for sec in secs:
        if sec['id'] == 'step3':
            sec['items'] = [(it[0], it[1], tk('details') + '\n\n' + it[2].replace(
                '1. Interview me first. Ask questions in small groups',
                '1. The block "MY DETAILS" above already answers most groups below. Interview me ONLY about '
                'groups or items marked "(not provided)", asking in small groups'), it[3]) if it[0] == 'prompt' else it
                for it in sec['items']]
    secs.insert([x['id'] for x in secs].index('help'), {
        'id': 'finish', 'title': 'You did it!', 'part': 'Done', 'tag': 'End', 'items': [('text',
            '<div class="fin"><p class="lead">Your portfolio is live and your code is public on GitHub.</p>'
            '<p>Share your live link with your instructor and keep your LinkedIn post and YouTube video public.</p>'
            '<div class="note">Stuck on anything? Open <strong>Help</strong> (top bar) for ready-made troubleshooting prompts.</div></div>')]})
    secs.insert(1, {'id': 'profile', 'title': 'Your details', 'part': 'Welcome', 'tag': 'You', 'items': []})

    nav, body, startbody, last = '', '', '', None
    for sec in secs:
        pid = key + '-' + sec['id']
        if sec['part'] != last:
            nav += '<div class="grp" data-tpl="%s" hidden>%s</div>' % (key, html.escape(nice(sec['part']))); last = sec['part']
        nav += ('<a class="ni" href="#%s" data-id="%s" data-tpl="%s" hidden><span class="nb">%s</span><span class="nt">%s</span>'
                '<span class="ck"></span></a>') % (pid, pid, key, html.escape(sec['tag']), html.escape(sec['title']))
        if sec['id'] == 'profile':
            continue
        inner = ''.join(it[1] if it[0] == 'text' else render_prompt(it[1], it[2], it[3]) for it in sec['items'])
        if sec['id'] == 'start':
            startbody = inner; continue
        npr = sum(1 for it in sec['items'] if it[0] == 'prompt')
        meta = '<div class="meta">%d prompt%s</div>' % (npr, '' if npr == 1 else 's') if npr else ''
        body += ('<section class="step" id="s-%s" data-id="%s" hidden><div class="sh"><span class="big">%s</span><div>'
                 '<div class="kick">%s</div><h2>%s</h2>%s</div></div>%s<div class="pn"><button class="prev" type="button">'
                 'Back</button><button class="next" type="button">Continue</button></div></section>\n') % (
            pid, pid, html.escape(sec['tag']), html.escape(nice(sec['part'])), html.escape(sec['title']), meta, inner)

    start = ('<section class="step" id="s-%s-start" data-id="%s-start" hidden><div class="hero">'
             '<h1>Build your portfolio website with AI.</h1>'
             '<p>%s works like a form, one step at a time. Tell us about yourself once, and every prompt after that is '
             '<strong>personalised with your answers</strong>. You never type code.</p>'
             '<div class="flow"><span><b>1</b> Fill your details</span><span><b>2</b> %s</span><span><b>3</b> Paste the prompts</span>'
             '<span><b>4</b> Check the result</span><span><b>5</b> Go live</span><span><b>6</b> Get discovered</span></div></div>%s'
             '<div class="pn"><button class="prev" type="button">Templates</button><button class="next" type="button">Get started</button></div></section>\n') % (
        key, key, html.escape(cfg['name']), cfg.get('createLabel', 'Create your images'), startbody)

    profile = open(prof + '.profile.html', encoding='utf8').read()
    profile = profile.replace('id="s-profile" data-id="profile"', 'id="s-%s-profile" data-id="%s-profile"' % (key, key))
    profile = profile.replace('id="f-', 'id="f-%s-' % key).replace('for="f-', 'for="f-%s-' % key).replace('id="soft"', 'id="soft-%s"' % key)
    details = open(prof + '.details.js', encoding='utf8').read().replace('function details(){', 'function details_%s(){' % key)
    soft = open(prof + '.soft.js', encoding='utf8').read().replace("$('#soft')", "$('#soft-%s')" % key)

    ids = [key + '-' + x['id'] for x in secs]
    return {'key': key, 'cfg': cfg, 'nav': nav, 'sections': start + profile + '\n' + body, 'details': details, 'soft': soft,
            'seq': [x for x in ids if not x.endswith('-help')], 'all': ids}


def main():
    folders = sorted(d for d in os.listdir(STEPS)
                     if os.path.exists(os.path.join(STEPS, d, 'template.json')) and os.path.exists(os.path.join(STEPS, d, 'CLASS-PLAYBOOK.md')))
    built = [build(f) for f in folders]
    head = open(os.path.join(HERE, 'unified.head.html'), encoding='utf8').read()
    tail = open(os.path.join(HERE, 'unified.tail.html'), encoding='utf8').read()
    nav = ('<a class="ni" href="#choose" data-id="choose"><span class="nb">All</span><span class="nt">Choose a template</span>'
           '<span class="ck"></span></a>') + ''.join(b['nav'] for b in built)
    tpls = {b['key']: {'short': b['cfg']['short'], 'name': b['cfg']['name'], 'seq': b['seq'], 'all': b['all']} for b in built}
    picker = json.load(open(os.path.join(STEPS, 'templates.json'), encoding='utf8'))
    page = head.replace('@@NAV@@', nav) + tail
    for k, v in {'@@SECTIONS@@': ''.join(b['sections'] for b in built),
                 '@@TPLS@@': json.dumps(tpls), '@@TEMPLATES@@': json.dumps(picker),
                 '@@DETAILSJS@@': ''.join(b['details'] for b in built), '@@DETAILSMAP@@': ','.join('%s:details_%s' % (b['key'], b['key']) for b in built), '@@SOFTJS@@': ''.join(b['soft'] for b in built)}.items():
        page = page.replace(k, v)
    out = os.path.join(STEPS, 'playbook.html')
    open(out, 'w', encoding='utf8').write(page)
    print('Built %s: %d templates, %d screens' % (os.path.normpath(out), len(built), sum(len(b['all']) for b in built)))
    build_site(page)


def build_site(page):
    """steps/site/ = the folder you deploy to Vercel (password-protected by middleware.js)."""
    import shutil
    site = os.path.join(STEPS, 'site')
    os.makedirs(site, exist_ok=True)
    for name in os.listdir(site):  # clear old output but keep the folder's own git repo (.git)
        if name in ('.git', '.gitignore', 'README.md'):
            continue
        path = os.path.join(site, name)
        shutil.rmtree(path) if os.path.isdir(path) else os.remove(path)
    os.makedirs(os.path.join(site, 'starter-kit'))
    open(os.path.join(site, 'index.html'), 'w', encoding='utf8').write(page)
    for d in ('previews', 'brand'):
        shutil.copytree(os.path.join(STEPS, d), os.path.join(site, d))
    shutil.copy(os.path.join(STEPS, 'starter-kit', 'reference-portrait.png'), os.path.join(site, 'starter-kit'))
    shutil.copy(os.path.join(HERE, 'site', 'middleware.js'), site)
    json.dump({'name': 'tap-academy-portfolio-playbook', 'private': True, 'type': 'module'},
              open(os.path.join(site, 'package.json'), 'w', encoding='utf8'), indent=2)
    print('Deploy folder: %s' % os.path.normpath(site))


if __name__ == '__main__':
    main()
