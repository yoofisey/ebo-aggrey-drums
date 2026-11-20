import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-bright text-canvas hover:bg-white",
  secondary: "bg-control text-ink hover:bg-raised",
  ghost: "bg-transparent text-line hover:bg-control hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "min-h-11 px-4 text-[14px]",
  md: "min-h-12 px-5 text-[15px]",
  lg: "min-h-12 px-6 text-[15px]",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleProps = {}): string {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-[12px] font-semibold tracking-[-0.01em] transition-colors duration-200",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button({
  children,
  variant,
  size,
  className,
  type = "button",
  onClick,
}: ButtonStyleProps & {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant,
  size,
  className,
  onClick,
  current,
}: ButtonStyleProps & {
  children: ReactNode;
  href: string;
  onClick?: () => void;
  current?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={buttonStyles({ variant, size, className })}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
