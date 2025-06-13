import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

/**
 * Home Page Component
 *
 * Main landing page for SACPL company website
 * Features:
 * - Professional header with navigation
 * - Compelling hero section with call-to-action
 * - Comprehensive footer with company information
 * - Modern, responsive design using Radio Canada Big font
 * - Clean structure following Next.js 14 App Router patterns
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section - Sticky navigation */}
      <Header />

            {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section - Primary landing content with image carousel */}
        <Hero />

        {/* Stats Section - Company achievements and milestones */}
        <Stats />

        {/* Features Section - Company strengths and services */}
        <Features />

        {/*
          Additional sections can be added here as the website grows:
          - About section
          - Services section
          - Testimonials
          - Contact form
          - etc.
        */}
      </main>

      {/* Footer Section - Company information and links */}
      <Footer />
    </div>
  );
}
