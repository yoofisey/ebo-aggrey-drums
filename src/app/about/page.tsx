import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRightIcon,
  CheckIcon,
  DiscIcon,
  ExternalIcon,
} from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { imageCredits } from "@/lib/image-credits";

export const metadata: Metadata = {
  title: "About",
  description: "A little about Ebo Aggrey and how he teaches the drums.",
};

const approach = [
  {
    number: "01",
    title: "Listen properly",
    copy: "We listen to the record, to the click and to your own playing. I'll ask what you heard before I tell you what I heard.",
  },
  {
    number: "02",
    title: "Work in small pieces",
    copy: "One bar, one beat, one hand. We make it feel easy before we make it fast. Nothing clever, just careful work.",
  },
  {
    number: "03",
    title: "Keep it honest",
    copy: "You tell me what's hard. I tell you what I can see. Then we change the work and carry on from there.",
  },
];

const topics = [
  "Time and feel",
  "Hands that don't fight you",
  "Reading and notation",
  "Fills that say something",
  "Studio preparation",
  "Listening and transcription",
];

export default function AboutPage() {
  return (
    <>
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Eyebrow className="reveal">About / Ebo Aggrey</Eyebrow>
            <h1 className="reveal reveal-delay-1 mt-5 text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              I&apos;m Ebo. I play drums and I teach them.
            </h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-xl text-[15px] leading-8 text-ink-muted">
              Most of my work is with people who want to feel more at home
              behind the kit. Some are playing their first gig. Some have been
              at it for years and want to enjoy it again.
            </p>
            <p className="reveal reveal-delay-2 mt-5 max-w-xl text-[15px] leading-8 text-ink-muted">
              Either way, we start with what you can hear and what you can do
              today. Everything else grows from there. I also play on records,
              live in the room or from stems, when the song needs it.
            </p>
            <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/book">
                <DiscIcon className="size-4" />
                Book a session
              </ButtonLink>
              <ButtonLink href="/materials" variant="secondary">
                See the materials
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="reveal reveal-delay-2 relative aspect-[4/5] overflow-hidden rounded-[32px] bg-surface-raised shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/jazz-drummer.jpg"
              alt="A jazz drummer performing"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="photo object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <span className="glass absolute bottom-6 left-6 rounded-full px-3 py-2 text-xs tracking-[0.04em] text-ink">
              In practice / Most days
            </span>
          </div>
        </div>
      </Container>

      <section id="approach" className="bg-canvas-raised">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            className="reveal"
            eyebrow="How I teach"
            title="Three things I keep coming back to."
            description="A method, if you can call it that. Mostly it is a way of paying attention."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {approach.map((step, index) => (
              <div
                key={step.number}
                className={`panel-sm hover-lift reveal reveal-delay-${index + 1} p-7 sm:p-8`}
              >
                <span className="text-xs font-medium tracking-[0.04em] text-ink-subtle">
                  {step.number}
                </span>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.025em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-ink-muted">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Container id="note" className="py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          <figure className="panel reveal p-8 sm:p-12">
            <Eyebrow>A note from me</Eyebrow>
            <blockquote className="mt-8 text-balance text-2xl font-medium leading-relaxed tracking-[-0.025em] text-ink sm:text-[28px]">
              I&apos;m not interested in making you play like me. I want you to
              sound more like you, and to enjoy getting there.
            </blockquote>
            <figcaption className="mt-10 text-xs tracking-[0.04em] text-ink-subtle">
              Ebo
            </figcaption>
          </figure>

          <div className="reveal reveal-delay-1 relative min-h-80 overflow-hidden rounded-[32px] bg-surface-raised shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/rehearsal-kit.jpg"
              alt="A drum kit arranged in a rehearsal studio"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="photo object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-5">
              <p className="text-xs tracking-[0.04em] text-ink-subtle">
                Rehearsal / Room tone
              </p>
              <p className="mt-2 text-sm font-medium text-ink">
                Where most of the work happens.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal">
            <Eyebrow>What we can work on</Eyebrow>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Whatever is getting in the way.
            </h2>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {topics.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-surface-raised px-4 py-4 text-sm text-ink-muted transition-colors duration-200 hover:bg-white"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_8px_rgba(0,0,0,0.05)]">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="pb-20">
        <div className="reveal relative overflow-hidden rounded-[36px] bg-surface px-8 py-14 shadow-[0_24px_70px_rgba(0,0,0,0.09)] sm:px-14">
          <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-ink/[0.04] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 left-1/3 size-64 rounded-full bg-ink/[0.025] blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <Eyebrow>Also at the kit</Eyebrow>
              <h2 className="mt-5 text-balance text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.04em]">
                Some songs need a drummer, not a lesson.
              </h2>
            </div>
            <div className="flex flex-col items-start gap-5 md:items-end">
              <p className="max-w-xs text-sm leading-7 text-ink-muted">
                Send a reference and a few words about the track. I&apos;ll
                listen first and tell you honestly what I hear.
              </p>
              <ButtonLink href="/book">
                <DiscIcon className="size-4" />
                Book a session
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>

      <section id="credits">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            className="reveal"
            eyebrow="Credits"
            title="Where the photographs came from."
            description="The images here are borrowed from Wikimedia Commons. Details and licences below."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {imageCredits.map((credit) => (
              <li
                key={credit.file}
                className="panel-sm px-5 py-5 text-sm leading-6 text-ink-muted"
              >
                <p className="font-medium text-ink">{credit.title}</p>
                <p className="mt-1 text-xs text-ink-subtle">
                  {credit.artist} / {credit.license}
                </p>
                <div className="mt-3 flex flex-wrap gap-4">
                  <a
                    href={credit.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs tracking-[0.04em] text-ink-subtle transition-colors hover:text-ink"
                  >
                    Source
                    <ExternalIcon className="size-3" />
                  </a>
                  <a
                    href={credit.licenseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs tracking-[0.04em] text-ink-subtle transition-colors hover:text-ink"
                  >
                    Licence
                    <ExternalIcon className="size-3" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
