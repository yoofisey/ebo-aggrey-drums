import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { AudioIcon, ClockIcon, DiscIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Book Ebo",
  description:
    "Ask Ebo Aggrey to play drums on your record. Send a reference, tell him about the track and start a conversation.",
};

const sessionNotes = [
  {
    icon: DiscIcon,
    title: "Live room",
    copy: "Drums tracked with the band",
  },
  {
    icon: AudioIcon,
    title: "Remote takes",
    copy: "Stems sent and turned around",
  },
  {
    icon: ClockIcon,
    title: "Clear reply",
    copy: "Availability and next steps",
  },
];

const nextSteps = [
  {
    number: "01",
    title: "I listen",
    copy: "Reference first, assumptions second.",
  },
  {
    number: "02",
    title: "We talk",
    copy: "A quick call or a long email, whichever suits.",
  },
  {
    number: "03",
    title: "We track",
    copy: "Drums that belong to the song.",
  },
];

export default function BookPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-16">
        <div>
          <Eyebrow className="reveal">Record sessions / Ebo Aggrey</Eyebrow>
          <h1 className="reveal reveal-delay-1 mt-5 text-balance text-[clamp(3.25rem,6.5vw,5.5rem)] font-semibold leading-[0.94] tracking-[-0.05em]">
            Bring me
            <br />
            the track.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-md text-[15px] leading-8 text-ink-muted">
            Got a record that needs a drummer? Send a rough mix, a link, or a
            voice note. I&apos;ll listen first, then tell you honestly what I
            think the song needs.
          </p>

          <div className="reveal reveal-delay-2 relative mt-12 min-h-[420px] overflow-hidden rounded-[36px] bg-ink shadow-[0_28px_80px_rgba(0,0,0,0.2)] sm:min-h-[500px]">
            <Image
              src="/images/studio-kit.jpg"
              alt="A drum kit set up in a recording studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="silhouette film-drift object-cover object-[50%_45%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-5 sm:bottom-7 sm:left-7 sm:right-7">
              <Eyebrow>In the room / On the record</Eyebrow>
              <p className="mt-3 text-xl font-medium tracking-[-0.02em] text-ink">
                I listen before I play.
              </p>
            </div>
          </div>

          <div className="reveal reveal-delay-3 mt-6 grid gap-3 sm:grid-cols-3">
            {sessionNotes.map((note) => {
              const Icon = note.icon;
              return (
                <div key={note.title} className="panel-sm hover-lift p-4">
                  <Icon className="size-5 text-ink" />
                  <p className="mt-4 text-[13px] font-medium text-ink">
                    {note.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-ink-subtle">
                    {note.copy}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="panel-sm reveal reveal-delay-4 mt-6 p-6">
            <Eyebrow>After you send</Eyebrow>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {nextSteps.map((step) => (
                <div key={step.number}>
                  <span className="text-xs font-medium tracking-[0.04em] text-ink-subtle">
                    {step.number}
                  </span>
                  <p className="mt-2 text-sm font-medium text-ink">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-ink-muted">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-2 lg:pt-8">
          <BookingForm />
        </div>
      </div>
    </Container>
  );
}
