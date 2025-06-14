"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Users, Award, Calendar, Star, Briefcase, GraduationCap, Trophy, PencilRuler } from 'lucide-react';
import TimelineDemo from "@/components/ui/timeline-demo";
import { motion, AnimatePresence } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FlipWords } from "@/components/ui/flip-words";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import ModernCTA from '@/components/ModernCTA';

/**
 * About Us Page
 *
 * Modern, modular, and visually appealing About Us page for SACPL.
 * Sections: Hero/Intro, Team, History/Timeline, Core Values, Call-to-Action
 * Uses Radio Canada Big font, Tailwind, shadcn/ui, and is fully responsive.
 */
const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('timeline');

  const taglines = [
    "Building Tomorrow's Landmarks Today. We are pioneers in construction excellence, creating sustainable and innovative structures that shape the future.",
    "Engineering the Future, One Structure at a Time.",
    "Where Vision Meets Precision.",
    "Innovating for a Stronger Tomorrow.",
    "Designing Landmarks, Defining Skylines.",
    "Sustainable Solutions, Enduring Impact.",
    "Your Partner in Structural Excellence.",
    "Transforming Ideas into Iconic Realities.",
    "Crafting the Foundations of Progress.",
    "Excellence in Every Beam and Blueprint.",
    "Empowering Communities Through Engineering.",
    "Trusted for 50 Years of Innovation."
  ];
  const [taglineIndex, setTaglineIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  // Leadership data (add at the top or import from a data file)
  const leadershipData = [
    {
      name: "Suresh Shanghvi",
      title: "Chairman",
      description: "Suresh Shanghvi leads the company with a visionary approach and decades of industry experience.",
      image: "/Leaders/founder.png",
    },
    {
      name: "Biju Nair",
      title: "Technical Director",
      description: "Biju Nair leads our technical operations with innovative solutions.",
      image: "/Leaders/bijuN.png",
    },
    {
      name: "Rajiv Shanghvi",
      title: "Director",
      description: "Rajiv brings strategic oversight and deep industry knowledge.",
      image: "/Leaders/rajivSq.png",
    },
    {
      name: "Nikhil Shanghvi",
      title: "CEO",
      description: "Nikhil drives our company vision and ensures robust business growth.",
      image: "/Leaders/nikhil.png",
    },
    {
      name: "Sachin Kumar",
      title: "COO",
      description: "Sachin oversees daily operations and ensures efficiency across the company.",
      image: "/Leaders/sachinK.png",
    },
    {
      name: "Dr. M. Pradyumna",
      title: "Director",
      description: "Dr. Pradyumna spearheads our research and innovation initiatives.",
      image: "/Leaders/drP.png",
    },
    {
      name: "Suresh Shriyan",
      title: "Director - Business",
      description: "Suresh Shriyan oversees our business strategy and market expansion.",
      image: "/Leaders/sureshS.png",
    },
    {
      name: "Rahul Dangi",
      title: "Head, Human Resources",
      description: "Rahul Dangi leads our HR initiatives with passion and expertise.",
      image: "/Leaders/rahulD.png",
    },
    {
      name: "Vinoo Naik",
      title: "Technical Director",
      description: "Vinoo Naik drives our technical excellence across all projects.",
      image: "/Leaders/vinooN.png",
    },
    {
      name: "Digvi Doshi",
      title: "Head, Billing & Tendering",
      description: "Digvi Doshi leads our billing and tendering operations with unmatched expertise.",
      image: "/Leaders/digviD.png",
    },
  ];

  // Expert Engineers data (updated with user-provided images from /public/people/)
  const expertEngineers = [
    { name: "Sadaf Quadri", title: "Sr. Lead Engineer: Design", description: "", image: "/people/sadaf.avif" },
    { name: "Jitesh Patel", title: "Principal Engineer", description: "", image: "/people/jitesh.avif" },
    { name: "Prashant Chorghe", title: "General Manager: Design", description: "", image: "/people/prashant.avif" },
    { name: "Keshav Godkar", title: "Principal Designer: Design", description: "", image: "/people/keshav.avif" },
    { name: "Digvi Doshi", title: "Head, Billing & Tendering", description: "", image: "/people/digvi.avif" },
    { name: "Sagar Marathe", title: "Sr. Engineer: Design", description: "", image: "/people/sagar.avif" },
    { name: "Ajinkya Patil", title: "Sr. Engineer: Detailing", description: "", image: "/people/ajinkya.avif" },
    { name: "Ghanshyam Bhavsar", title: "Sr. Engineer: QC Design", description: "", image: "/people/bhavsar.avif" },
    { name: "Mangesh Chorghe", title: "Lead Design Engineer", description: "", image: "/people/mangesh.avif" },
    { name: "Sanjay Chavan", title: "Lead Designer: Design", description: "", image: "/people/sanjay.avif" },
    { name: "Arjun Walawalkar", title: "Sr. QAQC: Design Engineer", description: "", image: "/people/arjun.avif" },
    { name: "Pranit Khelurkar", title: "Lead Engineer: Design", description: "", image: "/people/pranit.avif" },
    { name: "Kaushal Mhatre", title: "Senior Technical Assistant", description: "", image: "/people/kaushal.avif" },
    { name: "Mohammad Aarif Nawaaz", title: "Project Coordinator: Design", description: "", image: "/people/aarif.avif" },
    { name: "Suhas Jaitapkar", title: "Design Engineer", description: "", image: "/people/suhas.avif" },
  ];

  // Achievements data
  const achievements = [
    {
      year: "2005",
      title: "First National Award",
      description: "Received our first national recognition for innovative engineering design.",
    },
    {
      year: "2010",
      title: "Milestone Project",
      description: "Completed a landmark project that reshaped urban architecture.",
    },
    {
      year: "2018",
      title: "Global Recognition",
      description: "Earned international acclaim for excellence in sustainable design.",
    },
    {
      year: "2022",
      title: "Innovation Award",
      description: "Awarded for pioneering advancements in structural engineering technology.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex flex-col">
      <Header />
      {/* Main About Us Content - All sections except footer */}
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Hero/hero6.avif"
          alt="About SACPL Hero"
          fill
          priority
          className="object-cover object-center w-full h-full z-0"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#142c67]/80 via-[#1a237e]/70 to-[#232946]/80 z-10" />
        {/* Decorative Blur Circles */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl z-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-700/20 rounded-full blur-2xl z-20 animate-pulse" />
        {/* Main Content */}
        <div className="relative z-30 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold font-radio-canada-big mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg tracking-tight"
          >
            About SACPL
          </motion.h1>
          <motion.p
            key={taglineIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-lg md:text-2xl font-sans text-blue-100 font-medium mb-6 max-w-2xl drop-shadow min-h-[3.5rem]"
          >
            {taglines[taglineIndex]}
          </motion.p>
        </div>
      </section>
      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative flex gap-2 py-2 overflow-x-auto justify-center items-center">
            <AnimatePresence initial={false}>
              {[
                { id: 'timeline', label: 'Our Journey', icon: <Calendar className="w-4 h-4" /> },
                { id: 'services', label: 'What We Do', icon: <Building2 className="w-4 h-4" /> },
                { id: 'founder', label: 'Our Founder', icon: <Star className="w-4 h-4" /> },
                { id: 'management', label: 'Leadership', icon: <Users className="w-4 h-4" /> },
                { id: 'engineers', label: 'Expert Team', icon: <GraduationCap className="w-4 h-4" /> },
                { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-4 h-4" /> },
              ].map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    className={`relative flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 border border-transparent shadow-sm
                      ${isActive ? 'text-white' : 'text-neutral-700 hover:text-blue-700'}
                      ${!isActive ? 'bg-neutral-100 hover:bg-blue-50' : ''}
                    `}
                    style={{ zIndex: isActive ? 2 : 1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Animated pill background for active tab */}
                    {isActive && (
                      <motion.span
                        layoutId="tab-pill-bg"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1a237e] to-[#2563eb] shadow-lg"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {/* Icon with animation */}
                    <motion.span
                      animate={{
                        color: isActive ? '#fff' : '#64748b', // slate-500 for inactive
                        scale: isActive ? 1.15 : 1,
                        filter: isActive ? 'drop-shadow(0 2px 8px #1a237e66)' : 'none',
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex items-center"
                    >
                      {tab.icon}
                    </motion.span>
                    {/* Label with animation */}
                    <motion.span
                      animate={{
                        fontWeight: isActive ? 700 : 500,
                        letterSpacing: isActive ? '0.02em' : '0.01em',
                        color: isActive ? '#fff' : '#1a237e', // deep blue for inactive
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="ml-1 text-base md:text-lg"
                    >
                      {tab.label}
                    </motion.span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      {/* Timeline Section */}
      {activeTab === 'timeline' && (
        <TimelineDemo />
      )}
      {/* What We Do Section */}
      {activeTab === 'services' && (
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-radio-canada-big text-center text-blue-900 mb-12 tracking-tight">
              What We Do
            </h2>
            {/* Cards Grid - Now 6 cards, each with CardSpotlight and CanvasRevealEffect */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
              {/* Structural Engineering Card */}
              <CardSpotlight className="bg-white border-none shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <Building2 className="w-12 h-12 text-blue-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Structural Engineering</h3>
                  <p className="text-neutral-600 text-base font-medium">
                    From concept to construction, our designs ensure every structure is built to last.
                  </p>
                </div>
              </CardSpotlight>
              {/* Design Consulting Card */}
              <CardSpotlight className="bg-white border-none shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <PencilRuler className="w-12 h-12 text-purple-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Design Consulting</h3>
                  <p className="text-neutral-600 text-base font-medium">
                    We transform visionary ideas into tangible blueprints with precision and creativity.
                  </p>
                </div>
              </CardSpotlight>
              {/* Project Management Card */}
              <CardSpotlight className="bg-white border-none shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <Briefcase className="w-12 h-12 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Project Management</h3>
                  <p className="text-neutral-600 text-base font-medium">
                    Our experienced team ensures seamless execution and delivery of every project.
                  </p>
                </div>
              </CardSpotlight>
              {/* Timely Delivery Card */}
              <CardSpotlight className="bg-white border-none shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <Calendar className="w-12 h-12 text-cyan-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Timely Delivery</h3>
                  <p className="text-neutral-600 text-base font-medium">
                    We ensure every project is completed on schedule, every time.
                  </p>
                </div>
              </CardSpotlight>
              {/* BIM & Digital Solutions Card */}
              <CardSpotlight className="bg-white border-none shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <Star className="w-12 h-12 text-pink-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">BIM & Digital Solutions</h3>
                  <p className="text-neutral-600 text-base font-medium">
                    Advanced Building Information Modeling and digital engineering for streamlined workflows and 3D visualization.
                  </p>
            </div>
              </CardSpotlight>
              {/* Quality Assurance & Compliance Card */}
              <CardSpotlight className="bg-white border-none shadow-xl">
                <div className="flex flex-col items-center text-center">
                  <Award className="w-12 h-12 text-yellow-500 mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Quality Assurance & Compliance</h3>
                  <p className="text-neutral-600 text-base font-medium">
                    Rigorous quality control and compliance with international standards for structural integrity and safety.
                  </p>
                </div>
              </CardSpotlight>
            </div>
          </div>
        </section>
      )}
      {/* Our Founder Section */}
      {activeTab === 'founder' && (
        <section className="w-full py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-radio-canada-big text-center text-blue-900 mb-12 tracking-tight">
              Our visionary founder
            </h2>
            <FollowerPointerCard className="w-full">
              <div className="flex flex-col md:flex-row items-center gap-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-zinc-100">
                {/* Left: Founder Info */}
                <div className="flex-1 flex flex-col items-start text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 font-radio-canada-big mb-2">
                    Mr. Suresh P Shanghvi
                  </h3>
                  <p className="text-lg font-semibold text-blue-700 mb-4">Founder & Chairman</p>
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 font-sans">
                    Client satisfaction is of utmost importance to us & we work towards client expectations by addressing each requirement in a unique and valued manner. We utilize our vast experience and awareness of the latest design trends to achieve effective designs for our clients, simultaneously pushing the limits of innovation.
                  </p>
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 font-sans">
                    From a 2-person team established in 1973 with Mr. Vinod Fondekar and Mr. Praksha Satam as founder employees, we have grown into a team of 110 professionals, headed by Mr. Biju Nair as Technical Director, Mr. Rajiv Shanghvi as MD, Mr. Nikhil Shanghvi as CEO, and Mr. Sachin K C as COO.
                  </p>
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 font-sans">
                    As industry leaders, we have set trends such as using computers for engineering design calculations and developing internal software like PLANWIN (as early as 1985), using CAD in 1992, employing digital cameras for site inspection and reporting in 1999, developing a site inspection app in 2014, and migrating to BIM in 2019.
                  </p>
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed mb-4 font-sans">
                    Over the years, Team SACPL has made its mark across residential, commercial, industrial, retail, institutional, hospitality, and healthcare sectors both in India and internationally. Our projects span Dubai, Abu Dhabi, Iran, Dar-e-Salam, the Caribbean, Nepal, Tanzania, and many other countries.
                  </p>
                  <p className="text-base md:text-lg text-neutral-700 leading-relaxed font-sans">
                    Team SACPL has been honored with records in the Limca Books of World Records and India Book of World Records for the longest span in the NMMC HO office.
                  </p>
                </div>
                {/* Right: Founder Image (clickable, links to LinkedIn) */}
                <div className="flex-shrink-0 flex flex-col items-center justify-center">
                  <a
                    href="#" // TODO: Replace with actual LinkedIn link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Image
                      src="/founder.png"
                      alt="Mr. Suresh P Shanghvi"
                      width={224}
                      height={224}
                      priority
                      className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-200 shadow-lg object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </FollowerPointerCard>
            {/* CTA Section reused in Our Founder */}
            <div className="mt-16 flex flex-col items-center justify-center gap-8">
              {/* Two-line CTA: FlipWords only in first line */}
              <div className="text-4xl md:text-5xl font-extrabold text-center max-w-3xl">
                <div className="flex flex-col items-center">
                  <span className="text-black">
                    Let us help you build{' '}
                    <FlipWords
                      words={[
                        "iconic structures", "lasting value", "your vision", "modern spaces", "future landmarks", "award-winning projects", "creative solutions", "timely results", "sustainable growth", "engineering marvels", "your next success", "beautiful buildings", "innovative designs", "trusted partnerships", "excellence together"
                      ]}
                      duration={2200}
                      className="text-black font-extrabold drop-shadow-md inline-block"
                    />
                  </span>
                  <span className="text-black mt-2">for your business.</span>
                </div>
              </div>
              {/* Contact Us Button - visually appealing, no shimmer */}
              <button
                className="mt-4 px-12 py-6 text-2xl font-bold rounded-2xl shadow-2xl bg-blue-700 text-white transition-transform duration-200 hover:bg-blue-800 hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                type="button"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      )}
      {/* Leadership Section */}
      {activeTab === 'management' && (
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-radio-canada-big text-center text-blue-900 mb-12 tracking-tight">
              Our Visionary Leaders
            </h2>
            {/* Leadership Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {leadershipData.slice(0, 9).map((leader) => (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12, type: 'spring', bounce: 0.2 }}
                  className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col items-center text-center border border-zinc-100 hover:shadow-2xl transition-all duration-300 min-h-[370px]"
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={128}
                    height={128}
                    priority
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-200 mb-6 shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 font-radio-canada-big mb-1">{leader.name}</h3>
                  <p className="text-blue-700 font-semibold mb-3 text-lg md:text-xl">{leader.title}</p>
                  <p className="text-neutral-600 text-base md:text-lg font-sans">{leader.description}</p>
                </motion.div>
              ))}
            </div>
            {/* Centered 10th Card */}
            <div className="flex justify-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 9 * 0.12, type: 'spring', bounce: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col items-center text-center border border-zinc-100 hover:shadow-2xl transition-all duration-300 w-full max-w-md min-h-[370px]"
              >
                <Image
                  src={leadershipData[9].image}
                  alt={leadershipData[9].name}
                  width={128}
                  height={128}
                  priority
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-200 mb-6 shadow-lg"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 font-radio-canada-big mb-1">{leadershipData[9].name}</h3>
                <p className="text-blue-700 font-semibold mb-3 text-lg md:text-xl">{leadershipData[9].title}</p>
                <p className="text-neutral-600 text-base md:text-lg font-sans">{leadershipData[9].description}</p>
              </motion.div>
            </div>
            {/* CTA Section reused */}
            <div className="mt-16 flex flex-col items-center justify-center gap-8">
              <div className="text-4xl md:text-5xl font-extrabold text-center max-w-3xl">
                <div className="flex flex-col items-center">
                  <span className="text-black">
                    Let us help you build{' '}
                    <FlipWords
                      words={[
                        "iconic structures", "lasting value", "your vision", "modern spaces", "future landmarks", "award-winning projects", "creative solutions", "timely results", "sustainable growth", "engineering marvels", "your next success", "beautiful buildings", "innovative designs", "trusted partnerships", "excellence together"
                      ]}
                      duration={2200}
                      className="text-black font-extrabold drop-shadow-md inline-block"
                    />
                  </span>
                  <span className="text-black mt-2">for your business.</span>
                </div>
              </div>
              <button
                className="mt-4 px-12 py-6 text-2xl font-bold rounded-2xl shadow-2xl bg-blue-700 text-white transition-transform duration-200 hover:bg-blue-800 hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                type="button"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      )}
      {/* Expert Team Section */}
      {activeTab === 'engineers' && (
        <section className="w-full py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-radio-canada-big text-center text-blue-900 mb-12 tracking-tight">
              Our Expert Team
            </h2>
            {/* Expert Engineers Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
              {expertEngineers.slice(0, 15).map((engineer) => (
                <motion.div
                  key={engineer.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.12, type: 'spring', bounce: 0.2 }}
                  className="bg-white rounded-3xl shadow-2xl p-10 md:p-12 flex flex-col items-center text-center border border-zinc-100 hover:shadow-2xl transition-all duration-300 min-h-[370px]"
                >
                  <Image
                    src={engineer.image}
                    alt={engineer.name}
                    width={128}
                    height={128}
                    priority
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-200 mb-6 shadow-lg"
                  />
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 font-radio-canada-big mb-1">{engineer.name}</h3>
                  <p className="text-blue-700 font-semibold mb-3 text-lg md:text-xl">{engineer.title}</p>
                  <p className="text-neutral-600 text-base md:text-lg font-sans">{engineer.description}</p>
                </motion.div>
              ))}
            </div>
            {/* CTA Section reused */}
            <div className="mt-16 flex flex-col items-center justify-center gap-8">
              <div className="text-4xl md:text-5xl font-extrabold text-center max-w-3xl">
                <div className="flex flex-col items-center">
                  <span className="text-black">
                    Let us help you build{' '}
                    <FlipWords
                      words={[
                        "iconic structures", "lasting value", "your vision", "modern spaces", "future landmarks", "award-winning projects", "creative solutions", "timely results", "sustainable growth", "engineering marvels", "your next success", "beautiful buildings", "innovative designs", "trusted partnerships", "excellence together"
                      ]}
                      duration={2200}
                      className="text-black font-extrabold drop-shadow-md inline-block"
                    />
                  </span>
                  <span className="text-black mt-2">for your business.</span>
                </div>
              </div>
              <button
                className="mt-4 px-12 py-6 text-2xl font-bold rounded-2xl shadow-2xl bg-blue-700 text-white transition-transform duration-200 hover:bg-blue-800 hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                type="button"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      )}
      {/* Achievements Section */}
      {activeTab === 'achievements' && (
        <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-extrabold font-radio-canada-big text-center text-blue-900 mb-12 tracking-tight">
              Our Achievements
            </h2>
            {/* Enhanced Animated Achievements Cards Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.18 } },
                hidden: {},
              }}
            >
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.year}
                  variants={{
                    hidden: { opacity: 0, y: 60, scale: 0.85 },
                    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', bounce: 0.35, duration: 0.8 } },
                  }}
                  whileHover={{ scale: 1.045, boxShadow: "0 8px 32px 0 rgba(60, 80, 200, 0.18)", zIndex: 2 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border border-blue-100 transition-all duration-300 min-h-[260px] overflow-hidden group cursor-pointer"
                >
                  {/* Animated, Rotating, Pulsing Gradient Ring */}
                  <motion.div
                    className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-tr from-blue-200 via-blue-400 to-violet-300 rounded-full blur-2xl opacity-60 z-0"
                    animate={{ rotate: 360, scale: [0.85, 1.1, 0.85] }}
                    transition={{
                      repeat: Infinity,
                      duration: 7,
                      ease: "linear",
                      repeatType: "loop",
                      scale: { duration: 2.5, repeat: Infinity, repeatType: "reverse" },
                    }}
                  />
                  {/* Animated Year Badge with Pop-in and Pulse */}
                  <motion.span
                    className="relative z-10 text-4xl font-extrabold text-blue-700 mb-4 font-radio-canada-big drop-shadow-lg"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18, delay: 0.2 + i * 0.18 }}
                    whileHover={{ textShadow: "0 0 16px #60a5fa, 0 0 32px #a5b4fc" }}
                  >
                    {ach.year}
                  </motion.span>
                  {/* Title */}
                  <motion.h3
                    className="relative z-10 text-xl md:text-2xl font-bold text-neutral-900 mb-2 font-radio-canada-big"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.18, duration: 0.5 }}
                  >
                    {ach.title}
                  </motion.h3>
                  {/* Description */}
                  <motion.p
                    className="relative z-10 text-neutral-600 text-base md:text-lg font-sans mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.18, duration: 0.5 }}
                  >
                    {ach.description}
                  </motion.p>
                  {/* Animated Underline on Hover */}
                  <motion.div
                    className="relative z-10 w-16 h-1 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full mt-2 group-hover:scale-x-110 transition-transform duration-300"
                    initial={{ scaleX: 0.7, opacity: 0.7 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    whileHover={{ scaleX: 1.2, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                </motion.div>
              ))}
            </motion.div>
            {/* CTA Section reused */}
            <div className="mt-16 flex flex-col items-center justify-center gap-8">
              <div className="text-4xl md:text-5xl font-extrabold text-center max-w-3xl">
                <div className="flex flex-col items-center">
                  <span className="text-black">
                    Let us help you build{' '}
                    <FlipWords
                      words={[
                        "iconic structures", "lasting value", "your vision", "modern spaces", "future landmarks", "award-winning projects", "creative solutions", "timely results", "sustainable growth", "engineering marvels", "your next success", "beautiful buildings", "innovative designs", "trusted partnerships", "excellence together"
                      ]}
                      duration={2200}
                      className="text-black font-extrabold drop-shadow-md inline-block"
                    />
                  </span>
                  <span className="text-black mt-2">for your business.</span>
                </div>
              </div>
              <button
                className="mt-4 px-12 py-6 text-2xl font-bold rounded-2xl shadow-2xl bg-blue-700 text-white transition-transform duration-200 hover:bg-blue-800 hover:scale-105 hover:shadow-3xl focus:outline-none focus:ring-4 focus:ring-blue-300"
                type="button"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>
      )}
      {/* Place ModernCTA above the footer, outside of tab logic */}
      <ModernCTA theme="light" />
      <Footer />
    </div>
  );
};

export default AboutPage;
