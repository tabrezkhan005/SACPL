import Image from "next/image";

/**
 * Footer Component
 *
 * Professional footer for SHANGHVI & ASSOCIATES CONSULTANTS PVT LTD (SACPL) website
 * Features:
 * - Complete company information and branding
 * - Three office locations (Cochin, Mumbai HQ, Indore)
 * - Contact information for each office
 * - GST information for Mumbai office
 * - Social media links
 * - Copyright notice
 * - Responsive design with clean layout
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#232946] via-[#142c67] to-[#1a237e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Company Header Section */}
        <div className="text-center mb-12">
          {/* Company Logo */}
          <div className="flex justify-center items-center mb-6">
            <Image
              src="/logo.avif"
              alt="SACPL Company Logo"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Company Full Name */}
          <h2 className="text-2xl md:text-3xl font-bold font-radio-canada-big text-center mb-4 tracking-wide">
            SHANGHVI & ASSOCIATES CONSULTANTS PVT LTD
          </h2>

          {/* Company Tagline */}
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            49 Years of Excellence in Structural Engineering Design
          </p>
        </div>

        {/* Office Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">

          {/* Cochin Office */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-semibold font-radio-canada-big mb-4 text-blue-400">
              Cochin Office
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>2nd Floor, Illath Gardens,</p>
              <p>Statue Junction,</p>
              <p>Thrippunithura,</p>
              <p>Kerala - 682301, India.</p>
            </div>
          </div>

          {/* Mumbai HQ Office */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-semibold font-radio-canada-big mb-4 text-blue-400">
              Mumbai HQ
            </h3>
            <div className="space-y-2 text-gray-300 mb-4">
              <p>6th Floor, 106 B-Wing, Brij Bhoomi,</p>
              <p>Nehru Road, Above Canara Bank,</p>
              <p>Mumbai, Mumbai Suburban,</p>
              <p>Maharashtra, 400057</p>
            </div>

            {/* GST Information */}
            <div className="space-y-2">
              <p className="text-gray-400 font-mono text-sm">
                GST: 27AALCS3411K1Z7
              </p>
              <a
                href="https://www.sacpl.co/_files/ugd/865611_b627109b18b1412690e3881dd0bff5db.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-400 hover:text-blue-300 text-sm underline transition-colors duration-200"
              >
                Click Here to download GST certificate
              </a>
            </div>
          </div>

          {/* Indore Office */}
          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-semibold font-radio-canada-big mb-4 text-blue-400">
              Indore Office
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>8/22, 2nd floor, Mahesh Nagar,</p>
              <p>near Rajmohalla Chouraha,</p>
              <p>Indore - 452001, India.</p>
            </div>
          </div>
        </div>

        {/* Contact and Social Media Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold font-radio-canada-big mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3">

              {/* Email */}
              <div className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@sacpl.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@sacpl.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center md:justify-start">
                <svg
                  className="w-5 h-5 text-gray-400 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+91-XXX-XXX-XXXX"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Number (To be updated)
                </a>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold font-radio-canada-big mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-end">

              {/* LinkedIn */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">

            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Shanghvi & Associates Consultants Pvt Ltd. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
