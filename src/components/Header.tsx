"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Header Component
 *
 * Modern and responsive header for SACPL company website
 * Features:
 * - Company branding and logo area
 * - Responsive navigation menu
 * - Mobile hamburger menu
 * - Call-to-action button
 * - Clean, professional design using Radio Canada Big font
 */
export default function Header() {
  // State management for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  /**
   * Toggle mobile menu visibility
   * Used for responsive navigation on smaller screens
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Company Logo and Branding Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Company Logo - Using actual logo image from public folder */}
              <div className="flex items-center">
                <Image
                  src="/logo.avif"
                  alt="SACPL Company Logo"
                  width={120}
                  height={40}
                  priority
                  className="h-8 w-auto sm:h-10"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Navigation Links */}
              <a
                href="#home"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Call-to-Action Button and Mobile Menu Button */}
          <div className="flex items-center space-x-4">

            {/* CTA Button - Hidden on mobile */}
            <button className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-[#142c67] hover:bg-[#142c67]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#142c67] transition-colors duration-200">
              Get Started
            </button>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger Menu Icon */}
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  /* Close Icon */
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {/* Mobile Navigation Links */}
              <a
                href="#home"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>

              {/* Mobile CTA Button */}
              <div className="pt-4 pb-2">
                <button className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
