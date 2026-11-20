"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { FormNotice } from "@/components/ui/form-notice";
import { Eyebrow } from "@/components/ui/eyebrow";
import { createMailto } from "@/lib/mailto";

export function BookingForm() {
  const [mailto, setMailto] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const read = (name: string) => String(data.get(name) ?? "").trim();

    const href = createMailto(`Free lesson request — ${read("name")}`, [
      `Name: ${read("name")}`,
      `Email: ${read("email")}`,
      `Playing level: ${read("level")}`,
      `What I want to work on: ${read("goal")}`,
      `Preferred time: ${read("time") || "Flexible"}`,
      "",
      "A little about me:",
      read("message"),
    ]);

    setMailto(href);
    window.location.assign(href);
  }

  return (
    <form className="card p-6 sm:p-9" onSubmit={handleSubmit}>
      <Eyebrow>1-on-1 booking</Eyebrow>
      <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-[-0.035em]">
        Tell me where you are.
      </h2>
      <p className="mt-3 text-[14px] leading-7 text-ink-muted">
        A few lines is enough. I&apos;ll reply with what I hear and how we can
        work together.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field label="Your name" htmlFor="lesson-name">
          <input
            id="lesson-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="field"
          />
        </Field>
        <Field label="Email" htmlFor="lesson-email">
          <input
            id="lesson-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
          />
        </Field>
        <Field label="Where are you at?" htmlFor="lesson-level">
          <select id="lesson-level" name="level" className="field" defaultValue="Just starting">
            <option>Just starting</option>
            <option>Playing a little</option>
            <option>Playing regularly</option>
            <option>Back after a break</option>
          </select>
        </Field>
        <Field label="Preferred time" htmlFor="lesson-time">
          <input
            id="lesson-time"
            name="time"
            placeholder="Evenings, weekends, flexible"
            className="field"
          />
        </Field>
        <Field
          label="What would you like to work on?"
          htmlFor="lesson-goal"
          className="sm:col-span-2"
        >
          <input
            id="lesson-goal"
            name="goal"
            required
            placeholder="Timing, fills, recording, confidence"
            className="field"
          />
        </Field>
        <Field
          label="Anything else?"
          htmlFor="lesson-message"
          className="sm:col-span-2"
        >
          <textarea
            id="lesson-message"
            name="message"
            rows={5}
            placeholder="Tell me what you are playing and where it feels stuck."
            className="field"
          />
        </Field>
      </div>

      <div className="mt-8">
        <FormNotice>
          This prepares an email in your own mail app, so you stay in control of
          what gets sent. No calendar, payment or storage is connected here yet.
        </FormNotice>
      </div>

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          <MailIcon className="size-4" />
          Send lesson request
        </Button>
        <span className="text-[13px] text-ink-subtle">
          Free first lesson, no payment details needed
        </span>
      </div>

      {mailto ? (
        <div
          role="status"
          aria-live="polite"
          className="control mt-8 flex gap-4 p-5"
        >
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-bright text-canvas">
            <CheckIcon className="size-4" />
          </span>
          <div>
            <p className="text-[15px] font-semibold">
              Your email app should be open
            </p>
            <p className="mt-2 text-[13px] leading-6 text-ink-muted">
              If it didn&apos;t, open the prepared request below. Nothing has
              been stored on this site.
            </p>
            <a
              href={mailto}
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-line hover:text-ink"
            >
              Open the email draft
              <ArrowRightIcon className="size-4" />
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}
