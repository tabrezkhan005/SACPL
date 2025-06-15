// DotPattern.tsx
// A simple SVG dot pattern background for decorative use
import React from 'react';

interface DotPatternProps {
  className?: string;
}

/**
 * DotPattern renders a subtle SVG dot pattern for backgrounds.
 * @param className - Optional Tailwind classes for positioning and styling
 */
const DotPattern: React.FC<DotPatternProps> = ({ className }) => (
  <svg
    className={className}
    width="100%"
    height="100%"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
  >
    <defs>
      <pattern id="dot" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="2" fill="#c7d2fe" fillOpacity="0.3" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#dot)" />
  </svg>
);

export default DotPattern;
