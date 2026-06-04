/**
 * Copies only portfolio catalog assets from /work → /public/work
 * so Vercel serves static files (no 250MB serverless bundle).
 *
 * Does not wipe public/work — keeps committed deploy assets (e.g. hero video)
 * when the source file is gitignored locally or missing on CI.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const catalogFile = path.join(root, "src/data/work-catalog.ts");
const workRoot = path.join(root, "work");
const publicRoot = path.join(root, "public/work");

const HERO_VIDEO = "SPA/render/Clip 1.mp4";

function collectPathsFromCatalog(content) {
  const paths = new Set();

  for (const match of content.matchAll(/\bcover:\s*"([^"]+)"/g)) {
    paths.add(match[1]);
  }

  for (const block of content.matchAll(/\bgallery:\s*\[([\s\S]*?)\]/g)) {
    for (const item of block[1].matchAll(/"([^"]+)"/g)) {
      paths.add(item[1]);
    }
  }

  for (const match of content.matchAll(/\bvideo:\s*"([^"]+)"/g)) {
    paths.add(match[1]);
  }

  for (const match of content.matchAll(/doc\([^,]+,\s*"([^"]+)"/g)) {
    paths.add(match[1]);
  }

  return [...paths];
}

function copyFile(rel) {
  const src = path.join(workRoot, rel);
  const dest = path.join(publicRoot, rel);

  if (!fs.existsSync(src)) {
    if (fs.existsSync(dest)) {
      const size = fs.statSync(dest).size;
      console.log(`  keep (deploy copy): ${rel}`);
      return size;
    }
    console.warn(`  skip (missing): ${rel}`);
    return 0;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  return fs.statSync(dest).size;
}

const catalog = fs.readFileSync(catalogFile, "utf8");
const paths = [...new Set([...collectPathsFromCatalog(catalog), HERO_VIDEO])];

let total = 0;
let copied = 0;

console.log(`Syncing ${paths.length} catalog assets to public/work/...`);

for (const rel of paths) {
  const size = copyFile(rel);
  if (size > 0) {
    total += size;
    copied++;
  }
}

const mb = (total / 1024 / 1024).toFixed(1);
console.log(`Done: ${copied} files, ${mb} MB total.`);

const heroPath = path.join(publicRoot, HERO_VIDEO);
if (!fs.existsSync(heroPath)) {
  console.warn(
    `Warning: hero video missing at public/work/${HERO_VIDEO}. ` +
      "Commit it under public/work/ or add work/SPA/render/Clip 1.mp4 locally.",
  );
} else if (fs.statSync(heroPath).size < 1024 * 1024) {
  console.warn(
    `Warning: hero video looks like a Git LFS pointer (${fs.statSync(heroPath).size} bytes). ` +
      "Run 'git lfs pull' before deploy.",
  );
}

if (total > 200 * 1024 * 1024) {
  console.warn("Warning: public/work exceeds ~200MB — compress images before deploy.");
}
