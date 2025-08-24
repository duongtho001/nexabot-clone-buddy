import { Navigation } from "@/components/Navigation";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useGeneratorState } from "@/hooks/useGeneratorState";
import { ApiKeySection } from "@/components/generator/ApiKeySection";
import { AIToolsSection } from "@/components/generator/AIToolsSection";
import { VideoConfigSection } from "@/components/generator/VideoConfigSection";
import { PromptSection } from "@/components/generator/PromptSection";
import { ContentGallery } from "@/components/generator/ContentGallery";

export default function Generator() {
  const { state, updateState, updateVideoConfig } = useGeneratorState();
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!state.apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key to start generating content",
        variant: "destructive",
      });
      return;
    }

    if (!state.prompt) {
      toast({
        title: "Prompt Required", 
        description: "Please enter a description for your video",
        variant: "destructive",
      });
      return;
    }

    updateState({ isGenerating: true });
    
    // Simulate generation process
    toast({
      title: "Generation Started",
      description: "Your video is being generated...",
    });

    setTimeout(() => {
      updateState({ isGenerating: false });
      toast({
        title: "Video Generated!",
        description: "Your AI video has been created successfully",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="ai-gradient-text">AI Content Generator</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Configuration */}
          <div className="lg:col-span-2 space-y-6">
            <ApiKeySection 
              apiKey={state.apiKey}
              onApiKeyChange={(value) => updateState({ apiKey: value })}
            />

            <AIToolsSection />

            <VideoConfigSection
              config={state.videoConfig}
              negativePrompt={state.negativePrompt}
              cinematicEnhancement={state.cinematicEnhancement}
              onConfigChange={updateVideoConfig}
              onNegativePromptChange={(value) => updateState({ negativePrompt: value })}
              onCinematicEnhancementChange={(value) => updateState({ cinematicEnhancement: value })}
            />

            <PromptSection
              prompt={state.prompt}
              isGenerating={state.isGenerating}
              onPromptChange={(value) => updateState({ prompt: value })}
              onGenerate={handleGenerate}
            />
          </div>

          {/* Right Panel - Content Gallery */}
          <ContentGallery />
        </div>
      </div>
    </div>
  );
}