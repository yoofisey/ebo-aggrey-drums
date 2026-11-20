import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  hint,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={htmlFor}
        className="mb-3 block text-[13px] font-semibold text-line"
      >
        {label}
      </label>
      {children}
      {hint ? (
        <p className="mt-2 text-[12px] leading-5 text-ink-subtle">{hint}</p>
      ) : null}
    </div>
  );
}
