export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-brass sm:text-[10px] sm:tracking-[0.35em]">
      {children}
    </p>
  );
}
