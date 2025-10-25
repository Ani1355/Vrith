import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// === VRITH LABS UNIFIED TYPOGRAPHY SYSTEM ===

const typographyVariants = cva(
  "font-normal tracking-tight", // Base styles
  {
    variants: {
      variant: {
        // Display headings
        "display-1": "text-7xl font-normal leading-none tracking-[-0.02em]", // 72px
        "display-2": "text-6xl font-normal leading-none tracking-[-0.02em]", // 60px
        "display-3": "text-5xl font-normal leading-none tracking-[-0.02em]", // 48px
        
        // Section headings
        "heading-1": "text-4xl font-normal leading-tight tracking-[-0.01em]", // 36px
        "heading-2": "text-3xl font-normal leading-tight tracking-[-0.01em]", // 30px
        "heading-3": "text-2xl font-normal leading-tight tracking-[-0.01em]", // 24px
        "heading-4": "text-xl font-medium leading-tight tracking-[-0.01em]", // 20px
        "heading-5": "text-lg font-medium leading-tight tracking-[-0.01em]", // 18px
        "heading-6": "text-base font-medium leading-tight tracking-[-0.01em]", // 16px
        
        // Body text
        "body-large": "text-lg font-normal leading-relaxed", // 18px
        "body": "text-base font-normal leading-relaxed", // 16px
        "body-small": "text-sm font-normal leading-relaxed", // 14px
        
        // Labels and captions
        "label": "text-sm font-medium leading-none", // 14px
        "caption": "text-xs font-medium leading-none tracking-[0.15em] uppercase", // 12px
        
        // Special text
        "lead": "text-xl font-normal leading-relaxed", // 20px
        "muted": "text-sm font-normal leading-relaxed text-gray-500", // 14px
      },
      color: {
        default: "text-primary-900",     /* 16.7:1 contrast on white */
        muted: "text-gray-500",          /* 4.6:1 contrast on white - WCAG AA */
        accent: "text-accent",           /* 4.6:1 contrast on white - WCAG AA */
        success: "text-success",          /* 4.6:1 contrast on white - WCAG AA */
        warning: "text-warning",         /* 4.6:1 contrast on white - WCAG AA */
        error: "text-error",             /* 4.6:1 contrast on white - WCAG AA */
        white: "text-white",             /* 21:1 contrast on dark backgrounds */
        dark: "text-gray-800",           /* 12.6:1 contrast on white - WCAG AAA */
      },
    },
    defaultVariants: {
      variant: "body",
      color: "default",
    },
  },
)

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, color, as, ...props }, ref) => {
    const Comp = as || "p"
    return (
      <Comp
        className={cn(typographyVariants({ variant, color, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
