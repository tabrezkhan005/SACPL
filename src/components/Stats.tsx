"use client";

import React, { useState, useEffect, useRef } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Briefcase, CheckCircle2, Users, Award } from 'lucide-react';

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
      formatAsYear: true,
      icon: <Briefcase className="w-8 h-8 text-blue-400" />,
      accent: "from-blue-500/30 to-blue-800/30"
    },
    {
      id: 2,
      targetValue: 10000,
      label: "Projects Completed",
      description: "Successful Deliveries",
      duration: 3000, // 3 seconds
      suffix: "+",
      icon: <CheckCircle2 className="w-8 h-8 text-green-400" />,
      accent: "from-green-500/30 to-green-800/30"
    },
    {
      id: 3,
      targetValue: 150,
      label: "Team Strength",
      description: "Expert Professionals",
      duration: 2500, // 2.5 seconds
      suffix: "+",
      icon: <Users className="w-8 h-8 text-purple-400" />,
      accent: "from-purple-500/30 to-purple-800/30"
    },
    {
      id: 4,
      targetValue: 4,
      label: "World Records",
      description: "Engineering Achievements",
      duration: 1500, // 1.5 seconds
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      accent: "from-yellow-400/30 to-yellow-800/30"
    }
  ];

  // Intersection Observer effect to detect when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
      }
    );
    // Copy ref to variable for cleanup
    const refCurrent = statsRef.current;
    if (refCurrent) {
      observer.observe(refCurrent);
    }
    return () => {
      if (refCurrent) {
        observer.unobserve(refCurrent);
      }
    };
  }, []);

  return (
    <Tooltip.Provider>
      <section
        ref={statsRef}
        className="relative py-20 bg-gradient-to-b from-[#232946] via-[#142c67] to-[#1a237e] overflow-hidden"
      >
        {/* Glassmorphism background overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 z-10">
          {/* Main Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-extrabold font-radio-canada-big mb-4 text-white">
              Our Achievements
            </h2>
            <p className="text-lg md:text-xl text-blue-100 font-medium mb-10">
              Celebrating decades of excellence, innovation, and record-breaking success in structural engineering.
            </p>
          </div>
          {/* Stats Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat) => (
              <Tooltip.Root key={stat.id} delayDuration={200}>
                <Tooltip.Trigger asChild>
                  <div
                    className={`group text-center rounded-2xl bg-gradient-to-br ${stat.accent} shadow-xl border border-white/20 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl backdrop-blur-md cursor-pointer`}
                  >
                    <div className="flex justify-center mb-4">
                      {stat.icon}
                    </div>
                    <AnimatedCounter
                      targetValue={stat.targetValue}
                      isVisible={isVisible}
                      duration={stat.duration}
                      suffix={stat.suffix}
                      formatAsYear={stat.formatAsYear}
                    />
                    <div className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-1 drop-shadow">
                      {stat.label}
                    </div>
                    <div className="text-sm sm:text-base text-blue-100 opacity-90">
                      {stat.description}
                    </div>
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content side="top" align="center" className="z-50 px-4 py-2 rounded-lg bg-black/80 text-white text-sm shadow-lg border border-white/10">
                    {stat.label}: {stat.description}
                    <Tooltip.Arrow className="fill-black/80" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            ))}
          </div>
          {/* Animated separator line that appears after counters */}
          <div className="h-1 w-32 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-full mx-auto mt-12 animate-pulse" />
        </div>
      </section>
    </Tooltip.Provider>
  );
};

export default Stats;
