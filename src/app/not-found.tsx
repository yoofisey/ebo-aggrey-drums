import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <div className="w-full">
        <Eyebrow>404 / Not found</Eyebrow>
        <h1 className="mt-6 max-w-3xl text-balance text-[clamp(2.6rem,6vw,4.75rem)] font-bold leading-[1.04] tracking-[-0.045em]">
          That page has wandered off.
        </h1>
        <p className="mt-8 max-w-xl text-[15px] leading-8 text-ink-muted">
          It may have moved, or it may never have existed. Start with the
          materials and you&apos;ll find your way.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/materials" size="lg">
            Browse the materials
          </ButtonLink>
          <ButtonLink href="/" variant="secondary" size="lg">
            Back home
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
