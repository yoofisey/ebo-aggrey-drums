"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  CloseIcon,
  DiscIcon,
  DrumIcon,
  MenuIcon,
  UploadIcon,
} from "@/components/icons";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/materials", label: "Materials" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="glass sticky top-0 z-50">
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Ebo Aggrey Drums, home"
          >
            <span className="ink-gradient flex size-9 items-center justify-center rounded-2xl text-white shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:-rotate-6">
              <DrumIcon className="size-5" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[14px] font-semibold tracking-[-0.02em]">
                Ebo Aggrey
              </span>
              <span className="mt-1 text-[10px] tracking-[0.08em] text-ink-subtle">
                Drums
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm tracking-tight transition-[background-color,color,box-shadow] duration-200",
                  isActive(item.href)
                    ? "bg-white font-medium text-ink shadow-[0_4px_14px_rgba(0,0,0,0.06)]"
                    : "text-ink-muted hover:bg-white/60 hover:text-ink",
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <ButtonLink href="/materials/add" variant="ghost" size="sm">
              <UploadIcon className="size-3.5" />
              Add material
            </ButtonLink>
            <ButtonLink href="/book" size="sm">
              <DiscIcon className="size-3.5" />
              Book Ebo
            </ButtonLink>
          </div>

          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-2xl bg-white text-ink shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition-colors hover:bg-surface-raised md:hidden"
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
          className="bg-white/90 shadow-[0_18px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl md:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="py-5">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl px-3 py-3 text-sm transition-colors",
                    isActive(item.href)
                      ? "bg-surface-raised font-medium text-ink"
                      : "text-ink-muted hover:bg-surface-raised hover:text-ink",
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <ButtonLink
              href="/book"
              className="mt-4 w-full"
              onClick={() => setMenuOpen(false)}
            >
              <DiscIcon className="size-4" />
              Book Ebo
            </ButtonLink>
            <ButtonLink
              href="/materials/add"
              variant="secondary"
              className="mt-2 w-full"
              onClick={() => setMenuOpen(false)}
            >
              <UploadIcon className="size-4" />
              Add material
            </ButtonLink>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
