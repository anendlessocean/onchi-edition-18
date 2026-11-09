# ONCHI // EDITION XVIII — 18th Birthday Celebration Codex

An editorial, high-fashion magazine and digital tribute landing page crafted to honor **Onchi** on her 18th birthday and inspire her for her **PHY 105** exam finale.

---

## 🌟 Highlights & Features

- **Exact Visual Fidelity**: Matches the typography, proportions, archival plate frames, color palette, and delicate newspaper borders from the design.
- **Real Photographic Plates**: All five archival images from the design extracted with high-resolution 2x/3x bicubic rendering:
  - `Archival Plate 01: Onchi at 18 — Unmistakable Grace`
  - `Plate 02: Poise & Expression`
  - `Plate 03: The Hakunamatata Smile`
  - `Origin // Day 001: Little Onchi (2006 Archive)`
  - `18th Chapter // Now: Grace, Transition, and New Orbits`
- **Interactive Micro-Experiences**:
  - **🖤 Send Birthday Signal**: Triggers a golden confetti burst and celestial chime (via native Web Audio API), opening the Cosmic Transmission modal with cycling physics-themed birthday blessings.
  - **Calm 432Hz Sound Synthesizer ("Physics & Soul")**: Toggle peaceful study/ambient focus audio in the navigation bar with no external MP3 dependencies.
  - **Interactive 6,574 Day Counter**: Click the continuity stat card to cycle between days, hours, minutes, and seconds into adulthood.
  - **Interactive PHY 105 Exam Codex Cards**: Click each card to reveal the hidden "Axioms of Grace" (Newtonian momentum, Thermodynamic equilibrium, and Kinematic rest).
  - **Photographic Lightbox**: Click any archival plate to view it in full editorial presentation mode.

---

## 🚀 How to Run

The local server is already running for you at:
```
http://localhost:3000
```

To run manually at any time:
```powershell
cd C:\Users\mayom\.gemini\antigravity\scratch\onchi-18
node server.js
```
Or simply double-click `index.html` to open directly in any web browser!

---

## 📁 File Structure

```
onchi-18/
├── images/
│   ├── hero-portrait@2x.jpg
│   ├── plate-02@2x.jpg
│   ├── plate-03@2x.jpg
│   ├── baby-onchi@2x.jpg
│   └── chapter-18@2x.jpg
├── index.html       # Complete editorial layout and markup
├── styles.css       # Custom editorial typography and delicate styling
├── script.js        # Confetti, synthesizer, modals, and interactions
├── server.js        # Lightweight native Node.js static server
└── package.json     # Project configuration
```
