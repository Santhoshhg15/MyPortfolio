<#
  build_deck.ps1
  Builds AI-Portfolio-Class-Concepts.pptx via live PowerPoint COM automation.

  Behavior per slide:
    - Slide 1 (title/agenda): click-only advance, no timer. Each agenda entry
      is a hyperlink that jumps straight to its topic slide.
    - Slides 2-11 (one per concept video): full-bleed (0,0,960,540 pt = the
      whole 16:9 canvas), video auto-plays the instant the slide appears
      (MediaPlay effect, trigger=WithPrevious), and the slide auto-advances
      to the next one when that clip's own duration elapses (+0.2s buffer),
      so the deck plays straight through after one initial click. A manual
      click still works too, as a trainer override.

  Requires: desktop PowerPoint, closed before you run this (the script checks
  and will refuse to run if POWERPNT.exe is already open -- save your work
  and close it first).

  Run from PowerShell, in this folder:
      powershell -ExecutionPolicy Bypass -File build_deck.ps1
#>

$ErrorActionPreference = "Stop"

# ---------- safety: refuse to run if PowerPoint is already open ----------
$existing = Get-Process POWERPNT -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "PowerPoint is currently running. Please save and close all open presentations, then run this script again." -ForegroundColor Red
    exit 1
}

$root = $PSScriptRoot
$videoDir = Join-Path $root "videos"
$posterDir = Join-Path $root "posters"
$outPath = Join-Path $root "AI-Portfolio-Class-Concepts.pptx"

if (Test-Path $outPath) { Remove-Item $outPath -Force }

# ---------- deck content ----------
# file, title, duration-in-seconds (ffprobe-measured, exact)
$topics = @(
    @{ file = "01-agent-loop.mp4";              title = "What is an AI Agent?";            dur = 18.0 },
    @{ file = "02-good-prompt.mp4";              title = "Anatomy of a Good Prompt";        dur = 14.0 },
    @{ file = "03-context-hallucination.mp4";    title = "Context & Hallucination";         dur = 15.0 },
    @{ file = "04-the-harness.mp4";              title = "The Harness";                     dur = 15.5 },
    @{ file = "05-fix-it-formula.mp4";           title = "How to Ask for a Fix";             dur = 15.5 },
    @{ file = "06-mcp.mp4";                      title = "MCP - USB-C for AI";               dur = 17.0 },
    @{ file = "07-agentic-rules-secrets.mp4";    title = "Agentic AI, Rules & Secrets";      dur = 17.0 },
    @{ file = "08-verify-everything.mp4";        title = "Verify Everything";                dur = 15.0 },
    @{ file = "09-git-cicd.mp4";                 title = "Git & CI/CD";                      dur = 16.0 },
    @{ file = "10-recap.mp4";                    title = "What You Actually Learned";        dur = 16.0 }
)

$ADVANCE_BUFFER = 0.2  # seconds added to each clip's duration before auto-advance fires

# ---------- constants ----------
$ppLayoutBlank = 12
$msoShapeRectangle = 1
$ppMouseClick = 1
$ppActionHyperlink = 7
$ppActionNone = 0
$BLACK = 0  # RGB packed as R + G*256 + B*65536

Write-Host "Starting PowerPoint..."
$ppt = New-Object -ComObject PowerPoint.Application
$ppt.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
$pres = $ppt.Presentations.Add()

# Widescreen 16:9, in points (72 pt = 1 inch): 13.333in x 7.5in
$W = 960
$H = 540
$pres.PageSetup.SlideWidth = $W
$pres.PageSetup.SlideHeight = $H

function Set-BlackBackground($slide) {
    $slide.FollowMasterBackground = [Microsoft.Office.Core.MsoTriState]::msoFalse
    $slide.Background.Fill.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
    $slide.Background.Fill.Solid()
    $slide.Background.Fill.ForeColor.RGB = $BLACK
}

# ---------- Slide 1: title + agenda ----------
Write-Host "Building slide 1 (title/agenda)..."
$s1 = $pres.Slides.Add(1, $ppLayoutBlank)
Set-BlackBackground $s1

$titleBox = $s1.Shapes.AddTextbox(1, 40, 40, $W - 80, 70)   # msoTextOrientationHorizontal=1
$titleBox.TextFrame.TextRange.Text = "Build Your Portfolio with AI"
$titleBox.TextFrame.TextRange.Font.Size = 36
$titleBox.TextFrame.TextRange.Font.Bold = [Microsoft.Office.Core.MsoTriState]::msoTrue
$titleBox.TextFrame.TextRange.Font.Color.RGB = 16777215  # white
$titleBox.TextFrame.TextRange.Font.Name = "Arial"

