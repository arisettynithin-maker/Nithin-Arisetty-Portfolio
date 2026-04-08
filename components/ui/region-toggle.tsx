"use client";

import { useRegion } from "@/components/providers/region-provider";
import { RegionKey } from "@/data/regionalProfile";
import { cn } from "@/lib/utils";

const options: RegionKey[] = ["uk", "india"];

export function RegionToggle() {
  const { region, setRegion } = useRegion();

  return (
    <div
      className="inline-flex rounded-full border border-line bg-white/95 p-1 shadow-soft backdrop-blur"
      role="tablist"
      aria-label="Select application region"
    >
      {options.map((option) => {
        const active = region === option;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => setRegion(option)}
            className={cn(
              "rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300",
              active ? "bg-accent text-white shadow-[0_10px_25px_rgba(37,99,235,0.24)]" : "text-ink/60 hover:bg-accent-soft/50 hover:text-ink"
            )}
          >
            {option === "uk" ? "UK" : "India"}
          </button>
        );
      })}
    </div>
  );
}
