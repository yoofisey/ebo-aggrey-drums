import Link from "next/link";
import { ArrowRightIcon, ClockIcon } from "@/components/icons";
import { KindBadge } from "@/components/kind-badge";
import type { ContentItem } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function ContentCard({ item }: { item: ContentItem }) {
  return (
    <Link
      href={`/materials/${item.slug}`}
      data-reveal
      className="card card-hover group flex min-h-[260px] flex-col p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <KindBadge kind={item.kind} />
        <ArrowRightIcon className="size-5 text-ink-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-ink" />
      </div>

      <div className="mt-10">
        <p className="text-[12px] font-semibold text-line">
          {item.level} · {item.tags[0]}
        </p>
        <h3 className="mt-3 text-balance text-[22px] font-bold leading-snug tracking-[-0.03em] text-ink">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-3 text-[14px] leading-6 text-ink-muted">
          {item.summary}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-8 text-[12px] text-ink-subtle">
        <span className="inline-flex items-center gap-2">
          <ClockIcon className="size-4" />
          {item.duration}
        </span>
        <span>{formatDate(item.publishedAt)}</span>
        <span className="ml-auto font-semibold text-line">View details</span>
      </div>
    </Link>
  );
}
