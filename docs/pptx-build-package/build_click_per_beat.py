"""Build the click-per-BEAT AI Portfolio concept deck -- the anagram-style version.

Every click advances exactly one slide and plays exactly one beat clip (one
small visual reveal), then STOPS and waits for the next click. No auto-advance,
no auto-chaining between clips or topics -- the trainer explains each beat as
it lands, same as the anagram deck. Pure "With Previous" autoplay + a
click-catcher, nothing else driving slide advance.

Run from this folder (docs/pptx-build-package/): reads beats/<topic>/manifest.json
for each of the 10 topics (in order) and writes
AI-Portfolio-Class-Concepts-ClickPerBeat.pptx here.
"""
import json
import sys
from pathlib import Path

from lxml import etree
from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn
from pptx.util import Emu, Pt

sys.stdout.reconfigure(encoding="utf-8")

HERE = Path(__file__).resolve().parent
BEATS_DIR = HERE / "beats"
OUT = HERE / "AI-Portfolio-Class-Concepts-ClickPerBeat-v3.pptx"

TOPICS = [
    ("01-agent-loop", "What is an AI Agent?"),
    ("02-good-prompt", "Anatomy of a Good Prompt"),
    ("03-context-hallucination", "Context & Hallucination"),
    ("04-the-harness", "The Harness"),
    ("05-fix-it-formula", "How to Ask for a Fix"),
    ("06-mcp", "MCP — USB-C for AI"),
    ("07-agentic-rules-secrets", "Agentic AI, Rules & Secrets"),
    ("08-verify-everything", "Verify Everything"),
    ("09-git-cicd", "Git & CI/CD"),
    ("10-recap", "What You Actually Learned"),
]

# ── collect every beat across all 10 topics, in order ──
all_beats = []  # (topic_title, topic_idx, beat_idx, beat_count, clip_path, poster_path, note)
for topic_dir, topic_title in TOPICS:
    tdir = BEATS_DIR / topic_dir
    manifest = json.loads((tdir / "manifest.json").read_text(encoding="utf-8"))
    for i, entry in enumerate(manifest, 1):
        clip = tdir / entry["clip"]
        poster = tdir / entry["poster"]
        if not clip.exists():
            sys.exit(f"missing clip: {clip}")
        if not poster.exists():
            sys.exit(f"missing poster: {poster}")
        all_beats.append((topic_title, topic_dir, i, len(manifest), clip, poster, entry["note"]))

print(f"{len(all_beats)} beats collected across {len(TOPICS)} topics")

# ── same timing XML as the anagram deck's build_pptx.py: With Previous autoplay ──
P = "http://schemas.openxmlformats.org/presentationml/2006/main"
TIMING = """<p:timing xmlns:p="{P}"><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst>
<p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst>
<p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="indefinite"/><p:cond evt="onBegin" delay="0"><p:tn val="2"/></p:cond></p:stCondLst><p:childTnLst>
<p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>
<p:par><p:cTn id="5" presetID="1" presetClass="mediacall" presetSubtype="0" fill="hold" nodeType="withEffect"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst>
<p:cmd type="call" cmd="playFrom(0.0)"><p:cBhvr><p:cTn id="6" dur="{DUR}" fill="hold"/><p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cBhvr></p:cmd>
</p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par>
</p:childTnLst></p:cTn><p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst>
<p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq>
<p:video><p:cMediaNode vol="80000"><p:cTn id="7" fill="hold" display="0"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst>
<p:endCondLst><p:cond evt="onStopAudio" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:endCondLst></p:cTn>
<p:tgtEl><p:spTgt spid="{SPID}"/></p:tgtEl></p:cMediaNode></p:video>
</p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>"""

prs = Presentation()
prs.slide_width, prs.slide_height = Emu(12192000), Emu(6858000)  # 16:9
W, H = prs.slide_width, prs.slide_height
blank = prs.slide_layouts[6]


def black_background(slide):
    fill = slide.background.fill
    fill.solid()
    fill.fore_color.rgb = RGBColor(0, 0, 0)


# ── slide 1: blank title, click to start (same as anagram deck's slide 1) ──
s0 = prs.slides.add_slide(blank)
black_background(s0)

title_box = s0.shapes.add_textbox(Emu(365760), Emu(2700000), W - Emu(731520), Emu(640080))
tf = title_box.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.alignment = 2  # center
r1 = p.add_run()
r1.text = "Build Your Portfolio with AI"
r1.font.bold = True
r1.font.size = Pt(36)
r1.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
r1.font.name = "Arial"

