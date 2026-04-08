"use client";

import { UserRound } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type ProfilePortraitProps = {
  alt: string;
};

export function ProfilePortrait({ alt }: ProfilePortraitProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-slate-100 shadow-soft">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.08))]" />
      {hasError ? (
        <div className="flex aspect-[0.95] w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.14),transparent_58%),linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)]">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/90 bg-white/90 text-accent shadow-soft">
            <UserRound className="h-10 w-10" />
          </div>
        </div>
      ) : (
        <Image
          src="/profile.jpg"
          alt={alt}
          width={800}
          height={800}
          priority
          onError={() => setHasError(true)}
          className="aspect-[0.95] w-full object-cover object-center"
        />
      )}
    </div>
  );
}
