import React from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  events?: TimelineEvent[];
}

const defaultEvents: TimelineEvent[] = [
  {
    date: "February 6 - 9 AM EST",
    title: "Hackathon Kickoff",
    description: "Project submissions begin",
  },
  {
    date: "Feb 7-9",
    title: "Building Period",
    description: "Attend optional daily office hours",
  },
  {
    date: "February 10 - 8 PM EST",
    title: "Final Submissions",
    description:
      "Project submissions close and judging + community voting begins",
  },
];

const TimelineSection = ({ events = defaultEvents }: TimelineSectionProps) => {
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
            Event Timeline
          </h2>
          <div className="h-px w-12 bg-purple-500/50 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10" />

          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              <div className="flex-1">
                <Card className="group relative overflow-hidden bg-black/40 backdrop-blur-md border-white/5 hover:border-white/10 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="p-6 relative z-10">
                    <Badge
                      variant="secondary"
                      className="bg-white/10 text-white hover:bg-white/20 mb-3 font-brockmann"
                    >
                      {event.date}
                    </Badge>
                    <h3 className="text-xl font-light text-white mb-2 font-brockmann">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-brockmann">
                      {event.description}
                    </p>
                  </div>
                </Card>
              </div>

              <div className="relative">
                <div className="w-3 h-3 bg-white/50 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>

              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
