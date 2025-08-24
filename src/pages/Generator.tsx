import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useGeneratorState } from "@/hooks/useGeneratorState";
import { Sidebar } from "@/components/generator/Sidebar";
import { SettingsSidebar } from "@/components/generator/SettingsSidebar";
import { MainContent } from "@/components/generator/MainContent";
import { BottomPromptInput } from "@/components/generator/BottomPromptInput";

export default function Generator() {
  const { 
    state, 
    updateState, 
    updateVideoConfig,
    updateVoiceConfig,
    updateImageConfig,
    setActiveTool,
    addVideoResult, 
    updateVideoResult, 
    removeVideoResult 
  } = useGeneratorState();
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
    
    // Create new video result
    const newResult = {
      id: Date.now().toString(),
      prompt: state.prompt,
      status: 'generating' as const,
      progress: 0,
      createdAt: new Date(),
    };
    
    addVideoResult(newResult);
    
    // Simulate generation process
    toast({
      title: "Generation Started",
      description: "Your video is being generated...",
    });

    // Simulate progress updates
    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 20;
      if (progress < 95) {
        updateVideoResult(newResult.id, { progress: Math.min(progress, 95) });
      }
    }, 500);

    setTimeout(() => {
      clearInterval(progressInterval);
      updateVideoResult(newResult.id, { 
        status: 'completed',
        progress: 100,
        completedAt: new Date(),
        thumbnailUrl: `https://picsum.photos/320/180?random=${newResult.id}`,
        videoUrl: `https://example.com/video-${newResult.id}.mp4`
      });
      
      updateState({ isGenerating: false, prompt: "" });
      toast({
        title: "Video Generated!",
        description: "Your AI video has been created successfully",
      });
    }, 8000);
  };

  const handleDownload = (id: string) => {
    toast({
      title: "Download Started",
      description: "Your video download will begin shortly",
    });
  };

  const handleShare = (id: string) => {
    toast({
      title: "Link Copied",
      description: "Video share link copied to clipboard",
    });
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
          activeTool={state.activeTool}
          onToolChange={setActiveTool}
        />

        {/* Right Settings Sidebar */}
        <SettingsSidebar
          videoConfig={state.videoConfig}
          voiceConfig={state.voiceConfig}
          imageConfig={state.imageConfig}
          negativePrompt={state.negativePrompt}
          activeTool={state.activeTool}
          onVideoConfigChange={updateVideoConfig}
          onVoiceConfigChange={updateVoiceConfig}
          onImageConfigChange={updateImageConfig}
          onNegativePromptChange={(value) => updateState({ negativePrompt: value })}
          isOpen={settingsOpen}
          onClose={() => setSettingsOpen(false)}
        />

        {/* Main Content */}
        <MainContent
          videoResults={state.videoResults}
          activeTool={state.activeTool}
          onOpenSidebar={() => setSidebarOpen(true)}
          onOpenSettings={() => setSettingsOpen(true)}
          onDeleteResult={removeVideoResult}
          onDownloadResult={handleDownload}
          onShareResult={handleShare}
        />

        {/* Bottom Prompt Input */}
        <BottomPromptInput
          prompt={state.prompt}
          isGenerating={state.isGenerating}
          apiKey={state.apiKey}
          activeTool={state.activeTool}
          onPromptChange={(value) => updateState({ prompt: value })}
          onGenerate={handleGenerate}
        />

        {/* Toast notification area */}
        <div className="fixed bottom-6 right-6 z-50 space-y-3 max-w-md" />
      </div>
    </div>
  );
}