$subBox = $s1.Shapes.AddTextbox(1, 40, 105, $W - 80, 36)
$subBox.TextFrame.TextRange.Text = "Click to begin - plays straight through all 10 topics"
$subBox.TextFrame.TextRange.Font.Size = 14
$subBox.TextFrame.TextRange.Font.Color.RGB = 10395294  # dim grey (approx #9E9E9E as BGR-ish)
$subBox.TextFrame.TextRange.Font.Name = "Arial"

$colW = ($W - 80 - 20) / 2
$rowH = 42
$startY = 165

for ($i = 0; $i -lt $topics.Count; $i++) {
    $col = [math]::Floor($i / 5)
    $row = $i % 5
    $x = 40 + $col * ($colW + 20)
    $y = $startY + $row * $rowH

    $entry = $s1.Shapes.AddTextbox(1, $x, $y, $colW, $rowH - 6)
    $num = "{0:D2}" -f ($i + 1)
    $entry.TextFrame.TextRange.Text = "$num   $($topics[$i].title)"
    $entry.TextFrame.TextRange.Font.Size = 13
    $entry.TextFrame.TextRange.Font.Bold = [Microsoft.Office.Core.MsoTriState]::msoTrue
    $entry.TextFrame.TextRange.Font.Color.RGB = 16777215
    $entry.TextFrame.TextRange.Font.Name = "Arial"
    $entry.TextFrame.WordWrap = [Microsoft.Office.Core.MsoTriState]::msoFalse

    # hyperlink wired after all slides exist (see below) -- stash the shape
    $entry | Add-Member -NotePropertyName TopicIndex -NotePropertyValue $i -Force
    if (-not $script:agendaEntries) { $script:agendaEntries = @() }
    $script:agendaEntries += $entry
}

$s1.SlideShowTransition.AdvanceOnClick = [Microsoft.Office.Core.MsoTriState]::msoTrue
$s1.SlideShowTransition.AdvanceOnTime = [Microsoft.Office.Core.MsoTriState]::msoFalse

# ---------- Slides 2..11: one per video, full-bleed, autoplay, auto-advance ----------
$contentSlides = @()
for ($i = 0; $i -lt $topics.Count; $i++) {
    $t = $topics[$i]
    $slideIndex = $i + 2
    Write-Host "Building slide $slideIndex ($($t.title))..."

    $videoPath = Join-Path $videoDir $t.file
    $posterPath = Join-Path $posterDir ($t.file -replace '\.mp4$', '.jpg')

    $s = $pres.Slides.Add($slideIndex, $ppLayoutBlank)
    Set-BlackBackground $s

    # full-bleed media, embedded (LinkToFile=0, SaveWithDocument=-1)
    $sh = $s.Shapes.AddMediaObject2($videoPath, 0, -1, 0, 0, $W, $H)
    $sh.MediaFormat.Volume = 1.0
    $sh.MediaFormat.Muted = [Microsoft.Office.Core.MsoTriState]::msoFalse
    $sh.MediaFormat.SetDisplayPictureFromFile($posterPath)

    # MediaPlay (83), level 0, trigger 2 = WithPrevious: one click both
    # advances the slide and starts the clip.
    $null = $s.TimeLine.MainSequence.AddEffect($sh, 83, 0, 2)

    # click-catcher: fully transparent rect, front-most, action=None, so a
    # click anywhere (including the bottom control-bar area) falls through
    # to the show instead of pausing the clip.
    $r = $s.Shapes.AddShape($msoShapeRectangle, 0, 0, $W, $H)
    $r.Fill.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
    $r.Fill.Solid()
    $r.Fill.ForeColor.RGB = 16777215
    $r.Fill.Transparency = 1.0
    $r.Line.Visible = [Microsoft.Office.Core.MsoTriState]::msoFalse
    $r.Shadow.Visible = [Microsoft.Office.Core.MsoTriState]::msoFalse
    $r.Name = "click-catcher"
    $r.ZOrder(0)  # msoBringToFront
    if ($r.ZOrderPosition -ne $s.Shapes.Count) {
        throw "Slide $slideIndex click-catcher is not front-most"
    }
    $r.ActionSettings($ppMouseClick).Action = $ppActionNone

    # auto-advance once this clip's own duration elapses (plus a small buffer);
    # a manual click still works too, as a trainer override.
    $s.SlideShowTransition.AdvanceOnClick = [Microsoft.Office.Core.MsoTriState]::msoTrue
    $s.SlideShowTransition.AdvanceOnTime = [Microsoft.Office.Core.MsoTriState]::msoTrue
    $s.SlideShowTransition.AdvanceTime = $t.dur + $ADVANCE_BUFFER

    $contentSlides += $s
}

