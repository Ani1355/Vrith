import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// === VRITH LABS UNIFIED BUTTON SYSTEM ===

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary action button - UNIFIED STYLE FOR ALL CTAs
        primary: "bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg border border-black hover:border-gray-900",
        
        // Secondary outline button
        secondary: "bg-transparent text-primary-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
        
        // Ghost button for subtle actions
        ghost: "bg-transparent text-primary-900 hover:bg-gray-100",
        
        // Accent button for CTAs (DEPRECATED - use primary instead)
        accent: "bg-black text-white hover:bg-gray-900 shadow-md hover:shadow-lg border border-black hover:border-gray-900",
        
        // Success button
        success: "bg-success text-white hover:bg-success/90 shadow-md hover:shadow-lg",
        
        // Warning button
        warning: "bg-warning text-white hover:bg-warning/90 shadow-md hover:shadow-lg",
        
        // Error button
        error: "bg-error text-white hover:bg-error/90 shadow-md hover:shadow-lg",
        
        // Destructive action
        destructive: "bg-error text-white hover:bg-error/90 shadow-md hover:shadow-lg",
        
        // Link style
        link: "text-primary-900 underline-offset-4 hover:underline bg-transparent",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        default: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
