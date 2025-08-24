import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Video, FileText, Film, Mic, Image, Sparkles } from "lucide-react";

const tools = [
  {
    title: "Video Generator",
    description: "Create stunning videos from text prompts. Generate professional-quality content for marketing, education, and entertainment.",
    icon: Video,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Storyboard Generator", 
    description: "Transform scripts into visual storyboards instantly. Perfect for filmmakers, advertisers, and content creators.",
    icon: FileText,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Filmmaker with Veo 3",
    description: "Advanced AI filmmaking tools powered by Veo 3. Create cinematic content with professional-grade AI assistance.",
    icon: Film,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Voice Over Generator",
    description: "Generate natural-sounding voice overs in multiple languages and styles. Perfect for videos, podcasts, and presentations.",
    icon: Mic,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Microstock Generator",
    description: "Create high-quality stock images and videos for your projects. Generate unique content that stands out.",
    icon: Image,
    color: "from-indigo-500 to-purple-500"
  }
];

export const AITools = () => {
  return (
    <section id="ai-tools" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">🤖 AI Generators</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Powerful <span className="ai-gradient-text">nexabot</span> Tools
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out our amazing AI tools that make creating videos super easy. 
            Swipe through to see what each one can do for you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className={`glass-effect border-white/10 p-6 hover-scale transition-all duration-300 shadow-card animate-fade-in animate-stagger-${index + 1}`}>
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4 animate-float`} style={{animationDelay: `${index * 0.5}s`}}>
                <tool.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
              <p className="text-muted-foreground mb-6">{tool.description}</p>
              
              <Button variant="glass" className="w-full hover-scale">
                Try Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};