import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border-[3px] border-ink font-sans font-extrabold uppercase tracking-wide cursor-pointer shadow-hard-sm press focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-cobalt/40 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-ink text-on-dark hover:bg-ink",
        yellow: "bg-yellow text-ink",
        cobalt: "bg-cobalt text-on-dark",
        orange: "bg-orange text-ink",
        mint: "bg-mint text-ink",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "bg-card text-ink hover:bg-yellow",
        secondary: "bg-paper-deep text-ink hover:bg-yellow",
        ghost:
          "border-transparent shadow-none bg-transparent hover:bg-yellow hover:border-ink hover:shadow-hard-sm",
        link: "border-0 shadow-none bg-transparent text-cobalt underline underline-offset-4 decoration-[3px] hover:translate-x-0 hover:translate-y-0 hover:shadow-none",
      },
      size: {
        default: "h-11 px-5 text-sm",
        sm: "h-9 px-3 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-11 w-11",
        "icon-sm": "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
