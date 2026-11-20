"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CloseIcon,
  DrumIcon,
  MenuIcon,
} from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/materials", label: "Materials" },
  { href: "/play-on-your-record", label: "Play on your record" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-white/10 bg-canvas shadow-[0_8px_24px_rgba(0,0,0,0.28)]"
          : "border-transparent bg-canvas/90",
      )}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="control flex size-10 items-center justify-center text-line">
              <DrumIcon className="size-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[14px] font-bold tracking-[-0.02em]">
                Ebo Aggrey
              </span>
              <span className="text-[11px] text-ink-subtle">Drums</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-11 items-center rounded-[12px] px-4 text-[14px] font-semibold transition-colors duration-200",
                  isActive(item.href)
                    ? "bg-control text-ink"
                    : "text-line hover:bg-control hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/book" size="sm" current={pathname === "/book"}>
              Start free lesson
            </ButtonLink>
          </div>

          <button
            type="button"
            className="control flex size-11 items-center justify-center text-line lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? (
              <CloseIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </button>
        </div>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          className="bg-canvas-alt pb-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container>
            <div className="grid gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex min-h-12 items-center rounded-[12px] px-4 text-[15px] font-semibold",
                    isActive(item.href)
                      ? "bg-control text-ink"
                      : "text-line",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ButtonLink
              href="/book"
              current={pathname === "/book"}
              className="mt-5 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Start free lesson
            </ButtonLink>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
