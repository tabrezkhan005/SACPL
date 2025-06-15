"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Sparkles,
  Star,
  ArrowRight,
  Menu,
  X,
  Users,
  Award,
  Target,
  Handshake,
  CheckCircle,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ModernCTA from '@/components/ModernCTA';
import DotPattern from '@/components/DotPattern';

// Fixed positions for animated dots to avoid hydration mismatch
const DOT_POSITIONS = [
  { top: '10%', left: '15%' },
  { top: '20%', left: '40%' },
  { top: '30%', left: '70%' },
  { top: '40%', left: '25%' },
  { top: '50%', left: '60%' },
  { top: '60%', left: '80%' },
  { top: '70%', left: '35%' },
  { top: '80%', left: '55%' },
  { top: '15%', left: '75%' },
  { top: '25%', left: '10%' },
  { top: '35%', left: '50%' },
  { top: '45%', left: '85%' },
  { top: '55%', left: '20%' },
  { top: '65%', left: '65%' },
  { top: '75%', left: '30%' },
  { top: '85%', left: '90%' },
  { top: '12%', left: '60%' },
  { top: '22%', left: '30%' },
  { top: '32%', left: '80%' },
  { top: '42%', left: '45%' },
  { top: '52%', left: '70%' },
  { top: '62%', left: '15%' },
  { top: '72%', left: '40%' },
  { top: '82%', left: '60%' },
  { top: '18%', left: '55%' },
  { top: '28%', left: '20%' },
  { top: '38%', left: '75%' },
  { top: '48%', left: '35%' },
  { top: '58%', left: '50%' },
  { top: '68%', left: '85%' },
];

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col items-center justify-center px-6 py-24 pb-24 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
      <DotPattern className={cn(
        "[mask-image:radial-gradient(40vw_circle_at_center,white,transparent)]",
      )} />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-primary/30 blur-[120px] rounded-full z-0"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.6, delay: 0.3 }}
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-secondary/20 blur-[160px] rounded-full z-0"
      />
      <div className="absolute inset-0 z-0 pointer-events-none">
        {DOT_POSITIONS.map((pos, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 0.2, y: [0, -20, 0] }}
            transition={{
              duration: 7 + (i % 5),
              repeat: Infinity,
              delay: (i % 10) * 0.2,
            }}
            className="absolute w-1 h-1 bg-muted-foreground/20 rounded-full"
            style={{
              top: pos.top,
              left: pos.left,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center max-w-4xl space-y-6 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border"
        >
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-sm text-black">Trusted by 500+ Companies</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-black"
        >
          Our <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Clients</span> Drive Our Success
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed"
        >
          We partner with industry leaders and innovative startups to deliver exceptional results.
          Discover how we've helped transform businesses across the globe.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap pt-4"
        >
          {/* Primary button: blue background, white text */}
          <Button size="lg" className="group bg-blue-600 text-white hover:bg-blue-700">
            View Our Work
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          {/* Outline button: gray border, black text */}
          <Button size="lg" variant="outline" className="border-gray-400 text-black hover:bg-gray-100">
            Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// SACPL Client Logos Grid Component
const ClientLogosGrid = () => {
  const clients = [
    { name: "NBCC", logo: "/clients/nbcc.png" },
    { name: "MHADA", logo: "/clients/mhada.png" },
    { name: "GSDIC", logo: "/clients/gsdic.png" },
    { name: "SUN", logo: "/clients/sun.png" },
    { name: "NCC", logo: "/clients/ncc.png" },
    { name: "Shapoorji Pallonji", logo: "/clients/shapoorji.png" },
    { name: "L & T", logo: "/clients/lnt.png" },
    { name: "McDonalds", logo: "/clients/mcd.png" },
    { name: "Gammon Skanska", logo: "/clients/gammon.png" },
    { name: "D Mart", logo: "/clients/dmart.png" },
    { name: "TATA", logo: "/clients/tata.png" },
    { name: "Kanakia", logo: "/clients/kankaia.png" },
    { name: "Evershine EC", logo: "/clients/evershine.png" },
    { name: "STW", logo: "/clients/stw.png" },
    { name: "All Cargo Logistics", logo: "/clients/allcargo.png" },
    { name: "Adani", logo: "/clients/adani.png" },
    { name: "Nirma", logo: "/clients/nirma.png" },
    { name: "Walmart", logo: "/clients/walmart.png" },
  ];

  return (
    <section className="py-20 px-6 bg-blue-50 mt-[-4rem] md:mt-[-6rem]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative"
            >
              <div className="relative bg-white border border-blue-200 rounded-xl p-6 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-blue-400">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={64}
                  height={64}
                  className="object-contain w-12 h-12 mx-auto"
                />
                <div className="absolute inset-x-0 -bottom-8 text-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium text-blue-900 bg-white px-3 py-1 rounded-full border border-blue-200 shadow-sm">
                    {client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ClientRelationshipsCard (SACPL values, 'Building Lasting Partnerships' and 'Our Commitment')
const ClientRelationshipsCard = () => {
  const stats = [
    { icon: Users, label: "Active Clients", value: "500+", color: "text-blue-700" },
    { icon: Award, label: "Success Rate", value: "98%", color: "text-green-600" },
    { icon: Target, label: "Projects Delivered", value: "1,200+", color: "text-blue-500" },
    { icon: TrendingUp, label: "Client Retention", value: "95%", color: "text-orange-500" }
  ];
  const features = [
    "Dedicated project management",
    "Transparent communication",
    "On-time delivery",
    "Quality assurance",
    "Innovative engineering solutions",
    "Long-term partnerships"
  ];
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
                Building Lasting <span className="text-blue-700">Partnerships</span>
              </h2>
              <p className="text-lg text-blue-800 leading-relaxed">
                At SACPL, our client-first approach ensures every partnership is built on trust, transparency, and exceptional delivery. We don't just complete projects—we create long-term relationships that drive mutual success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-blue-50"
                >
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                  <div className="text-sm text-blue-700">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-lg">
              <div className="pb-6 border-b border-blue-100 mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-400 flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl text-blue-900">Our Commitment</div>
                  <div className="text-blue-700">What sets us apart</div>
                </div>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-blue-800">{feature}</span>
                  </div>
                ))}
                <div className="pt-6">
                  <Button className="w-full group">
                    Start Your Partnership
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Clients Page Component
const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <HeroSection />
      <ClientLogosGrid />
      <ClientRelationshipsCard />
      <ModernCTA />
      <Footer />
    </div>
  );
};

export default ClientsPage;
