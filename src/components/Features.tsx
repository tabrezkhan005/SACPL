/**
 * Features Section Component
 *
 * Showcases SACPL's key strengths and services
 * Features:
 * - Three main service areas with icons
 * - Clean, professional design
 * - Responsive grid layout
 * - Matches the overall site branding
 */
export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-radio-canada-big mb-4">
            Why Choose SACPL
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With nearly five decades of experience, we bring unmatched expertise
            and innovation to every structural engineering project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Feature 1 - Innovative Solutions */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              {/* Innovation Icon */}
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-radio-canada-big mb-3">
              Innovative Engineering Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cutting-edge structural engineering technology and methodologies
              tailored to meet your specific project requirements and challenges.
            </p>
          </div>

          {/* Feature 2 - Expert Team */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              {/* Expert Team Icon */}
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-radio-canada-big mb-3">
              Experienced Professional Team
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Decades of combined expertise in structural engineering, cost consulting,
              and BIM services dedicated to delivering excellence in every project.
            </p>
          </div>

          {/* Feature 3 - Proven Results */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              {/* Results Icon */}
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 font-radio-canada-big mb-3">
              Proven Track Record
            </h3>
            <p className="text-gray-600 leading-relaxed">
              49 years of successful project delivery with measurable results,
              trusted by clients for reliability and engineering excellence.
            </p>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
