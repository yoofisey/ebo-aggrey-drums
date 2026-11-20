"use client";

import { useState, type FormEvent } from "react";
import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/icons";
import { RequestConfirmation } from "@/components/request-confirmation";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { FormNotice } from "@/components/ui/form-notice";
import { Eyebrow } from "@/components/ui/eyebrow";
import { createMailto } from "@/lib/mailto";

export function QuoteForm() {
  const [mailto, setMailto] = useState<string | null>(null);
  const [confirming, setConfirming] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const read = (name: string) => String(data.get(name) ?? "").trim();

    const href = createMailto(`Record session request — ${read("project")}`, [
      `Name: ${read("name")}`,
      `Email: ${read("email")}`,
      `Artist or project: ${read("project")}`,
      `Track: ${read("track")}`,
      `Session: ${read("session")}`,
      `Reference: ${read("reference") || "Not supplied"}`,
      `Timeline: ${read("timeline") || "Flexible"}`,
      "",
      "About the track:",
      read("brief"),
    ]);

    setMailto(href);
    setConfirming(true);
    window.location.assign(href);
  }

  return (
    <form className="card p-6 sm:p-9" onSubmit={handleSubmit}>
      <Eyebrow>Get a quote</Eyebrow>
      <h2 className="mt-4 text-[32px] font-bold leading-tight tracking-[-0.035em]">
        Send the track.
      </h2>
      <p className="mt-3 text-[14px] leading-7 text-ink-muted">
        Reference first, assumptions second. I&apos;ll listen and come back to
        you honestly.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <Field label="Your name" htmlFor="quote-name">
          <input
            id="quote-name"
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className="field"
          />
        </Field>
        <Field label="Email" htmlFor="quote-email">
          <input
            id="quote-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className="field"
          />
        </Field>
        <Field label="Artist or project" htmlFor="quote-project">
          <input
            id="quote-project"
            name="project"
            required
            placeholder="The name on the record"
            className="field"
          />
        </Field>
        <Field label="Track title" htmlFor="quote-track">
          <input
            id="quote-track"
            name="track"
            required
            placeholder="Working title is fine"
            className="field"
          />
        </Field>
        <Field label="What do you need?" htmlFor="quote-session">
          <select id="quote-session" name="session" className="field">
            <option>Live in the studio</option>
            <option>Remote overdub</option>
            <option>Guide drums</option>
          </select>
        </Field>
        <Field label="Timeline" htmlFor="quote-timeline">
          <input
            id="quote-timeline"
            name="timeline"
            placeholder="Flexible is fine"
            className="field"
          />
        </Field>
        <Field
          label="Reference link"
          htmlFor="quote-reference"
          className="sm:col-span-2"
        >
          <input
            id="quote-reference"
            name="reference"
            type="url"
            placeholder="Dropbox, YouTube, SoundCloud or similar"
            className="field"
          />
        </Field>
        <Field
          label="A few words about the track"
          htmlFor="quote-brief"
          className="sm:col-span-2"
        >
          <textarea
            id="quote-brief"
            name="brief"
            required
            rows={5}
            placeholder="What should the drums feel like?"
            className="field"
          />
        </Field>
      </div>

      <div className="mt-8">
        <FormNotice>
          This prepares an email in your own mail app. No calendar, payment or
          file storage is connected here yet.
        </FormNotice>
      </div>

      <Button type="submit" size="lg" className="mt-8">
        <MailIcon className="size-4" />
        Send quote request
      </Button>

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

      <RequestConfirmation
        key={mailto ?? "confirmation"}
        open={confirming && mailto !== null}
        href={mailto ?? ""}
        context="record"
        onClose={() => setConfirming(false)}
      />
    </form>
  );
}
