import React from "react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

interface PrizeCardProps {
  title: string;
  amount: string;
  description: string;
  position?: number;
}

const PrizeCard = ({
  title = "Prize Category",
  amount = "$100",
  description = "Prize description goes here",
  position = 1,
}: PrizeCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: position * 0.1 }}
    >
      <Card className="group relative overflow-hidden bg-black/40 backdrop-blur-md border-white/5 hover:border-white/10 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <CardContent className="p-6 relative z-10">
          <h3 className="text-2xl font-medium text-white mb-1">{title}</h3>
          <p className="text-3xl md:text-4xl font-light text-purple-300 mb-4">
            {amount}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface PrizeSectionProps {
  prizes?: Array<{
    title: string;
    amount: string;
    description: string;
  }>;
}

const PrizeSection = ({ prizes }: PrizeSectionProps) => {
  const defaultPrizes = [
    {
      title: "🏆 First Place",
      amount: "$500 USD + $500 Credits",
      description: "Grand prize for the most innovative project using Tempo",
    },
    {
      title: "🥈 Second Place",
      amount: "$500 Credits",
      description: "Runner-up prize for exceptional implementation",
    },
    {
      title: "🥉 Third Place",
      amount: "$250 Credits",
      description: "Third place prize for outstanding creativity",
    },
  ];

  const displayPrizes = prizes || defaultPrizes;

  return (
    <section className="w-full py-16 px-4 relative overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white font-brockmann mb-4">
            Prizes & Awards
          </h2>
          <div className="h-px w-12 bg-purple-500/50 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {displayPrizes.map((prize, index) => (
            <PrizeCard
              key={index}
              title={prize.title}
              amount={prize.amount}
              description={prize.description}
              position={index}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PrizeCard
            title="🎮 Best Meme App"
            amount="$100 Credits"
            description="Most creative and entertaining meme-related application"
            position={4}
          />
          <PrizeCard
            title="🎨 Most Beautiful App"
            amount="$100 Credits"
            description="Outstanding visual design and user experience"
            position={5}
          />
          <PrizeCard
            title="💼 Best SaaS Product"
            amount="$100 Credits"
            description="Most promising SaaS application with business potential"
            position={6}
          />
        </div>
      </div>
    </section>
  );
};

export default PrizeSection;
