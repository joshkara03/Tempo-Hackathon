import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface SubmissionSectionProps {
  formUrl?: string;
}

const SubmissionSection = ({
  formUrl = "https://forms.gle/PLACEHOLDER",
}: SubmissionSectionProps) => {
  const steps = [
    {
      number: "01",
      title: "Build Your Project",
      description: "Create an innovative application using Tempo's features",
    },
    {
      number: "02",
      title: "Share #TempoHacks on Twitter",
      description: "Post your submission with #TempoHacks and tag @Tempo_Labs",
    },
  ];

  return (
    <section className="w-full py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-brockmann">
            How to Submit
          </h2>
          <div className="h-px w-12 bg-purple-500/50 mx-auto" />
        </motion.div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-px bg-purple-500/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 ? 20 : -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`flex items-center gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}
            >
              <div className="flex-1 relative z-10">
                <div className="p-6 bg-black/40 backdrop-blur-md rounded-lg border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-purple-400 text-4xl font-light mb-4 font-brockmann">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-light text-white mb-3 font-brockmann">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-brockmann">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="relative z-20">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 border-2 border-purple-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
