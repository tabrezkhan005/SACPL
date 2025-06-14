"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Target, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface AboutUsProps {
  title?: string
  subtitle?: string
  description?: string
  imageUrl?: string
  stats?: Array<{
    icon: React.ReactNode
    value: string
    label: string
  }>
  buttonText?: string
  buttonHref?: string
}

const AboutUsSection: React.FC<AboutUsProps> = ({
  title = "About Our Company",
  subtitle = "Building the future together",
  description = "We are a passionate team of innovators dedicated to creating exceptional digital experiences. Our mission is to transform ideas into reality through cutting-edge technology and creative solutions that make a meaningful impact on businesses and communities worldwide.",
  imageUrl = "/abusec.jpg",
  stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: "50+",
      label: "Team Members"
    },
    {
      icon: <Target className="w-6 h-6" />,
      value: "200+",
      label: "Projects Completed"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: "99%",
      label: "Client Satisfaction"
    }
  ],
  buttonText = "Learn More About Us",
  buttonHref = "/about"
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8
      }
    }
  }

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#142c67] via-[#1a237e] to-[#232946]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Content Section */}
          <div className="space-y-8 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl p-10 md:p-14 border border-white/10">
            <div className="space-y-4">
              <motion.div variants={itemVariants}>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-600/10 text-blue-400 rounded-full border border-blue-400/20">
                  {subtitle}
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg"
              >
                {title}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-lg text-blue-100 leading-relaxed"
              >
                {description}
              </motion.p>
            </div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card className="p-4 bg-[#1a237e]/80 border border-blue-400/20 shadow-lg hover:border-blue-400/40 transition-colors">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="text-blue-400">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-blue-100">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants}>
              <Button
                asChild
                className="group relative overflow-hidden bg-blue-500 hover:bg-blue-600 text-white font-bold shadow-xl px-6 py-3 text-lg"
              >
                <a href={buttonHref}>
                  <span className="relative z-10 flex items-center gap-2">
                    {buttonText}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-black flex items-center justify-center h-[400px] lg:h-[500px]">
              <motion.img
                src={imageUrl}
                alt="About us team"
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              {/* Overlay gradient for better integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#142c67]/70 via-transparent to-transparent" />
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.4, 0.7, 0.4]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUsSection
