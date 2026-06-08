import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-400/30",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 ring-1 ring-border",
  ghost: "hover:bg-secondary/50 text-foreground",
  outline:
    "border border-border bg-transparent hover:bg-secondary/50 text-foreground ring-1 ring-border/50"
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-2.5 text-base"
};

function buttonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );
}

interface LinkButtonProps {
  href: string;
  target?: string;
  rel?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  href,
  target,
  rel,
  variant = "primary",
  size = "md",
  className,
  children
}: LinkButtonProps) {
  return (
    <Link href={href} target={target} rel={rel} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  );
}

interface SubmitButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(function SubmitButton(
  { variant = "primary", size = "md", className, children, ...props },
  ref
) {
  return (
    <button ref={ref} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  );
});
