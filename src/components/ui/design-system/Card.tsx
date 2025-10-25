import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// === VRITH LABS UNIFIED CARD SYSTEM ===

const cardVariants = cva(
  "rounded-2xl transition-all duration-normal", // Base styles
  {
    variants: {
      variant: {
        // Default card
        default: "bg-white border border-gray-200 shadow-sm hover:shadow-md",
        
        // Elevated card
        elevated: "bg-white border border-gray-200 shadow-lg hover:shadow-xl",
        
        // Glass card (for overlays)
        glass: "bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg",
        
        // Dark card
        dark: "bg-gradient-to-br from-primary-900 to-primary-950 text-white shadow-2xl",
        
        // Gradient card
        gradient: "bg-gradient-to-br from-white/80 to-white/60 border border-gray-200/50 shadow-lg",
        
        // Outline card
        outline: "bg-transparent border border-gray-300 hover:border-gray-400",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-12",
      },
      radius: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      radius: "md",
    },
  },
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, radius, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, padding, radius, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Card.displayName = "Card"

// Card sub-components for semantic structure
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
