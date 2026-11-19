import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] items-center py-20">
      <div className="w-full">
        <Eyebrow>404 / Not found</Eyebrow>
        <h1 className="mt-6 text-balance text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
          That page has wandered off.
        </h1>
        <p className="mt-6 max-w-lg text-[15px] leading-8 text-ink-muted">
          It may have moved, or it may never have existed. Start with the
          lessons and you&apos;ll find your way.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/materials">Browse the materials</ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Back home
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
