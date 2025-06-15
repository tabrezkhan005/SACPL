import type { Metadata } from "next";
import { Radio_Canada_Big, Montserrat } from "next/font/google";
import "./globals.css";

// Configure Radio Canada Big font as specified in project rules
// This font will be used throughout the company website for modern appeal
const radioCanadaBig = Radio_Canada_Big({
  variable: "--font-radio-canada-big",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // Optimize font loading performance
});

// Configure Montserrat font for headings in the services section
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Metadata configuration for the company website
// Updated to be more appropriate for a business site
export const metadata: Metadata = {
  title: "SACPL - Company Website",
  description: "Modern and responsive company website built with Next.js 14",
};

/**
 * Root Layout Component
 *
 * This is the main layout component that wraps all pages in the Next.js 14 App Router.
 * Key features:
 * - Handles hydration mismatch issues from browser extensions
 * - Uses Radio Canada Big font as specified in project requirements
 * - Provides responsive and modern styling foundation
 *
 * @param children - React components to be rendered within the layout
 * @returns JSX element containing the HTML structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={`${radioCanadaBig.variable} ${montserrat.variable}`}
    >
      <body
        className={`font-radio-canada-big antialiased`}
      >
        {/* Main content area where all page components will be rendered */}
        {children}
      </body>
    </html>
  );
}
