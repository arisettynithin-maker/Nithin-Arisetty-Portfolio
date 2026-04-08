import { ReactNode } from "react";

import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  className,
  children
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-20 sm:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}
