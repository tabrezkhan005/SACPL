// CustomHandshake.tsx
// A unique SVG handshake icon for use in the ClientRelationshipsCard and elsewhere

import React from 'react';

/**
 * CustomHandshake - Unique SVG handshake icon for guaranteed definition.
 * @param {string} className - Optional Tailwind or custom classes for styling
 */
const CustomHandshake: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    className={className}
  >
    {/* Simple, unique handshake path */}
    <path d="M8 20l8 8 8-8M8 12l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="8" cy="12" r="2" fill="currentColor" />
    <circle cx="24" cy="12" r="2" fill="currentColor" />
  </svg>
);

export default CustomHandshake;
