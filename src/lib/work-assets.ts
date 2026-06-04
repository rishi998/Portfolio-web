/** Static URLs for files in public/work/ (synced from /work via prebuild). */
export function workAsset(relativePath: string): string {
  const normalized = relativePath.replace(/\\/g, "/");
  return `/work/${normalized
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}
