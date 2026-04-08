"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { ProjectModal } from "@/components/ui/project-modal";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Project, projects } from "@/data/projects";

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SectionShell id="projects">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case-study style work that blends analytics, product thinking, and modern automation."
            description="Selected projects spanning AI-powered analysis, experimentation workflows, lifecycle analytics, and reporting pipelines. Each one is designed to feel closer to a product case study than a static repo card."
          />
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={0.07 * index} className="h-full">
              <motion.div
                className={index === 0 ? "h-full lg:col-span-2" : "h-full"}
                whileHover={{ y: -6, scale: 1.012 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              >
                <SpotlightCard className={index === 0 ? "h-full lg:p-8" : "h-full"}>
                  <div className="flex h-full flex-col">
                    <div className="space-y-5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-semibold text-accent">
                          {project.metric}
                        </span>
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="rounded-full border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink transition hover:border-accent/25 hover:bg-accent-soft/35"
                        >
                          View Case Study
                        </button>
                      </div>
                      <div className="space-y-4">
                        <h3
                          className={
                            index === 0
                              ? "min-h-[3.5rem] max-w-3xl font-serif text-4xl leading-tight text-ink"
                              : "min-h-[4.5rem] font-serif text-3xl leading-tight text-ink"
                          }
                        >
                          {project.title}
                        </h3>
                        <p
                          className={
                            index === 0
                              ? "max-w-3xl text-lg leading-8 text-muted"
                              : "min-h-[6.5rem] max-w-xl text-base leading-7 text-muted"
                          }
                        >
                          {project.summary}
                        </p>
                        <div className="rounded-[1.3rem] border border-accent/12 bg-accent-soft/45 px-4 py-3">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/90">Impact</p>
                          <p className="mt-2 text-sm leading-6 text-ink/80">{project.impactLine}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-canvas px-3 py-1.5 text-sm text-ink/72"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[1.35rem] border border-dashed border-line bg-canvas/80 px-4 py-3 transition duration-300 group-hover:border-accent/25 group-hover:bg-accent-soft/20">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">What this project solves</p>
                      <p className="mt-2 text-sm leading-6 text-ink/72">{project.cardHint}</p>
                    </div>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-8">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-deep hover:shadow-[0_16px_36px_rgba(37,99,235,0.22)]"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </Link>
                      {project.liveUrl ? (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-accent/25 hover:bg-accent-soft/30"
                        >
                          Live Demo
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      ) : null}
                      {!project.liveUrl ? (
                        <button
                          type="button"
                          onClick={() => setActiveProject(project)}
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-accent/25 hover:bg-accent-soft/30"
                        >
                          Explore Project
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      ) : null}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </SectionShell>
  );
}
