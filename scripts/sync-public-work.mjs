/**
 * Copies only portfolio catalog assets from /work → /public/work
 * so Vercel serves static files (no 250MB serverless bundle).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const catalogFile = path.join(root, "src/data/work-catalog.ts");
const workRoot = path.join(root, "work");
const publicRoot = path.join(root, "public/work");

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
    console.warn(`  skip (missing): ${rel}`);
    return 0;
  }

  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  return fs.statSync(src).size;
}

const catalog = fs.readFileSync(catalogFile, "utf8");
const paths = collectPathsFromCatalog(catalog);

if (fs.existsSync(publicRoot)) {
  fs.rmSync(publicRoot, { recursive: true, force: true });
}

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

if (total > 200 * 1024 * 1024) {
  console.warn("Warning: public/work exceeds ~200MB — compress images before deploy.");
}
