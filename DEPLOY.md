# Deploy to Vercel

## How assets work

1. **`npm run build`** runs `sync:work` first — copies catalog files from `work/` → `public/work/` (incremental; keeps existing deploy assets if a source file is missing).
2. The site serves them as **static files** at `/work/...` (no API route, no 250MB serverless bundle).
3. **Hero video** (`work/SPA/render/Clip 1.mp4`, ~47 MB) is committed in Git (regular binary, not LFS) and synced to `public/work/` on build.

Keep `work/` in Git so Vercel can sync all portfolio assets during `npm run build`.

## Deploy steps

1. Push to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import **Portfolio-web**.
3. Defaults: Framework **Next.js**, Build **`npm run build`**, Install **`npm install`**.
4. Deploy.

## Git / GitHub limits

| Rule | Detail |
|------|--------|
| Hero video | `work/SPA/render/Clip 1.mp4` (~47 MB) — included in Git, under the 100 MB file limit |
| `public/work/` after sync | ~130 MB including hero video |
| Other large types | `.dwg`, `.skp`, etc. remain gitignored |

## If build still fails on size

- Compress JPG/PNG in `work/SPA/render/`.
- Remove PDFs from `work-catalog.ts` and link to Google Drive instead.

## Custom domain

Vercel → Project → **Settings** → **Domains**.
