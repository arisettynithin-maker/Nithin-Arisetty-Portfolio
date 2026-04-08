import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink">{profile.name}</p>
          <p className="mt-2 text-sm text-muted">{profile.footerLine}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink/35">
            © 2026 Nithin Arisetty. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-ink/65">
          {navigation.map((item) => (
            <Link key={item.id} href={`#${item.id}`} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
          <Link href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-ink">
            LinkedIn
          </Link>
          <Link href={profile.socialLinks.github} target="_blank" rel="noreferrer" className="transition hover:text-ink">
            GitHub
          </Link>
        </div>
      </Container>
    </footer>
  );
}
