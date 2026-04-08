import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white shadow-soft shadow-accent/15 hover:-translate-y-0.5 hover:bg-accent-deep hover:shadow-[0_16px_36px_rgba(37,99,235,0.22)]",
        secondary:
          "border border-line bg-white text-ink backdrop-blur hover:-translate-y-0.5 hover:border-accent/25 hover:bg-accent-soft/35",
        ghost:
          "text-ink/72 hover:bg-accent-soft/55 hover:text-ink",
        accent:
          "bg-accent text-white shadow-soft shadow-accent/15 hover:-translate-y-0.5 hover:bg-accent-deep hover:shadow-[0_16px_36px_rgba(37,99,235,0.22)]"
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-6"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
