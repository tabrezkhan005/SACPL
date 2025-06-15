// HandshakeIcon.tsx
// A simple SVG handshake icon for use in the ClientRelationshipsCard and elsewhere

import React from 'react';

/**
 * HandshakeIcon - SVG handshake icon for consistent use across the project.
 * @param {string} className - Optional Tailwind or custom classes for styling
 */
const HandshakeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    {/* Simple handshake path for demonstration */}
    <path d="M17.657 16.657a8 8 0 1 0-11.314 0M12 12v.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M8.5 12.5l2.5 2.5 2.5-2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default HandshakeIcon;
