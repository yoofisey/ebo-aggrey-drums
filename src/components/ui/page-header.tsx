import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
  as = "h1",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  as?: "h1" | "h2";
}) {
  const Heading = as;

  return (
    <header className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:gap-16">
      <div>
        <Eyebrow className="reveal">{eyebrow}</Eyebrow>
        <Heading className="reveal reveal-delay-1 mt-6 max-w-3xl text-balance text-[clamp(2.6rem,6vw,4.75rem)] font-bold leading-[1.04] tracking-[-0.045em]">
          {title}
        </Heading>
      </div>
      <div>
        {intro ? (
          <p className="reveal reveal-delay-2 max-w-md text-[15px] leading-8 text-ink-muted">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}