sub_box = s0.shapes.add_textbox(Emu(365760), Emu(3400000), W - Emu(731520), Emu(320040))
tf2 = sub_box.text_frame
p2 = tf2.paragraphs[0]
p2.alignment = 2
r2 = p2.add_run()
r2.text = "Click to begin — one click, one step"
r2.font.size = Pt(14)
r2.font.color.rgb = RGBColor(0x9A, 0x9A, 0xA0)
r2.font.name = "Arial"

s0.notes_slide.notes_text_frame.text = (
    f"Click to start. {len(all_beats)} total clicks across 10 topics. One click = one beat -- "
    "explain what just appeared, then click for the next thing. Present (F5); don't edit the slides."
)

# ── one slide per beat ──
for k, (topic_title, topic_dir, beat_i, beat_n, clip, poster, note) in enumerate(all_beats, 1):
    slide = prs.slides.add_slide(blank)
    black_background(slide)

    movie = slide.shapes.add_movie(
        str(clip), 0, 0, W, H, poster_frame_image=str(poster), mime_type="video/mp4",
    )
    movie.name = f"beat{k:03d}"

    sld = slide._element
    for old in sld.findall(qn("p:timing")):
        sld.remove(old)

    # duration in ms from the clip itself (ffprobe not needed -- re-derive from manifest start/end not stored here,
    # so probe the clip file directly for an exact value)
    import subprocess as sp
    dur_s = float(sp.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of",
         "default=noprint_wrappers=1:nokey=1", str(clip)], capture_output=True, text=True, check=True,
    ).stdout.strip())
    dur_ms = round(dur_s * 1000)

    timing_el = etree.fromstring(
        TIMING.replace("{P}", P).replace("{SPID}", str(movie.shape_id)).replace("{DUR}", str(dur_ms))
    )
    ext = sld.find(qn("p:extLst"))
    if ext is not None:
        ext.addprevious(timing_el)
    else:
        sld.append(timing_el)

    cc = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, W, H)
    cc.name = "click-catcher"
    cc.fill.solid()
    cc.fill.fore_color.rgb = RGBColor(0, 0, 0)
    srgb = cc.fill._xPr.find(qn("a:solidFill")).find(qn("a:srgbClr"))
    etree.SubElement(srgb, qn("a:alpha")).set("val", "0")
    cc.line.fill.background()
    cc.shadow.inherit = False

    slide.notes_slide.notes_text_frame.text = (
        f"click {k}/{len(all_beats)} · {topic_title} ({beat_i}/{beat_n})\nSAYS: \"{note}\""
    )

prs.save(OUT)
print(f"\ndeck: {OUT}  ({OUT.stat().st_size / 1e6:.1f} MB, {len(prs.slides)} slides)")

# ── structural gates ──
check = Presentation(OUT)
slides = list(check.slides)
assert len(slides) == len(all_beats) + 1, f"expected {len(all_beats)+1} slides, got {len(slides)}"
for i, slide in enumerate(slides[1:], 1):
    shapes = list(slide.shapes)
    movie = shapes[0]
    assert shapes[-1].name == "click-catcher", f"slide {i+1}: click-catcher is not front-most"
    t = slide._element.find(qn("p:timing"))
    assert t is not None, f"slide {i+1}: no timing element"
    calls = t.findall(".//" + qn("p:cmd"))
    assert len(calls) == 1 and calls[0].get("cmd") == "playFrom(0.0)", f"slide {i+1}: expected one playFrom"
    ctn = calls[0].getparent().getparent()
    assert ctn.get("nodeType") == "withEffect" and ctn.get("presetClass") == "mediacall", f"slide {i+1}: wrong trigger"
    spids = {e.get("spid") for e in t.iter(qn("p:spTgt"))}
    assert spids == {str(movie.shape_id)}, f"slide {i+1}: timing targets {spids}, movie is {movie.shape_id}"
    tr = slide._element.find(qn("p:transition"))
    assert tr is None, f"slide {i+1}: has an auto-advance transition, should be click-only"
    order = tuple(etree.QName(c).localname for c in slide._element)
    assert order == ("cSld", "clrMapOvr", "timing"), f"slide {i+1}: element order {order}"
print(f"deck gates: {len(slides)-1} beat slides — each has one auto-play media call, trigger With Previous, "
      "click-catcher in front, NO auto-advance (click-only), valid element order, speaker notes")
