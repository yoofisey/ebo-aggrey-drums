import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 text-balance text-3xl font-medium tracking-[-0.03em] sm:text-4xl lg:text-[44px] lg:leading-[1.1]">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-ink-muted">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
