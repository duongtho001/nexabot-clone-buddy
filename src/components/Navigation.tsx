import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Sparkles } from "lucide-react";

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 ai-gradient rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold ai-gradient-text">nexabot</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}>
              Home
            </Link>
            <Link to="/features" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/features' ? 'text-primary' : 'text-muted-foreground'}`}>
              Features
            </Link>
            <Link to="/how-it-works" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/how-it-works' ? 'text-primary' : 'text-muted-foreground'}`}>
              How it Works
            </Link>
            <Link to="/generator" className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/generator' ? 'text-primary' : 'text-muted-foreground'}`}>
              Generator
            </Link>
          </div>

          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};