import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <SectionShell id="about" className="pt-12 sm:pt-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Analytics work built for decisions, operational clarity, and business trust."
            description={profile.intro}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-4">
            {profile.aboutHighlights.map((highlight) => (
              <div
                key={highlight.value}
                className="rounded-[1.75rem] border border-line bg-white p-6 shadow-soft"
              >
                <p className="font-serif text-3xl text-ink">{highlight.value}</p>
                <p className="mt-3 max-w-sm text-base leading-7 text-muted">{highlight.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
