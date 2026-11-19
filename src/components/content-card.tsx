import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, ClockIcon } from "@/components/icons";
import { KindBadge } from "@/components/kind-badge";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { ContentItem } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export function ContentCard({
  item,
  featured = false,
}: {
  item: ContentItem;
  featured?: boolean;
}) {
  if (featured) {
    return (
      <Link
        href={`/materials/${item.slug}`}
        className="group hover-lift panel grid overflow-hidden lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="relative min-h-[320px] overflow-hidden bg-surface-raised lg:min-h-[440px]">
          <Image
            src={`/images/${item.image}`}
            alt=""
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="photo object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          <div className="absolute left-6 top-6">
            <KindBadge kind={item.kind} />
          </div>
          <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-4 sm:bottom-7 sm:left-7 sm:right-7">
            <Eyebrow>Latest on the shelf</Eyebrow>
            <p className="mt-2 text-sm font-medium text-ink">
              Open the item
              <ArrowUpRightIcon className="ml-2 inline size-4" />
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between p-7 sm:p-10">
          <div>
            <Eyebrow>
              {item.level} · {item.tags[0]}
            </Eyebrow>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
              {item.title}
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-ink-muted">
              {item.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {item.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between gap-4 rounded-2xl bg-surface-raised px-5 py-4">
            <span className="inline-flex items-center gap-2 text-xs text-ink-subtle">
              <ClockIcon className="size-3.5" />
              {item.duration}
            </span>
            <span className="text-xs text-ink-subtle">
              {formatDate(item.publishedAt)}
            </span>
            <ArrowUpRightIcon className="size-4 shrink-0 text-ink-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/materials/${item.slug}`}
      className="group hover-lift panel flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-raised">
        <Image
          src={`/images/${item.image}`}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="photo object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <div className="absolute left-4 top-4">
          <KindBadge kind={item.kind} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <Eyebrow>
          {item.level} · {item.tags[0]}
        </Eyebrow>
        <h3 className="mt-3 text-balance text-lg font-semibold leading-snug tracking-[-0.025em] text-ink transition-colors duration-200">
          {item.title}
        </h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-ink-muted">
          {item.summary}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 rounded-2xl bg-surface-raised px-4 py-4">
          <span className="inline-flex items-center gap-2 text-xs text-ink-subtle">
            <ClockIcon className="size-3.5" />
            {item.duration}
          </span>
          <span className="text-xs text-ink-subtle">
            {formatDate(item.publishedAt)}
          </span>
          <ArrowUpRightIcon className="size-4 shrink-0 text-ink-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </div>
      </div>
    </Link>
  );
}
