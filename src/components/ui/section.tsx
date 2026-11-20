import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";

export function Section({
  children,
  tone = "base",
  className,
  containerClassName,
  id,
}: {
  children: ReactNode;
  tone?: "base" | "alt";
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-[88px]",
        tone === "alt" ? "bg-canvas-alt" : "bg-canvas",
        className,
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
