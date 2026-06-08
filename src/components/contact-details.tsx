import Link from "next/link";

import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type ContactDetailsProps = {
  className?: string;
  showNote?: boolean;
  compact?: boolean;
};

export function ContactDetails({
  className,
  showNote = false,
  compact = false
}: ContactDetailsProps) {
  return (
    <div className={cn("space-y-4 text-muted-foreground", className)}>
      <p className={compact ? "text-sm" : undefined}>
        <span className="font-medium text-foreground">Email:</span>{" "}
        <Link href={`mailto:${site.email}`} className="text-brand-light hover:underline">
          {site.email}
        </Link>
      </p>
      <p className={compact ? "text-sm" : undefined}>
        <span className="font-medium text-foreground">Phone:</span>{" "}
        <Link href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-brand-light">
          {site.phone}
        </Link>
      </p>
      <p className={compact ? "text-sm" : undefined}>
        <span className="font-medium text-foreground">Location:</span> {site.location}
      </p>
      {showNote ? (
        <p className="text-sm">
          Recruiters and hiring managers — my resume is always up to date. Feel free to reach out
          directly by email or phone.
        </p>
      ) : null}
    </div>
  );
}
