import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-4 md:flex-row md:items-end md:justify-between", align === "center" && "mx-auto max-w-3xl text-center md:items-center")}>
      <div className={cn("space-y-4", align === "center" && "mx-auto")}>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>
        <div className="space-y-3">
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
          <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
        </div>
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
