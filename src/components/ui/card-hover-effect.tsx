"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { IconType } from "react-icons";

/**
 * HoverEffect Component - Interactive card grid with hover animations
 * Features:
 * - Smooth hover animations with framer-motion
 * - Background glow effect on hover
 * - Responsive grid layout
 * - Customizable card content with uniquely colored icons
 * - Accessible link handling
 */
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: IconType;
  }[];
  className?: string;
}) => {
  // State to track which card is currently being hovered
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Icon color combinations for each card
  const iconColors = [
    { bg: "bg-amber-100", text: "text-amber-600" },     // Innovative Solutions
    { bg: "bg-purple-100", text: "text-purple-600" },   // Professional Team
    { bg: "bg-emerald-100", text: "text-emerald-600" }, // Track Record
    { bg: "bg-cyan-100", text: "text-cyan-600" },       // BIM Solutions
    { bg: "bg-rose-100", text: "text-rose-600" },       // Cost Consulting
    { bg: "bg-indigo-100", text: "text-indigo-600" },   // Quality Assurance
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-1",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Animated background that appears on hover */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-300/80 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          {/* Card content */}
          <Card>
            <div className="flex items-center gap-4">
              {/* Icon container with unique color styling */}
              <div className={cn("p-3 rounded-xl transition-colors duration-200",
                iconColors[idx].bg,
                iconColors[idx].text,
                hoveredIndex === idx && "bg-white text-blue-600"
              )}>
                <item.icon size={24} />
              </div>
              <CardTitle>{item.title}</CardTitle>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

/**
 * Card Component - Container for card content with styling
 * Features:
 * - Rounded corners and padding
 * - Border animations on hover
 * - Background styling
 * - Proper z-index layering
 */
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-gray-200 hover:border-blue-300 relative z-20 shadow-lg hover:shadow-xl transition-all duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

/**
 * CardTitle Component - Styled heading for card titles
 * Features:
 * - Consistent typography
 * - Proper color scheme
 * - Responsive font sizing
 */
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-gray-900 font-bold tracking-wide mt-4 font-radio-canada-big text-xl", className)}>
      {children}
    </h4>
  );
};

/**
 * CardDescription Component - Styled description text for cards
 * Features:
 * - Optimized readability
 * - Consistent spacing
 * - Muted color for hierarchy
 */
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-6 text-gray-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
