# AI tools for solo video production

Screen-only + your own voice, 187 videos, macOS, solo.

> Names and prices reflect mid-2026 — verify current pricing before subscribing.
> Costs below are indicative, in USD, per month unless marked one-time.

---

## Stage 1 · Recording — auto-zoom is the big one

For screen-only code teaching this is where AI helps most and where people don't
look. A plain OBS capture of a 1080p editor is flat and hard to follow. These
tools add cursor-aware zoom and motion automatically.

| Tool | What it does | Cost |
|---|---|---|
| **Screen Studio** ⭐ | Records your screen, then automatically zooms toward whatever you click, smooths cursor motion, and adds motion blur. Output looks professionally edited with zero effort | ~$89–229 one-time |
| Focusee | Cheaper auto-zoom on cursor | ~$50 one-time |
| Cursorful | Browser-based, auto-zoom | free tier |
| OBS Studio | No AI, total control, free. Pair with a cursor-highlight utility | free |

**Pick: Screen Studio.** For 186 screen videos, automatic zoom-to-cursor is worth
more than any editing feature. It solves the "viewer lost the cursor" problem at
the source instead of you adding zooms manually 187 times.

## Stage 2 · Editing — text-based editing and silence removal

| Tool | What it does | Cost |
|---|---|---|
| **Descript** ⭐ | Transcribes, then you edit video by editing text. One-click filler-word removal, gap removal, Studio Sound. Overdub fixes a misspoken word in your own voice | ~$24–50 |
| Recut | Does one thing: strips silence automatically. Very fast, very cheap | ~$99 one-time |
| TimeBolt | Same idea, also cuts filler | ~$99 one-time |
| Premiere Pro | Text-Based Editing + Enhance Speech | ~$23 |
| CapCut | Free, auto-captions, auto-cut | free |
| Final Cut Pro | Mac-native, less AI | ~$300 one-time |

**Pick: Descript.** Removing every "um" across 37 hours by hand is weeks of work.
If budget is tight, **Recut** gets you 70% of the benefit for a one-time fee.

## Stage 3 · Audio — this is your entire presence

| Tool | What it does | Cost |
|---|---|---|
| **Adobe Podcast Enhance** ⭐ | Upload a WAV, get studio-grade audio back. Removes room echo better than most paid plugins | **free** |
| Auphonic | Automatic loudness normalisation — keeps all 187 files at consistent volume | free tier / ~$11 |
| Krisp | Real-time noise removal (fans, traffic, keyboard) | free tier / ~$8 |
| iZotope RX Repair Assistant | Pro-grade AI repair for damaged recordings | ~$300 one-time |
| Descript Studio Sound | Same idea, inside Descript | included |

**Pick: Adobe Enhance (free) + Auphonic.** Enhance fixes the room; Auphonic makes
video 140 the same loudness as video 3. Consistency across a long course is a
quality signal buyers notice subconsciously.

## Stage 4 · Captions and transcripts

| Tool | What it does | Cost |
|---|---|---|
| **MacWhisper** ⭐ | Whisper with a Mac GUI. Runs locally, unlimited, best accuracy on technical words | free / ~$30 one-time pro |
| Whisper / WhisperX | CLI, free, better timestamps with WhisperX | free |
| Descript | Exports SRT from the edit | included |
| Happy Scribe / Rev | Paid, near-human accuracy | ~$0.20/min |

**Pick: MacWhisper.** Free, offline, no per-minute cost across 37 hours. Build a
custom vocabulary once — `flexbox`, `minmax`, `auto-fit`, `pseudo-element`,
`Prisma`, `NestJS` — and reuse it. Always proofread `<div>` and `rem`.

## Stage 5 · Scripting and code — where Claude fits

You already have `beat-sheets.md`: every video split into timed beats. Use it as
the prompt input.

- **Claude / ChatGPT** — turn each beat into 3–4 talking points; write the
  before/after code for each video; generate solutions for all 18 assignments;
  draft lesson descriptions and quiz questions
