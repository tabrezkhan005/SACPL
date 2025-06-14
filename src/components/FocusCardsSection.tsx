"use client";
import dynamic from "next/dynamic";

/**
 * FocusCardsSection Component
 *
 * Displays the 'Featured Projects' section using the FocusCardsDemo component.
 * Extracted from Features.tsx for independent ordering.
 */
export default function FocusCardsSection() {
  // Dynamically import FocusCardsDemo to avoid SSR issues
  const FocusCardsDemo = dynamic(() => import("./focus-cards-demo"), { ssr: false });
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-radio-canada-big mb-4 text-gray-900">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium mb-10">
            Explore some of our landmark projects, showcasing our expertise and commitment to excellence.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="w-full flex justify-center">
          <div className="w-full">
            <FocusCardsDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
