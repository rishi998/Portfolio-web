"use client";

import { useRef } from "react";

type MagneticButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
};

export function MagneticButton({
  href,
  onClick,
  children,
  className = "",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (el) el.style.transform = "translate(0, 0)";
  }

  const classes = `inline-flex cursor-pointer items-center justify-center transition-transform duration-300 ${className}`;

  const inner = (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} className={classes}>
      {children}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {inner}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className="inline-block border-0 bg-transparent p-0">
      {inner}
    </button>
  );
}
