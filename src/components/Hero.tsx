"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

/**
 * Hero Section Component
 *
 * Modern and engaging hero section for SACPL company website
 * Features:
 * - Compelling headline and description
 * - Call-to-action buttons
 * - Automated image carousel with smooth transitions
 * - Professional layout using Radio Canada Big font
 * - Mobile-first responsive approach
 * - Clean, modern design without borders
 */
export default function Hero() {
  // Array of hero images from the Hero folder
  const heroImages = [
    "/Hero/hero1.avif",
    "/Hero/hero2.avif",
    "/Hero/herp3.avif",
    "/Hero/hero4.avif",
    "/Hero/hero5.avif",
    "/Hero/hero6.avif",
    "/Hero/hero7.avif",
    "/Hero/hero8.avif",
  ];

  // State for current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [heroImages.length]);
    return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Carousel Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`SACPL Hero Image ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-25 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentImageIndex
                ? "bg-white border-white scale-110 shadow-lg"
                : "bg-white/30 border-white/50 hover:bg-white/60 hover:border-white/75 hover:scale-105"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-left max-w-4xl">

          {/* Company Excellence Badge */}
          <div className="inline-block mb-6">
            <span className="text-blue-300 text-base md:text-lg lg:text-3xl font-medium uppercase tracking-wider">
              49 Years of Excellence in
            </span>
            <div className="text-white text-lg md:text-2xl font-bold uppercase tracking-wide">
              Structural Engineering Design
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white font-radio-canada-big leading-tight mb-6">
            Transforming
            <span className="block text-blue-300">
              Engineering Excellence
            </span>
          </h1>

          {/* Hero Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl">
            At SACPL, we deliver cutting-edge structural engineering solutions with nearly
            five decades of expertise. Our innovative approach combines proven methodologies
            with modern technology to create exceptional results.
          </p>

          {/* Service Tags */}
          <div className="flex flex-wrap gap-4 mb-10">
            <span className="px-4 py-2 bg-yellow-600/10 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              Engineering
            </span>
            <span className="px-4 py-2 bg-yellow-600/10 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              Cost Consultants
            </span>
            <span className="px-4 py-2 bg-yellow-600/10 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              BIM
            </span>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">

            {/* Primary CTA Button */}
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 focus:outline-none hover:ring-2 hover:ring-white-400 focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm">
              Start Your Project
            </button>

            {/* Secondary CTA Button */}
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-lg border-2 border-white/30 hover:border-white/50 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent backdrop-blur-sm">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
