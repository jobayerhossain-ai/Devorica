import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Default app CTA uses the secondary button treatment
        default: "btn btn-secondary",
        primary: "btn btn-primary",
        // Destructive keeps existing shadcn styling
        destructive: "rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90 text-sm font-medium px-4 py-2",
        // Outline / ghost / link keep prior behavior
        outline:
          "rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground text-sm font-medium px-4 py-2",
        secondary: "btn btn-secondary",
        ghost: "rounded-md hover:bg-accent hover:text-accent-foreground text-sm font-medium px-4 py-2",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "text-xs px-4 py-2",
        lg: "text-base px-10 py-4",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
