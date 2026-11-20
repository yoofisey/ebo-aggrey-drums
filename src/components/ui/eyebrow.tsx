import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn(
        "text-[12px] font-semibold tracking-[0.02em] text-line",
        className,
      )}
    >
      {children}
    </p>
  );
}
