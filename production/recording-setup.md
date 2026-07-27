# Recording setup — screen-only, own voice

186 of 187 videos are screen + voice. One video shows your face:
**Beginner · Module 1 · "Welcome and Course Introduction"** (8m, free preview).

---

## What this decision saves you

No camera, no lighting rig, no framing, no background, no wardrobe continuity,
no eye-line discipline — for 186 videos. You solve the face problem exactly once.

It also means you can record in any lighting, at any hour, looking however you
like. That flexibility is what makes 100 hours of production survivable around a
full-time job.

## What it makes critical

With no face to cut to, the viewer stares at your editor for 6–18 minutes at a
stretch. Two things carry the whole video: **legibility** and **your voice**.

### Legibility

Drop `vscode-recording-profile.json` into a dedicated VS Code profile
(Gear → Profiles → New Profile → "Recording"). Key points:

- **Font 20pt, terminal 18pt.** It looks ridiculous while you type. It is right.
- **The real test:** shrink the recording to 360px wide. If you can't read it, no
  one on a phone can.
- **Rule of thumb:** aim for 90–100 characters of visible width. If 200 characters
  fit on screen, your font is too small.
- **Autocomplete off.** This is the one people miss. If Copilot finishes the line
  while you're teaching a beginner to type it, the lesson is destroyed — the
  viewer can't tell what they were meant to write. All suggestion sources
  disabled in the profile.
- Record **1920×1080 native**, not 4K downscaled.

### Cursor visibility

Screen-only's biggest failure mode: the viewer loses your cursor and stops
following. Fix it before video 1.

- **KeyCastr** (free, open source, macOS) — displays keystrokes on screen.
  Essential when you use shortcuts, otherwise viewers see effects with no cause.
- **Presentify** or **Mouseposé** (macOS, one-time, cheap) — cursor highlight ring
  and click flashes.
- **ScreenFlow** has both built in if you'd rather record and edit in one app.

The profile also sets a 3px solid mint caret (`#34D399`) — findable at 1080p,
unlike the default thin blinking line.

### Voice

With no face, your voice *is* your presence. This is the one place to spend money.

- A ₹8–12k USB condenser or dynamic mic, **10–15cm from your mouth, slightly off
  axis** so plosives don't hit the capsule
- Room matters more than mic: rug, curtains, sofa, bookshelf. Never a bare room
  with a hard desk
- Record a 30-second test. Listen on phone speakers, then earphones. Do this
  before you record 40 videos, not after
- Run everything through **Adobe Podcast Enhance** (free) or Descript Studio Sound
- **Keyboard noise** is the classic screen-only problem — a loud mechanical
  keyboard through a condenser mic is unlistenable. Test yours. If it's harsh,
  switch to something quieter for recording, or use Krisp

---

## The one face video

It's your single most important video: first thing anyone sees, free to watch,
and the entire trust argument for a paid course.

### Record it last

After 40–50 screen videos you'll be relaxed, faster, and clear about what the
course actually is. Recording it on day one guarantees you re-record it.

### Don't shoot 8 minutes of talking head

Structure it against the beats you already have:

| Beat | Shot | Time |
|---|---|---|
| Who I am, why learn from me | **Face** | ~90s |
| What you'll learn | Screen | ~2m |
| How the course is structured | Screen — show the module list | ~2m |
| The three portfolio projects | Screen — show the finished sites | ~1.5m |
| How to practise effectively | Face or screen | ~1m |

Face for the credibility beat. Screen for the substance. Far easier to execute,
and more convincing — showing the three finished projects beats describing them.

### Gear you already own

- **Your phone's rear camera** beats almost any webcam. Mount it at eye level
- **One window as your light**, facing you, no overhead lights on
- Shoot 4K, downscale to 1080p in the edit — gives you room to reframe
- Record audio on your normal mic, not the phone, and sync in the edit

No camera purchase needed for one 90-second shot.

---

## Recording checklist

Tape this next to the monitor.

**Before the session**
- [ ] Recording VS Code profile active (font 20pt, autocomplete off)
- [ ] Browser zoom 110–125%, bookmarks bar hidden, one clean window
- [ ] Do Not Disturb on — macOS, phone, Slack, email
- [ ] KeyCastr and cursor highlight running
- [ ] Starter code at the correct state; finished version in a separate folder
- [ ] Beat sheet open on the second monitor
- [ ] 30-second audio test, listened back

**Per video**
- [ ] Say the outcome in the first 15 seconds
- [ ] One beat, one take — stop between beats
- [ ] Mistakes: debug them on camera, don't restart
- [ ] Say the shortcut out loud as you press it
- [ ] Recap in the last 20 seconds

**After the session**
- [ ] Files named `<section>-<module>-<no>-<slug>`
- [ ] Audio through Enhance / Studio Sound
- [ ] Update `tracker.csv`

---

## Session shape

Batch by module, not by video. A realistic 3-hour weekend block:

1. **0:00–0:20** — setup, audio test, review beat sheets for the module
2. **0:20–0:30** — write the finished code for all videos in the module, then
   reset to the starting state
3. **0:30–2:15** — record every video in the module back to back
4. **2:15–3:00** — audio cleanup, filler removal, export queue

That's roughly one module — 4–7 videos, 45–75 finished minutes — per block.
Beginner is 7 modules plus a 22-video project: about 10–12 blocks.
