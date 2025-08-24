import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AITools } from "@/components/AITools";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AITools />
    </div>
  );
};

export default Index;
