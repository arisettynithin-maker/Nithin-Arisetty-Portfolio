"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, project]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/45 p-4 backdrop-blur-sm md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-line bg-panel shadow-[0_30px_120px_rgba(15,23,42,0.18)]"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_70%)]" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 z-10 rounded-full border border-line bg-white/95 p-2 text-ink/70 transition hover:text-ink"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative grid gap-8 p-6 sm:p-8">
              <div className="space-y-4">
                <div className="inline-flex rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
                  {project.metric}
                </div>
                <div className="space-y-3">
                  <h3 id="project-modal-title" className="font-serif text-3xl text-ink">
                    {project.title}
                  </h3>
                  <p className="max-w-2xl text-base leading-7 text-muted">{project.overview}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
                      Business Problem
                    </p>
                    <p className="text-base leading-7 text-ink/80">{project.problem}</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">
                      Core Outcomes
                    </p>
                    <ul className="space-y-3 text-base leading-7 text-ink/80">
                      {project.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-line bg-canvas p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/55">Tools Used</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-ink/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-deep"
                    >
                      GitHub
                      <ArrowUpRight className="h-4 w-4" />
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
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
