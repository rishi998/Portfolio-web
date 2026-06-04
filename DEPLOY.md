# Deploy to Vercel

## How assets work

1. **`npm run build`** runs `sync:work` first — copies catalog files from `work/` → `public/work/` (incremental; does **not** delete existing deploy assets).
2. The site serves them as **static files** at `/work/...` (no API route, no 250MB serverless bundle).
3. **Hero video** (`public/work/SPA/render/Clip 1.mp4`) is committed via **Git LFS** because `work/SPA/render/Clip 1.mp4` is gitignored. Vercel runs `git lfs pull` on install (see `vercel.json`).

Keep `work/` in Git for the sync step, and keep `public/work/SPA/render/Clip 1.mp4` in Git LFS so deploys include the hero background video.

## Deploy steps

1. Push to GitHub (see size notes below).
2. [vercel.com/new](https://vercel.com/new) → import **Portfolio-web**.
3. Defaults: Framework **Next.js**, Build **`npm run build`**, Install **`npm install`**.
4. Deploy.

## Git / GitHub limits

| Rule | Detail |
|------|--------|
| Hero video | `work/SPA/render/Clip 1.mp4` is gitignored; deploy uses **`public/work/SPA/render/Clip 1.mp4`** (Git LFS) |
| `public/work/` after sync | ~130 MB including hero video (~49 MB) |
| Vercel install | `git lfs pull && npm install` — required so the video is not a 130-byte LFS pointer |

## If build still fails on size

- Compress JPG/PNG in `work/SPA/render/` (largest folder).
- Remove PDFs from `work-catalog.ts` and link to Google Drive instead.
- Run `npm run sync:work` and commit `public/work/`; add `work/` to `.vercelignore` (already set).

## Custom domain

Vercel → Project → **Settings** → **Domains**.
