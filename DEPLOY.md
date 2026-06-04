# Deploy to Vercel

## How assets work

1. **`npm run build`** runs `sync:work` first — copies only files listed in `src/data/work-catalog.ts` from `work/` → `public/work/`.
2. The site serves them as **static files** at `/work/...` (no API route, no 250MB serverless bundle).
3. The old `/api/work-assets` route was removed (it bundled all of `work/` and hit the **250 MB** serverless limit).

Keep `work/` in Git for the sync step, or commit `public/work/` after `npm run sync:work` so deploys work even without the full `work/` folder.

## Deploy steps

1. Push to GitHub (see size notes below).
2. [vercel.com/new](https://vercel.com/new) → import **Portfolio-web**.
3. Defaults: Framework **Next.js**, Build **`npm run build`**, Install **`npm install`**.
4. Deploy.

## Git / GitHub limits

| Rule | Detail |
|------|--------|
| Max LFS file | **2 GB** — `Clip 1.mp4` is gitignored |
| `public/work/` after sync | ~100 MB (catalog images + PDFs only) |

## If build still fails on size

- Compress JPG/PNG in `work/SPA/render/` (largest folder).
- Remove PDFs from `work-catalog.ts` and link to Google Drive instead.
- Run `npm run sync:work` and commit `public/work/`; add `work/` to `.vercelignore` (already set).

## Custom domain

Vercel → Project → **Settings** → **Domains**.
