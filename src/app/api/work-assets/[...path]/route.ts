import { createReadStream, existsSync, statSync } from "fs";
import path from "path";
import { Readable } from "stream";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const WORK_ROOT = path.resolve(process.cwd(), "work");

const MIME: Record<string, string> = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

function resolveSafePath(segments: string[]): string | null {
  if (!segments.length) return null;

  const decoded = segments.map((s) => decodeURIComponent(s));
  const resolved = path.resolve(WORK_ROOT, ...decoded);
  const relative = path.relative(WORK_ROOT, resolved);

  if (relative.startsWith("..") || path.isAbsolute(relative)) return null;
  return resolved;
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ path: string[] }> },
) {
  const { path: segments } = await context.params;
  const filePath = resolveSafePath(segments);

  if (!filePath || !existsSync(filePath) || !statSync(filePath).isFile()) {
    return new Response("Not found", { status: 404 });
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] ?? "application/octet-stream";
  const stream = createReadStream(filePath);
  const webStream = Readable.toWeb(stream) as ReadableStream;

  return new Response(webStream, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
