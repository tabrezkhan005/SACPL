import React from 'react';

/**
 * Stats Component - Displays company achievements and milestones
 * Features:
 * - Responsive grid layout (4 columns on desktop, 2x2 on tablet, 1 column on mobile)
 * - Dark teal background matching company branding
 * - Large typography for impact
 * - Professional spacing and alignment
 * - Hover effects for interactivity
 */
const Stats = () => {
  // Array of statistical data for the company
  const statsData = [
    {
      id: 1,
      number: "1974",
      label: "Year Established",
      description: "Foundation of Excellence"
    },
    {
      id: 2,
      number: "10,000+",
      label: "Projects Completed",
      description: "Successful Deliveries"
    },
    {
      id: 3,
      number: "150+",
      label: "Team Strength",
      description: "Expert Professionals"
    },
    {
      id: 4,
      number: "4",
      label: "World Records",
      description: "Engineering Achievements"
    }
  ];

  return (
    <div className="bg-teal-800 py-16 px-4 sm:px-6 lg:px-8">
      {/* Container for centering and max width */}
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid - Responsive layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="text-center transform transition-transform duration-300 hover:scale-105"
            >
              {/* Main Statistical Number */}
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                {stat.number}
              </div>

              {/* Primary Label */}
              <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-teal-100 mb-1">
                {stat.label}
              </div>

              {/* Secondary Description */}
              <div className="text-sm sm:text-base text-teal-200 opacity-90">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Add a subtle separator line */}
        <div className="mt-12 pt-8 border-t border-teal-700/50 text-center">
          <p className="text-teal-200 text-lg font-medium">
            Building Excellence Since 1974
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
