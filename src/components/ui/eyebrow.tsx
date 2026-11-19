import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-[12px] font-medium tracking-[0.01em] text-ink-subtle",
        className,
      )}
    >
      {children}
    </p>
  );
}
