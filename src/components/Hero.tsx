import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, Video, Zap, Star } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-20 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Powered by Advanced AI</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Create Amazing{" "}
              <span className="ai-gradient-text">Videos</span> with{" "}
              <span className="ai-gradient-text">AI Magic</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Turn your ideas into stunning videos in seconds. Just tell us what you want, 
              and watch our AI create professional videos that'll blow your mind.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/generator">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Sparkles className="w-5 h-5" />
                  Generate Now
                </Button>
              </Link>
              <Button variant="glass" size="xl" className="w-full sm:w-auto">
                <Video className="w-5 h-5" />
                Buy Tool
              </Button>
            </div>

            <Link to="#how-it-works" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors">
              See how it works →
            </Link>

            {/* Stats */}
            <div className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Videos in seconds</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">High quality output</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">No experience needed</span>
              </div>
            </div>
          </div>

          {/* Right Content - Demo */}
          <div className="relative">
            <div className="glass-effect rounded-2xl p-6 shadow-card animate-float">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-sm text-muted-foreground ml-auto">nexabot Demo</span>
              </div>

              <div className="bg-background/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Create a 30-second video about healthy cooking tips</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow" />
                  <span className="text-sm">✨ Your cooking video is ready!</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Script created ✓</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Visuals generated ✓</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-sm">Voiceover added ✓</span>
                </div>
              </div>

              <div className="mt-6 bg-accent/10 rounded-lg p-4">
                <div className="w-full h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                  <Video className="w-12 h-12 text-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};