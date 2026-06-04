"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type OptimizedImageProps = Omit<ImageProps, "src" | "alt"> & {
  /** Optional path under public/ e.g. /media/projects/foo.jpg */
  src: string;
  /** Shown immediately; used when local src is missing */
  fallbackSrc: string;
  alt: string;
};

export function OptimizedImage({
  src,
  fallbackSrc,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(fallbackSrc);

  useEffect(() => {
    if (!src.startsWith("/")) {
      setCurrentSrc(src);
      return;
    }

    const probe = new window.Image();
    probe.onload = () => setCurrentSrc(src);
    probe.onerror = () => setCurrentSrc(fallbackSrc);
    probe.src = src;

    return () => {
      probe.onload = null;
      probe.onerror = null;
    };
  }, [src, fallbackSrc]);

  const isRemote = currentSrc.startsWith("http");

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      className={className}
      unoptimized={isRemote}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
