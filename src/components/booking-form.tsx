"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRightIcon,
  AudioIcon,
  CalendarIcon,
  CheckIcon,
  DiscIcon,
  MailIcon,
  MessageIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const labelClass = "mb-3 block text-xs font-medium text-ink-subtle";

const sessionTypes = [
  {
    value: "studio",
    label: "Live in the studio",
    note: "Drums tracked with you in the room",
    icon: DiscIcon,
  },
  {
    value: "remote",
    label: "Remote overdub",
    note: "Stems and references sent ahead",
    icon: AudioIcon,
  },
  {
    value: "guide",
    label: "Guide drums",
    note: "A steady foundation for the band",
    icon: CalendarIcon,
  },
];

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className={labelClass}>
        {label}
      </label>
      {children}
    </div>
  );
}

function Step({
  number,
  title,
  children,
  className,
}: {
  number: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mb-6 flex items-center gap-3">
        <span className="ink-gradient flex size-7 items-center justify-center rounded-full text-[11px] font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.14)]">
          {number}
        </span>
        <p className="text-sm font-medium tracking-[-0.01em]">{title}</p>
      </div>
      {children}
    </section>
  );
}

export function BookingForm() {
  const [sessionType, setSessionType] = useState(sessionTypes[0].value);
  const [mailto, setMailto] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const read = (name: string) => String(formData.get(name) ?? "").trim();

    const project = read("project") || read("name");
    const chosenSession =
      sessionTypes.find((type) => type.value === sessionType)?.label ??
      sessionType;

    const body = [
      `Name: ${read("name")}`,
      `Email: ${read("email")}`,
      `Project / artist: ${read("project")}`,
      `Track: ${read("track")}`,
      `Reference: ${read("reference") || "Not supplied"}`,
      `Session: ${chosenSession}`,
      `Preferred date: ${read("date") || "Flexible"}`,
      `Budget: ${read("budget") || "Let's talk"}`,
      "",
      "Brief:",
      read("brief"),
      "",
      "Sent from the Ebo Aggrey Drums booking page.",
    ].join("\n");

    const subject = `Record session request — ${project}`;
    const href = `mailto:${site.bookingEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setMailto(href);
    window.location.assign(href);
  }

  return (
    <form className="panel p-6 sm:p-10" onSubmit={handleSubmit}>
      <div className="flex items-start justify-between gap-6">
        <div>
          <Eyebrow>Request a session</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">
            Tell me about the record.
          </h2>
        </div>
        <span className="ink-gradient flex size-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-[0_8px_24px_rgba(0,0,0,0.16)]">
          <DiscIcon className="size-6" />
        </span>
      </div>

      <Step number="01" title="Who is this from?" className="mt-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Your name" htmlFor="booking-name">
            <input
              id="booking-name"
              name="name"
              required
              autoComplete="name"
              placeholder="Who am I speaking with?"
              className="field"
            />
          </Field>

          <Field label="Email" htmlFor="booking-email">
            <input
              id="booking-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              className="field"
            />
          </Field>

          <Field label="Artist or project" htmlFor="booking-project">
            <input
              id="booking-project"
              name="project"
              required
              autoComplete="organization"
              placeholder="The name on the record"
              className="field"
            />
          </Field>

          <Field label="Track title" htmlFor="booking-track">
            <input
              id="booking-track"
              name="track"
              required
              placeholder="Working title is fine"
              className="field"
            />
          </Field>
        </div>
      </Step>

      <Step number="02" title="What do you need?" className="mt-10">
        <fieldset>
          <legend className={labelClass}>What kind of session?</legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {sessionTypes.map((option) => {
              const Icon = option.icon;
              const selected = sessionType === option.value;

              return (
                <label key={option.value} className="booking-option cursor-pointer">
                  <input
                    type="radio"
                    name="sessionType"
                    value={option.value}
                    checked={selected}
                    onChange={() => setSessionType(option.value)}
                    className="sr-only"
                  />
                  <span
                    className={cn(
                      "flex h-full flex-col rounded-2xl p-4 transition-[background-color,box-shadow,color,transform] duration-200",
                      selected
                        ? "ink-gradient text-white shadow-[0_12px_32px_rgba(0,0,0,0.2)]"
                        : "bg-surface-raised text-ink hover:-translate-y-0.5 hover:bg-[#e8e8ed]",
                    )}
                  >
                    <Icon className="size-5" />
                    <span className="mt-4 text-sm font-medium leading-snug">
                      {option.label}
                    </span>
                    <span
                      className={cn(
                        "mt-1 text-xs leading-5",
                        selected ? "text-white/65" : "text-ink-subtle",
                      )}
                    >
                      {option.note}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <Field
            label="Preferred date"
            htmlFor="booking-date"
            className="sm:col-span-1"
          >
            <input id="booking-date" name="date" type="date" className="field" />
          </Field>

          <Field label="Budget range" htmlFor="booking-budget">
            <select
              id="booking-budget"
              name="budget"
              defaultValue="Let's talk"
              className="field"
            >
              <option>Let&apos;s talk</option>
              <option>Small project</option>
              <option>Mid-range session</option>
              <option>Larger production</option>
            </select>
          </Field>
        </div>
      </Step>

      <Step number="03" title="The song itself" className="mt-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label="Reference link"
            htmlFor="booking-reference"
            className="sm:col-span-2"
          >
            <input
              id="booking-reference"
              name="reference"
              type="url"
              placeholder="Dropbox, YouTube, SoundCloud or similar"
              className="field"
            />
          </Field>

          <Field
            label="A few words about the track"
            htmlFor="booking-brief"
            className="sm:col-span-2"
          >
            <textarea
              id="booking-brief"
              name="brief"
              required
              rows={6}
              placeholder="What should the drums feel like? Anything I should know before I listen?"
              className="field"
            />
          </Field>
        </div>
      </Step>

      <p className="glass mt-9 rounded-2xl px-5 py-4 text-xs leading-5 text-ink-muted">
        This prepares an email in your own mail app, so you stay in control of
        what gets sent. No calendar, payment or storage is connected here yet.
      </p>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          <MailIcon className="size-4" />
          Send booking request
        </Button>
        <span className="inline-flex items-center gap-2 text-xs text-ink-subtle">
          <MessageIcon className="size-3.5" />
          A real reply, not a ticket number
        </span>
      </div>

      {mailto ? (
        <div
          role="status"
          aria-live="polite"
          className="glass mt-8 rounded-[20px] p-5"
        >
          <div className="flex gap-4">
            <span className="ink-gradient flex size-9 shrink-0 items-center justify-center rounded-full text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
              <CheckIcon className="size-4" />
            </span>
            <div>
              <p className="text-sm font-medium text-ink">
                Your email app should be open.
              </p>
              <p className="mt-2 text-xs leading-5 text-ink-muted">
                If it didn&apos;t, open the prepared request below. Nothing has
                been stored on this site.
              </p>
              <a
                href={mailto}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-70"
              >
                Open the email draft
                <ArrowRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </form>
  );
}
