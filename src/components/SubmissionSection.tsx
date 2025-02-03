import React from "react";
import { motion } from "framer-motion";

interface SubmissionSectionProps {
  formUrl?: string;
}

const SubmissionSection = ({
  formUrl = "https://forms.gle/PLACEHOLDER",
}: SubmissionSectionProps) => {
  const steps = [
    {
      number: "01",
      title: "Share #TempoBuilds on Twitter",
      description: "Post your submission with #TempoBuilds and tag @Tempo_Labs",
    },
    {
      number: "02",
      title: "Top 10 Selection",
      description:
        "The Tempo team will choose the top 10 submissions based on the criteria below",
    },
    {
      number: "03",
      title: "Community Vote",
      description:
        "We will post a Twitter thread and the post with the most likes wins",
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

        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex-1 relative group text-center md:text-left"
              >
                <div className="mb-8 mx-auto md:mx-0 w-24 h-24 rounded-full bg-purple-500/10 border-2 border-purple-500/30 flex items-center justify-center group-hover:border-purple-500/50 transition-all duration-300">
                  <span className="text-4xl font-light text-purple-400 font-brockmann">
                    {step.number}
                  </span>
                </div>
                <div className="max-w-sm mx-auto md:mx-0">
                  <h3 className="text-2xl font-light text-white mb-4 font-brockmann">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-brockmann">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubmissionSection;
