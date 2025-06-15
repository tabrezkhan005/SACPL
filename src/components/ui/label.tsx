import * as React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

// Modern, accessible label component
export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={
          "block text-base font-medium text-neutral-700 mb-1 " + (className || "")
        }
        {...props}
      />
    );
  }
);
Label.displayName = "Label";

export default Label;