- **NotebookLM** — load the whole curriculum, then ask "what does a learner still
  not know after Beginner Module 4?" Good for spotting ordering gaps
- **Cursor / Claude Code / Copilot** — build the starter and solution repos.
  Always run the output; AI CSS looks right and is subtly wrong often enough

Prompt that works:

> Here's one video from my HTML & CSS course — title, duration, and the beats it
> must cover. Absolute beginners, hands-on, no slides. Give me talking points per
> beat, the likely point of confusion, and the exact before/after code.

## Stage 6 · Diagrams and visual explainers

You need these for videos like "How Websites Work" and "Requests and responses".

| Tool | What it does | Cost |
|---|---|---|
| **Claude → Mermaid** ⭐ | Describe the flow, get diagram code, render and screenshot | included |
| Napkin AI | Paste text, get an editable diagram | free tier |
| Excalidraw | Hand-drawn look, has text-to-diagram | free |
| Whimsical AI | Flowcharts from a prompt | free tier |

**Pick: Claude → Mermaid**, styled with your own site colours so diagrams match
the course.

## Stage 7 · Thumbnails and course art

| Tool | What it does | Cost |
|---|---|---|
| **Ideogram** ⭐ | The one that renders text in images correctly — which is the whole job for thumbnails | ~$8 |
| Canva Magic Studio | Templates, background removal, fastest at volume | ~$13 |
| Adobe Firefly | Commercially safe training data | ~$5 |
| Recraft | Strong on vector and UI-style art | ~$12 |
| Midjourney | Best-looking, worst at text | ~$10 |

Cheapest and most on-brand: build thumbnails as **HTML/CSS** using your own
tokens and screenshot at 1280×720. You teach this exact skill.

## Stage 8 · Hindi versions (optional, real upside)

Your schema already advertises English and Hindi. Two routes:

- **Record Hindi yourself** — best quality, doubles production time
- **ElevenLabs Dubbing** or **HeyGen Video Translate** — clones your voice into
  Hindi from the English track. Screen-only content dubs far better than talking
  heads because there are no lips to sync

For a screen-share course this is unusually viable. Test on one video before
committing, and disclose that the dub is AI-generated.

## Stage 9 · Marketing (after you ship, not before)

| Tool | What it does | Cost |
|---|---|---|
| Opus Clip / Vizard | Cuts shorts out of long videos automatically | ~$29 |
| Castmagic | Titles, descriptions, social posts from audio | ~$34 |
| vidIQ / Taja | YouTube titles and SEO | ~$10 |

Ignore all of these until the Beginner section is published.

---

## Recommended stack

| Stage | Tool | Cost |
|---|---|---|
| Record | Screen Studio | ~$89–229 one-time |
| Edit | Descript Creator | ~$24/mo |
| Audio | Adobe Podcast Enhance | free |
| Loudness | Auphonic | free tier |
| Captions | MacWhisper | free |
| Script / code / diagrams | Claude | existing |
| Thumbnails | Ideogram | ~$8/mo |

**~$32/month plus a one-time ~$150.**

**Free-only version:** OBS + CapCut + Adobe Enhance + MacWhisper + Claude +
HTML/CSS thumbnails. Same finished quality, noticeably more of your time.

**If you buy only one thing:** Screen Studio. Auto-zoom on 186 screen videos is
the single largest quality-per-effort gain available to you.

---

## Deliberately not recommended

- **Avatar presenters** (Synthesia, HeyGen avatars, D-ID) — can't do code-along,
  and you've chosen your own voice and face
- **Full AI narration** (ElevenLabs reading the whole course) — word-level
  correction only. Dubbing to Hindi is a different, reasonable case
- **AI course generators** — they produce exactly the generic outline you replaced

## What AI won't do

Pacing, knowing when an explanation didn't land, choosing which of three valid
approaches a beginner meets first, and debugging live on camera. That last one is
your best footage — don't edit it out.

Realistic effect: production ratio drops from ~4–5× to ~2.5–3×. On 37h 20m that's
roughly **130 hours → 100 hours**. Real, worth having, not magic.
