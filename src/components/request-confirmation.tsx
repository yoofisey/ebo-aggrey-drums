"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
  DrumIcon,
  MailIcon,
} from "@/components/icons";
import { Button, ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/site";

type Context = "lesson" | "record";

type RequestConfirmationProps = {
  open: boolean;
  href: string;
  context: Context;
  onClose: () => void;
};

const copy: Record<
  Context,
  { eyebrow: string; title: string; description: string; steps: string[] }
> = {
  lesson: {
    eyebrow: "Free lesson request",
    title: "Your request is ready.",
    description:
      "A draft is open in your email app, addressed to Ebo. Press send there to finish your request. Nothing has been stored on this site.",
    steps: [
      "Preparing your request",
      "Opening your email app",
      "Draft ready to send",
    ],
  },
  record: {
    eyebrow: "Record session request",
    title: "Your request is ready.",
    description:
      "A draft is open in your email app with the details you gave. Press send there to finish your request. Nothing has been stored on this site.",
    steps: [
      "Preparing your request",
      "Opening your email app",
      "Draft ready to send",
    ],
  },
};

export function RequestConfirmation({
  open,
  href,
  context,
  onClose,
}: RequestConfirmationProps) {
  const [phase, setPhase] = useState<"loading" | "done">("loading");
  const [step, setStep] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  const content = copy[context];

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 0);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    document.addEventListener("keydown", onKeyDown);

    const timers = reduced
      ? [window.setTimeout(() => setPhase("done"), 0)]
      : content.steps.map((_, index) =>
          window.setTimeout(
            () => {
              if (index < content.steps.length - 1) setStep(index + 1);
              else setPhase("done");
            },
            (index + 1) * 600,
          ),
        );

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      timers.forEach(window.clearTimeout);
      trigger?.focus();
    };
  }, [open, content.steps]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5 py-10">
      <button
        type="button"
        aria-label="Close confirmation"
        onClick={onClose}
        className="overlay-backdrop absolute inset-0 cursor-default bg-canvas/90 backdrop-blur-md"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="request-confirmation-title"
        className="confirmation-panel relative w-full max-w-[520px] overflow-hidden rounded-[20px] border border-white/10 bg-card p-8 shadow-[0_32px_90px_rgba(0,0,0,0.55)] sm:p-12"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="control absolute right-5 top-5 flex size-10 items-center justify-center text-line transition-colors hover:bg-raised hover:text-ink"
        >
          <CloseIcon className="size-4" />
        </button>

        {phase === "loading" ? (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="relative flex size-20 items-center justify-center">
              <span className="confirmation-ring absolute inset-0 rounded-full border border-white/15" />
              <span className="flex size-14 items-center justify-center rounded-full bg-control text-line">
                <DrumIcon className="size-6" />
              </span>
            </div>

            <p className="mt-9 text-[12px] font-semibold tracking-[0.02em] text-line">
              Ebo Aggrey / drums
            </p>
            <p aria-live="polite" className="mt-3 text-[14px] text-ink-muted">
              {content.steps[step]}
            </p>

            <div className="mt-10 h-[2px] w-full overflow-hidden rounded-full bg-control">
              <div className="confirmation-progress h-full w-full rounded-full bg-bright" />
            </div>
          </div>
        ) : (
          <div className="py-3">
            <span className="confirmation-mark flex size-14 items-center justify-center rounded-full bg-bright text-canvas">
              <CheckIcon className="size-6" />
            </span>

            <p className="mt-8 text-[12px] font-semibold tracking-[0.02em] text-line">
              {content.eyebrow}
            </p>
            <h2
              id="request-confirmation-title"
              className="mt-3 text-[32px] font-bold leading-tight tracking-[-0.04em]"
            >
              {content.title}
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-ink-muted">
              {content.description}
            </p>

            <div className="control mt-8 flex items-center gap-3 px-4 py-3 text-[13px] text-line">
              <MailIcon className="size-4 shrink-0" />
              <span className="truncate">{site.bookingEmail}</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={href} size="lg" className="w-full sm:w-auto">
                Open the email draft
                <ArrowRightIcon className="size-4" />
              </ButtonLink>
              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
                onClick={onClose}
              >
                Back to the site
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
