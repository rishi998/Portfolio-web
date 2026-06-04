# Optional media overrides

The app now serves files directly from the **`/work`** folder at the project root.

Add new showcase items in `work/`, then register them in `src/data/work-catalog.ts`.

This `public/media/` folder is only for optional overrides (hero, etc.).

## Folder structure

```
public/media/
├── hero.jpg          # or hero.mp4 — homepage background
├── about/
│   ├── studio.jpg
│   └── process.jpg
├── contact/
│   └── office.jpg
└── projects/
    ├── mezzanine-spa.jpg
    ├── noida-105-zoning.jpg
    ├── noida-existing.jpg
    ├── dholera-airocity.jpg
    ├── jewar-airport.jpg
    ├── tar-office.jpg
    ├── club-plumbing.jpg
    └── building-blocks.jpg
```

Use `.jpg`, `.jpeg`, `.png`, or `.webp` for project images (filename must match the project `id` in `src/data/projects.ts`).

## From your `work/` folder

Export renders or photos from AutoCAD/plot outputs as JPG/PNG, then copy them into `public/media/projects/` using the names above.

After adding files, restart the dev server: `npm run dev`
