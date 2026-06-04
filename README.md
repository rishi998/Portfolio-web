# Puja Daksh — Architecture Portfolio

Hyper-minimalist, conversion-focused architect portfolio built with **Next.js 15 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**.

## Design System

| Token | Value |
|-------|--------|
| Background (light) | `#FFFFFF` |
| Background (dark) | `#0B0B0B` (system `prefers-color-scheme`) |
| Structural accent | Deep Teal `#0D4F4F` |
| Active / CTA | Burnt Orange `#C45C26` |
| Typography | Inter (headings/body), JetBrains Mono (metadata) |
| Motion | Framer Motion spring physics (`stiffness: 120`, `damping: 22`) |

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Homepage (Hero + all sections)
│   ├── work/page.tsx     # Portfolio grid
│   ├── about/page.tsx    # Philosophy & credentials
│   ├── contact/page.tsx  # Form + booking
│   ├── layout.tsx        # Global shell, fonts, theme
│   └── globals.css       # Design tokens
├── components/
│   ├── layout/           # Navbar, Footer, WhatsApp, PageHeader
│   └── sections/         # Hero, PortfolioGrid, About, Contact
├── data/projects.ts      # Project cards (from /work folder)
├── lib/constants.ts      # WhatsApp, nav, office info
├── lib/motion.ts         # Shared Framer variants
└── types/project.ts      # TypeScript types
```

## WhatsApp Integration

All consultation CTAs open WhatsApp with a pre-filled **"hi"** message:

- Number: `7701864514` (India: `+91`)
- URL: `https://wa.me/917701864514?text=hi`

Configured in `src/lib/constants.ts`.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Customization

1. **Studio name** — Edit `STUDIO_NAME` in `src/lib/constants.ts`
2. **Projects** — Update `src/data/projects.ts` (add real images via `next/image` when ready)
3. **Office details** — `OFFICE_HOURS` and `OFFICE_LOCATION` in constants
4. **Your own photos/videos** — Copy files into `public/media/` (see `public/media/README.md`). Local files override Unsplash/Mixkit fallbacks automatically.

## Work Folder Mapping

Projects are named from your `work/` directory:

| Folder | Portfolio entry |
|--------|-----------------|
| `SPA/` | Mezzanine Floor Layout |
| `105 noida/` | Sector 105 Zoning & Existing Building |
| `dholera files/` | Dholera Airocity Masterplan |
| `beg. project/` | Jewar Airport Precinct |

## Mobile responsive

- Hamburger navigation on phones/tablets
- Project titles always visible on touch devices (not hover-only)
- Horizontal scroll filter chips on small screens
- Full-screen project modal with safe-area padding
- Images use fixed aspect ratios + `min-height` so they never collapse

## Deploy to Vercel

See **[DEPLOY.md](./DEPLOY.md)** for step-by-step instructions.

**Important:** Commit the `work/` folder to Git so images, videos, and PDFs deploy with the site.

## Tech Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS v4
- Framer Motion 12
- Lucide React
