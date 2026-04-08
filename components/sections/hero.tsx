"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Linkedin } from "lucide-react";
import Link from "next/link";

import { useRegion } from "@/components/providers/region-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProfilePortrait } from "@/components/ui/profile-portrait";
import { RegionToggle } from "@/components/ui/region-toggle";
import { profile } from "@/data/profile";

export function HeroSection() {
  const { profile: regional } = useRegion();

  return (
    <section id="home" className="relative overflow-hidden pb-12 pt-12 sm:pb-20 sm:pt-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent/15 bg-accent-soft px-4 py-2 text-sm font-semibold text-accent">
                  Amazon analytics experience
                </span>
                <RegionToggle />
              </div>

              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-ink/50">
                  {profile.name}
                </p>
                <div className="space-y-4">
                  <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
                    {profile.headline}
                  </h1>
                  <p className="max-w-2xl text-xl leading-8 text-ink/78 sm:text-2xl sm:leading-9">
                    {profile.heroSummary}
                  </p>
                </div>
                <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">{profile.supportingCopy}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View Projects
                  <ArrowDownRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href={regional.cvUrl} download={regional.cvDownloadName}>
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Download CV
                </Button>
              </a>
              <Link href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  Connect on LinkedIn
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {profile.trustChips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-ink/72 shadow-soft"
                >
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md rounded-[2.25rem] border border-line bg-white/90 p-4 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur">
              <div className="rounded-[1.9rem] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-2">
                <ProfilePortrait alt={profile.image.alt} />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.4rem] border border-line bg-canvas p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">Base</p>
                  <p className="mt-2 text-base font-semibold text-ink">{regional.location}</p>
                </div>
                <Link
                  href="#contact"
                  className="rounded-[1.4rem] border border-accent/20 bg-surface p-4 text-white transition hover:bg-surface/96"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">Availability</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <p className="text-base font-semibold">Open to strong analytics roles</p>
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
