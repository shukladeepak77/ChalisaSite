# Chalisa Sangrah

A single-page collection of six traditional, classical 40-verse (chaupai)
devotional compositions: Ganesh, Shiv, Durga, Ram, Krishna, and Lakshmi
Chalisa. Part of the same family of sites as Aarti Sangrah, Stotra
Sangrah, Meera Bhajan, and Tulsidas Bhajan — linked from astrojyotisha.com's
Sanatan Wisdom page.

Hanuman Chalisa is deliberately NOT included here since it already lives
inside Aarti Sangrah's own content. See `CONTENT.md` for full sourcing
details (sanskritdocuments.org, fetched and verified line by line) and why
each source document's own appended Aarti was left out.

## Stack

Next.js, static export (`output: "export"`), Tailwind v4. Same
architecture as the sibling Aarti/Meera Bhajan/Tulsidas Bhajan sites: a
single `src/content/chalisas.ts` file, no build-time content generation,
no backend.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Netlify, connected to this GitHub repo. `netlify.toml` sets the build
command (`npm run build`) and publish directory (`out`).
