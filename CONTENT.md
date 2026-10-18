# Where the content comes from

This is a single-page site: `src/content/chalisas.ts` is a hand-written
TypeScript file holding all 6 chalisas (no build-time content-generation
script, unlike the sibling Bhagwad Gita / Ashtavakra Gita sites), following
the same single-page pattern as the sibling Aarti Sangrah / Meera Bhajan /
Tulsidas Bhajan sites.

Verse text only — no meaning/translation, matching the rest of this family
of sites. All six are traditional, classical 40-verse (chaupai) devotional
compositions — public domain. Sourced from sanskritdocuments.org's Hindi
devotional-text collection (a volunteer-maintained repository of exactly
this kind of material, with each document's own authorship/history
metadata), fetched directly and cross-checked line by line — not
transcribed from memory, given how often this kind of text circulates
online with small corruptions.

Attribution per source document: Ganesh Chalisa (anonymous, dated
~Samvat 1010 in the source metadata), Shiv Chalisa (Ayodhyadasa),
Durga Chalisa (Devidasa), Ram Chalisa (traditional, unattributed), Krishna
Chalisa (traditional), Lakshmi Chalisa (Ramadasa).

Each source document also carries its own appended Aarti (e.g. the Ganesh
Chalisa page ends with "जय गणेश जय गणेश..."). Those are deliberately NOT
included here, since Aarti Sangrah is this family's existing, dedicated
site for aartis — duplicating them here would be redundant. Hanuman
Chalisa (by Tulsidas) already lives inside Aarti Sangrah's own content for
the same reason, so it is not repeated here either.

## Adding a new chalisa

1. Add a new entry to the `chalisas` array in `src/content/chalisas.ts`
   (`slug`, `title`, `subtitle`, `verses`).
2. The home page (`src/app/page.tsx`) renders every entry in that array
   automatically — no other file needs to change.

## Audio

Not included, matching the rest of this family of sites.
