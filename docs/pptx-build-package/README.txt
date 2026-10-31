AI PORTFOLIO CLASS — PPTX BUILD PACKAGE
=========================================

This folder builds a PowerPoint deck where:
  - Slide 1 is a title/agenda screen (click any topic to jump to it, or just
    click once to start from the top).
  - Slides 2-11 are one per concept video, shown FULL SCREEN (no margins —
    your videos are 3840x2160, exact 16:9, same shape as the slide, so they
    fill it edge to edge with zero letterboxing).
  - Each video auto-plays the instant its slide appears.
  - When that video finishes, the deck automatically advances to the next
    slide and its video starts — so after one initial click, it plays
    straight through all 10 topics with no further clicking needed. You can
    still click early on any slide to skip ahead manually if you want.

WHAT'S IN THIS FOLDER
----------------------
  videos\      the 10 final 4K (3840x2160) concept clips
  posters\     a first-frame still of each clip (used as the slide's poster
               image so it doesn't flash before the video starts)
  build_deck.ps1   the build script — run this
  README.txt   this file

HOW TO BUILD IT
-----------------
1. Make sure PowerPoint is CLOSED (save and close any open presentations —
   the script will refuse to run otherwise, and will tell you so).

2. Copy this whole folder onto the machine that has PowerPoint installed.

3. Open PowerShell, cd into this folder, and run:

       powershell -ExecutionPolicy Bypass -File build_deck.ps1

4. It will open PowerPoint (you'll see it flash onto screen — that's normal,
   it's building the deck live through automation), build all 11 slides,
   save the file, then reopen it and verify every slide's video effect,
   click-catcher, and auto-advance timing before declaring success.

5. On success you'll see "ALL SLIDES VERIFIED OK" and the finished file:

       AI-Portfolio-Class-Concepts.pptx

   in this same folder.

6. If it prints "SOME SLIDES FAILED VERIFICATION", do not present that file —
   it will list exactly which slide(s) and what's wrong. Send me that output.

BEFORE YOU PRESENT
---------------------
- Run it through once start-to-finish in Slide Show mode (F5) to confirm the
  auto-advance pacing feels right. Each slide is timed to its own clip's
  exact length (ffprobe-measured) plus a small 0.2s buffer, so the next
  video should start right as the previous one ends — but PowerPoint's own
  timer isn't frame-perfect, so a tiny gap or overlap is possible depending
  on the machine. If the hand-off feels off (too early/late), open the
  relevant slide's "Transitions" tab and nudge its "After" time slightly.
- A click anywhere on a slide — including near the bottom where PowerPoint's
  hover media controls appear — advances the show rather than pausing the
  video (that's what the invisible full-slide "click-catcher" shape is for).
  Don't try to click directly on the on-screen video scrubber/controls; they
  may still be reachable in rare cases and would pause playback instead.
- Keep the .pptx and nothing else needed — all 10 videos are embedded
  directly in the file (not linked externally), so it's one self-contained
  file, expect it to be large (tens of MB, same order as the embedded videos).

WHY THIS NEEDED A MACHINE WITH POWERPOINT
--------------------------------------------
The "one click both advances the slide and plays the video" effect, the
invisible click-catcher, and the per-slide auto-advance timing are all real
PowerPoint animation/timing features that only PowerPoint itself can write
correctly into the file — there's no way to produce a working version of this
through python-pptx or similar libraries. The build script drives PowerPoint
live via COM automation to construct it, which is why it has to run on a
machine where PowerPoint is actually installed.
