import type { Metadata } from "next";
import { MaterialsBrowser } from "@/components/materials-browser";
import { UploadIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { contentItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Materials",
  description:
    "Videos, PDFs, audio studies and resource links from Ebo Aggrey. Everything in one place.",
};

export default function MaterialsPage() {
  return (
    <Container className="relative py-14 sm:py-20">
      <div className="pointer-events-none absolute -top-16 right-0 select-none text-[clamp(11rem,24vw,22rem)] font-semibold leading-none tracking-[-0.09em] text-ink/[0.025]">
        01
      </div>

      <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Eyebrow className="reveal">Shelf / Everything in one place</Eyebrow>
          <h1 className="reveal reveal-delay-1 mt-5 text-[clamp(3.4rem,8vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
            Materials
          </h1>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <p className="reveal reveal-delay-2 text-[15px] leading-8 text-ink-muted">
            Videos, PDFs, audio studies and links. Things I&apos;ve written for
            students, things worth listening to, and anything else that helps
            you practise with purpose.
          </p>
          <div className="reveal reveal-delay-3 mt-7 flex flex-wrap items-center gap-4">
            <ButtonLink href="/materials/add">
              <UploadIcon className="size-4" />
              Add material
            </ButtonLink>
            <span className="chip">{contentItems.length} items on the shelf</span>
          </div>
        </div>
      </div>

      <div className="reveal reveal-delay-2 mt-16">
        <MaterialsBrowser items={contentItems} />
      </div>
    </Container>
  );
}
