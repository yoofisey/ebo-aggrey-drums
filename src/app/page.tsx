import Link from "next/link";
import { ContentCard } from "@/components/content-card";
import { HeroStage } from "@/components/hero-stage";
import { LessonCard } from "@/components/lesson-card";
import {
  ArrowRightIcon,
  AudioIcon,
  DiscIcon,
  FolderIcon,
  UserIcon,
} from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { contentItems } from "@/lib/content";
import { lessons } from "@/lib/lessons";

const stats = [
  { value: "[YEARS PLAYING]", label: "behind the kit" },
  { value: "[LESSONS TAUGHT]", label: "one at a time" },
  { value: "[RECORDS PLAYED ON]", label: "in service of the song" },
  { value: "[STUDENTS]", label: "finding their own feel" },
];

const paths = [
  {
    number: "01",
    title: "Foundations",
    copy: "Time, touch and the basics that make everything else easier.",
    icon: UserIcon,
  },
  {
    number: "02",
    title: "Groove and feel",
    copy: "Listen, relax and make the part belong to the record.",
    icon: DiscIcon,
  },
  {
    number: "03",
    title: "Recording and studio",
    copy: "Setup, microphones and playing for the take, not the showcase.",
    icon: AudioIcon,
  },
];

const samples = [
  "[AUDIO SAMPLE 01]",
  "[AUDIO SAMPLE 02]",
  "[AUDIO SAMPLE 03]",
];

export default function HomePage() {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden py-24">
        <HeroStage />
        <Container className="relative">
          <div className="max-w-2xl">
            <Eyebrow className="reveal">Ebo Aggrey / drums</Eyebrow>
            <h1 className="reveal reveal-delay-1 mt-7 text-balance text-[clamp(3rem,7.5vw,6rem)] font-bold leading-[1.02] tracking-[-0.05em]">
              Drum lessons that listen first.
            </h1>
            <p className="reveal reveal-delay-2 mt-8 max-w-xl text-[16px] leading-8 text-ink-muted">
              I teach drummers how to hear, relax and trust what they hear. Got
              a record that needs drums? Bring me the track and we&apos;ll take
              it from there.
            </p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/book" size="lg">
                Start free lesson
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
              <ButtonLink href="/play-on-your-record" variant="secondary" size="lg">
                Play on your record
              </ButtonLink>
            </div>
            <p className="placeholder mt-10 text-[12px] font-semibold">
              [VIDEO LOOP — Ebo to supply]
            </p>
          </div>
        </Container>
      </section>

      <Section tone="alt" className="py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="placeholder text-[20px] font-bold tracking-[-0.03em]">
                {stat.value}
              </p>
              <p className="mt-2 text-[13px] text-ink-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <PageHeader
          as="h2"
          eyebrow="Learning paths"
          title="Pick a place to start."
          intro="Three ways in. Each one begins with listening before playing."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                key={path.number}
                href="/lessons"
                className="card card-hover group flex min-h-[280px] flex-col p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="control flex size-12 items-center justify-center text-line">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-[12px] font-semibold text-ink-subtle">
                    {path.number}
                  </span>
                </div>
                <h3 className="mt-auto text-[24px] font-bold tracking-[-0.035em]">
                  {path.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-ink-muted">
                  {path.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-line transition-colors group-hover:text-ink">
                  See lessons
                  <ArrowRightIcon className="size-4" />
                </span>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <Eyebrow>Featured lesson</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
              The feel comes before the fill.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-ink-muted">
              A slow, careful look at the pocket. No tricks, just the thing that
              makes a groove sit down and stay there.
            </p>
            <ButtonLink href="/lessons" variant="secondary" className="mt-8">
              All lessons
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </div>
          <LessonCard lesson={lessons[0]} />
        </div>
      </Section>

      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Latest materials</Eyebrow>
            <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
              Things worth practising.
            </h2>
          </div>
          <ButtonLink href="/materials" variant="secondary">
            Browse the shelf
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {contentItems.slice(0, 3).map((item) => (
            <ContentCard key={item.slug} item={item} />
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Session drummer</Eyebrow>
            <h2 className="mt-6 text-balance text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
              Some songs need a drummer, not a lesson.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-ink-muted">
              Send a rough mix, a link or a voice note. I&apos;ll listen first,
              then tell you honestly what I think the song needs.
            </p>
            <ButtonLink href="/play-on-your-record" className="mt-8">
              Play on your record
              <ArrowRightIcon className="size-4" />
            </ButtonLink>
          </div>
          <div className="card p-7">
            <div className="flex items-center gap-3 text-line">
              <AudioIcon className="size-5" />
              <Eyebrow>Listen first</Eyebrow>
            </div>
            <div className="mt-8 grid gap-3">
              {samples.map((sample) => (
                <div
                  key={sample}
                  className="control flex min-h-14 items-center px-5 text-[13px] font-semibold placeholder"
                >
                  {sample}
                </div>
              ))}
            </div>
            <p className="mt-5 text-[12px] leading-5 text-ink-subtle">
              Replace these with real clips when they are ready.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="card flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <Eyebrow>Start here</Eyebrow>
            <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]">
              Your first lesson is free.
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-ink-muted">
              Tell me where you are and what you want to feel better about. No
              payment details, no commitment.
            </p>
          </div>
          <ButtonLink href="/book" size="lg" className="shrink-0">
            Start free lesson
            <ArrowRightIcon className="size-4" />
          </ButtonLink>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-6 md:grid-cols-3">
          {[FolderIcon, DiscIcon, UserIcon].map((Icon, index) => {
            const links = ["/materials", "/play-on-your-record", "/about"];
            const titles = ["Materials shelf", "Play on your record", "About Ebo"];
            const copy = [
              "PDFs, videos, audio and links.",
              "What you get and how we work.",
              "Photo credits and background.",
            ];
            return (
              <Link
                key={titles[index]}
                href={links[index]}
                className="card card-hover group flex min-h-40 flex-col justify-between p-6"
              >
                <Icon className="size-5 text-line" />
                <div>
                  <h3 className="text-[18px] font-bold tracking-[-0.025em]">
                    {titles[index]}
                  </h3>
                  <p className="mt-2 text-[13px] text-ink-muted">{copy[index]}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </>
  );
}
