"use client";
import dynamic from "next/dynamic";
import { ShimmerButton } from "@/components/ui/shimmer-button";

/**
 * WorldMapSection Component
 *
 * Displays the animated world map with heading, subheading, and Contact Us button.
 * Extracted from Features.tsx for independent ordering.
 */
export default function WorldMapSection() {
  // Dynamically import WorldMapDemo to avoid SSR issues
  const WorldMapDemo = dynamic(() => import("./world-map-demo"), { ssr: false });
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-radio-canada-big mb-4 text-gray-900">
            SACPL: Building Across Continents
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium mb-10">
            We proudly serve clients in every country, delivering world-class engineering and construction solutions across the globe.
          </p>
        </div>
        {/* World Map Display */}
        <div className="w-full flex justify-center">
          <div className="w-full">
            <WorldMapDemo />
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <ShimmerButton
            shimmerColor="#2563eb" // Tailwind blue-600
            background="#1e40af"   // Tailwind blue-800
            className="px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl text-lg"
          >
            Contact Us
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
