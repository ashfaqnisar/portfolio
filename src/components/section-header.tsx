import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left"
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-8 space-y-2", align === "center" && "text-center", className)}>
      <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-400">
        {label}
      </p>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="max-w-2xl text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}
