import { Sparkles, MessageSquare, Zap, Download } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Describe Your Vision",
    description: "Simply tell us what video you want to create. Be as detailed or as simple as you like!",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Sparkles,
    title: "AI Magic Happens",
    description: "Our advanced AI powered by Google Veo models processes your request and creates stunning visuals.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Within seconds, your professional-quality video is generated and ready for preview.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Download,
    title: "Download & Share",
    description: "Download your creation in high quality and share it with the world!",
    color: "from-orange-500 to-red-500"
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            How It <span className="ai-gradient-text">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating amazing videos has never been easier. Just follow these simple steps!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-sm font-bold text-accent">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent transform -translate-x-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};