"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Star, Award, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModernCTA from '@/components/ModernCTA';
import { CardSpotlight } from '@/components/ui/card-spotlight';

// Main Services Page Component
const ServicesPage: React.FC = () => {
  // Ref for the hero section
  const heroRef = useRef<HTMLDivElement>(null);
  // Framer Motion scroll progress for the hero section
  const { scrollY } = useScroll();
  // State to store viewport height for client-side only usage
  const [viewportHeight, setViewportHeight] = useState(800); // Default fallback for SSR

  // Set viewport height after component mounts (client-side only)
  useEffect(() => {
    setViewportHeight(window.innerHeight * 0.8);
  }, []);

  // Fade out hero as you scroll the first viewport height
  const opacity = useTransform(scrollY, [0, viewportHeight], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">
      {/* Header Section */}
      <Header />

      {/* Hero Section - Full width/height, sticky, fades out on scroll */}
      <motion.section
        ref={heroRef}
        style={{ opacity, position: 'sticky', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 30 }}
        className="flex items-center justify-center overflow-hidden bg-black"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Background Image - perfectly fit, responsive, object-cover, brighter */}
          <Image
            src="/Hero/servhero.png"
            alt="Services Hero"
            fill
            priority
            className="object-cover object-center w-full h-full z-0 select-none pointer-events-none brightness-125"
            sizes="100vw"
          />
          {/* Black Overlay - vertical gradient, no blur, for strong readability and depth */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
          {/* Animated Heading and Subheading with 'rise up' effect */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full">
            {/* 3D, bright, animated heading - now larger and with a professional font */}
            <motion.h1
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 10 }}
              className="text-6xl md:text-8xl font-extrabold font-sans mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent tracking-tight
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                shadow-blue-300
                [text-shadow:0_2px_0_#fff,0_4px_8px_rgba(0,0,0,0.25),0_8px_24px_rgba(30,64,175,0.25)]"
            >
              Our Services
            </motion.h1>
            {/* 3D, bright, animated subheading - professional font */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: 'spring', stiffness: 60, damping: 12, delay: 0.25 }}
              className="text-lg md:text-2xl font-sans text-white font-semibold mb-6 max-w-2xl min-h-[3.5rem]
                drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]
                [text-shadow:0_2px_0_#fff,0_4px_8px_rgba(0,0,0,0.18)]"
            >
              Discover the full spectrum of engineering and construction solutions SACPL offers to bring your vision to life.
            </motion.p>
          </div>
        </div>
      </motion.section>
      {/* No spacer needed, content will naturally follow after hero fades out */}

      {/* Our Services Section - Full width, improved spacing, light theme */}
      <section className="w-full py-24 px-2 sm:px-4 lg:px-8 bg-white">
        {/* Section Heading with Montserrat font */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-center w-full text-neutral-900 font-[var(--font-montserrat)]">Our Services</h2>
        <div className="flex flex-col gap-y-32">
          {[
            {
              title: 'Structural Design',
              description: 'Innovative and reliable structural engineering solutions for buildings of all scales. We ensure safety, efficiency, and compliance with the latest codes and standards.',
              image: '/Services/s1.jpeg',
            },
            {
              title: 'Project Management',
              description: 'Comprehensive project management from concept to completion. We coordinate teams, timelines, and budgets to deliver projects on time and within scope.',
              image: '/Services/s2.jpeg',
            },
            {
              title: 'Consulting Services',
              description: 'Expert consulting for feasibility studies, value engineering, and technical due diligence. We help clients make informed decisions at every stage.',
              image: '/Services/s3.jpeg',
            },
            {
              title: 'Sustainability Solutions',
              description: 'Green building strategies and sustainable design practices to minimize environmental impact and maximize energy efficiency.',
              image: '/Services/s4.jpeg',
            },
            {
              title: 'Construction Supervision',
              description: 'On-site supervision and quality control to ensure construction meets design intent, safety standards, and client expectations.',
              image: '/Services/s5.jpeg',
            },
            {
              title: 'BIM & Digital Engineering',
              description: 'Advanced Building Information Modeling (BIM) and digital engineering services for seamless collaboration, visualization, and project delivery.',
              image: '/Services/s7.jpeg',
            },
          ].map((service, idx) => (
            // Animated card container for each service
            <motion.div
              key={service.title}
              className={`group flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center w-full max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl border border-neutral-100 overflow-hidden transition-all duration-300`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 80, delay: idx * 0.1 }}
            >
              {/* Text Content - always centered, with professional spacing */}
              <motion.div
                className="flex-1 flex items-center justify-center p-8 md:p-12"
                initial={{ x: idx % 2 === 1 ? 60 : -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, type: 'spring', stiffness: 60, delay: idx * 0.15 + 0.1 }}
              >
                <div className="w-full max-w-xl">
                  {/* Service Title with Montserrat font and strong visibility */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 font-[var(--font-montserrat)] text-neutral-900">{service.title}</h3>
                  <p className="text-lg text-neutral-700 mb-0">{service.description}</p>
                </div>
              </motion.div>
              {/* Image Content - always centered, with professional spacing and animated */}
              <motion.div
                className="flex-1 flex items-center justify-center p-8 md:p-12"
                initial={{ x: idx % 2 === 1 ? -60 : 60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, type: 'spring', stiffness: 60, delay: idx * 0.15 + 0.2 }}
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(30,64,175,0.12)' }}
              >
                <div className="w-full max-w-xl aspect-video rounded-2xl overflow-hidden shadow-xl bg-white transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={960}
                    height={540}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Call To Action Section */}
      <ModernCTA theme="light" />
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
