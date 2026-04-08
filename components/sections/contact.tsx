"use client";

import { Copy, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { useRegion } from "@/components/providers/region-provider";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionShell } from "@/components/ui/section-shell";
import { profile } from "@/data/profile";

export function ContactSection() {
  const { profile: regional } = useRegion();

  const copyValue = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }
  };

  const contactItems = [
    { label: "Email", value: regional.email, href: `mailto:${regional.email}`, icon: Mail },
    { label: "Phone", value: regional.phone, href: `tel:${regional.phone}`, icon: Phone },
    { label: "Location", value: regional.location, icon: MapPin }
  ];

  return (
    <SectionShell id="contact">
      <div className="space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Open to strong analytics, BI, and AI-adjacent opportunities."
            description="The region toggle updates the contact layer instantly for UK and India applications."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.86fr]">
          <Reveal>
            <div className="grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 rounded-[1.6rem] border border-line bg-white p-5 shadow-soft"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-accent-soft p-3 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/45">{item.label}</p>
                        {item.href ? (
                          <Link href={item.href} className="mt-1 block text-base font-medium text-ink hover:text-accent">
                            {item.value}
                          </Link>
                        ) : (
                          <p className="mt-1 text-base font-medium text-ink">{item.value}</p>
                        )}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyValue(item.label, item.value)}
                      className="rounded-full border border-line bg-canvas p-3 text-ink/65 transition hover:border-accent/25 hover:bg-accent-soft/35 hover:text-ink"
                      aria-label={`Copy ${item.label}`}
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-slate-900/90 bg-surface p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/55">Profiles</p>
              <div className="mt-6 grid gap-4">
                <Link
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5" />
                    <span className="font-medium">LinkedIn</span>
                  </div>
                  <span className="text-sm text-white/60">Open profile</span>
                </Link>
                <Link
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4 transition hover:bg-white/10"
                >
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5" />
                    <span className="font-medium">GitHub</span>
                  </div>
                  <span className="text-sm text-white/60">View repositories</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionShell>
  );
}
