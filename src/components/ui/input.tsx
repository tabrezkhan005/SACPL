import * as React from "react";

// Modern, accessible input component
export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={
          "flex h-12 w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-base text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50 disabled:cursor-not-allowed " +
          (className || "")
        }
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export default Input;
