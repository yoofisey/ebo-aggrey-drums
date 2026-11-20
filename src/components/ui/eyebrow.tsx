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
        "text-[12px] font-semibold tracking-[0.02em] text-line",
        className,
      )}
    >
      {children}
    </p>
  );
}
