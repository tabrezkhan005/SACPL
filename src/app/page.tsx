import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/AboutUsSection";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import FocusCardsSection from "@/components/FocusCardsSection";
import WorldMapSection from "@/components/WorldMapSection";
import Footer from "@/components/Footer";

/**
 * Home Page Component
 *
 * Professional, clean, and perfectly structured homepage for SACPL
 * Section order:
 * 1. Header
 * 2. Hero
 * 3. About Us
 * 4. Features
 * 5. Stats
 * 6. Focus Cards (Featured Projects)
 * 7. World Map
 * 8. Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] flex flex-col">
      {/* Header - Sticky navigation */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <Hero />
        {/* About Us Section */}
        <AboutUsSection />
        {/* Features Section */}
        <Features />
        {/* Stats Section */}
        <Stats />
        {/* Focus Cards Section (Featured Projects) */}
        <FocusCardsSection />
        {/* World Map Section */}
        <WorldMapSection />
      </main>

      {/* Footer - Company information and links */}
      <Footer />
    </div>
  );
}
