# ClockStare

![ClockStare screenshot](https://github.com/user-attachments/assets/db2a563f-39bb-444a-98c2-6f52e024b8a7)

A focus timer that replaces the usual "entertaining" break with a deliberate,
low-stimulation reset — no music, no scrolling, no new content. Just a clock
and a blank wall.

Most productivity apps compete for your attention, even during breaks.
ClockStare gives it back.

## How it works

```
Focus (adjustable duration) → Stare Wall (adjustable duration) → Focus → ...
```

Instead of a typical relaxing break, finishing a Focus session drops you into
**Stare Wall** — a deliberately quiet screen with nothing to interact with.
It can't be skipped early; the countdown has to finish on its own, which is
the whole point — a real pause instead of another dismissible notification.

You're not locked into waiting, though: a **Stare Wall** button on the Focus
screen jumps straight into a break anytime, and a **Flow** mode gives you an
alternate, fullscreen flip-clock view of the same Focus session if you'd
rather watch the numbers than a photo background.

## Features

- **Focus timer** with an adjustable duration
- **Stare Wall break** — its own adjustable duration, no early exit, a
  background photo, and a short explanation of why the pause helps
- **Manual "Stare Wall" button** to jump straight into a break anytime,
  without waiting for the Focus countdown to finish
- **Flow mode** — a fullscreen, fliqlo-inspired flip-clock view of the same
  Focus countdown, with its own back button
- **Auto-rotating backgrounds** — 12 photos, rotating every 45 seconds,
  starting from a random image on each load
- **Fullscreen mode**, persistent across Focus, Stare Wall, and Flow
- **Session history** — a running count and a timestamped list of completed
  Focus sessions, saved locally so it survives a page refresh
- **Reset button** to restart the current countdown
- **Sound cue** on every Focus ↔ Stare Wall transition
- Built mobile-aware, with a clean, minimal, text-first interface

## Tech stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) for dev server and bundling
- Plain CSS — no UI framework
- Browser `localStorage` for session persistence (no backend/database)
- Optional [Vercel Analytics](https://vercel.com/analytics) for anonymous
  visit counts once deployed

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints in your terminal (usually
`http://localhost:5173`).

## Project structure

```
ClockStare/
├── public/
│   └── assets/            # background photos, favicon, Stare Wall image, Ring.mp3
├── src/
│   ├── components/
│   │   ├── Clock.jsx            # formats seconds as MM:SS (and H:MM:SS)
│   │   ├── FocusScreen.jsx      # main focus timer screen
│   │   ├── StareScreen.jsx      # the low-stimulation break screen
│   │   ├── FlowScreen.jsx       # fullscreen flip-clock view
│   │   ├── FlipCard.jsx         # single flip-style digit card
│   │   ├── SettingsPanel.jsx    # Focus/Stare duration inputs
│   │   ├── SessionHistory.jsx   # session count + list
│   │   ├── ModeSwitcher.jsx     # Focus / Flow / Stare Wall pills
│   │   ├── FullscreenButton.jsx
│   │   ├── Brand.jsx            # "ClockStare by bekuGob" mark
│   │   └── BackgroundRotator.jsx
│   ├── hooks/
│   │   ├── useTimer.js          # countdown logic
│   │   ├── useThemeRotation.js  # background photo rotation
│   │   └── useSessions.js       # localStorage-backed session history
│   ├── data/
│   │   └── backgrounds.js
│   ├── utils/
│   │   └── sound.js             # transition ring sound
│   ├── App.jsx                  # top-level state: mode, durations, sessions
│   └── main.jsx
├── index.html
└── package.json
```

## Why "boring on purpose"

Modern apps train you to expect constant stimulation — even their breaks are
designed to be entertaining. ClockStare intentionally does the opposite: no
accent colors, no animation, and no content on the Stare screen. The absence
of features is the feature.

## Credits

Built by [bekuGob](https://github.com/bekuGob).
