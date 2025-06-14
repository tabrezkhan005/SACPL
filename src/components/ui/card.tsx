import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl bg-white border border-gray-200 shadow-lg p-4 transition-all duration-300 hover:shadow-xl",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };
