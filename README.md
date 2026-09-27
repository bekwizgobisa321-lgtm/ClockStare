# ClockStare

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

## Features

- **Focus timer** with an adjustable duration
- **Stare Wall break** with its own adjustable duration and no early exit
- **Manual "Stare Wall" button** to jump straight into a break anytime,
  without waiting for the Focus countdown to finish
- **Auto-rotating backgrounds** — 12 photos, rotating every 45 seconds,
  starting from a random image on each load
- **Fullscreen mode**, persistent across the Focus ↔ Stare transition
- **Session history** — a running count and a timestamped list of completed
  Focus sessions, saved locally so it survives a page refresh
- **Reset button** to restart the current countdown
- Built mobile-aware, with a clean, minimal, text-first interface

## Tech stack

- [React](https://react.dev/) 18
- [Vite](https://vitejs.dev/) for dev server and bundling
- Plain CSS — no UI framework
- Browser `localStorage` for session persistence (no backend/database)

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
│   └── assets/          # background photos, favicon, Stare Wall image
├── src/
│   ├── components/      # Clock, FocusScreen, StareScreen, SettingsPanel, etc.
│   ├── hooks/            # useTimer, useThemeRotation, useSessions
│   ├── data/             # backgrounds.js
│   ├── App.jsx           # top-level state: current mode, durations, sessions
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
