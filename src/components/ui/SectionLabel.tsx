export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] font-medium uppercase tracking-[0.35em] text-brass sm:text-xs">
      {children}
    </p>
  );
}
