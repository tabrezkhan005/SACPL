"use client";
// Projects Page for SACPL
// Uses the same Header, Footer, and ModernCTA as the rest of the site

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModernCTA from '@/components/ModernCTA';
import { Hero as AnimatedHero } from '@/components/ui/animated-hero';
import { useState } from 'react';
import dynamic from 'next/dynamic';
const CarouselDemo = dynamic(() => import('@/components/carousel-demo'), { ssr: false });

// State and type arrays for toggles
const projectTypes = [
  'Tall Structures',
  'Commercial',
  'Institutional',
  'Residential Projects',
  'Industrial Projects',
  'Hotel Projects',
  'Hospitals',
  'Sports Projects',
  'Public Projects',
  'Design and Bid Projects',
];

export default function ProjectsPage() {
  const [selectedMain, setSelectedMain] = useState<'type' | 'region'>('type');
  const [selectedType, setSelectedType] = useState<string>(projectTypes[0]);

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col">
      {/* Header - Sticky navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        {/* Animated Hero Section for Projects Page */}
        <AnimatedHero />

        {/* Projects Section Placeholder */}
        <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          {/* TODO: Add project cards, grid, or whatever you specify next */}
          <div className="text-center py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our Projects</h1>
            <p className="text-lg max-w-2xl mx-auto text-black">
              {/* Placeholder text - replace or expand as you specify */}
              Explore our portfolio of innovative, reliable, and sustainable construction projects. Let us know what you want to showcase here!
            </p>

            {/* Main Toggle: Projects By Type / Projects By Region */}
            <div className="flex justify-center mt-16 mb-6 gap-4">
              <button
                className={`px-6 py-2 rounded-full border border-blue-800 font-semibold shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                  ${selectedMain === 'type' ? 'bg-blue-800 text-white shadow-lg scale-105' : 'bg-white text-blue-800 hover:bg-blue-50 hover:shadow-md'}`}
                onClick={() => setSelectedMain('type')}
              >
                Projects By Type
              </button>
              <button
                className={`px-6 py-2 rounded-full border border-blue-800 font-semibold shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                  ${selectedMain === 'region' ? 'bg-blue-800 text-white shadow-lg scale-105' : 'bg-white text-blue-800 hover:bg-blue-50 hover:shadow-md'}`}
                onClick={() => setSelectedMain('region')}
              >
                Projects By Region
              </button>
            </div>

            {/* Secondary Toggle: Only show if 'Projects By Type' is selected */}
            {selectedMain === 'type' && (
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    className={`px-4 py-1.5 rounded-full border border-blue-800 font-medium shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
                      ${selectedType === type ? 'bg-blue-800 text-white shadow-lg scale-105' : 'bg-white text-blue-800 hover:bg-blue-50 hover:shadow-md'}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}

            {/* Carousel: Only show if a type is selected */}
            {selectedMain === 'type' && selectedType && (
              <CarouselDemo />
            )}
            {/* TODO: Add region-based toggles and carousels as needed */}
          </div>
        </section>

        {/* Call To Action Section */}
        <ModernCTA theme="light" />
      </main>

      {/* Footer - Company information and links */}
      <Footer />
    </div>
  );
}
