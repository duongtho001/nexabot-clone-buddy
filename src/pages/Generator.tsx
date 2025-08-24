import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useGeneratorState } from "@/hooks/useGeneratorState";
import { Sidebar } from "@/components/generator/Sidebar";
import { SettingsSidebar } from "@/components/generator/SettingsSidebar";
import { MainContent } from "@/components/generator/MainContent";
import { BottomPromptInput } from "@/components/generator/BottomPromptInput";

export default function Generator() {
  const { state, updateState, updateVideoConfig } = useGeneratorState();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

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
    <div className="min-h-screen bg-black">
      <div className="min-h-screen bg-black relative">
        {/* Left Sidebar */}
        <Sidebar
          apiKey={state.apiKey}
          onApiKeyChange={(value) => updateState({ apiKey: value })}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Right Settings Sidebar */}
        <SettingsSidebar
          config={state.videoConfig}
          negativePrompt={state.negativePrompt}
          onConfigChange={updateVideoConfig}
          onNegativePromptChange={(value) => updateState({ negativePrompt: value })}
          isOpen={settingsOpen}
          onClose={() => setSettingsOpen(false)}
        />

        {/* Main Content */}
        <MainContent
          onOpenSidebar={() => setSidebarOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
        />

        {/* Bottom Prompt Input */}
        <BottomPromptInput
          prompt={state.prompt}
          isGenerating={state.isGenerating}
          apiKey={state.apiKey}
          onPromptChange={(value) => updateState({ prompt: value })}
          onGenerate={handleGenerate}
        />

        {/* Toast notification area */}
        <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-md" />
      </div>
    </div>
  );
}