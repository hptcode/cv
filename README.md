# Patrick Ho — CV Site

A clean, simple single-page resume website built with React + Vite, deployed to GitHub Pages.

## Live site

https://hptcode.github.io/cv/

## Stack

- React 19
- Vite 8
- Framer Motion (scroll animations)
- lucide-react (icons)
- Tailwind-style utility classes via App.css

## Local development

```bash
npm install
npm run dev
```

Open the printed URL (default http://localhost:5173).

## Deployment

Auto-deploy is configured via a GitHub Actions workflow
(`.github/workflows/deploy.yml`). Pushing to `main` automatically builds the
site and publishes it to the `gh-pages` branch, which GitHub Pages serves at
`https://hptcode.github.io/cv/`.

To publish manually instead:

```bash
npm run build
npm run deploy   # uses gh-pages -d dist
```

## Notes

- `vite.config.js` sets `base: '/cv/'` — this must match the GitHub Pages
  project sub-path, otherwise assets won't load.
- The hero background image is stored locally in `public/hero-bg.jpg`.
