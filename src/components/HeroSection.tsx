import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "TempoBuilds: Build in Public Hackathon🚀",
  description = "Join the TempoBuilds hackathon to showcase your creativity and build innovative applications using Tempo, with chances to win up to $1000 in cash and credits.",
  ctaText = "Register Now",
  onCtaClick = () =>
    window.open("https://forms.gle/YmC6CvhhqAuhUEXT7", "_blank"),
}: HeroSectionProps) => {
  return (
    <div className="w-full bg-black flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white font-brockmann mb-6 tracking-tight">
            {title}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg rounded-full transition-colors duration-300"
            onClick={onCtaClick}
          >
            {ctaText}
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div className="text-left">
            <div className="text-purple-400 text-base md:text-lg font-medium mb-2">
              Duration
            </div>
            <div className="text-white text-2xl md:text-4xl font-light">
              Feb 6-10
            </div>
          </div>
          <div className="text-left">
            <div className="text-purple-400 text-base md:text-lg font-medium mb-2">
              Prize Pool
            </div>
            <div className="text-white text-2xl md:text-4xl font-light">
              $2000+
            </div>
          </div>
          <div className="text-left">
            <div className="text-purple-400 text-base md:text-lg font-medium mb-2">
              Location
            </div>
            <div className="text-white text-2xl md:text-4xl font-light">
              Global
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
