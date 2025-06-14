"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  FaLightbulb,  // For innovative solutions
  FaUsers,      // For team
  FaTrophy,     // For track record
  FaCubes,      // For BIM
  FaChartLine,  // For cost consulting
  FaCheckCircle // For quality assurance
} from "react-icons/fa";

/**
 * Features Section Component with Interactive Card Hover Effects
 *
 * Showcases SACPL's key strengths and services using animated cards
 * Features:
 * - Interactive hover animations with framer-motion
 * - Professional card-based design with contextual icons
 * - Responsive grid layout
 * - Smooth transitions and visual feedback
 * - Maintains SACPL branding and content
 */
export default function Features() {
  // SACPL Features Data for the interactive cards
  const sacplFeatures = [
    {
      title: "Innovative Engineering Solutions",
      description:
        "Cutting-edge structural engineering technology and methodologies tailored to meet your specific project requirements and challenges. We leverage the latest software and design principles to deliver optimal results.",
      link: "#engineering",
      icon: FaLightbulb
    },
    {
      title: "Experienced Professional Team",
      description:
        "Decades of combined expertise in structural engineering, cost consulting, and BIM services dedicated to delivering excellence in every project. Our 150+ member team brings unmatched knowledge and skills.",
      link: "#team",
      icon: FaUsers
    },
    {
      title: "Proven Track Record",
      description:
        "49 years of successful project delivery with measurable results, trusted by clients for reliability and engineering excellence. Over 10,000+ completed projects and 4 world records in structural engineering.",
      link: "#results",
      icon: FaTrophy
    },
    {
      title: "BIM & Digital Solutions",
      description:
        "Advanced Building Information Modeling (BIM) services and digital engineering solutions that streamline project workflows, enhance collaboration, and provide detailed 3D visualization for complex structural projects.",
      link: "#bim",
      icon: FaCubes
    },
    {
      title: "Cost Consulting Excellence",
      description:
        "Comprehensive cost engineering and consulting services that optimize project budgets, provide accurate quantity surveying, and deliver value engineering solutions to maximize your investment returns.",
      link: "#cost-consulting",
      icon: FaChartLine
    },
    {
      title: "Quality Assurance & Compliance",
      description:
        "Rigorous quality control processes and regulatory compliance expertise ensuring all projects meet international standards, safety requirements, and industry best practices for structural integrity.",
      link: "#quality",
      icon: FaCheckCircle
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold font-radio-canada-big mb-4 text-gray-900">
            Why Choose SACPL
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium mb-10">
            With nearly five decades of experience, we bring unmatched expertise
            and innovation to every structural engineering project.
          </p>
        </div>
        {/* Features Cards Grid */}
        <div className="w-full flex justify-center">
          <div className="w-full">
            <HoverEffect items={sacplFeatures} />
          </div>
        </div>
      </div>
    </section>
  );
}
