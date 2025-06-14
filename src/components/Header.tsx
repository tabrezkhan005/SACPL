"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { LogIn, User } from "lucide-react";

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
  // State for glass effect on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position to toggle glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Toggle mobile menu visibility
   * Used for responsive navigation on smaller screens
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={
        `sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "bg-white/60 backdrop-blur-md shadow-lg border-gray-200"
            : "bg-white shadow-sm border-gray-100"
        }`
      }
    >
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
                href="/about"
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
              {/* New Projects Link */}
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Projects
              </a>
              {/* New Clients Link */}
              <a
                href="#clients"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Clients
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Call-to-Action Button, Profile Icon, and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Profile Icon Button - Desktop */}
            <a
              href="/login"
              className="inline-flex items-center justify-center p-2 rounded-full text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
              aria-label="Profile"
            >
              <User className="w-6 h-6" />
            </a>
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/80 backdrop-blur-md border-t border-gray-100">
              {/* Mobile Navigation Links */}
              <a
                href="#home"
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Home
              </a>
              <a
                href="/about"
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
              {/* New Projects Link */}
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Projects
              </a>
              {/* New Clients Link */}
              <a
                href="#clients"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Clients
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
              {/* Profile Icon - Mobile */}
              <div className="pt-4 pb-2 flex gap-2">
                <a
                  href="/login"
                  className="flex items-center justify-center p-2 rounded-full text-blue-700 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200 w-full"
                  aria-label="Profile"
                >
                  <User className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
