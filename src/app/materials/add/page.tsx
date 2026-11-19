import type { Metadata } from "next";
import { MaterialForm } from "@/components/material-form";
import { CheckIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Add material",
  description:
    "Post a video, PDF, audio study or resource link to the Materials shelf.",
};

const guidelines = [
  "Keep video and audio clips under 500 MB",
  "Export documents as PDFs so they open everywhere",
  "A sentence on why it helps goes a long way",
  "Tag by topic, not by who made it",
];

export default function AddMaterialPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <div className="h-fit lg:sticky lg:top-28">
          <Eyebrow className="reveal">Materials / New item</Eyebrow>
          <h1 className="reveal reveal-delay-1 mt-5 text-[clamp(3.2rem,6.5vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
            Add
            <br />
            material.
          </h1>
          <p className="reveal reveal-delay-2 mt-7 max-w-sm text-[15px] leading-8 text-ink-muted">
            Post a video, PDF, audio study or link to the shelf. Give it a clear
            title and a sentence about why it helps.
          </p>

          <div className="panel-sm reveal reveal-delay-3 mt-10 max-w-sm p-6">
            <Eyebrow>Before you post</Eyebrow>
            <ul className="mt-6 space-y-4">
              {guidelines.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-ink-muted"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-surface-raised text-ink">
                    <CheckIcon className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal reveal-delay-2">
          <MaterialForm />
        </div>
      </div>
    </Container>
  );
}
