import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AITools } from "@/components/AITools";
import { HowItWorks } from "@/components/HowItWorks";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AITools />
      <HowItWorks />
    </div>
  );
};

export default Index;
