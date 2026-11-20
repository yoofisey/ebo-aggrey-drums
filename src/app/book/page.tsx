import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { CheckIcon, ClockIcon, MessageIcon } from "@/components/icons";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Start free lesson",
  description:
    "Book a free first drum lesson with Ebo Aggrey. Tell him where you are and what you want to work on.",
};

const notes = [
  {
    icon: MessageIcon,
    title: "No commitment",
    copy: "A conversation and a listen before anything else.",
  },
  {
    icon: ClockIcon,
    title: "You choose the time",
    copy: "Tell me what suits and I'll work around it.",
  },
  {
    icon: CheckIcon,
    title: "A clear next step",
    copy: "You'll hear what I think and what comes next.",
  },
];

export default function BookPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="1-on-1 booking / Ebo Aggrey"
        title="Start with a free lesson."
        intro="Tell me where you are and what you want to feel better about. A short note is enough; we can fill in the rest together."
      />

      <div className="reveal-group mt-14 grid gap-6 md:grid-cols-3">
        {notes.map((note) => {
          const Icon = note.icon;
          return (
            <div key={note.title} data-reveal className="card p-6">
              <Icon className="size-5 text-line" />
              <h2 className="mt-8 text-[17px] font-bold tracking-[-0.025em]">
                {note.title}
              </h2>
              <p className="mt-2 text-[14px] leading-6 text-ink-muted">
                {note.copy}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div data-reveal>
          <Eyebrow>Before you send</Eyebrow>
          <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.04em]">
            Three small things.
          </h2>
          <ol className="mt-8 grid gap-6">
            {[
              "What do you play now, and for how long?",
              "What feels stuck or worth improving?",
              "When are you usually free?",
            ].map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="control flex size-9 shrink-0 items-center justify-center text-[12px] font-semibold text-line">
                  0{index + 1}
                </span>
                <span className="pt-1 text-[14px] leading-6 text-ink-muted">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <BookingForm />
      </div>
    </Section>
  );
}
