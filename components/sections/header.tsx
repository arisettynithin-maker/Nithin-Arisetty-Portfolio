"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useRegion } from "@/components/providers/region-provider";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { RegionToggle } from "@/components/ui/region-toggle";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

function useActiveSection() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160;
      let current = sections[0]?.id ?? "about";

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          current = section.id;
        }
      }

      setActive(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return active;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const activeSection = useActiveSection();
  const { profile: regional } = useRegion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line/90 bg-canvas/80 backdrop-blur-xl">
        <Container className="flex h-20 items-center justify-between gap-4">
          <Link href="#home" className="group min-w-0">
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                Nithin Arisetty
              </span>
              <span className="text-sm text-muted transition group-hover:text-ink">{profile.headline}</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-line bg-white/95 p-1 shadow-soft lg:flex">
            {navigation.map((item) => {
              const active = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                    active ? "bg-accent text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)]" : "text-ink/65 hover:bg-accent-soft/45 hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <RegionToggle />
            <a href={regional.cvUrl} download={regional.cvDownloadName}>
              <Button variant="secondary">Download CV</Button>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex rounded-full border border-line bg-white p-3 text-ink shadow-soft transition hover:border-accent/20 hover:bg-accent-soft/30 lg:hidden"
            aria-label="Open navigation menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] bg-canvas/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Container className="flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-line bg-white p-3 text-ink"
                  aria-label="Close navigation menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * index }}
                  >
                    <Link
                      href={`#${item.id}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-[1.5rem] border border-line bg-white px-5 py-4 text-lg font-semibold text-ink shadow-soft"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto space-y-5 rounded-[1.75rem] border border-line bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
                      Application Region
                    </p>
                    <p className="mt-1 text-sm text-muted">{regional.location}</p>
                  </div>
                  <RegionToggle />
                </div>
                <a href={regional.cvUrl} download={regional.cvDownloadName}>
                  <Button className="w-full">Download CV</Button>
                </a>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
