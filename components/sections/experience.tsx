import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";

export function ExperienceSection() {
  return (
    <SectionShell id="experience">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Operational analytics experience with clear business ownership."
            description="A focused track record in Amazon environments spanning business analytics, reporting systems, governance, anomaly detection, and stakeholder-facing decision support."
          />
        </Reveal>

        <div className="grid gap-6">
          {experience.map((item, index) => (
            <Reveal key={item.role} delay={0.08 * index}>
              <article className="rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-8">
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">{item.company}</p>
                    <div>
                      <h3 className="font-serif text-2xl text-ink">{item.role}</h3>
                      <p className="mt-2 text-base text-muted">{item.dates}</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <p className="text-base leading-8 text-ink/78">{item.summary}</p>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {item.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="rounded-[1.4rem] border border-line bg-canvas px-4 py-4 text-sm leading-7 text-ink/72"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
