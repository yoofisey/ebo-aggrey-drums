import Link from "next/link";
import { DrumIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { site } from "@/lib/site";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/materials", label: "Materials" },
  { href: "/play-on-your-record", label: "Play on your record" },
  { href: "/pricing", label: "Pricing" },
];

const socialLinks: Array<{ label: string; href?: string }> = [
  { label: "Instagram", href: "https://www.instagram.com/_eboaggrey/" },
  { label: "[YOUTUBE]" },
  { label: "[BANDCAMP]" },
];

export function SiteFooter() {
  return (
    <footer className="bg-canvas-alt py-[88px]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr_0.6fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="control flex size-10 items-center justify-center text-line">
                <DrumIcon className="size-5" />
              </span>
              <span className="text-[14px] font-bold tracking-[-0.02em]">
                Ebo Aggrey
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[15px] leading-8 text-ink-muted">
              Lessons, practice materials and session drums. Everything starts
              with listening.
            </p>
            <ButtonLink href="/book" className="mt-8">
              Start free lesson
            </ButtonLink>
          </div>

          <div>
            <Eyebrow>Pages</Eyebrow>
            <ul className="mt-6 grid gap-3">
              {pageLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-line transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow>Elsewhere</Eyebrow>
            <ul className="mt-6 grid gap-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[15px] text-line transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span className="placeholder text-[15px]">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/about"
                  className="text-[15px] text-line transition-colors hover:text-ink"
                >
                  Photo credits
                </Link>
              </li>
            </ul>
            <p className="mt-5 text-[12px] leading-5 text-ink-subtle">
              Add the remaining profile links here when they are ready.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 text-[12px] text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
          <span>
            Copyright {site.copyrightYear} {site.name}
          </span>
          <span>Prototype — placeholders mark what is still needed</span>
        </div>
      </Container>
    </footer>
  );
}
