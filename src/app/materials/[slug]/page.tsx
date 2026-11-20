import type { Metadata } from "next";
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
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import {
  contentItems,
  getContentItem,
  getRelatedItems,
  KIND_LABELS,
  type ContentKind,
} from "@/lib/content";
import { formatDate } from "@/lib/utils";

export const instant = false;

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
  title,
  kind,
  duration,
}: {
  title: string;
  kind: ContentKind;
  duration: string;
}) {
  const icons = {
    video: PlayIcon,
    document: FileTextIcon,
    audio: AudioIcon,
    link: ExternalIcon,
  };
  const Icon = icons[kind];

  return (
    <div className="control relative flex aspect-video items-center justify-center overflow-hidden p-6">
      <div className="absolute inset-0 bg-[radial-gradient(65%_80%_at_50%_45%,#3a3a44_0%,#24242b_70%)]" />
      <div className="relative flex max-w-sm flex-col items-center gap-5 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-bright text-canvas">
          <Icon className="size-7" />
        </span>
        <div>
          <p className="text-[12px] font-semibold text-line">
            {KIND_LABELS[kind]} preview
          </p>
          <p className="placeholder mt-2 text-[15px] font-semibold">
            [FILE TO BE SUPPLIED]
          </p>
        </div>
      </div>
      <span className="control absolute bottom-4 left-4 inline-flex items-center gap-2 px-3 py-2 text-[12px] font-semibold text-line">
        <ClockIcon className="size-4" />
        {duration}
      </span>
      <span className="sr-only">{title}</span>
    </div>
  );
}

export default async function MaterialDetailPage({ params }: PageParams) {
  const { slug } = await params;
  const item = getContentItem(slug);
  if (!item) notFound();

  const related = getRelatedItems(slug);

  const details = [
    { label: "Format", value: KIND_LABELS[item.kind], icon: LayersIcon },
    { label: "Level", value: item.level, icon: LayersIcon },
    { label: "Length", value: item.duration, icon: ClockIcon },
    {
      label: "Published",
      value: formatDate(item.publishedAt),
      icon: CalendarIcon,
    },
  ];

  return (
    <>
      <Section>
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] font-semibold text-ink-subtle">
            <li>
              <Link href="/" className="transition-colors hover:text-ink">
                Home
              </Link>
            </li>
            <ChevronRightIcon className="size-4" />
            <li>
              <Link href="/materials" className="transition-colors hover:text-ink">
                Materials
              </Link>
            </li>
            <ChevronRightIcon className="size-4" />
            <li aria-current="page" className="text-line">
              {item.title}
            </li>
          </ol>
        </nav>

        <div className="mt-12">
          <PageHeader
            eyebrow={`Materials / ${item.level}`}
            title={item.title}
            intro={item.summary}
          >
            <ButtonLink href="/materials/add" variant="secondary" className="mt-6 w-fit">
              <UploadIcon className="size-4" />
              Add material
            </ButtonLink>
          </PageHeader>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <KindBadge kind={item.kind} />
              <Eyebrow>{item.tags[0]}</Eyebrow>
            </div>

            <div className="mt-6">
              <MediaPanel
                title={item.title}
                kind={item.kind}
                duration={item.duration}
              />
            </div>

            <div className="mt-12 max-w-2xl">
              <Eyebrow>A note on this page</Eyebrow>
              <p className="mt-5 text-[15px] leading-8 text-ink-muted">
                The notes and details are here. The player and downloads are
                still waiting on real files, so this is a place to see what the
                item is about for now.
              </p>

              <h2 className="mt-12 text-[24px] font-bold tracking-[-0.035em]">
                What you&apos;ll find here
              </h2>
              <ul className="mt-6 grid gap-3">
                {item.includes.map((entry) => (
                  <li
                    key={entry}
                    className="card flex items-start gap-3 px-5 py-4 text-[14px] leading-6 text-ink-muted"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-bright text-canvas">
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

          <aside className="card h-fit p-6">
            <Eyebrow>The details</Eyebrow>
            <dl className="mt-6 grid gap-3">
              {details.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div
                    key={detail.label}
                    className="control flex items-center justify-between gap-4 px-4 py-3"
                  >
                    <dt className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink-subtle">
                      <Icon className="size-4" />
                      {detail.label}
                    </dt>
                    <dd className="text-right text-[14px] font-semibold text-ink">
                      {detail.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
            <div className="control mt-3 px-4 py-4">
              <p className="text-[12px] font-semibold text-ink-subtle">Notes by</p>
              <p className="mt-2 text-[14px] font-semibold text-ink">
                {item.author}
              </p>
            </div>
            <ButtonLink
              href="/materials"
              variant="secondary"
              className="mt-5 w-full"
            >
              All materials
            </ButtonLink>
          </aside>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section tone="alt">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Keep playing</Eyebrow>
              <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]">
                You might also like
              </h2>
            </div>
            <ButtonLink href="/materials" variant="secondary">
              All materials
              <ChevronRightIcon className="size-4" />
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {related.map((entry) => (
              <ContentCard key={entry.slug} item={entry} />
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
