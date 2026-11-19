import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "ink-gradient text-white shadow-[0_8px_24px_rgba(117,54,34,0.2)] hover:brightness-105 hover:shadow-[0_12px_34px_rgba(117,54,34,0.25)] active:shadow-[0_5px_16px_rgba(117,54,34,0.18)]",
  secondary:
    "bg-surface text-ink shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] hover:bg-surface-raised hover:shadow-[0_12px_30px_rgba(0,0,0,0.09)]",
  ghost: "text-ink-muted hover:bg-surface-raised hover:text-ink",
  light:
    "bg-white text-ink shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:bg-white/90",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-sm",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyleProps = {}): string {
  return cn(
    "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[background-color,box-shadow,color,transform,filter] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

export function ButtonLink({
  href,
  children,
  onClick,
  ...props
}: ButtonStyleProps & {
  href: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={buttonStyles(props)} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  type = "button",
  variant,
  size,
  className,
  onClick,
  disabled,
}: ButtonStyleProps & {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      className={buttonStyles({ variant, size, className })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
