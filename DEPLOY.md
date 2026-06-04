# Deploy to Vercel

This project is configured for [Vercel](https://vercel.com) with Next.js App Router.

## Prerequisites

1. Push the project to **GitHub**, **GitLab**, or **Bitbucket**.
2. **Commit the `work/` folder** — portfolio images and PDFs are served from it at runtime. Without it, media will not load in production.

> **GitHub limit:** Each file must be **under 2 GB**. `work/SPA/render/Clip 1.mp4` (~2.2 GB) is gitignored — it stays on your PC for local dev only. Compress it or host on YouTube/Cloudinary if you need it online.

> **Vercel limit:** Total deployment ~250 MB. Your `work/` folder (without that video) is ~600 MB — if deploy fails, move PDFs to cloud storage or trim `work/`.

## Deploy (recommended)

1. Go to [vercel.com/new](https://vercel.com/new).
2. Import your repository.
3. Vercel auto-detects **Next.js** — leave defaults:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** (default)
   - **Install Command:** `npm install`
4. Click **Deploy**.

No environment variables are required for the basic portfolio.

## Deploy via CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow prompts. For production:

```bash
vercel --prod
```

## Project config

| File | Purpose |
|------|---------|
| `vercel.json` | Framework, Mumbai region (`bom1`), API function timeout for `/work-assets` |
| `src/app/api/work-assets/[...path]/route.ts` | `runtime: nodejs` — required to read `work/` on the server |

## After deploy

- Open your Vercel URL on phone and desktop to verify layout.
- Test a project card → PDF links should open.
- If images 404, confirm `work/` was included in the Git commit pushed to Vercel.

## Custom domain

Vercel Dashboard → Project → **Settings** → **Domains** → add your domain.
