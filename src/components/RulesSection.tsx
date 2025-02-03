import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Twitter } from "lucide-react";
import { motion } from "framer-motion";

interface RulesSectionProps {
  rules?: Array<{ title: string; content: string }>;
  twitterHandle?: string;
}

const RulesSection = ({
  rules = [
    {
      title: "Project Requirements",
      content:
        "Your project must use Tempo in a meaningful way. All code must be created during the hackathon period.",
    },
    {
      title: "How to Submit",
      content:
        "Post your project on Twitter/X anytime during th hackathon ( February 6 - 9 AM EST to February 10 - 8 PM EST) using #TempoBuilds. Include a link to your project and a brief description.",
    },
    {
      title: "What is Building in Public?",
      content:
        "Building in Public is the believe that by sharing your progress with the world, you create a positive feedback loop. People help you on your journey, give you feedback, and even raise awareness for what your building. Share your progress using #TempoHacks. Regular updates are encouraged but not required.",
    },
    {
      title: "Judging Criteria",
      content:
        "Projects will be judged on Design, technical complexity/funcitonality, and the idea for the application itself. The Tempo team will chose the top 10 and the community will vote for the best projects via twitter/X likes",
    },
  ],
  twitterHandle = "@Tempo_Labs",
}: RulesSectionProps) => {
  return (
    <section className="w-full py-24 px-4 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-brockmann">
            Resources
          </h2>
          <div className="h-px w-12 bg-purple-500/50 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Tutorial",
              href: "https://www.youtube.com/watch?v=CaiKr-TONLY",
            },

            {
              title: "Documentation",
              href: "https://tempolabsinc.mintlify.app/introduction",
            },
            {
              title: "Discord Support",
              href: "https://discord.gg/6r6fHmMjcc",
            },
          ].map((resource, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-black/40 backdrop-blur-md border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 relative z-10 flex items-center justify-center">
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-white hover:text-purple-300 transition-colors font-brockmann bg-purple-500/10 hover:bg-purple-500/20 px-6 py-3 rounded-lg w-full text-center"
                >
                  {resource.title}
                </a>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-brockmann">
              Rules & Guidelines
            </h2>
            <div className="h-px w-12 bg-purple-500/50 mx-auto" />
          </div>

          <Card className="group relative overflow-hidden bg-black/40 backdrop-blur-md border-white/5 hover:border-white/10 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <CardContent className="p-6 relative z-10">
              <Accordion type="single" collapsible className="w-full">
                {rules.map((rule, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-light text-white hover:text-purple-300 transition-colors font-brockmann">
                      {rule.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400 font-brockmann">
                      {rule.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="flex justify-center pt-8">
            <Button
              variant="outline"
              className="gap-2 bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white font-brockmann"
              onClick={() =>
                window.open(
                  `https://twitter.com/${twitterHandle.replace("@", "")}`,
                )
              }
            >
              <Twitter className="w-5 h-5" />
              Follow {twitterHandle}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RulesSection;