# wire agenda hyperlinks now that every target slide exists
Write-Host "Wiring agenda hyperlinks..."
foreach ($entry in $script:agendaEntries) {
    $target = $contentSlides[$entry.TopicIndex]
    $entry.ActionSettings($ppMouseClick).Action = $ppActionHyperlink
    $entry.ActionSettings($ppMouseClick).Hyperlink.SubAddress = "$($target.SlideIndex),1,$($target.Name)"
}

# ---------- global show settings ----------
Write-Host "Setting show options..."
$sss = $pres.SlideShowSettings
$sss.ShowType = 1              # ppShowTypeSpeaker
$sss.ShowWithNarration = [Microsoft.Office.Core.MsoTriState]::msoTrue
$sss.ShowWithAnimation = [Microsoft.Office.Core.MsoTriState]::msoTrue
$sss.LoopUntilStopped = [Microsoft.Office.Core.MsoTriState]::msoFalse
$sss.ShowMediaControls = [Microsoft.Office.Core.MsoTriState]::msoFalse

Write-Host "Saving to $outPath ..."
$pres.SaveAs($outPath)
$pres.Close()
$ppt.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($ppt) | Out-Null
[GC]::Collect()
[GC]::WaitForPendingFinalizers()
Start-Sleep -Seconds 1

# ---------- verify by reopening from disk ----------
Write-Host ""
Write-Host "Reopening to verify..." -ForegroundColor Cyan
$ppt2 = New-Object -ComObject PowerPoint.Application
$ppt2.Visible = [Microsoft.Office.Core.MsoTriState]::msoTrue
$pres2 = $ppt2.Presentations.Open($outPath, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoTrue)

$allOk = $true
for ($i = 0; $i -lt $topics.Count; $i++) {
    $slideIndex = $i + 2
    $s = $pres2.Slides.Item($slideIndex)
    $mediaShape = $s.Shapes | Where-Object { $_.Name -ne "click-catcher" -and $_.Type -eq 16 } | Select-Object -First 1
    $catcher = $s.Shapes | Where-Object { $_.Name -eq "click-catcher" } | Select-Object -First 1

    $ok = $true
    if (-not $mediaShape) { Write-Host "  slide $slideIndex : NO MEDIA SHAPE FOUND" -ForegroundColor Red; $ok = $false }
    else {
        $eff = $s.TimeLine.MainSequence.Item(1)
        if ($eff.EffectType -ne 83) { Write-Host "  slide $slideIndex : EffectType is $($eff.EffectType), expected 83" -ForegroundColor Red; $ok = $false }
        if ($eff.Timing.TriggerType -ne 2) { Write-Host "  slide $slideIndex : TriggerType is $($eff.Timing.TriggerType), expected 2 (WithPrevious)" -ForegroundColor Red; $ok = $false }
    }
    if (-not $catcher) { Write-Host "  slide $slideIndex : NO CLICK-CATCHER" -ForegroundColor Red; $ok = $false }
    elseif ($catcher.ZOrderPosition -ne $s.Shapes.Count) { Write-Host "  slide $slideIndex : click-catcher not front-most" -ForegroundColor Red; $ok = $false }
    if (-not $s.SlideShowTransition.AdvanceOnTime) { Write-Host "  slide $slideIndex : AdvanceOnTime is off" -ForegroundColor Red; $ok = $false }

    if ($ok) { Write-Host "  slide $slideIndex : OK  (plays $($topics[$i].file), auto-advance at $([math]::Round($topics[$i].dur + $ADVANCE_BUFFER,1))s)" -ForegroundColor Green }
    else { $allOk = $false }
}

$pres2.Close()
$ppt2.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($ppt2) | Out-Null
[GC]::Collect()
[GC]::WaitForPendingFinalizers()

Write-Host ""
if ($allOk) {
    Write-Host "ALL SLIDES VERIFIED OK." -ForegroundColor Green
    Write-Host "Deck saved to: $outPath"
} else {
    Write-Host "SOME SLIDES FAILED VERIFICATION -- see above. Do not present this deck until fixed." -ForegroundColor Red
    exit 1
}
