"use client";

import Image from "next/image";
import { useState } from "react";
import { workAsset } from "@/lib/work-assets";
import { isDisplayableMedia } from "@/data/work-catalog";

type WorkMediaProps = {
  path: string;
  alt: string;
  fallbackSrc?: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  contained?: boolean;
};

export function WorkMedia({
  path,
  alt,
  fallbackSrc,
  fill = true,
  className = "object-cover",
  sizes,
  priority,
  contained = true,
}: WorkMediaProps) {
  const [failed, setFailed] = useState(false);

  if (!isDisplayableMedia(path)) {
    return null;
  }

  const src = workAsset(path);
  const imageSrc = failed && fallbackSrc ? fallbackSrc : src;

  const inner = (
    <Image
      src={imageSrc}
      alt={alt}
      fill={fill}
      sizes={sizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      className={className}
      unoptimized
      priority={priority}
      onError={() => setFailed(true)}
    />
  );

  if (!contained) return inner;

  return <div className="media-fill relative h-full w-full">{inner}</div>;
}
