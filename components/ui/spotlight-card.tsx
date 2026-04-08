"use client";

import { HTMLAttributes, MouseEvent } from "react";

import { cn } from "@/lib/utils";

export function SpotlightCard({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    target.style.setProperty("--spotlight-x", `${x}px`);
    target.style.setProperty("--spotlight-y", `${y}px`);
  };

  return (
    <div
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-[1.75rem] border border-line bg-panel p-6 shadow-soft transition-all duration-500 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(240px_circle_at_var(--spotlight-x,50%)_var(--spotlight-y,50%),rgba(37,99,235,0.14),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:inset-[1px] after:rounded-[1.65rem] after:border after:border-white/70 after:opacity-70 hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:shadow-[0_26px_60px_rgba(15,23,42,0.16)] hover:before:opacity-100",
        className
      )}
      {...props}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
