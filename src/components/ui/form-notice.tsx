export function FormNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="control px-5 py-4 text-[13px] leading-6 text-ink-muted">
      {children}
    </p>
  );
}
