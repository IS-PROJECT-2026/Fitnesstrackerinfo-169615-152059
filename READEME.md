# WristData

An independent, single-page explainer on fitness trackers — how the sensors work,
what's on the market, what the data is genuinely good for, and where the numbers
get shaky.

## Live site

https://is-project-2026.github.io/Fitnesstrackerinfo-169615-152059/

## About

Built as coursework for the IS-PROJECT-2026 Mini-Project Git Workflow Challenge.
The site is an educational resource, not medical advice, and has no commercial
relationship with any device manufacturer named.

## Contents

- **01 How they work** — a breakdown of the eight sensors typically found in a
  wearable, and which readings are measured versus derived.
- **02 The market** — the five recognisable device shapes and what each is
  best at.
- **03 Advantages** — the honest case for wearing one.
- **04 Accuracy** — a chip-graded reality check on which metrics to trust.
- **05 Risks and limitations** — privacy, false reassurance, orthosomnia,
  compulsive tracking, subscription lock-in and hardware lifespan.
- **06 Choosing and using one well** — questions that matter more than the
  spec sheet.

## Tech stack

- HTML5, CSS3 (custom properties, CSS Grid, `clamp()`)
- Vanilla JavaScript (`IntersectionObserver` for scroll-spy and reveal)
- Inline SVG with CSS-animated stroke-dashoffset for the PPG waveform
- Google Fonts: Space Grotesk (display), Newsreader (body), JetBrains Mono
- Deployed via GitHub Pages from the `main` branch

## Accessibility

- Skip-to-content link
- `prefers-reduced-motion` respected for all animation
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Focus indicators visible on all interactive elements

## Team

- Terry — group lead

## Repository conventions

- Conventional Commits (`feat`, `fix`, `style`, `docs`, `chore`, `refactor`)
- All work on branches, merged to `main` via reviewed pull requests
- Issues linked to milestones, tracked on a project board
