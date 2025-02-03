import React from "react";
import HeroSection from "./HeroSection";
import PrizeSection from "./PrizeSection";
import TimelineSection from "./TimelineSection";
import RulesSection from "./RulesSection";
import SubmissionSection from "./SubmissionSection";

interface HomeProps {
  heroProps?: {
    title?: string;
    description?: string;
    ctaText?: string;
    onCtaClick?: () => void;
  };
  prizeProps?: {
    prizes?: Array<{
      title: string;
      amount: string;
      description: string;
    }>;
  };
  timelineProps?: {
    events?: Array<{
      date: string;
      title: string;
      description: string;
    }>;
  };
  rulesProps?: {
    rules?: Array<{
      title: string;
      content: string;
    }>;
    twitterHandle?: string;
  };
}

const Home = ({
  heroProps,
  prizeProps,
  timelineProps,
  rulesProps,
}: HomeProps = {}) => {
  return (
    <main className="bg-black">
      <HeroSection {...heroProps} />
      <PrizeSection {...prizeProps} />
      <SubmissionSection />
      <TimelineSection {...timelineProps} />
      <RulesSection {...rulesProps} />
    </main>
  );
};

export default Home;
