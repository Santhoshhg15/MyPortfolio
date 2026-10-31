"""Build the AI Portfolio concept deck as a click-per-step, auto-advancing PPTX.

No PowerPoint needed: python-pptx writes the deck, and each slide gets the same
timing XML PowerPoint itself writes for a video that plays automatically when the
slide starts ("With Previous" media call) -- same pattern as the Anagram deck's
build_pptx.py. On top of that, each slide also gets a <p:transition advTm="..."/>
set to that clip's own duration, so after one initial click the deck plays straight
through: click starts slide 2's video, and when it ends the slide auto-advances to
slide 3, plays, auto-advances again, and so on through slide 11. A click still works
too, as a manual override.

Usage:
  py -3.12 build_pptx_no_powerpoint.py
Run from this folder (docs/pptx-build-package/) -- it reads videos/ and posters/
next to it and writes AI-Portfolio-Class-Concepts.pptx here.
"""
import json
import subprocess
import sys
from pathlib import Path

from lxml import etree
from pptx import Presentation
from pptx.dml.color import RGBColor
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn
from pptx.util import Emu

sys.stdout.reconfigure(encoding="utf-8")

HERE = Path(__file__).resolve().parent
VIDEO_DIR = HERE / "videos"
POSTER_DIR = HERE / "posters"
OUT = HERE / "AI-Portfolio-Class-Concepts.pptx"
ADVANCE_BUFFER_MS = 200  # grace added after the clip's measured duration before auto-advance fires

TOPICS = [
    ("01-agent-loop.mp4", "What is an AI Agent?"),
    ("02-good-prompt.mp4", "Anatomy of a Good Prompt"),
    ("03-context-hallucination.mp4", "Context & Hallucination"),
    ("04-the-harness.mp4", "The Harness"),
    ("05-fix-it-formula.mp4", "How to Ask for a Fix"),
    ("06-mcp.mp4", "MCP — USB-C for AI"),
    ("07-agentic-rules-secrets.mp4", "Agentic AI, Rules & Secrets"),
    ("08-verify-everything.mp4", "Verify Everything"),
    ("09-git-cicd.mp4", "Git & CI/CD"),
    ("10-recap.mp4", "What You Actually Learned"),
]


def probe_duration_ms(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "json", str(path)],
        capture_output=True, text=True, check=True,
    ).stdout
    return round(float(json.loads(out)["format"]["duration"]) * 1000)


def has_audio(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-select_streams", "a", "-show_entries", "stream=codec_type", "-of", "json", str(path)],
        capture_output=True, text=True, check=True,
    ).stdout
    return bool(json.loads(out).get("streams"))


# ── probe every clip up front ──
clips = []
for fname, title in TOPICS:
    path = VIDEO_DIR / fname
    if not path.exists():
        sys.exit(f"missing video: {path}")
    if has_audio(path):
        print(f"note: {fname} has an audio stream (expected silent, narrated live) -- continuing anyway")
    dur_ms = probe_duration_ms(path)
    poster = POSTER_DIR / (path.stem + ".jpg")
    if not poster.exists():
        sys.exit(f"missing poster: {poster}")
    clips.append({"file": path, "title": title, "dur_ms": dur_ms, "poster": poster})
    print(f"  {fname:32s} {dur_ms/1000:6.1f}s  poster ok")

# ── timing XML: same shape as the Anagram deck's build_pptx.py ──
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


# ── slide 1: title + agenda, click-only (no auto-advance) ──
s0 = prs.slides.add_slide(blank)
black_background(s0)

title_box = s0.shapes.add_textbox(Emu(365760), Emu(365760), W - Emu(731520), Emu(640080))
tf = title_box.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
r1 = p.add_run(); r1.text = "Build Your Portfolio with AI"; r1.font.bold = True
r1.font.size = __import__("pptx").util.Pt(36)
r1.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
r1.font.name = "Arial"

sub_box = s0.shapes.add_textbox(Emu(365760), Emu(960120), W - Emu(731520), Emu(320040))
tf2 = sub_box.text_frame
p2 = tf2.paragraphs[0]
r2 = p2.add_run(); r2.text = "Click to begin — plays straight through all 10 topics"
r2.font.size = __import__("pptx").util.Pt(14)
r2.font.color.rgb = RGBColor(0x9A, 0x9A, 0xA0)
r2.font.name = "Arial"

