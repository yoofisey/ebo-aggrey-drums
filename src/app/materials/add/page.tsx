import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { MaterialForm } from "@/components/material-form";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { contentItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Add material",
  description: "Post a video, PDF, audio study or link to the materials shelf.",
};

export default function AddMaterialPage() {
  return (
    <Section>
      <PageHeader
        eyebrow="Materials / owner screen"
        title="Add something useful."
        intro="A place for Ebo to post videos, PDFs, audio and links. The interface is here; storage still needs connecting."
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr]">
        <MaterialForm />

        <aside data-reveal>
          <div className="flex items-center justify-between gap-4">
            <Eyebrow>Recently added</Eyebrow>
            <Link
              href="/materials"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-line transition-colors hover:text-ink"
            >
              View shelf
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <ul className="mt-6 grid gap-3">
            {contentItems.slice(0, 5).map((item) => (
              <li key={item.slug} className="card flex items-center gap-4 p-4">
                <span className="control flex size-10 shrink-0 items-center justify-center text-[12px] font-semibold uppercase text-line">
                  {item.kind}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[14px] font-semibold">
                    {item.title}
                  </span>
                  <span className="mt-1 block text-[12px] text-ink-subtle">
                    {item.level} · {item.duration}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[12px] leading-5 text-ink-subtle">
            This list shows existing prototype items. New posts are not saved.
          </p>
        </aside>
      </div>
    </Section>
  );
}
