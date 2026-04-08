import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <SectionShell id="skills">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Skills & Tools"
            title="A toolkit shaped around scalable analysis and practical execution."
            description="Organised by how the work actually gets done: analytical depth, stakeholder reporting, platform fluency, and automation that helps insight move faster."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.title} delay={0.06 * index}>
                <div className="rounded-[1.9rem] border border-line bg-white p-6 shadow-soft">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-accent-soft p-3 text-accent">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-2xl text-ink">{group.title}</h3>
                      <p className="max-w-xl text-base leading-7 text-muted">{group.description}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-line bg-canvas px-3 py-2 text-sm font-medium text-ink/72"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </SectionShell>
  );
}
