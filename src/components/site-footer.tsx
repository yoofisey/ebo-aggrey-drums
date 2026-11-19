import Link from "next/link";
import { ArrowRightIcon, DiscIcon, DrumIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { site } from "@/lib/site";

const explore = [
  { href: "/book", label: "Book Ebo" },
  { href: "/", label: "Home" },
  { href: "/materials", label: "Materials" },
  { href: "/materials/add", label: "Add material" },
  { href: "/about", label: "About Ebo" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-canvas-raised">
      <div className="pointer-events-none absolute -bottom-24 right-0 select-none text-[clamp(9rem,20vw,18rem)] font-semibold leading-none tracking-[-0.09em] text-ink/[0.025]">
        Ebo
      </div>

      <Container className="relative">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr_0.8fr_0.9fr]">
          <div className="reveal">
            <div className="flex items-center gap-3">
              <span className="ink-gradient flex size-9 items-center justify-center rounded-2xl text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
                <DrumIcon className="size-5" />
              </span>
              <span className="text-[14px] font-semibold tracking-[-0.02em]">
                Ebo Aggrey
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-ink-muted">
              Drum lessons, notes and materials from Ebo. Made for people who
              want to feel more at home behind the kit.
            </p>
            <ButtonLink
              href="/book"
              variant="secondary"
              size="sm"
              className="mt-7"
            >
              <DiscIcon className="size-3.5" />
              Have a record? Book Ebo
              <ArrowRightIcon className="size-3.5" />
            </ButtonLink>
          </div>

          <div className="reveal reveal-delay-1">
            <Eyebrow>Have a look</Eyebrow>
            <ul className="mt-5 space-y-3">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal reveal-delay-2">
            <Eyebrow>Good to know</Eyebrow>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about#approach"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  How I teach
                </Link>
              </li>
              <li>
                <Link
                  href="/about#note"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  A note from Ebo
                </Link>
              </li>
              <li>
                <Link
                  href="/about#credits"
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  Photograph credits
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 text-xs tracking-[0.02em] text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>
            Copyright {site.copyrightYear} {site.name}
          </span>
          <span>Questions welcome</span>
        </div>
      </Container>
    </footer>
  );
}
