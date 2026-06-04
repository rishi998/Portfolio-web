/** Build a safe URL to files served from the /work folder via API. */
export function workAsset(relativePath: string): string {
  const normalized = relativePath.replace(/\\/g, "/");
  return `/work-assets/${normalized
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}

export function isWorkAsset(url: string): boolean {
  return url.startsWith("/work-assets/");
}