target_slides = []  # filled in after we build slides 2..11

# layout for the 10 agenda entries, two columns of five
from pptx.util import Pt, Emu as E
col_w = (W - E(731520) - E(182880)) // 2
row_h = E(384048)
start_y = E(1508760)

agenda_shapes = []
for i, (fname, title) in enumerate(TOPICS):
    col = i // 5
    row = i % 5
    x = E(365760) + col * (col_w + E(182880))
    y = start_y + row * row_h
    box = s0.shapes.add_textbox(x, y, col_w, row_h - E(54864))
    box.text_frame.word_wrap = True
    para = box.text_frame.paragraphs[0]
    run = para.add_run()
    run.text = f"{i+1:02d}   {title}"
    run.font.size = Pt(13)
    run.font.bold = True
    run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
    run.font.name = "Arial"
    agenda_shapes.append(box)

s0.notes_slide.notes_text_frame.text = (
    "Click to start. Plays straight through all 10 topics automatically; "
    "click an agenda entry to jump to a specific topic; a manual click on any "
    "topic slide also advances early if needed."
)

# ── slides 2..11: one per concept video, full-bleed, autoplay, auto-advance ──
for k, (clip_info, (fname, title)) in enumerate(zip(clips, TOPICS), 1):
    slide = prs.slides.add_slide(blank)
    black_background(slide)

    movie = slide.shapes.add_movie(
        str(clip_info["file"]), 0, 0, W, H,
        poster_frame_image=str(clip_info["poster"]), mime_type="video/mp4",
    )
    movie.name = f"topic{k:02d}"

    sld = slide._element
    for old in sld.findall(qn("p:timing")):
        sld.remove(old)

    dur_ms = clip_info["dur_ms"]
    timing_el = etree.fromstring(
        TIMING.replace("{P}", P).replace("{SPID}", str(movie.shape_id)).replace("{DUR}", str(dur_ms))
    )
    transition_el = etree.fromstring(
        f'<p:transition xmlns:p="{P}" spd="med" advClick="1" advTm="{dur_ms + ADVANCE_BUFFER_MS}"/>'
    )

    ext = sld.find(qn("p:extLst"))
    if ext is not None:
        ext.addprevious(transition_el)
        ext.addprevious(timing_el)
    else:
        sld.append(transition_el)
        sld.append(timing_el)

    cc = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, W, H)
    cc.name = "click-catcher"
    cc.fill.solid()
    cc.fill.fore_color.rgb = RGBColor(0, 0, 0)
    srgb = cc.fill._xPr.find(qn("a:solidFill")).find(qn("a:srgbClr"))
    etree.SubElement(srgb, qn("a:alpha")).set("val", "0")
    cc.line.fill.background()
    cc.shadow.inherit = False

    slide.notes_slide.notes_text_frame.text = f"{k}/10 · {title}\nauto-advances after {dur_ms/1000:.1f}s"
    target_slides.append(slide)

# wire agenda hyperlinks now that target slides exist
for shape, target in zip(agenda_shapes, target_slides):
    shape.click_action.target_slide = target

prs.save(OUT)
print(f"\ndeck: {OUT}  ({OUT.stat().st_size / 1e6:.1f} MB, {len(prs.slides)} slides)")

# ── structural gates (no PowerPoint available to click-test here) ──
check = Presentation(OUT)
slides = list(check.slides)
assert len(slides) == 11, f"expected 11 slides, got {len(slides)}"
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
    assert tr is not None, f"slide {i+1}: no transition element"
    assert tr.get("advTm") is not None and int(tr.get("advTm")) > 0, f"slide {i+1}: bad advTm"
    assert tr.get("advClick") == "1", f"slide {i+1}: advClick should stay enabled as manual override"
    order = tuple(etree.QName(c).localname for c in slide._element)
    assert order == ("cSld", "clrMapOvr", "transition", "timing"), f"slide {i+1}: element order {order}"
print(f"deck gates: {len(slides)-1} topic slides — each has one auto-play media call, trigger With Previous, "
      "click-catcher in front, a timed auto-advance transition, valid element order, speaker notes")
