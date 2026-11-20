import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRightIcon,
  AudioIcon,
  CheckIcon,
  DiscIcon,
  MessageIcon,
} from "@/components/icons";
import { QuoteForm } from "@/components/quote-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Play on your record",
  description:
    "Ask Ebo Aggrey to play drums on your record. What you get, how it works and how to send a track.",
};

const benefits = [
  {
    title: "Drums that belong to the song",
    copy: "References first. I play what the record needs, not what shows off the most.",
  },
  {
    title: "A calm room",
    copy: "Whether we track live or from stems, the work stays focused and unhurried.",
  },
  {
    title: "A clear answer",
    copy: "You get an honest reply about availability, approach and next steps.",
  },
];

const steps = [
  {
    number: "01",
    title: "Send the track",
    copy: "A rough mix, a link or a voice note is enough to start.",
  },
  {
    number: "02",
    title: "I listen",
    copy: "Reference first, assumptions second.",
  },
  {
    number: "03",
    title: "We talk",
    copy: "A call or a long email, whichever suits the project.",
  },
  {
    number: "04",
    title: "We track",
    copy: "Drums that fit the record, with room to adjust.",
  },
];

const packages = [
  {
    name: "Guide drums",
    copy: "A steady foundation for the band to play against.",
    detail: "[YOUR PRICE]",
  },
  {
    name: "Remote overdub",
    copy: "Stems and references sent ahead, takes sent back.",
    detail: "[YOUR PRICE]",
  },
  {
    name: "Live in the studio",
    copy: "Drums tracked with you in the room.",
    detail: "[YOUR PRICE]",
  },
];

const samples = ["[AUDIO SAMPLE 01]", "[AUDIO SAMPLE 02]", "[AUDIO SAMPLE 03]"];

export default function PlayOnYourRecordPage() {
  return (
    <>
      <Section>
        <PageHeader
          eyebrow="Session drums / Ebo Aggrey"
          title="Bring me the track."
          intro="Got a record that needs a drummer? Send a reference and a few words about the song. I'll listen first and tell you honestly what I hear."
        />

        <div className="reveal-group mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} data-reveal className="card flex flex-col p-7">
              <CheckIcon className="size-5 text-line" />
              <h2 className="mt-10 text-[20px] font-bold tracking-[-0.03em]">
                {benefit.title}
              </h2>
              <p className="mt-3 text-[14px] leading-6 text-ink-muted">
                {benefit.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <Eyebrow>How it works</Eyebrow>
        <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
          Four steps, no ceremony.
        </h2>
        <div className="reveal-group mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} data-reveal className="card p-6">
              <span className="text-[12px] font-semibold text-line">
                {step.number}
              </span>
              <h3 className="mt-6 text-[19px] font-bold tracking-[-0.03em]">
                {step.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-ink-muted">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>Audio samples</Eyebrow>
            <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
              Hear the approach.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-ink-muted">
              Clips go here when Ebo supplies them. Until then, the placeholders
              mark exactly what is missing.
            </p>
            <AudioIcon className="mt-8 size-6 text-line" />
          </div>
          <div data-reveal className="card p-7">
            <div className="grid gap-3">
              {samples.map((sample) => (
                <div
                  key={sample}
                  className="control flex min-h-14 items-center px-5 text-[13px] font-semibold placeholder"
                >
                  {sample}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <Eyebrow>Packages</Eyebrow>
        <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
          Three ways to work.
        </h2>
        <div className="reveal-group mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((item) => (
            <div key={item.name} data-reveal className="card flex flex-col p-7">
              <DiscIcon className="size-5 text-line" />
              <h3 className="mt-10 text-[20px] font-bold tracking-[-0.03em]">
                {item.name}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-ink-muted">
                {item.copy}
              </p>
              <p className="placeholder mt-8 text-[18px] font-bold">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div data-reveal>
            <Eyebrow>Get a quote</Eyebrow>
            <h2 className="mt-6 text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.045em]">
              Tell me about the song.
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-8 text-ink-muted">
              The more I can listen to beforehand, the better the reply. A link
              and a short note is plenty.
            </p>
            <div className="mt-10 flex items-center gap-3 text-line">
              <MessageIcon className="size-5" />
              <span className="text-[14px] font-semibold">
                A real reply, not a ticket number
              </span>
            </div>
          </div>
          <QuoteForm />
        </div>
      </Section>

      <Section tone="alt">
        <div data-reveal className="card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>Not a record?</Eyebrow>
            <h2 className="mt-4 text-[26px] font-bold tracking-[-0.035em]">
              Lessons start with a free conversation.
            </h2>
          </div>
          <Link
            href="/book"
            className="inline-flex shrink-0 items-center gap-2 text-[15px] font-semibold text-line transition-colors hover:text-ink"
          >
            Start free lesson
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
