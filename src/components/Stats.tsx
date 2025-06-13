"use client";

import React, { useState, useEffect, useRef } from 'react';

/**
 * Animated Counter Component - Individual counter with flip clock animation
 * Features:
 * - Smooth counting animation from 0 to target value
 * - Flip clock visual effects with CSS transforms
 * - Customizable animation duration and easing
 * - Supports different number formats (years, counts, etc.)
 */
interface CounterProps {
  targetValue: number;
  isVisible: boolean;
  duration: number;
  suffix?: string;
  formatAsYear?: boolean;
}

const AnimatedCounter: React.FC<CounterProps> = ({
  targetValue,
  isVisible,
  duration,
  suffix = "",
  formatAsYear = false
}) => {
  // State to track current displayed value
  const [currentValue, setCurrentValue] = useState(0);
  // State to track if animation is complete
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Only start animation when component becomes visible
    if (!isVisible) return;

    setIsAnimating(true);
    let startTime: number;
    let animationId: number;

    // Animation function using requestAnimationFrame for smooth performance
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth acceleration/deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      // Calculate current value based on easing progress
      const newValue = Math.floor(easeOutQuart * targetValue);
      setCurrentValue(newValue);

      // Continue animation until complete
      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    // Start the animation
    animationId = requestAnimationFrame(animate);

    // Cleanup function to cancel animation if component unmounts
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, targetValue, duration]);

  // Format the display value based on type
  const formatValue = (value: number) => {
    if (formatAsYear) {
      return value.toString();
    }
    // Add comma separators for large numbers
    return value.toLocaleString();
  };

  return (
    <div
      className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 transition-all duration-500 ${
        isAnimating ? 'transform scale-105' : ''
      }`}
      style={{
        // Add subtle text shadow for flip clock effect
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
        // Smooth transition for flip effect
        transition: 'transform 0.1s ease-in-out'
      }}
    >
      {formatValue(currentValue)}{suffix}
    </div>
  );
};

/**
 * Stats Component - Displays company achievements and milestones with animated counters
 * Features:
 * - Responsive grid layout (4 columns on desktop, 2x2 on tablet, 1 column on mobile)
 * - Dark teal background matching company branding
 * - Animated flip clock-style counters triggered on scroll
 * - Professional spacing and alignment
 * - Intersection Observer for performance optimization
 * - Hover effects for interactivity
 */
const Stats = () => {
  // Ref to track the stats container element
  const statsRef = useRef<HTMLDivElement>(null);
  // State to track if component is visible in viewport
  const [isVisible, setIsVisible] = useState(false);

  // Array of statistical data with animation configurations
  const statsData = [
    {
      id: 1,
      targetValue: 1974,
      label: "Year Established",
      description: "Foundation of Excellence",
      duration: 2000, // 2 seconds
      formatAsYear: true
    },
    {
      id: 2,
      targetValue: 10000,
      label: "Projects Completed",
      description: "Successful Deliveries",
      duration: 3000, // 3 seconds
      suffix: "+"
    },
    {
      id: 3,
      targetValue: 150,
      label: "Team Strength",
      description: "Expert Professionals",
      duration: 2500, // 2.5 seconds
      suffix: "+"
    },
    {
      id: 4,
      targetValue: 4,
      label: "World Records",
      description: "Engineering Achievements",
      duration: 1500 // 1.5 seconds
    }
  ];

  // Intersection Observer effect to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger animation when 50% of component is visible
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsVisible(true);
            // Stop observing once animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        // Trigger when 50% of the component is visible
        threshold: 0.5,
        // Add some margin to trigger slightly before component is fully visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Start observing the stats container
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={statsRef}
      className="bg-teal-800 py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Container for centering and max width */}
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid - Responsive layout with staggered animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="text-center transform transition-all duration-500 hover:scale-105"
              style={{
                // Stagger the animation start for each stat
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Animated Counter Component */}
              <AnimatedCounter
                targetValue={stat.targetValue}
                isVisible={isVisible}
                duration={stat.duration}
                suffix={stat.suffix}
                formatAsYear={stat.formatAsYear}
              />

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

        {/* Animated separator line that appears after counters */}
        <div
          className={`mt-12 pt-8 border-t border-teal-700/50 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
          }`}
          style={{
            transitionDelay: '3000ms' // Appear after counters finish
          }}
        >
          <p className="text-teal-200 text-lg font-medium">
            Building Excellence Since 1974
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
