"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

// Utility function for class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Button component implementation
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Text Shimmer component for animated text effects
interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

function TextShimmer({
  children,
  as: Component = "span",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  // Use 'unknown' instead of 'any' for linter safety and type correctness
  const MotionComponent = motion(
    Component as keyof JSX.IntrinsicElements | React.ComponentType<unknown>
  );

  const dynamicSpread = React.useMemo(() => {
    return children.length * spread;
  }, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text",
        "text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000]",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        "dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
        className
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
        } as React.CSSProperties
      }
    >
      {children}
    </MotionComponent>
  );
}

// Main CTA Component Props Interface
interface ModernCTAProps {
  headline?: string;
  subtext?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  showShimmerEffect?: boolean;
  animationDelay?: number;
  className?: string;
  theme?: 'light' | 'dark';
}

/**
 * Modern Call To Action Component for SACPL
 *
 * A reusable, animated CTA component with headline, subtext, and prominent buttons.
 * Features Framer Motion animations, shimmer text effects, and responsive design.
 *
 * Usage:
 * <ModernCTA />
 * <ModernCTA headline="..." subtext="..." ... />
 */
const ModernCTA: React.FC<ModernCTAProps> = ({
  headline = "Build Your Vision with SACPL",
  subtext =
    "Partner with SACPL for innovative, reliable, and sustainable construction solutions. From concept to completion, we deliver excellence in every project.",
  primaryButtonText = "Contact Us",
  primaryButtonUrl = "/contact",
  secondaryButtonText = "Our Services",
  secondaryButtonUrl = "/services",
  showShimmerEffect = true,
  animationDelay = 0.2,
  className,
  theme = 'light',
}) => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Button hover animation variants
  const buttonMotionVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  // Theme-based classes
  const themeClasses = theme === 'light'
    ? 'bg-white text-neutral-900'
    : 'bg-background text-foreground';

  return (
    <section className={cn("py-24 lg:py-32 relative overflow-hidden", themeClasses, className)}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 -z-10 overflow-hidden rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: animationDelay }}
          >
            <div className={theme === 'light'
              ? 'absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 blur-3xl'
              : 'absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl'} />
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={itemVariants} className="mb-6">
            {showShimmerEffect ? (
              <TextShimmer
                as="h1"
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                duration={3}
              >
                {headline}
              </TextShimmer>
            ) : (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                {headline}
              </h1>
            )}
          </motion.div>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {subtext}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button */}
            <motion.div
              variants={buttonMotionVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href={primaryButtonUrl}>
                  <span className="relative z-10 flex items-center gap-2">
                    {primaryButtonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  {/* Button shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{
                      translateX: ["100%", "-100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "linear",
                    }}
                  />
                </a>
              </Button>
            </motion.div>

            {/* Secondary Button */}
            <motion.div
              variants={buttonMotionVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg font-semibold border-2 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                asChild
              >
                <a href={secondaryButtonUrl}>{secondaryButtonText}</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-16 flex justify-center space-x-8 opacity-60"
            variants={itemVariants}
          >
            {/* Floating dots animation */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary rounded-full"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernCTA;
