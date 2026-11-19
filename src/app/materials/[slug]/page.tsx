import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContentCard } from "@/components/content-card";
import {
  AudioIcon,
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  ExternalIcon,
  FileTextIcon,
  LayersIcon,
  PlayIcon,
  UploadIcon,
} from "@/components/icons";
import { KindBadge } from "@/components/kind-badge";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  contentItems,
  getContentItem,
  getRelatedItems,
  KIND_LABELS,
} from "@/lib/content";
import { formatDate } from "@/lib/utils";

interface PageParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return contentItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { slug } = await params;
  const item = getContentItem(slug);
  if (!item) return { title: "Material not found" };

  return { title: item.title, description: item.summary };
}

function MediaPanel({
  image,
  title,
  kind,
  duration,
}: {
  image: string;
  title: string;
  kind: string;
  duration: string;
}) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-[28px] bg-ink shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
      <Image
        src={`/images/${image}`}
        alt=""
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 65vw"
        className="photo object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="glass flex max-w-xs flex-col items-center gap-5 rounded-[28px] px-7 py-8 text-center">
          <span className="ink-gradient flex size-16 items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
            {kind === "document" ? (
              <FileTextIcon className="size-7" />
            ) : kind === "audio" ? (
              <AudioIcon className="size-7" />
            ) : kind === "link" ? (
              <ExternalIcon className="size-7" />
            ) : (
              <PlayIcon className="size-7" />
            )}
          </span>
          <div>
            <p className="text-xs tracking-[0.04em] text-ink-subtle">
              {KIND_LABELS[kind as keyof typeof KIND_LABELS]} preview
            </p>
            <p className="mt-2 text-sm font-medium text-ink">
              Waiting on the real file
            </p>
          </div>
        </div>
      </div>

      <div className="glass absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs tracking-[0.04em] text-ink">
        <ClockIcon className="size-3.5" />
        {duration}
      </div>
      <span className="sr-only">{title}</span>
    </div>
  );
}

export default async function MaterialDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const item = getContentItem(slug);
  if (!item) notFound();

  const related = getRelatedItems(slug);

  return (
    <Container className="py-12 sm:py-16">
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-xs tracking-[0.04em] text-ink-subtle">
          <li>
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
          </li>
          <ChevronRightIcon className="size-3" />
          <li>
            <Link href="/materials" className="transition-colors hover:text-ink">
              Materials
            </Link>
          </li>
          <ChevronRightIcon className="size-3" />
          <li aria-current="page" className="text-ink-muted">
            {item.title}
          </li>
        </ol>
      </nav>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16">
        <div>
          <div className="flex flex-wrap items-center gap-4">
            <KindBadge kind={item.kind} />
            <Eyebrow>{item.level}</Eyebrow>
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-ink-muted">
            {item.summary}
          </p>

          <div className="mt-9">
            <MediaPanel
              image={item.image}
              title={item.title}
              kind={item.kind}
              duration={item.duration}
            />
          </div>

          <div className="mt-12 max-w-2xl">
            <Eyebrow>A note on this page</Eyebrow>
            <p className="mt-5 text-[15px] leading-8 text-ink-muted">
              The notes and details are here. The player and downloads are still
              waiting on real files, so this is a place to see what the item is
              about for now.
            </p>

            <h2 className="mt-12 text-xl font-semibold tracking-[-0.025em]">
              What you&apos;ll find here
            </h2>
            <ul className="mt-6 space-y-3">
              {item.includes.map((entry) => (
                <li
                  key={entry}
                  className="flex items-start gap-3 rounded-2xl bg-surface-raised px-4 py-4 text-sm leading-6 text-ink-muted"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    <CheckIcon className="size-3" />
                  </span>
                  {entry}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit panel-sm p-6">
          <Eyebrow>The details</Eyebrow>
          <dl className="mt-6 space-y-3">
            {[
              { label: "Format", value: KIND_LABELS[item.kind], icon: LayersIcon },
              { label: "Level", value: item.level, icon: LayersIcon },
              { label: "Length", value: item.duration, icon: ClockIcon },
              {
                label: "Published",
                value: formatDate(item.publishedAt),
                icon: CalendarIcon,
              },
            ].map((detail) => {
              const Icon = detail.icon;
              return (
                <div
                  key={detail.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-surface-raised px-4 py-3"
                >
                  <dt className="inline-flex items-center gap-2 text-xs tracking-[0.04em] text-ink-subtle">
                    <Icon className="size-3.5" />
                    {detail.label}
                  </dt>
                  <dd className="text-right text-sm font-medium text-ink">
                    {detail.value}
                  </dd>
                </div>
              );
            })}
          </dl>
          <div className="mt-5 rounded-2xl bg-surface-raised px-4 py-4">
            <p className="text-xs tracking-[0.04em] text-ink-subtle">Notes by</p>
            <p className="mt-2 text-sm font-medium text-ink">{item.author}</p>
          </div>
          <ButtonLink
            href="/materials/add"
            variant="secondary"
            className="mt-5 w-full"
          >
            <UploadIcon className="size-4" />
            Add material
          </ButtonLink>
        </aside>
      </div>

      {related.length > 0 ? (
        <div className="mt-24">
          <SectionHeading
            eyebrow="Keep playing"
            title="You might also like"
            action={
              <ButtonLink href="/materials" variant="ghost" size="sm">
                All materials
                <ChevronRightIcon className="size-4" />
              </ButtonLink>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {related.map((entry) => (
              <ContentCard key={entry.slug} item={entry} />
            ))}
          </div>
        </div>
      ) : null}
    </Container>
  );
}
