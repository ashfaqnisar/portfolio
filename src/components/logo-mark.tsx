import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "h-6 w-6 text-xs",
  md: "h-8 w-8 text-sm",
  lg: "h-10 w-10 text-base"
};

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "flex items-center justify-center rounded-lg bg-emerald-500/10 font-mono font-bold text-emerald-400 ring-1 ring-emerald-500/30",
        sizeClasses[size],
        className
      )}
    >
      AN
    </span>
  );
}
